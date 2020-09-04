import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolderOpen, faMale, faEnvelope, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function HeaderNavMenu(props){
return (
    <div className="flex justify-between">
    <ul className="grid py-1 gird-cols-2">
    <li className="p-2 justify-between">
      <Link to="/" className="text-blue-300" onClick={props.closeMenu}>
      <FontAwesomeIcon icon={faMale} /> About Me
      </Link>
    </li>
    <li className="p-2">
      <Link to="/portfolio" className="text-blue-300" onClick={props.closeMenu}>
      <FontAwesomeIcon icon={faFolderOpen} /> Portfolio
      </Link>
    </li>
    <li className="p-2">
      <Link to="/contact" className="pb-8 text-blue-300" onClick={props.closeMenu}>
      <FontAwesomeIcon icon={faEnvelope} /> Contact Me
      </Link>
    </li>
  </ul>
  <div className="py-20 px-2 md:py-10">
  <FontAwesomeIcon className="fa-4x text-blue-600" icon={faArrowAltCircleRight} onClick={props.closeMenu}/>
  </div>
  </div>
)
}

export default HeaderNavMenu
