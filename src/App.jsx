import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";

const App = () => {
    return (
        <main className="max-w-7-xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Experience />
            <Footer />
        </main>
    )
}
export default App
