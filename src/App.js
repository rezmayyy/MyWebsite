import NavBar from './components/NavigationBar';

import Home from './sections/home';
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <section>
          <Home />
        </section>

        <section>
          <About />
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
