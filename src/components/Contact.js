import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h1>Get In Touch</h1>

      <p>
        I'm always interested in new opportunities,
        collaborations, and connecting with others
        in technology.
      </p>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/keira-goolsby-5685412b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/keiralynng"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a href="mailto:keiralynng@gmail.com">
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
