import React from "react";

function ProjectCard(props){

    function imgOrGif(props){
        if (props.gif){
            return <iframe src={props.gif} className="p-2" allowFullScreen></iframe>
        } else{
            return <img src={props.image} className="md:w-2/5"></img>
        }
    }
    
    return(
    <card >
    <div className="p-2 justify-between border-2 border-black">
        <h5 className="font-bold text-3xl">{props.title}</h5>
        <p className="py-4">{props.text}</p>
        {imgOrGif(props)}
        <div className="py-4">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" target="_blank" href={props.github} >Check This Project's Code Out</a>
        </div>
        <div className="py-4">
        <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" target="_blank" href={props.deployed} >Check My Project Out</a>
        </div>
        </div>
    </card>
    )
}

export default ProjectCard