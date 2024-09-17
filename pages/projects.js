import Header from "./Header";

export default () => (
  <div>
    <Header />
    <h1>Projects</h1>
    <h2>Deployed</h2>
    <p>
      <b>Render:</b>{" "}
      <a href="https://africartfrontend.onrender.com/">AfricArt</a>
    </p>
    <h1>Local</h1>
    <p>
      <b>GitHub:</b> <a href="https://github.com/dane-iverson">dane-iverson</a>
    </p>
    <style jsx>{`
      h1 {
        text-align: center;
        margin-top: 3rem;
        font-size: 3rem;
        color: #ff8c00;
      }
      p {
        text-align: center;
        font-size: 1.5rem;
        margin: 2rem 0;
      }
      b {
        font-weight: 600;
        color: #333;
      }
      a {
        color: #333;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
      }
      a:hover {
        color: #ff8c00;
      }
    `}</style>
  </div>
);
