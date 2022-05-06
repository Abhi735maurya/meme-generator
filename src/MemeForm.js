import React from "react";
export default function MemeForm() {
// setting default values in state
    const [allmemeImage, setAllmemeImage] = React.useState([]);
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3vzej.jpg"
    });
// when user click on get new Images
    function getImage() {
        const memeArr = allmemeImage;
        let random = Math.floor(Math.random() * memeArr.length);
        let imgUrl = memeArr[random].url;

        setMemeImage(prevState => ({
            ...prevState,
            topText: "",
            bottomText: "",
            randomImage: imgUrl
        }))

    }
    // run first time when app load
    React.useEffect(function () {
        async function getmemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json();
            setAllmemeImage(data.data.memes)
        }

        getmemes();
    }, [])
    //when user type something in text field
    function handleChange(event) {
        const { name, type, value } = event.target;
        setMemeImage(prevState => ({
            ...prevState,
            [name]: value   
        //Computed property Names allows you to put an expression in brackets [] , that will be computed and used as the property name 
        }))
    }


    return (
        <>
            <div className="formContainer">
                <div className="inputForm">
                    <input type="text" className="input1" placeholder="Top Text" name="topText" value={memeImage.topText} onChange={handleChange} />
                    <input type="text" className="input2" placeholder="Bottom Text" name="bottomText" value={memeImage.bottomText} onChange={handleChange} />
                    <button className="btn" onClick={getImage}>Get a new meme Image</button>
                </div>
            </div>
            <div className="img-container">
                <div className="text-img-wrapper">
                    <img src={memeImage.randomImage} className="random--img" />
                    <h1 className="meme-top-text">{memeImage.topText}</h1>
                    <h1 className="meme-bottom-text">{memeImage.bottomText}</h1>
                </div>

            </div>

        </>
    )
}