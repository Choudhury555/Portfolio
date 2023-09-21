import React from "react"

function Services(){
    return (
        <div id="services">
            <div className="container">
                <h1 className="subtitle">My Services</h1>
                <div className="services-list">
                    <div>
                        <i class="fa-solid fa-code fa-beat"></i>
                        <h2>WEB Developer</h2>
                        <p>I can develope responsive Web Apps using HTML,CSS,JavaScript and ReactJS.Also currently
                            learning React Native for mobile app development.
                        </p>
                    <a href="#services">Learn More</a>
                    </div>
                    <div>
                        <i class="fa-solid fa-computer fa-bounce"></i>
                        <h2>Teaching</h2>
                        <p>I love to guide people who wants to start their career on coding or IT industry.If you need any help from me
                        feel free to contact me.</p>
                    <a href="#services">Learn More</a>
                    </div>
                    <div>
                        <i class="fa-solid fa-rocket fa-flip"></i>
                        <h2>Others</h2>
                        <p>I love to do photography and videography in my free time.Also I have a great curiosity 
                        to know about space</p>
                    <a href="#services">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services