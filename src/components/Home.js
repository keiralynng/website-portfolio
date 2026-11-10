import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="home-intro">Hi, my name is</p>

        <h1>Keira Goolsby.</h1>

        <h2>Computer Science Student & Developer</h2>

        <p className="home-description">
          I'm a Computer Science student at the New Jersey
          Institute of Technology with a passion for
          software development, technology, and
          problem-solving.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="primary-btn">
            View My Projects
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
