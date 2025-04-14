import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";

const App = () => {
    return (
        <>
            <Header />
            <main>
              <Home />
                <About />
                <Skills />
            </main>
        </>
    );
};

export default App;
