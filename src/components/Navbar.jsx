export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li className="dropdown">
          <a href="#projects" className="dropbtn">Projects</a>
          <div className="dropdown-content">
            <a href="#serve">SERVE</a>
            <a href="#hammer">Completely Hammered</a>
            <a href="#rabbeat">RabBeat</a>
            <a href="#tilly">Tilly's Critter Command</a>
            <a href="#polylect">Polylect</a>
            <a href="#light">Light Up The Stage</a>
            <a href="#rainbow">Rainbow Card Rumble</a>
            <a href="#fury">Fury of The Lost Knight</a>
            <a href="#flock-arena">Flock Arena</a>
            <a href="#carbon">Carbon Footprint Calc</a>
            <a href="#planetoids">Planetoids</a>
            <a href="#castaways">Castaways</a>
          </div>
        </li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
