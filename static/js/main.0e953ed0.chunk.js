(this["webpackJsonpreeves-portfolio"]=this["webpackJsonpreeves-portfolio"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/TeamSprinter.c787748c.png"},25:function(e,t,a){e.exports=a.p+"static/media/Client-Clock-Website.c0264e2d.png"},26:function(e,t,a){e.exports=a.p+"static/media/Daily-Planner-Website.35dcd13e.png"},27:function(e,t,a){e.exports=a.p+"static/media/Weather-Website.ff97f6fc.png"},29:function(e,t,a){e.exports=a(44)},34:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/myPhoto.6738cba1.png"},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(22),i=a.n(r),o=(a(34),a(28)),c=a(7),s=a(9),m=a(12);var p=function(e){return n.a.createElement("div",{className:"flex justify-between"},n.a.createElement("ul",{className:"grid py-1 gird-cols-2"},n.a.createElement("li",{className:"p-2 justify-between"},n.a.createElement(m.b,{to:"/",className:"text-blue-300",onClick:e.closeMenu},n.a.createElement(c.a,{icon:s.e})," About Me")),n.a.createElement("li",{className:"p-2"},n.a.createElement(m.b,{to:"/portfolio",className:"text-blue-300",onClick:e.closeMenu},n.a.createElement(c.a,{icon:s.d})," Portfolio")),n.a.createElement("li",{className:"p-2"},n.a.createElement(m.b,{to:"/contact",className:"pb-8 text-blue-300",onClick:e.closeMenu},n.a.createElement(c.a,{icon:s.c})," Contact Me"))),n.a.createElement("div",{className:"py-20 px-2 md:py-10"},n.a.createElement(c.a,{className:"fa-4x text-blue-600",icon:s.a,onClick:e.closeMenu})))},u=a(10);var d=function(e){return n.a.createElement("div",{className:"flex items-center justify-between bg-teal-500 p-6 border-b-4 border-purple-600"},n.a.createElement("div",null),n.a.createElement("div",{className:" flex justify-between font-bold text-4xl tracking-tight text-white"},n.a.createElement("div",null,n.a.createElement(c.a,{icon:u.f,className:"p-1"}),n.a.createElement(c.a,{icon:u.d,className:"p-1"}),n.a.createElement(c.a,{icon:u.e,className:"p-1"})),n.a.createElement("span",{className:"text-5xl"},"Andrew Reeves "),n.a.createElement("div",null,n.a.createElement(c.a,{icon:u.a,className:"p-1"}),n.a.createElement(c.a,{icon:u.b,className:"p-1"}),n.a.createElement(c.a,{icon:u.c,className:"p-1"}))),n.a.createElement("span",{className:"border-dashed"},n.a.createElement(c.a,{icon:s.b,className:"fa-2x",onClick:e.toggleMenu})))},h=a(14);var b=function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(h.b)(a,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),c=Object(h.b)(a,null,{from:{opacity:0,transform:"translateX(100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(100%)"}});return n.a.createElement("nav",{className:"sticky top-0"},n.a.createElement(d,{toggleMenu:function(){return r(!a)}}),i.map((function(e){var t=e.item,a=e.key,l=e.props;return t&&n.a.createElement(h.a.div,{key:a,style:l,className:"fixed  bg-black-t-50 top-0 left-0 w-full h-full z-50",onClick:function(){r(!1)}})})),c.map((function(e){var t=e.item,a=e.key,l=e.props;return t&&n.a.createElement(h.a.div,{key:a,style:l,className:"fixed bg-white top-0 right-0 w-2/5 z-50 shadow"},n.a.createElement(p,{closeMenu:function(){r(!1)}}))})))};a(42);var f=function(){return n.a.createElement("div",null)};var g=function(e){return n.a.createElement("card",null,n.a.createElement("div",{className:"p-2 justify-between border-2 border-black"},n.a.createElement("h5",{className:"font-bold text-3xl"},e.title),n.a.createElement("p",{className:"py-4"},e.text),function(e){return e.gif?n.a.createElement("iframe",{src:e.gif,className:"p-2",allowFullScreen:!0}):n.a.createElement("img",{src:e.image,className:"md:w-2/5"})}(e),n.a.createElement("div",{className:"py-4"},n.a.createElement("a",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",target:"_blank",href:e.github},"Check This Project's Code Out")),n.a.createElement("div",{className:"py-4"},n.a.createElement("a",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full",target:"_blank",href:e.deployed},"Check My Project Out"))))},y=a(24),E=a.n(y),k=a(25),x=a.n(k),v=a(26),w=a.n(v),N=a(27),C=a.n(N);var j=function(){var e=[{title:"Campfire Stories",text:"My favorite app I've made so far! This is designed to be a choose your own adventure story like from the 90's. Each player has a profile that is showcased on a clean dashboard layout using react. I wrote all the logic for the library page and story page. Definitely my biggest accomplishment.",gif:"https://giphy.com/embed/IaWlVPm1ys4MXgkfxI",github:"https://github.com/darkquilius/CampfireStories",deployed:"https://campfirestories.herokuapp.com"},{title:"Team Sprinter",text:"This project is a mock of a trello board. It accents my skills using node packages like express, sequelize and passport, as well as MySQL and other databases. All parts of this site are dynamically created using the database. Pretty neat stuff. Very useful for in the development environment.",image:E.a,github:"https://github.com/darkquilius/projecttracker",deployed:"https://trackitproject.herokuapp.com/"},{title:"Employee Database Generator",text:"This tool lets a company easily keep track of their employees by keeping a database of them that can easily be manipulated. By giving a name, id#, email, role and other information subjunct to the employee's role, companies can take charge of their employees.",gif:"https://giphy.com/embed/J1LOMomVvnKBoQlckh",github:"https://github.com/darkquilius/projecttracker",deployed:"https://github.com/darkquilius/projecttracker"},{title:"Client Clock",text:"This project was a colabrative effort with my Georgia Tech cohort members to make an exemplary client time tracking application to help with billing. This app was one of the first showcases of my proficiency in HTML, CSS, JS, local storage, and a number of API usages.",image:x.a,github:"https://github.com/darkquilius/Client-Clock",deployed:"https://darkquilius.github.io/Code-wizards/"},{title:"Daily Planner",text:"Complete with color coordination and up to the minute updates using the Moment CDN, this app helps time management.",image:w.a,github:"https://github.com/darkquilius/Daily-Planner",deployed:"https://darkquilius.github.io/Daily-Planner/"},{title:"Weather Tracker",text:"Using third-party APIs, plan a trip or just look at your local area's weather using this weather tracking application.",image:C.a,github:"https://github.com/darkquilius/Weather-Dashboard",deployed:"https://darkquilius.github.io/Weather-Dashboard/"}];return n.a.createElement("div",null,e.map((function(e){return n.a.createElement(g,{key:e.title,title:e.title,text:e.text,gif:e.gif,image:e.image,github:e.github,deployed:e.deployed})})))};var M=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"text-4xl"},"Contact Me"),n.a.createElement("form",{id:"contactform",method:"POST",action:"//formspree.io/andrew.c.reeves27@gmail.com"},n.a.createElement("input",{type:"text",name:"name",className:"w-1/2 my-2 p-1 form-control border-2 border-black border-solid",placeholder:"Full Name"}),n.a.createElement("br",null),n.a.createElement("input",{type:"email",name:"_replyto",className:"form-control p-1 my-2 w-3/4 border-2 border-black border-solid",placeholder:"Email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"hidden",name:"_subject",value:"Website contact"}),n.a.createElement("textarea",{name:"message",placeholder:"Message",className:"w-full h-full my-2 p-1 border-2 border-black border-dashed"}),n.a.createElement("br",null),n.a.createElement("input",{type:"text",name:"_gotcha",className:"display-none"}),n.a.createElement("input",{type:"submit",value:"Send",className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:mx-64 md:px-32 md:py-8 mb-64 rounded-full"})))};var P=function(){return n.a.createElement("footer",{className:"flex items-center justify-between flex-wrap bg-teal-500 p-1 border-t-4 border-purple-600 sticky bottom-0 w-full"},n.a.createElement("div",{className:"flex justify-between"},n.a.createElement("div",{className:"font-semibold text-xs md:text-base tracking-tight p-1 text-white w-1/4"},"Phone:",n.a.createElement("br",null),"404-909-2724"),n.a.createElement("div",{className:"font-semibold text-xs md:text-base tracking-tight p-1 text-white w-1/4"},"email:",n.a.createElement("br",null),"andrew.c.reeves27@gmail.com")),n.a.createElement("div",null,n.a.createElement("a",{className:"font-semibold text-xs md:text-base tracking-tight p-1 text-blue-300",href:"https://github.com/darkquilius",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"text-white"},"github:"),n.a.createElement("br",null),"https://github.com/",n.a.createElement("br",null),"darkquilius")),n.a.createElement("div",null,n.a.createElement("a",{className:"font-semibold text-xs md:text-base tracking-tight pr-4 text-blue-300",href:"https://www.linkedin.com/in/andrew-reeves-651697161/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"text-white"},"linkedin:"),n.a.createElement("br",null),"https://www.linkedin.com/in/",n.a.createElement("br",null),"andrew-reeves-651697161/")))},q=a(3);a(43);var S=function(){return n.a.createElement(m.a,null,n.a.createElement(b,null),n.a.createElement(q.c,null,n.a.createElement(q.a,{path:"/",component:f}),n.a.createElement(q.a,{exact:!0,path:"/portfolio",component:j}),n.a.createElement(q.a,{exact:!0,path:"/contact",component:M})),n.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.0e953ed0.chunk.js.map