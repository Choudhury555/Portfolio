import React from "react"

function About(){

    var x=document.getElementsByClassName("tab-links");
    var y=document.getElementsByClassName("tab-contents");

    function opentab(event,tabname){
        for(var i of x){
            i.classList.remove("active-link");
        }
        for(i of y){
            i.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    return (
        <div id="about">
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src={require("../images/3.jpg")} alt="Profile Pic" />
                </div>
                <div className="about-col-2">
                    <h1 className="subtitle">About Me</h1>
                    <p style={{letterSpacing:1,fontWeight:700}}>A Software Developer with entry-level experience specializing in frontend development,
                    application development, and continuous improvement. Adept at identifying opportunities to
                    enhance the user experience and develop new features to improve app functionality.
                    Currently I am working at Edgeverve(Infosys Finacle)
                    as an Associate Product Developer. I love to solve problems on different online platform.
                    Also I am passionate about Web Developement.</p>
                    <div className="tab-titles">
                        <p className="tab-links active-link" onClick={(event)=>opentab(event,'skills')}>Skills</p>
                        <p className="tab-links" onClick={(event)=>opentab(event,'experience')}>Experience</p>
                        <p className="tab-links" onClick={(event)=>opentab(event,'education')}>Education</p>
                    </div>
                    <div className="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>Programming Language</span><br />C++, JAVA, PYTHON, JAVASCRIPT</li>
                            <li><span>Web Developement</span><br />HTML, CSS, JAVASCRIPT, ReactJS, NextJS</li>
                            <li><span>Others</span><br />SQL, GIT, Data Structures</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="experience">
                        <ul>
                            <li><span>2022/June-Current</span><br />Associate Product Developer at Edgeverve(Infosys Finacle)</li>
                            <li><span>2022/Feb-2022/June</span><br />Intern at Persistent System</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="education">
                        <ul>
                            <li><span>2018-2022</span><br />Bachelor of Technology in Computer Science</li>
                            <li><span>2015-2017</span><br />12th Science(PCMB)</li>
                            <li><span>2015</span><br />10TH</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About