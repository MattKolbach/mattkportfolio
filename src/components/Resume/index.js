import React from 'react'

function Resume() {

    return (
        <section className="my-5" >
            <h1>Resume</h1>
            
            <div className="flex-row my-2">
                <div className='resume'>
                    <a href="https://docs.google.com/document/d/1GrMedEMac-mgvt9s8G54bo5uQyf8EHOJjrLsOazmrLU/edit?usp=sharing" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                    </svg>
                    </a>
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
