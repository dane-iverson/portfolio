import Header from "./Header";
import Footer from "./footer";

function Home() {
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
          {["Projects", "About Me", "Contact"].map((title, index) => (
            <div className="card-wrapper" key={index}>
              <div className="summary-card">
                <h2>{title}</h2>
                <p>
                  {title === "Projects" &&
                    "Explore all of my public projects and repositories."}
                  {title === "About Me" &&
                    "Learn more about my background, education, and what makes me, me."}
                  {title === "Contact" &&
                    "Get in touch with me to discuss ideas, collaborations, or just to say hello!"}
                </p>
                <a
                  href={`/${title.toLowerCase().replace(" ", "")}`}
                  className="cta-button"
                >
                  See My {title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(to right, #ff6347, #ff8c00);
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
          animation: fadeInUp 3s forwards;
        }

        p {
          font-size: 1.5rem;
          margin: 1rem 0;
          font-family: "Lato", sans-serif;
          opacity: 0;
          transform: translateY(-30px);
          animation: fadeInUp 3s forwards;
          animation-delay: 1.5s;
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
          animation: fadeInUp 3s forwards;
          animation-delay: 3s;
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

        .card-wrapper {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 3s forwards;
          animation-delay: 5s;
          display: flex;
          justify-content: center;
          width: 30%;
        }

        .summary-card {
          background: rgba(255, 255, 255, 0.9);
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          width: 100%;
          text-align: left;
          transition: transform 0.4s ease, background-color 0.4s ease;
        }

        .summary-card:hover {
          transform: translateY(-10px);
          /* No change in background color for dark mode */
        }

        /* Light mode styling */
        @media (prefers-color-scheme: light) {
          .summary-card:hover {
            background-color: rgba(
              240,
              240,
              240,
              1
            ); /* Lighter shade for hover in light mode */
          }
          .summary-card {
            background: rgba(255, 255, 255, 1);
            color: black;
          }
          .summary-card h2 {
            color: black;
          }
          .summary-card p {
            color: black;
          }
        }

        /* Dark mode styling */
        @media (prefers-color-scheme: dark) {
          .summary-card {
            background: rgba(50, 50, 50, 0.9);
            color: white;
          }
          .summary-card h2 {
            color: white;
          }
          .summary-card p {
            color: white;
          }
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
            width: 90%;
          }

          .card-wrapper {
            width: 90%; /* Adjust for smaller screens */
            justify-content: center; /* Center for smaller screens */
          }
        }
      `}</style>
    </>
  );
}

export default Home;
