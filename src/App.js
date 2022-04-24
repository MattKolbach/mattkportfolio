import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import Resume from './components/Resume';

function App() {
    const [pages] = useState([
        {
            name: 'About me',
            component: <About></About>,
        },
        {
            name: 'Portfolio',
            component: <ProjectList></ProjectList>
        },
        {
            name: 'Contact',
            component: <ContactForm></ContactForm>
        },
        {
            name: 'Resume',
            component: <Resume />
        },
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div>
            <Header name="Matt Kolbach">
                <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
            </Header>
            <main>
                {currentPage.component}

            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;