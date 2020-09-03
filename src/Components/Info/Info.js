import React from "react";
import MyPhoto from "./myPhoto.png"

function Info(){

    return(
        <div>
        <div className="md:flex">
            <div className=" flex justify-between md:w-1/2">
                <div></div>
                <img src={MyPhoto} className="p-2 object-cover"></img>
                <div></div>
            </div>
            <div className="p-2 md:w-1/2 h-80 border-2 border-black text-lg">Hello! My name is Andrew Reeves. I am a full-stack developer with professional education credits from Georgia Institute of Technology. I am all in on new technologies, making fluid, good-looking apps, and that fun feeling you get in the development
            stages when you take an idea from nothing into something. I have always been fascinated by how quickly technology moves and I am making moves to keep up with this pace. 
            </div>
            </div>
            <div
            className="w-full py-6 border-2 border-black border-dashed flex justify-between">
            <div></div>
                <p className="mx-2">I am also just a fan of having fun with programming! Check out one of my<br></br>"for fun" projects before going to my "for work" projects! Try painting in the space below!</p>
                <div></div>
            </div>
            <div>
                <embed src="https://darkquilius.github.io/Painting-Canvass/" className="w-full h-full"></embed>
            </div>
            </div>
    )
}




export default Info