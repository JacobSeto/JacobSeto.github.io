export default function About() {
  return (
    <section id="about" className="about">
      <h1>Jacob Seto</h1>
      <div className="socialmedia">
        <a href="https://www.linkedin.com/in/jacob-j-seto">
          <img src="/src/assets/images/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/JacobSeto">
          <img src="/src/assets/images/github.png" alt="github" />
        </a>
      </div>
      <div className="about-content">
        <img src="/src/assets/images/Me.png" alt="Jacob Seto" className="about-image" />
        <div className="about-text">
          <p>Hi, thanks for checking out my website!</p>
          <p>
            I'm an undergraduate student at Cornell University, pursuing a major in Computer Science with a minor in Game Design and Music. I serve as president of the <a href="https://dga-official-website.vercel.app/" target="_blank">Development in Games Association (DGA)</a>, a club that fosters passion for game development through specialized workshops, industry talks with alumni, and making games with members. I've been playing the cello for over a decade, and continue to play for the <a href="https://www.cuorchestra.org/" target="_blank">Cornell Symphony Orchestra</a>. I aspire to work in the game industry and eventually own my own indie company. Follow my journey and send me a message, I'm always happy to meet new people!
          </p>
        </div>
      </div>
    </section>
  );
}
