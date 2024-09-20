import Header from "./Header";

function Welcome(props) {
  return (
    <>
      <Header />
      <div className="hero">
        <h1>Hello, I'm Dane Iverson</h1>
        <p>
          A passionate developer with a love for creating amazing web
          experiences.
        </p>
        <a href="https://africartfrontend.onrender.com/" className="cta-button">
          See My Latest Work
        </a>
        <div className="summary-cards">
          <div className="summary-card">
            <h2>Projects</h2>
            <p>Explore all of my public projects and repositories.</p>
            <a href="/projects" className="cta-button">
              See My Work
            </a>
          </div>
          <div className="summary-card">
            <h2>About Me</h2>
            <p>
              Learn more about my background, education, and what makes me, me.
            </p>
            <a href="/about" className="cta-button">
              See My Story
            </a>
          </div>
          <div className="summary-card">
            <h2>Contact</h2>
            <p>
              Get in touch with me to discuss ideas, collaborations, or just to
              say hello!
            </p>
            <a href="/contact" className="cta-button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(
            to right,
            #ff6347,
            #ff8c00
          ); /* Swapped colors */
          color: white;
          text-align: center;
          padding: 2rem;
          overflow: hidden;
        }

        h1 {
          font-size: 4rem;
          margin: 0;
          font-family: "Montserrat", sans-serif;
          opacity: 0;
          transform: translateY(-50px);
          animation: fadeInUp 3s forwards; /* Updated duration */
          animation-delay: 0s; /* No delay for h1 */
        }

        p {
          font-size: 1.5rem;
          margin: 1rem 0;
          font-family: "Lato", sans-serif;
          opacity: 0;
          transform: translateY(-30px);
          animation: fadeInUp 3s forwards; /* Updated duration */
          animation-delay: 1.5s; /* Delay for paragraph */
        }

        .cta-button {
          display: inline-block;
          font-size: 1.2rem;
          padding: 0.8rem 1.5rem;
          margin-top: 1rem;
          background: #333;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          transition: background 0.3s ease, transform 0.3s ease;
          transform: translateY(10px);
          opacity: 0;
          animation: fadeInUp 3s forwards; /* Updated duration */
          animation-delay: 3s; /* Delay for the main button */
        }

        .cta-button:hover {
          background: #ff8c00;
          transform: translateY(0);
        }

        .summary-cards {
          display: flex;
          justify-content: space-around;
          margin-top: 2rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .summary-card {
          background: rgba(255, 255, 255, 0.9);
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          width: 30%;
          margin: 1rem;
          text-align: left;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 3s forwards; /* Updated duration */
          animation-delay: 5s; /* Delay for summary cards */
        }

        .summary-card h2 {
          color: black; /* Change title color to black */
        }

        .summary-card p {
          color: black; /* Change summary text color to black */
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }

          p {
            font-size: 1.2rem;
          }

          .summary-card {
            width: 90%; /* Adjust width for smaller screens */
          }
        }
      `}</style>
    </>
  );
}

export default Welcome;
