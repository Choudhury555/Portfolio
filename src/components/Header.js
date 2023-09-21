import React,{useState} from "react"

function Header(){

    const [mobilemenu,setMobilemenu]=useState("close");

    function handlemenu(){
        setMobilemenu(prevmenu => {
            return prevmenu==="close" ? "open" : "close"
        })
    }

    return (
        <div id="header">
        <div className="container">
            <div className="fixednav">
            <nav>
                <p className="logo"><i><span>W</span>ELCOME.</i></p>
                <ul id="sidemenu" className={mobilemenu}>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i className="fas fa-times" onClick={handlemenu}></i>
                </ul>
                <i className="fas fa-bars" onClick={handlemenu}></i>
            </nav>
        </div>
            <div className="header-text">
                <p>DEVELOPER/PROGRAMMER</p>
                <h1>Hi,I am Choudhury<span> Abhisek</span><br />From Odisha,India</h1>
            </div>
        </div>
    </div>
    )
}

export default Header