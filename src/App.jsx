import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import useSmoothScroll from './hooks/useSmoothScroll.js'

export default function App() {
  useSmoothScroll() // optional nicety
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