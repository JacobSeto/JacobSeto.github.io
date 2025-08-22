import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Carousel from './components/Carousel.jsx'

export default function App() {
  return (
    <>
      <title>Jacob Seto - Cornell 26' Computer Science and Game Design. President of DGA and Aspiring Game Developer</title>
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