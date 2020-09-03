import React from "react";

function Contact(){

    return(
        <div>
        <h1 className="text-4xl">Contact Me</h1>
        <form id="contactform" method="POST" action="//formspree.io/andrew.c.reeves27@gmail.com">
            <input type="text" name="name" className="w-1/2 my-2 p-1 form-control border-2 border-black border-solid" placeholder="Full Name" />
            <br></br>
            <input type="email" name="_replyto" className="form-control p-1 my-2 w-3/4 border-2 border-black border-solid" placeholder="Email" />
            <br></br>
            <input type="hidden" name="_subject" value="Website contact" />
            <textarea name="message" placeholder="Message" className="w-full h-full my-2 p-1 border-2 border-black border-dashed"></textarea>
            <br></br>
            <input type="text" name="_gotcha" className="display-none" />
            <input type="submit" value="Send" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:mx-64 md:px-32 md:py-8 mb-64 rounded-full" />
        </form>
        </div>
    )
}

export default Contact