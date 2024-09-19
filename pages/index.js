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
        <a href="/projects" className="cta-button">
          See My Work
        </a>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(to right, #ff8c00, #ff6347);
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
          animation: fadeInUp 1s forwards;
        }

        p {
          font-size: 1.5rem;
          margin: 1rem 0;
          font-family: "Lato", sans-serif;
          opacity: 0;
          transform: translateY(-30px);
          animation: fadeInUp 1s 0.5s forwards;
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
        }

        .cta-button:hover {
          background: #ff8c00;
          transform: translateY(0);
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
        }
      `}</style>
    </>
  );
}

export default Welcome;
