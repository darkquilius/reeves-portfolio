import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { faReact, faJs, faNodeJs, faBootstrap, faDocker, faGithub } from "@fortawesome/free-brands-svg-icons";


function HeaderPlate(props){
    return(
        <div className="flex items-center justify-between bg-teal-500 p-6 border-b-4 border-purple-600">
        <div></div>
        <div className=" flex justify-between font-bold text-4xl tracking-tight text-white">
        <div>
        <FontAwesomeIcon icon={faReact} className="p-1"/> 
        <FontAwesomeIcon icon={faJs} className="p-1"/> 
        <FontAwesomeIcon icon={faNodeJs} className="p-1"/>
        </div> 
        <span className="text-5xl">Andrew Reeves </span>
        <div>
        <FontAwesomeIcon icon={faBootstrap} className="p-1"/>
        <FontAwesomeIcon icon={faDocker} className="p-1"/>
        <FontAwesomeIcon icon={faGithub} className="p-1"/>
        </div>
        </div>
        <span className="border-dashed">
        <FontAwesomeIcon icon={faBars} className="fa-2x" onClick={props.toggleMenu}/>
        </span>
        </div>
    )
}
export default HeaderPlate