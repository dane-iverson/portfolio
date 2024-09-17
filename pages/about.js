import Header from "./Header";

export default () => (
  <div>
    <Header />
    <section className="intro">
      <h1>About Me</h1>
      <p className="intro-text">
        I am a highly motivated individual driven by a passion for creating and
        problem-solving. My experiences and passions have helped me to develop a
        unique perspective and approach to work and life, making me a valuable
        asset to any team.
      </p>
    </section>
    <section className="education">
      <h2>Educational History</h2>
      <p>
        I am a dedicated developer who values teamwork and discipline. My
        education at Grey High School, an all-boys school known for its emphasis
        on brotherhood and strict discipline, has greatly contributed to the
        person I am today. The school's focus on teamwork and camaraderie has
        instilled in me a strong sense of collaboration and the ability to work
        well with others. The strict code of conduct also taught me the
        importance of taking responsibility for my actions and always striving
        for excellence. My strong work ethic and determination to succeed have
        been further developed during my time at Grey High School, which is
        evident in the high-quality work I produce.
      </p>
    </section>
    <section className="passions">
      <h2>Passions</h2>
      <p>
        I have always been passionate about a few things in my life: Surfing,
        Racing, Developing, and Building. Surfing is my way of escaping the
        daily grind and finding peace in the ocean. Racing is another passion of
        mine, where I love the thrill of pushing a vehicle to its limits.
        Developing is incredibly satisfying to me, as I enjoy taking an idea and
        turning it into functional software or a website. Finally, building
        things, whether it's furniture or a robot, allows me to unleash my
        creativity and think outside the box.
      </p>
    </section>
    <section className="who-i-am">
      <h2>Who I Am</h2>
      <p>
        I am a problem solver at heart and always try to view a problem from all
        angles, including outside perspectives. My coding education at
        HyperionDev in Cape Town has equipped me with the skills I have today,
        and I am proficient in the MERN stack with a strong eagerness to learn
        more languages and explore video game development. AfricArt is my most
        visually pleasing project, showcasing my eye for design. Outside of
        coding, I have a love for dirt bikes and extreme enduro riding, and I am
        a Christian who places my trust in God. I prefer story-driven video
        games over multiplayer shooters and am focused on enjoying the present
        rather than worrying about the future.
      </p>
    </section>
    <style jsx>{`
      div {
        font-family: "Arial", sans-serif;
        color: #333;
        padding: 2rem;
        background-color: #f7f7f7;
        max-width: 1200px;
        margin: auto;
      }

      h1,
      h2 {
        text-align: center;
        color: #ff8c00;
        margin-bottom: 1rem;
        font-size: 2.5rem;
        transition: color 0.3s ease;
      }

      h1:hover,
      h2:hover {
        color: #ff6347;
      }

      section {
        margin: 2rem 0;
        padding: 1rem;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      section:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }

      .intro {
        text-align: center;
        margin-bottom: 3rem;
      }

      .intro-text {
        font-size: 1.5rem;
        color: #666;
        line-height: 1.6;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin: 1rem 0;
        text-align: justify;
      }

      @media (max-width: 768px) {
        h1,
        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }
      }
    `}</style>
  </div>
);
