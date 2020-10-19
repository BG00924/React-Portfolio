import React from "react"


function About() {

    return (
        <section id="about-me" className="section">
            <div className="title">
                <h2>About Me</h2>
            </div>
            <div className="about-me-text content">
                <div className="intro">
                    <p>
                        Hello, I'm Blake Gale and I'm a logistician whose learning to become a web developer.
                    </p>
                </div>
                <div className="profile-img">
                    <img src = {require('../../Assets/Images/profile.jpg')} alt="Profile picture of myself" />
                </div>    
            </div>
        </section>
    )
}

export default About
