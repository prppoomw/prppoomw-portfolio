import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";

const App = () => {
    return (
        <main className="max-w-7-xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Project />
        </main>
    )
}
export default App
