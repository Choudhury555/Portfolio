import React from "react"

function Contact(){

    // const scriptURL = 'https://script.google.com/macros/s/AKfycbyFkJB7FKDlrqIwpWncMG4m_QurcvItXQFyqSrHNakc2BqB0IFZqURU1viOfIm01iQ/exec'
    // const form = document.forms['submit-to-google-sheet']
    // const msg=document.getElementById("msg")
      
    function handleSubmit(e){
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyFkJB7FKDlrqIwpWncMG4m_QurcvItXQFyqSrHNakc2BqB0IFZqURU1viOfIm01iQ/exec'
        const msg=document.getElementById("msg")
        const x=document.querySelector("form")
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(x)})
        .then(response => {
            msg.innerHTML="Message Sent"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            x.reset()
        })
        .catch(error => console.error('Error!', error.message))
    }

    return (
        <div id="contact">
            <div class="container">
                <div class="row">
                    <div class="contact-left">
                        <h1 class="subtitle">Contact Me</h1>
                        <p><i class="fa-sharp fa-solid fa-square-envelope"></i> choudhurypanda555@gmail.com</p>
                        <p><i class="fa-solid fa-square-phone"></i> 9437181603</p>
                        <div class="social-icon">
                            <a href="https://www.linkedin.com/in/choudhury-abhisek-panda-433100171/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                        <a href={require("../images/RESUME.pdf")} download class="btn btn2">Download Resume/CV</a>
                    </div>
                    <div class="contact-right">
                        <form name="submit-to-google-sheet" className="form" onSubmit={handleSubmit}>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" class="btn btn2">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright © Choudhury Abhisek Panda</p>
            </div>
        </div>
    )
}

export default Contact