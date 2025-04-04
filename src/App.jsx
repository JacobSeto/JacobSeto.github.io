import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './style.css';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <footer>
        <p style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>
          © 2024 Jacob Seto. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
