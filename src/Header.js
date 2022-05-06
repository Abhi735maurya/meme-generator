import React from "react";
import image from "./joke-icon.png";
import './Style.css'
export default function Header(){
    return (
        <div className="header">
            <img src={image} className="image"/>
            <h1 className="heading">Meme Generator</h1>
        </div>
    )
}