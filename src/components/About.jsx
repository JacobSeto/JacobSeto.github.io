import ArticleCard from './ArticleCard'

export default function About() {
  return (
    <section id="about" className="about">
      <h1>Jacob Seto</h1>
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
      <ArticleCard />
    </section>
  )
}
