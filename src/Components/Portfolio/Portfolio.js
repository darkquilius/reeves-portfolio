import React from "react";
import ProjectCard from "./ProjectCard";
import TeamSprinter from "./TeamSprinter.png"
import ClientClock from "./Client-Clock-Website.png";
import DailyPlanner from "./Daily-Planner-Website.png";
import WeatherWebsite from "./Weather-Website.png"

function Portfolio(){
let infoArray = [
    {title: "Campfire Stories", 
    text: "My favorite app I've made so far! This is designed to be a choose your own adventure story like from the 90's. Each player has a profile that is showcased on a clean dashboard layout using react. I wrote all the logic for the library page and story page. Definitely my biggest accomplishment.", 
    gif: "https://giphy.com/embed/IaWlVPm1ys4MXgkfxI",
    github:"https://github.com/darkquilius/CampfireStories",
    deployed: "https://campfirestories.herokuapp.com"},
    
    {title: "Team Sprinter",
    text: "This project is a mock of a trello board. It accents my skills using node packages like express, sequelize and passport, as well as MySQL and other databases. All parts of this site are dynamically created using the database. Pretty neat stuff. Very useful for in the development environment.", 
    image: TeamSprinter,
    github:"https://github.com/darkquilius/projecttracker",
    deployed: "https://trackitproject.herokuapp.com/"},

    {title: "Employee Database Generator",
    text: "This tool lets a company easily keep track of their employees by keeping a database of them that can easily be manipulated. By giving a name, id#, email, role and other information subjunct to the employee's role, companies can take charge of their employees.", 
    gif: "https://giphy.com/embed/J1LOMomVvnKBoQlckh",
    github:"https://github.com/darkquilius/CLI-Company-Management-CMS",
    deployed: "https://github.com/darkquilius/CLI-Company-Management-CMS"},

    {title: "Client Clock",
    text: "This project was a colabrative effort with my Georgia Tech cohort members to make an exemplary client time tracking application to help with billing. This app was one of the first showcases of my proficiency in HTML, CSS, JS, local storage, and a number of API usages.", 
    image: ClientClock,
    github:"https://github.com/darkquilius/Client-Clock",
    deployed: "https://darkquilius.github.io/Client-Clock/"},

    {title: "Daily Planner",
    text: "Complete with color coordination and up to the minute updates using the Moment CDN, this app helps time management.", 
    image: DailyPlanner,
    github:"https://github.com/darkquilius/Daily-Planner",
    deployed: "https://darkquilius.github.io/Daily-Planner/"},

    {title: "Weather Tracker",
    text: "Using third-party APIs, plan a trip or just look at your local area's weather using this weather tracking application.", 
    image: WeatherWebsite,
    github:"https://github.com/darkquilius/Weather-Dashboard",
    deployed: "https://darkquilius.github.io/Weather-Dashboard/"}]

    return(
        <div>
            {infoArray.map( card=>
                <ProjectCard key={card.title} title={card.title} text={card.text} gif={card.gif} image={card.image} github={card.github} deployed={card.deployed} />
            )}
        </div>
    )
}

export default Portfolio
