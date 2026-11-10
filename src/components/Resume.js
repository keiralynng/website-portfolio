import '../styles/Resume.css';

function Resume() {
  const resumePath = '/resume/KeiraGoolsby-Resume.pdf';

  return (
    <section className="resume">
      <div className="resume-header">
        <div>
          <h1>My Resume</h1>
          <p>
            View my education, experience, and
            technical qualifications.
          </p>
        </div>

        <a
          href={resumePath}
          download="KeiraGoolsby-Resume.pdf"
          className="resume-download"
        >
          Download Resume
        </a>
      </div>

      <div className="resume-viewer">
        <iframe
          src={resumePath}
          title="Keira Goolsby Resume"
        />
      </div>
    </section>
  );
}

export default Resume;
