import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import About from "../Project/About"
import Contact from "../Project/Contact"
import Portfolio from "../Project/Portfolio";
import Resume from "../Project/Resume"

function Navigation() {
    const sections = ['About', 'Contact', 'Portfolio', 'Resume']
    const [currentSection, setCurrentSection] = useState('About')

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentSection)
    }, [currentSection])

    const render = () => {
        switch (currentSection) {
            case 'Contact':
                return <Contact />
            case 'Portfolio':
                return <Portfolio />
            case 'Resume':
                return <Resume />
            default: 
                return <About />
        }
    }

    return (
        <div>
            <nav>
                <ul>
                    {sections.map(section => (
                        <li className={`${currentSection === section && 'navActive'}`} key={section}>
                            <a onClick={() => setCurrentSection(section)}>
                                {section}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                {render()}
            </div>
        </div>
    )
}

export default Navigation