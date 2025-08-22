import { useEffect, useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when the menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close the menu when any link inside <nav> is clicked
  const handleNavClick = (e) => {
    const t = e.target;
    if (t.tagName === "A") setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="hamburger">
        <Hamburger toggled={open} toggle={setOpen} size={22} label="Menu" />
      </div>

      <nav
        className={`menu ${open ? "open" : ""}`}
        aria-hidden={!open}
        onClick={handleNavClick}
      >
        <a href="#about">About</a>
        <a href='#projects'>Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
