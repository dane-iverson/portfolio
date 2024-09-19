import Header from "./Header";

export default function About() {
  return (
    <>
      <Header />
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
            programming. This education has been instrumental in shaping my
            approach to development.
          </p>
        </section>
        <section className="experience">
          <h2>Professional Experience</h2>
          <p>
            I’ve gained valuable experience working in various roles, including
            as a bartender, waiter, and even managing a fast food restaurant.
            These roles have taught me teamwork, leadership, and problem-solving
            skills.
          </p>
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
            One of my most visually appealing projects is AfricArt. While it may
            not offer the most intricate user experience, its design and
            aesthetics make it a standout project.
          </p>
        </section>
        <section className="personal-philosophy">
          <h2>Personal Philosophy</h2>
          <p>
            As a problem solver at heart, I approach challenges from various
            angles and believe in the power of patience and practice. I focus on
            the present moment and strive to view each problem with an open
            mind.
          </p>
        </section>
        <section className="personal-interests">
          <h2>Personal Interests</h2>
          <p>
            Outside of coding, I have a love for dirt bikes and extreme enduro
            riding. I’m a Christian who places my trust and faith in God, and I
            enjoy story-driven video games that offer immersive experiences.
          </p>
        </section>
        <style jsx>{`
          .about-container {
            max-width: 1200px;
            margin: auto;
          }
          h1,
          h2 {
            color: #ff8c00;
            text-align: center;
            margin: 1rem 0;
          }
          p {
            text-align: center;
            line-height: 1.6;
            margin: 1rem 0;
          }
          .intro p {
            font-size: 1.5rem;
          }
          section {
            background: #f4f4f4;
            border-radius: 10px;
            padding: 2rem;
            margin: 1rem 0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: background 0.3s ease, box-shadow 0.3s ease;
          }
          section:hover {
            background: #fff;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          h2 {
            font-size: 2rem;
          }
        `}</style>
      </div>
    </>
  );
}
