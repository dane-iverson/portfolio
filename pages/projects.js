import Header from "./Header";

export default () => (
  <>
    <Header />
    <div className="background">
      <div className="container">
        <h1 className="title">Projects</h1>
        <div className="section">
          <h2 className="subtitle">Company Projects</h2>
          <div className="card">
            <a
              href="https://imperium-auto-group-site.vercel.app/"
              className="card-link"
            >
              <div className="image-container">
                <img
                  src="/images/Imperium.png"
                  alt="Imperium Auto Group"
                  className="project-image"
                />
              </div>
              <p className="card-text">
                <b>Website:</b> Imperium Auto Group
              </p>
            </a>
          </div>
        </div>

        <div className="section">
          <h2 className="subtitle">Deployed</h2>
          <div className="card">
            <a
              href="https://africartfrontend.onrender.com/"
              className="card-link"
            >
              <div className="image-container">
                <img
                  src="/images/AfricArt.png"
                  alt="AfricArt"
                  className="project-image"
                />
              </div>
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
              <div className="image-container">
                <img
                  src="/images/Github.png"
                  alt="GitHub Profile"
                  className="project-image"
                />
              </div>
              <p className="card-text">
                <b>GitHub:</b> dane-iverson
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .background {
        background: linear-gradient(135deg, #ff8c00, #f5a77a);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .container {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        padding: 2rem;
        width: 80%;
        max-width: 800px;
        transition: background-color 0.4s ease;
      }
      .title {
        font-size: 3rem;
        color: #ff8c00;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        margin-bottom: 2rem;
        animation: fadeIn 2s ease-in;
      }
      .section {
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
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.4s ease, background-color 0.4s ease;
        animation: fadeInUp 1.5s ease-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
      }
      .card:hover {
        transform: scale(1.05);
        background-color: rgba(255, 140, 0, 0.1);
      }
      .card-link {
        display: block;
        text-align: center;
        text-decoration: none;
      }
      .image-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        max-height: 300px;
      }
      .project-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: opacity 0.4s ease-in-out;
      }
      .card-link:hover .project-image {
        opacity: 0.8;
      }
      .card-text {
        font-size: 1.5rem;
        color: #333;
        padding: 1rem;
        background-color: #fff;
        transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
      }
      .card-link:hover .card-text {
        background-color: #ff8c00;
        color: #fff;
      }

      /* Dark mode styles */
      @media (prefers-color-scheme: dark) {
        .background {
          background: linear-gradient(
            135deg,
            #183fb5,
            #a0c4ff
          ); /* Gradient from dark blue to lighter blue */
        }
        .container {
          background-color: rgba(30, 30, 30, 0.9);
        }
        .title,
        .subtitle {
          color: #fff;
        }
        .card {
          background-color: rgba(50, 50, 50, 0.9);
        }
        .card-text {
          background-color: #333; /* Dark gray background for button */
          color: #fff; /* Button text color */
        }
        .card-link:hover .card-text {
          background-color: #ff8c00; /* Keep hover color */
          color: #fff; /* Keep text color on hover */
        }
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
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </>
);
