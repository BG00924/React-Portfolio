import React, { useState } from "react"

function Portfolio() {

    const [projects] = useState([
        {
            name: 'Run Buddy',
            technology: 'HTML/CSS',
            link: "https://bg00924.github.io/run-buddy/",
            image: require('../../Assets/Images/02-run-buddy.jpg'),
            github: "https://github.com/BG00924/run-buddy"
        },
        {
            name: 'Game Search',
            technology: 'Javascript',
            link: "https://bg00924.github.io/Team-Avatar-project-1/",
            image: require('../../Assets/Images/gamesearch.JPG'),
            github: "https://github.com/BG00924/Team-Avatar-project-1"
        },
        {
            name: 'Budget Tracker',
            technology: 'MongoDB/Mongoose',
            link: "https://infinite-dusk-21587.herokuapp.com/",
            image: require('../../Assets/Images/Budget-Tracker.JPG'),
            github: "https://github.com/BG00924/Budget-Tracker"
        },
        {
            name: 'Employee Tracker',
            technology: 'Node',
            link: "",
            image: require('../../Assets/Images/employee_tracker_example.JPG'),
            github: "https://github.com/BG00924/Employee-Tracker"
        },
        {
            name: 'Note Taker',
            technology: 'Node',
            link: "https://note-taker924.herokuapp.com/notes.html",
            image: require('../../Assets/Images/Note-Taker.JPG'),
            github: "https://github.com/BG00924/Note-Taker"
        },
        {
            name: 'Code Quiz',
            technology: 'Javascript',
            link: "https://bg00924.github.io/Ultimate-Javascript-Quiz/",
            image: require('../../Assets/Images/quiz_intro.JPG'),
            github: "https://github.com/BG00924/Ultimate-Javascript-Quiz"
        }
    ])

    return (
        <section id="work" className="section">
            <div className="title">
                <h2>My Projects</h2>
            </div>
            <div className="work-grid-wrapper content">
                <div className="work-grid-container">
                    {projects.map(project => (
                        <a href={project.link} className="work-grid-item" style={{backgroundImage: `url(${project.image})`, backgroundSize: `cover`, backgroundPosition: `center`}} key={project.name}>
                            <div className="project-title">
                                <h3>{project.name}</h3>
                                <h4>{project.technology}</h4>
                                <h5 href={project.github}> GitHub</h5>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio