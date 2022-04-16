import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



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
            <Footer></Footer>
        </div>
    );
}

export default App;
