import React from "react";

function Footer(){

  return(
<footer className="flex items-center justify-between flex-wrap bg-teal-500 p-1 border-t-4 border-purple-600 sticky bottom-0 w-full">
<div className="flex justify-between">
    <div className="font-semibold text-xs md:text-base tracking-tight p-1 text-white w-1/4">
    Phone:<br></br>404-909-2724</div>
    <div className="font-semibold text-xs md:text-base tracking-tight p-1 text-white w-1/4">
    email:<br></br>andrew.c.reeves27@gmail.com</div>
    </div>
    <div>
    <a 
    className="font-semibold text-xs md:text-base tracking-tight p-1 text-blue-300"
    href="https://github.com/darkquilius" 
    target="_blank"
    rel="noopener noreferrer">
    <span className="text-white">github:</span>
    <br></br>https://github.com/<br></br>darkquilius
    </a>
    </div>
    <div>
    <a 
    className="font-semibold text-xs md:text-base tracking-tight pr-4 text-blue-300" 
    href="https://www.linkedin.com/in/andrew-reeves-651697161/" 
    target="_blank"
    rel="noopener noreferrer">
    <span className="text-white">linkedin:</span>
    <br></br>https://www.linkedin.com/in/<br></br>andrew-reeves-651697161/
    </a>
    </div>
</footer>
  )
}

export default Footer