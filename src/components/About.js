
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <h1>About Me</h1>

      <p>
        I'm a Computer Science student at the New Jersey
        Institute of Technology with an interest in
        software development, cybersecurity, and technology.
      </p>

      <p>
        Throughout my academic journey, I've gained
        experience building full-stack applications,
        developing Android apps, and working with
        different programming languages and frameworks.
      </p>

      <h2>Education</h2>
      <p>
        New Jersey Institute of Technology
        <br />
        Bachelor of Science in Computer Science
      </p>

      <h2>Technical Skills</h2>
      <div className="skills">
        <span>Java</span>
        <span>Python</span>
        <span>C</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>SQL</span>
      </div>
    </section>
  );
}

export default About;
