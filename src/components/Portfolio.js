import React from "react"

function Portfolio(){
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="subtitle">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={require("../images/11.jpg")} />
                        <div className="layer">
                            <h3>WEB DEVELOPMENT</h3>
                            <p>I am passionate about Web Developement and love to do this. I developed some of the
                            Web Applications.Please Click the link below to see those.</p>
                            <a href="https://choudhury555.github.io/ProjectLink/" target="_blank"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={require("../images/20.jpg")} />
                        <div className="layer">
                            <h3>Competitive Programming</h3>
                            <p>I love to do competitive programming.I have been doing competitive programming and
                            Data Structures on different Platform like GFG,LeetCode,etc.</p>
                            <a href="https://leetcode.com/choudhury555/" target="_blank"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={require("../images/28.jpg")} />
                        <div className="layer">
                            <h3>Others</h3>
                            <p>Find my other works by clicking the below link.</p>
                            <a href="https://auth.geeksforgeeks.org/user/choudhurypanda555/practice" target="_blank"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <a href="#portfolio" className="btn">See More</a>
            </div>
        </div>
    )
}

export default Portfolio