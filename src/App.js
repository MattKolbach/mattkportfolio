import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/Contact';



function App() {


    return (
        <div>
            <Header></Header>
            <main>
                <>
                    <ProjectList></ProjectList>
                    <About></About>
                </>

                <ContactForm></ContactForm>

            </main>
        </div>
    );
}

export default App;
