import { useEffect } from "react";
import "./style.css";

export default function App() {
  // Smooth scroll for in-page anchors (optional nicety)
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div>
      {/* About me */}
      <section id="about" className="about">
        <h1>Jacob Seto</h1>
        {/* Social Media links */}
        <div className="socialmedia">
          <a href="https://www.linkedin.com/in/jacob-j-seto" target="_blank" rel="noreferrer">
            <img src="/images/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/JacobSeto" target="_blank" rel="noreferrer">
            <img src="/images/github.png" alt="github" />
          </a>
        </div>
        <div className="about-content">
          <img src="/images/Me.webp" alt="Jacob Seto" className="about-image" />
          <div className="about-text">
            {/* Introduction */}
            <p>Hi, thanks for checking out my website!</p>
            <p>
              I'm an undergraduate student at Cornell University, pursuing a major in Computer Science with a minor in
              Game Design and Music. I serve as president of the{" "}
              <a href="https://dga-official-website.vercel.app/" target="_blank" rel="noreferrer">
                Development in Games Association (DGA)
              </a>
              , a club that fosters passion for game development through specialized workshops, industry talks with
              alumni, and making games with members. I've been playing the cello for over a decade, and continue to play
              for the{" "}
              <a href="https://www.cuorchestra.org/" target="_blank" rel="noreferrer">
                Cornell Symphony Orchestra
              </a>
              . I aspire to work in the game industry and eventually own my own indie company. Follow my journey and send
              me a message, I'm always happy to meet new people!
            </p>
            {/* General Experience */}
            <p>
              Throughout my years of game development and research at university, I’ve contributed to a wide range of
              amazing projects, gaining invaluable experience in the process. I've taken on many different roles—project
              lead, UI/UX, network designer—depending on the project's needs. In collaborative settings, I tend to
              gravitate toward leadership roles, but will always prioritize being a team player. I am attentive to the
              needs and concerns of my team members and am happy to step in wherever I can—whether that means leading with
              high energy and enthusiasm, or letting others take the initiative and supporting them in realizing their
              goals.
            </p>
            {/* Personal Interests */}
            <p>
              In my downtime, I work on my own game projects, all titled with the prefix "Flock"—a nod to the name of one
              of my earliest video games I made in high school. I look up to games like <i>Slay the Spire</i> and <i>Risk
              of Rain 2</i> for their ingenuity in their respective genres, and I aspire to create a game of similar
              caliber. I also love playing board games and iterating on their designs, adding my own custom content and
              rules to explore new mechanics. Recently, I got back into <i>Magic: The Gathering</i>, and play weekly at a
              local card shop. My first video game, <a href="#castaways">Castaways</a>, was a Survival card game I made
              when I was just 14, which ignited my passion for game design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="title">
          <h1>Projects</h1>
          <p>
            This is a timeline of all the projects I have contributed to throughout my career. Click on the images inside
            of the blocks to learn more about each project.
          </p>
          <p>Border Outlines:</p>
          <p>
            <span style={{ color: "white" }}>White</span> → Personal Project
          </p>
          <p>
            <span style={{ color: "lightgreen" }}>Green</span> → Group Project
          </p>
          <p>
            <span style={{ color: "cyan" }}>Blue</span> → Research
          </p>
        </div>

        <div className="timeline">
          <div className="checkpoint blue-border">
            <a id="serve">
              <div>
                <label>Current</label>
                <h2>SERVE</h2>
                <ul>
                  <li>Role: VR & Network Developer</li>
                  <li>Software/Tools: Unity, Blender, Photon Engine</li>
                  <li>Platform: Android</li>
                </ul>
                <p>
                  Responsible for the development of a VR multiplayer lobby in Unity to enable research participants to
                  collaborate in several minigames and environments to be used for data collection
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint green-border">
            <a id="hammer">
              <div>
                <label>August, 2024</label>
                <h2>Completely Hammered</h2>
                <a href="https://dgacornell.itch.io/completely-hammered" target="_blank" rel="noreferrer">
                  <img className="checkpoint-image" src="images/Completely Hammered Cover.webp" alt="Completely Hammered Cover" />
                </a>
                <ul>
                  <li>Role: Project Lead</li>
                  <li>Software/Tools: Unity, Github</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  2D Physics Platformer where you play as Tito, a mad scientist who uses his hammer to escape the lab and
                  blast his way to the next party. 3 unique levels to explore and a built-in timer for hardcore gamers
                  that compete for the fastest completion time
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint green-border">
            <a id="rabbeat">
              <div>
                <label>May, 2024</label>
                <h2>Rabbeat</h2>
                <a href="https://we8-studios.itch.io/rabbeat" target="_blank" rel="noreferrer">
                  <img className="checkpoint-image" src="images/RabBeat Crop.webp" alt="RabBeat Crop" />
                </a>
                <ul>
                  <li>Role: Project Lead</li>
                  <li>Software/Tools: Intellij, Tiled, Github</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  2D Music-Platformer where you play a rabbit named Synth who can control the flow of the
                  rhythmically-tied world. Use your powers to rescue your friends from the evil DJ scientist Dr. Nocturne
                  and hop around the musical mutants that dance in your way!
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint green-border">
            <a id="tilly">
              <div>
                <label>May, 2024</label>
                <h2>Tilly's Critter Command</h2>
                <a href="https://dgacornell.itch.io/tillys-critter-command" target="_blank" rel="noreferrer">
                  <img className="checkpoint-image" src="images/Tilly.webp" alt="Tilly" />
                </a>
                <ul>
                  <li>Role: Programmer</li>
                  <li>Software/Tools: Unity, Github, Slack, Unity Engine AI</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  A 3D Isometric Strategy game where you play as Tilly, a human who finds themselves in a vibrant world
                  where emotions hold the key to survival. Tilly must harness and manipulate the feelings of the
                  expressive creatures to drive out the emotionless robot bugs, ultimately reclaiming the world from the
                  grip of apathy
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint blue-border">
            <a id="polylect">
              <div>
                <label>May, 2024</label>
                <h2>Polylect</h2>
                <ul>
                  <li>Role: Unity Developer</li>
                  <li>Software/Tools: Unity, Github, Netcode for Gameobjects</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  Cornell research project where I helped develop a 2D multiplayer navigation game to collect player data,
                  which provided valuable insights to the study of linguistic behaviors in small networks
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint white-border">
            <a id="light">
              <div>
                <label>December, 2023</label>
                <h2>Light Up the Stage</h2>
                <a href="https://tuxsetoxtreme.itch.io/light-up-the-stage" target="_blank" rel="noreferrer">
                  <img className="checkpoint-image" src="images/Light Up The Stage Snapshot.webp" alt="Light Up The Stage" />
                </a>
                <ul>
                  <li>Role: Solo</li>
                  <li>Software/Tools: Unity, Github, Blender</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  3D Platformer where you traverse through a pitch-black obstacle course, using only your footsteps and a
                  ball of light to temporarily light up the hidden platforms. Take a leap of faith and navigate the
                  unknown through a unique minimalist art style
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint green-border">
            <a id="rainbow">
              <div>
                <label>December, 2023</label>
                <h2>Rainbow Card Rumble</h2>
                <ul>
                  <li>Role: Group Member</li>
                  <li>Software/Tools: OCaml</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  Final project for the Functional Programming class at Cornell. An Uno-like card game where you win by
                  playing all cards in hand. However, some cards have special abilities that help you get closer or bring
                  you further from victory!
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint green-border">
            <a id="fury">
              <div>
                <label>August, 2023</label>
                <h2>Fury of The Lost Knight</h2>
                <a href="https://dgacornell.itch.io/fury-of-the-lost-knight" target="_blank" rel="noreferrer">
                  <img className="checkpoint-image" src="images/Fury of The Lost Knight Promotional.webp" alt="Fury Promo" />
                </a>
                <ul>
                  <li>Role: Project Lead & Programmer</li>
                  <li>Software/Tools: Unity, Github</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  2D Action Platformer where you play as a knight named Tyr who is out for revenge against the evil Lich
                  King Abraxor who destroyed their kingdom. Combines fast-paced combat, exploration, and puzzle-solving
                  paired with stunning visuals and an unique pastel-pixel art style
                </p>
                <a href="https://dgacornell.itch.io/fury-of-the-lost-knight" target="_blank" rel="noreferrer">
                  Fury of The Lost Knight itch.io
                </a>
              </div>
            </a>
          </div>

          <div className="checkpoint white-border">
            <a id="flock-arena">
              <div>
                <label>May, 2023</label>
                <h2>Flock Arena</h2>
                <img className="checkpoint-image" src="images/Flock Screenshot.webp" alt="Flock Screenshot" />
                <ul>
                  <li>Role: Solo</li>
                  <li>Software/Tools: Unity, Github, Photon Engine</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  3D Multiplayer Hero Shooter with an in-depth skill tree and a reimagination of classic weapons of the
                  genre. This encourages unique playstyles and dynamic gameplay compared to other popular FPS games
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint green-border">
            <a id="planetoids">
              <div>
                <label>December 2022</label>
                <h2>Planetoids</h2>
                <img className="checkpoint-image" src="images/planetoids.webp" alt="Planetoids" />
                <ul>
                  <li>Role: Project Member</li>
                  <li>Software/Tools: Python</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  Final project for the Introduction to Computing class at Cornell. A clone of the classic game
                  Planetoids with unique levels, enemies, and ship upgrades
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint green-border">
            <a id="carbon">
              <div>
                <label>October 2022</label>
                <h2>Carbon Footprint Calculator</h2>
                <img className="checkpoint-image" src="images/Carbon Snapshot.webp" alt="Carbon Snapshot" />
                <ul>
                  <li>Role: BigRed//Hacks Participant</li>
                  <li>Software/Tools: Unity, C#</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  Interactive calculator using Unity 3D to visualize the user’s impact on the environment by populating
                  CO2 molecules proportional to the user’s carbon footprint and generates a comprehensive emissions graph
                  at the end of the simulation
                </p>
              </div>
            </a>
          </div>

          <div className="checkpoint white-border">
            <a id="castaways">
              <div>
                <label>February 2021</label>
                <h2>Castaways</h2>
                <img className="checkpoint-image" src="images/Castaway Snapshot.webp" alt="Castaway Snapshot" />
                <ul>
                  <li>Role: Solo</li>
                  <li>Software/Tools: Unity, C#</li>
                  <li>Platform: PC</li>
                </ul>
                <p>
                  2D Turn-Based Strategy Game where you and your opponent battle for survival on a remote island. Collect
                  resource cards to craft tools and play impactful action cards that increase your chances of survival
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume">
        <div className="resume">
          <h1>Resume</h1>
          <a
            href="https://docs.google.com/document/d/1r9o2DNTMDlrD4LBmA74F3VQW3Fn3WnR1y1Qh7ofKE_0/export?format=pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
          <iframe
            title="Resume"
            src="https://docs.google.com/document/d/e/2PACX-1vSUMdMNC3qduzBpYzty222dLUUnvoSs7UF23RODohVyTrWJVTsOC5xBy5dMYdL3xSvCEB6wolkIb30b/pub?embedded=true"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact-container">
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
            <div className="contact-left-title">
              <h2>Get in touch</h2>
              <hr />
            </div>
            <input type="hidden" name="access_key" value="41a36971-7dd7-4d39-9c74-51e7f9c8d64e" />
            <input type="text" name="name" id="name" placeholder="Name" className="contact-inputs" required />
            <input type="email" name="email" id="email" placeholder="Email" className="contact-inputs" required />
            <textarea name="message" placeholder="Message..." className="contact-inputs" required />
            <button type="submit">
              Submit <img src="/images/arrow_icon.png" alt="" />
            </button>
          </form>
          <div className="contact-right">
            <img src="images/Text Bubble Float.webp" alt="" />
          </div>
        </div>
      </section>

      <p>© 2024 Jacob Seto. All rights reserved.</p>

      {/* Navigation Bar */}
      <div className="navbar">
        <ul>
          <li>
            <a className="active" href="#about">
              About
            </a>
          </li>
          <li className="dropdown">
            {/* className can't be declared twice; keep both styles via className */}
            <a href="#projects" className="dropbtn active">
              Projects
            </a>
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
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
