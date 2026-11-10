import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h1>My Projects</h1>

      <p className="projects-intro">
        A selection of projects I've worked on.
      </p>

      <div className="project-grid">
        <div className="project-card">
          <h2>FitnessFR</h2>
          <p>
            A full-stack fitness platform that allows
            users to track workouts, meals, and wellness
            while connecting with fitness coaches.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
          </div>
        </div>

        <div className="project-card">
          <h2>Android Movie App</h2>
          <p>
            An Android application that displays movies
            and TV shows with detailed information
            and interactive navigation.
          </p>
          <div className="project-tech">
            <span>Java</span>
            <span>Android Studio</span>
          </div>
        </div>

        <div className="project-card">
          <h2>BitFit</h2>
          <p>
            An Android wellness application that
            helps users track daily water intake
            and view their progress.
          </p>
          <div className="project-tech">
            <span>Java</span>
            <span>Room</span>
            <span>Android</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
