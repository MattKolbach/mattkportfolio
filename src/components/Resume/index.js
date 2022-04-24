import React from 'react'

function Resume() {

    return (
        <section className="my-5" >
            <h1>Resume</h1>
            
            <div className="flex-row my-2">
                <div className='resume flex-row'>
                    <div className='mx-2'>
                    <a href="/mattkportfolio/resume.pdf" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                    </a>
                    </div>
                    <div className='mx-2'>
                    <a href="https://docs.google.com/document/d/1GrMedEMac-mgvt9s8G54bo5uQyf8EHOJjrLsOazmrLU/edit?usp=sharing" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16"><path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/></svg>
                    </a>
                    </div>
                </div>
                <div className='resume'>
                    <h2>
                        Technical Skills
                    </h2>
                    <p>
                    HTML/ CSS, JavaScript, SQL, GitHub, MySql, MongoDB, NoSQL, Express, Node, Handlebars, OOP,
TDD, Bootstrap, Responsive Design, AJAX, Agile/Scrum, PWA’s, React

                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Resume;
