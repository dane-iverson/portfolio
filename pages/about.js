import Header from "./Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-wrapper">
        <div className="about-container">
          <section className="intro">
            <h1>About Me</h1>
            <p>
              I’m Dane Iverson, a passionate developer and problem solver with a
              diverse background.
            </p>
          </section>

          <section className="education">
            <h2>Educational Background</h2>
            <p>
              My journey into the world of coding started at HyperionDev in Cape
              Town, where I honed my skills and deepened my understanding of
              programming. Before that, I attended Grey High School, a highly
              competitive environment where I built lifelong friendships and a
              strong brotherhood.
            </p>
            <div className="image-container">
              <img
                src="/images/GreyHigh.jpg"
                alt="Grey High School"
                className="image"
              />
              <img
                src="/images/hyperiondev.jpg"
                alt="HyperionDev"
                className="image"
              />
            </div>
          </section>

          <section className="experience">
            <h2>Professional Experience</h2>
            <p>
              I’ve gained valuable experience working in various roles,
              including as a bartender, waiter, and even managing a fast food
              restaurant. These roles have taught me teamwork, leadership, and
              problem-solving skills.
            </p>
            <div className="image-container">
              <img
                src="/images/romans.jpg"
                alt="Managing at Roman's Pizza"
                className="image"
              />
            </div>
          </section>

          <section className="skills">
            <h2>Skills & Expertise</h2>
            <p>
              I’m proficient in the MERN stack and constantly eager to learn new
              languages and explore video game development. My technical skills
              are complemented by a problem-solving mindset and a dedication to
              continuous improvement.
            </p>
          </section>

          <section className="projects">
            <h2>Notable Projects</h2>
            <p>
              One of my most visually appealing projects is AfricArt. While it
              may not offer the most intricate user experience, its design and
              aesthetics make it a standout project.
            </p>
            <div className="image-container">
              <img
                src="/images/AfricArtHomepage.png"
                alt="AfricArt Project"
                className="image"
              />
            </div>
          </section>

          <section className="personal-philosophy">
            <h2>Personal Philosophy</h2>
            <p>
              As a problem solver at heart, I approach challenges from various
              angles and believe in the power of patience and practice. I focus
              on the present moment and strive to view each problem with an open
              mind.
            </p>
          </section>

          <section className="personal-interests">
            <h2>Personal Interests</h2>
            <p>
              Outside of coding, I have a love for dirt bikes and extreme enduro
              riding. I’m a Christian who places my trust and faith in God, and
              I enjoy story-driven video games that offer immersive experiences.
            </p>
            <div className="image-container">
              <img
                src="/images/dirtbike.jpg"
                alt="Dirtbike Riding"
                className="image"
              />
              <img src="/images/JesusImage.png" alt="Jesus" className="image" />
            </div>
          </section>
        </div>

        <style jsx>{`
          .about-wrapper {
            position: relative;
            min-height: 100vh;
            background: linear-gradient(
              to right,
              #eb6426,
              #ff8c00
            ); /* Light mode gradient */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            box-sizing: border-box;
            overflow: hidden;
          }

          .about-container {
            padding: 2rem;
            max-width: 1200px;
            margin: auto;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            z-index: 1;
            position: relative;
            transition: transform 0.4s ease, background-color 0.4s ease;
          }

          .about-container:hover {
            transform: translateY(-10px);
          }

          /* Light mode styling */
          @media (prefers-color-scheme: light) {
            .about-container:hover {
              background-color: rgba(240, 240, 240, 1);
            }
          }

          /* Dark mode styling */
          @media (prefers-color-scheme: dark) {
            .about-wrapper {
              background: linear-gradient(
                to right,
                #001f3f,
                #183fb5
              ); /* Dark mode gradient */
            }
            .about-container {
              background-color: rgba(50, 50, 50, 0.9);
              color: white;
            }
            h1,
            h2 {
              color: white;
            }
            p {
              color: white;
            }
          }

          h1,
          h2 {
            color: #ff8c00;
            text-align: center;
            margin: 1rem 0;
            font-family: "Poppins", sans-serif;
            animation: fadeInDown 1s ease-in-out;
          }

          p {
            text-align: center;
            font-size: 1.2rem;
            line-height: 1.8;
            margin: 1rem 0;
            font-family: "Open Sans", sans-serif;
            animation: fadeIn 1.5s ease-in;
          }

          .image-container {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.5rem;
            animation: fadeIn 2s ease-in-out;
            flex-wrap: wrap;
          }

          .image {
            max-width: 45%;
            border-radius: 15px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.4s ease, opacity 0.4s ease;
            opacity: 0.9;
          }

          .image:hover {
            transform: scale(1.05);
            opacity: 1;
          }

          section {
            margin-bottom: 3rem;
            padding: 2rem;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.4s ease, background-color 0.4s ease;
          }

          section:hover {
            transform: translateY(-10px);
          }

          /* Light mode styling */
          @media (prefers-color-scheme: light) {
            section:hover {
              background-color: rgba(240, 240, 240, 1);
            }
          }

          /* Dark mode styling */
          @media (prefers-color-scheme: dark) {
            section {
              background-color: rgba(50, 50, 50, 0.9);
              color: white;
            }
            h1,
            h2 {
              color: white;
            }
            p {
              color: white;
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

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Responsive Adjustments */
          @media (max-width: 768px) {
            .image {
              max-width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}
