import React from 'react'
import selfImage from "../../assets/images/mkselfie.jpg";

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">Who am I?</h1>
            <img src={selfImage} className="my-2" style={{ width: "20%" }} alt="A selfie of Matt Kolbach" />
            <div className="my-2">
                <p>
                My name is Matt Kolbach and I am an aspiring software engineer and web developer. I am from Cedarburg WI and I am not happy if I don't have a project. I have been in the mechanical engineering field since 2006 and it is time to make a move. I am used to working in teams and alone to deliver quality projects. I have never been afraid to ask questions, and I don't intend to start now. I am exited to be entering into a new field where I can continue to learn and grow. I am interested in many things from camping to computers, carpentry to 3D printers, water-skiing to snowboarding.
                This website is currently under construction and subject to frequent updates. Come again soon.
                </p>
            </div>
        </section>
    )
}

export default About;