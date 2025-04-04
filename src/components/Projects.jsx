export default function Projects() {
  return (
    <section id="projects">
      <div className="title">
        <h1>Projects</h1>
        <p>This is a timeline of all the projects I have contributed to throughout my career. Click on the images inside of the blocks to learn more about each project.</p>
        <p>Border Outlines:</p>
        <p><span style={{ color: 'white' }}>White</span> → Personal Project</p>
        <p><span style={{ color: 'lightgreen' }}>Green</span> → Group Project</p>
        <p><span style={{ color: 'cyan' }}>Blue</span> → Research</p>
      </div>

      <div className="timeline">

        {/* SERVE */}
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
              <p>Responsible for the development of a VR multiplayer lobby in Unity to enable research participants to collaborate in several minigames and environments to be used for data collection</p>
            </div>
          </a>
        </div>

        {/* Completely Hammered */}
        <div className="checkpoint green-border">
          <a id="hammer">
            <div>
              <label>August, 2024</label>
              <h2>Completely Hammered</h2>
              <a href="https://dgacornell.itch.io/completely-hammered" target="_blank" rel="noopener noreferrer">
                <img className="checkpoint-image" src="/images/Completely Hammered Cover.png" alt="Completely Hammered Cover" />
              </a>
              <ul>
                <li>Role: Project Lead</li>
                <li>Software/Tools: Unity, Github</li>
                <li>Platform: PC</li>
              </ul>
              <p>2D Physics Platformer where you play as Tito, a mad scientist who uses his hammer to escape the lab and blast his way to the next party. 3 unique levels to explore and a built-in timer for hardcore gamers that compete for the fastest completion time</p>
            </div>
          </a>
        </div>

        {/* Rabbeat */}
        <div className="checkpoint green-border">
          <a id="rabbeat">
            <div>
              <label>May, 2024</label>
              <h2>Rabbeat</h2>
              <a href="https://we8-studios.itch.io/rabbeat" target="_blank" rel="noopener noreferrer">
                <img className="checkpoint-image" src="/images/RabBeat Crop.png" alt="RabBeat Crop" />
              </a>
              <ul>
                <li>Role: Project Lead</li>
                <li>Software/Tools: Intellij, Tiled, Github</li>
                <li>Platform: PC</li>
              </ul>
              <p>2D Music-Platformer where you play a rabbit named Synth who can control the flow of the rhythmically-tied world. Use your powers to rescue your friends from the evil DJ scientist Dr. Nocturne and hop around the musical mutants that dance in your way!</p>
            </div>
          </a>
        </div>

        {/* Tilly's Critter Command */}
        <div className="checkpoint green-border">
          <a id="tilly">
            <div>
              <label>May, 2024</label>
              <h2>Tilly's Critter Command</h2>
              <a href="https://dgacornell.itch.io/tillys-critter-command" target="_blank" rel="noopener noreferrer">
                <img className="checkpoint-image" src="/images/Tilly.PNG" alt="Tilly" />
              </a>
              <ul>
                <li>Role: Programmer</li>
                <li>Software/Tools: Unity, Github, Slack, Unity Engine AI</li>
                <li>Platform: PC</li>
              </ul>
              <p>A 3D Isometric Strategy game where you play as Tilly, a human who finds themselves in a vibrant world where emotions hold the key to survival. Tilly must harness and manipulate the feelings of the expressive creatures to drive out the emotionless robot bugs, ultimately reclaiming the world from the grip of apathy</p>
            </div>
          </a>
        </div>

        {/* Polylect */}
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
              <p>Cornell research project where I helped develop a 2D multiplayer navigation game to collect player data, which provided valuable insights to the study of linguistic behaviors in small networks</p>
            </div>
          </a>
        </div>

        {/* Light Up the Stage */}
        <div className="checkpoint white-border">
          <a id="light">
            <div>
              <label>December, 2023</label>
              <h2>Light Up the Stage</h2>
              <a href="https://tuxsetoxtreme.itch.io/light-up-the-stage" target="_blank" rel="noopener noreferrer">
                <img className="checkpoint-image" src="/images/Light Up The Stage Snapshot.png" alt="Light Up The Stage" />
              </a>
              <ul>
                <li>Role: Solo</li>
                <li>Software/Tools: Unity, Github, Blender</li>
                <li>Platform: PC</li>
              </ul>
              <p>3D Platformer where you traverse through a pitch-black obstacle course, using only your footsteps and a ball of light to temporarily light up the hidden platforms. Take a leap of faith and navigate the unknown through a unique minimalist art style</p>
            </div>
          </a>
        </div>

        {/* Rainbow Card Rumble */}
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
              <p>Final project for the Functional Programming class at Cornell. An Uno-like card game where you win by playing all cards in hand. However, some cards have special abilities that help you get closer or bring you further from victory!</p>
            </div>
          </a>
        </div>

        {/* Fury of The Lost Knight */}
        <div className="checkpoint green-border">
          <a id="fury">
            <div>
              <label>August, 2023</label>
              <h2>Fury of The Lost Knight</h2>
              <a href="https://dgacornell.itch.io/fury-of-the-lost-knight" target="_blank" rel="noopener noreferrer">
                <img className="checkpoint-image" src="/images/Fury of The Lost Knight Promotional.jpg" alt="Fury Promo" />
              </a>
              <ul>
                <li>Role: Project Lead & Programmer</li>
                <li>Software/Tools: Unity, Github</li>
                <li>Platform: PC</li>
              </ul>
              <p>2D Action Platformer where you play as a knight named Tyr who is out for revenge against the evil Lich King Abraxor who destroyed their kingdom. Combines fast-paced combat, exploration, and puzzle-solving paired with stunning visuals and a unique pastel-pixel art style</p>
              <a href="https://dgacornell.itch.io/fury-of-the-lost-knight" target="_blank" rel="noopener noreferrer">
                Fury of The Lost Knight itch.io
              </a>
            </div>
          </a>
        </div>

        {/* Flock Arena */}
        <div className="checkpoint white-border">
          <a id="flock-arena">
            <div>
              <label>May, 2023</label>
              <h2>Flock Arena</h2>
              <img className="checkpoint-image" src="/images/Flock Screenshot.png" alt="Flock Screenshot" />
              <ul>
                <li>Role: Solo</li>
                <li>Software/Tools: Unity, Github, Photon Engine</li>
                <li>Platform: PC</li>
              </ul>
              <p>3D Multiplayer Hero Shooter with an in-depth skill tree and a reimagination of classic weapons of the genre. This encourages unique playstyles and dynamic gameplay compared to other popular FPS games</p>
            </div>
          </a>
        </div>

        {/* Planetoids */}
        <div className="checkpoint green-border">
          <a id="planetoids">
            <div>
              <label>December, 2022</label>
              <h2>Planetoids</h2>
              <img className="checkpoint-image" src="/images/planetoids.png" alt="Planetoids" />
              <ul>
                <li>Role: Project Member</li>
                <li>Software/Tools: Python</li>
                <li>Platform: PC</li>
              </ul>
              <p>Final project for the Introduction to Computing class at Cornell. A clone of the classic game Planetoids with unique levels, enemies, and ship upgrades</p>
            </div>
          </a>
        </div>

        {/* Carbon Footprint Calculator */}
        <div className="checkpoint green-border">
          <a id="carbon">
            <div>
              <label>October, 2022</label>
              <h2>Carbon Footprint Calculator</h2>
              <img className="checkpoint-image" src="/images/Carbon Snapshot.png" alt="Carbon Snapshot" />
              <ul>
                <li>Role: BigRed//Hacks Participant</li>
                <li>Software/Tools: Unity, C#</li>
                <li>Platform: PC</li>
              </ul>
              <p>Interactive calculator using Unity 3D to visualize the user’s impact on the environment by populating CO2 molecules proportional to the user’s carbon footprint and generates a comprehensive emissions graph at the end of the simulation</p>
            </div>
          </a>
        </div>

        {/* Castaways */}
        <div className="checkpoint white-border">
          <a id="castaways">
            <div>
              <label>February, 2021</label>
              <h2>Castaways</h2>
              <img className="checkpoint-image" src="/images/Castaway Snapshot.png" alt="Castaway Snapshot" />
              <ul>
                <li>Role: Solo</li>
                <li>Software/Tools: Unity, C#</li>
                <li>Platform: PC</li>
              </ul>
              <p>2D Turn-Based Strategy Game where you and your opponent battle for survival on a remote island. Collect resource cards to craft tools and play impactful action cards that increase your chances of survival</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
