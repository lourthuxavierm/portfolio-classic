import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import SEO from './components/SEO';

function App() {

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <HelmetProvider>
            <div className="App bg-gray-50 text-gray-800">
                <SEO />
                <Header />
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default App;
