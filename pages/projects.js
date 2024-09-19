import Header from "./Header";

export default () => (
  <>
    <Header />
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="section">
        <h2 className="subtitle">Deployed</h2>
        <div className="card">
          <a
            href="https://africartfrontend.onrender.com/"
            className="card-link"
          >
            <img
              src="/path/to/africart-image.jpg"
              alt="AfricArt"
              className="project-image"
            />
            <p className="card-text">
              <b>Render:</b> AfricArt
            </p>
          </a>
        </div>
      </div>
      <div className="section">
        <h2 className="subtitle">Local</h2>
        <div className="card">
          <a href="https://github.com/dane-iverson" className="card-link">
            <img
              src="/images/`githubPic"
              alt="GitHub Profile"
              className="project-image"
            />
            <p className="card-text">
              <b>GitHub:</b> dane-iverson
            </p>
          </a>
        </div>
      </div>

      <style jsx>{`
        .container {
          background-color: #f7f7f7;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-size: 3rem;
          color: #ff8c00;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          margin-bottom: 2rem;
          animation: fadeIn 2s ease-in;
        }
        .section {
          width: 80%;
          max-width: 800px;
          margin-bottom: 4rem;
        }
        .subtitle {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
          text-align: center;
          animation: slideIn 1s ease-out;
        }
        .card {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
          animation: bounceIn 1s ease-out;
        }
        .card:hover {
          transform: scale(1.05);
        }
        .card-link {
          display: block;
          text-align: center;
          text-decoration: none;
        }
        .project-image {
          width: 100%;
          height: auto;
          transition: opacity 0.3s ease-in-out;
        }
        .card-link:hover .project-image {
          opacity: 0.8;
        }
        .card-text {
          font-size: 1.5rem;
          color: #333;
          padding: 1rem;
          background-color: #fff;
          transition: background-color 0.3s ease-in-out;
        }
        .card-link:hover .card-text {
          background-color: #ff8c00;
          color: #fff;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes bounceIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  </>
);
