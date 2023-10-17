import React from 'react'

function Contact() {
  return (
    <>
    <section className="contact">
        <div className="contact-inner">
            <h2>SUBSCRIBE TO OUR NEWSLETTER.</h2>
            <form action="">
                <input type="name" placeholder="name"/>
                <input type="email" placeholder="email"/>
                <input type="button" value="Subscribe"/>
            </form>
        </div>
    </section>
    </>
  )
}

export default Contact