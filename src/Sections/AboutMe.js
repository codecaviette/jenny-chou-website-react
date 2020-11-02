// This is the About Me section

import React, { Component } from 'react'

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section id="about-screen">
                    <div id="about-section">
                        <div className="row" >
                            <div className="col-sm-6" id="about-text" >
                                <h2 id="sectionTitle"> ABOUT </h2>
                                <p> Hi, I'm Jenny. I am a customer-centric builder who thrives in improving the user experience, enhancing product design, and optimizing process efficiencies. I have a passion for creating effective, easily digestible resources and tools for all end users, from leadership to frontline employees. </p>
                            </div> 
                            <div className="col" id="about-image">
                                <img src="img/jmc1.png" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutMe


