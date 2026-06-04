import Carousel from "./Carousel.jsx";
import ArticleCard from "./ArticleCard.jsx";

export default function About() {
  return (
    <section id="about" className="about">
      <h1>Jacob Seto</h1>
      <img src="/images/Me.webp" alt="Jacob Seto" className="about-image" />
      <div className="socialmedia">
        <a href="https://www.linkedin.com/in/jacob-j-seto" target="_blank" rel="noreferrer">
          <img src="/images/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/JacobSeto" target="_blank" rel="noreferrer">
          <img src="/images/github.png" alt="github" />
        </a>
      </div>
      <div className="about-content">
        <div className="about-text">
          {/* Introduction */}
          <p>Hi, thanks for checking out my website!</p>
          <p>
            I'm a recent student at Cornell University, majored in Computer Science with a minor in
            Game Design and Music. I'm extremely passionate about game development and project management, with a strong drive to collaborate and lead
             teams in both creative and techinical works. I served as president of the{" "}
            <a href="https://dga-official-website.vercel.app/" target="_blank" rel="noreferrer">
              Development in Games Association (DGA)
            </a>
            , a club that fosters passion for game development through specialized workshops, industry talks with
            alumni, and making games with members. I have played the cello for over a decade, and music has been a large aspect of my life. I aspire to work in the games industry and eventually own my own
              indie company. Follow my journey and send me a message, I'm always happy to meet new people!
          </p>
          {/* General Experience */}
          <p>
            My first video game, <a href="#castaways">Castaways</a>, was a Survival card game I made
            when I was just 14, which ignited my passion for game design.
            Throughout my years of game development and research at university, I’ve contributed to a wide range of
            amazing projects, gaining invaluable experience in the process. In my downtime, I work on my own game projects, all titled with the prefix "Flock"—a nod to the name of one
            of my earliest video games I made in high school. I also love playing board games and iterating on their designs, adding my own custom content and rules to explore new mechanics. My dream project is to create a deckbuilder roguelike, similar to <i>Slay the Spire</i>, that focuses on realtime combat and discovering unique card combos to fight mages that use the same cards against you.
          </p>
        </div>
        <div className="about-right">
          <ArticleCard />
          <div className="about-carousel">
            <Carousel />
          </div>
        </div>
      </div>

    </section>
  )
}
