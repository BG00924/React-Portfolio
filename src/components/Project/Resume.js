import React from "react"

function Resume() {

    return (
        <section id="about-me" className="section">
            <div className="title">
                <h2>Resume</h2>
            </div>
            <div className="about-me-text content">
                <div className="intro">
                    <h2>Front-End Proficiencies</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    <br/>
                    <h2>Back-End Proficiencies</h2>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>REST</li>
                            <li>MongoDB, Mongoose</li>
                        </ul>
                </div>
                <div className="intro">
                    <h2>Click the following link to download a full resume.</h2>
                    <a href={require("../../Assets/Resume/Blake-Gale-Resume.docx")} download>
                        RESUME
                    </a>
                </div>    
            </div>
        </section>
    )
}

export default Resume