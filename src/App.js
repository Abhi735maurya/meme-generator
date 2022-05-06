import React from "react";
//import Nav from './components/Navbar'
//import Card from './components/Card';
//import data from './components/TravelData';
import Header from "./Header";
import MemeForm from "./MemeForm";
//import InputForm from './components/InputForm';

function App() {
  return (
    <>
   <Header/>
    <MemeForm/>
    </>
  )
    
}

export default App;

/*
     <InputForm/>
    */
/* let cards=data.map(ele=>{
       return (
         <Card country={ele.country}
              title={ele.title}
              date={ele.date}
              img={ele.img}
              content={ele.content}
              id={ele.id}
         />
       )
     })
     
  return (
    <div >
      <Nav/>
      {cards}
    </div>
  );*/