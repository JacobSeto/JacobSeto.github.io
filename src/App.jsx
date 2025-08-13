import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Resume />
        <Contact />
        <p>© 2024 Jacob Seto. All rights reserved.</p>
      </main>
    </>
  )
}