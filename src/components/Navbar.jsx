export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a className="active" href="#about">About</a></li>
        <li className="dropdown">
          <a href="#projects" className="dropbtn active">Projects</a>
          <div className="dropdown-content">
            <a href="#serve">SERVE</a>
            <a href="#hammer">Completely Hammered</a>
            {/* ...etc */}
          </div>
        </li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}