import Header from "./Header"

export default () => (
    <div>
        <Header />
        <h1>About me</h1>
        <h3><b>Educational History:</b></h3>
        <p>I am a dedicated developer who values teamwork and discipline.
            My education at Grey High School, an all-boys school known for its emphasis on brotherhood and strict discipline,
            has greatly contributed to the person I am today.
            The school's focus on teamwork and camaraderie has instilled in me a strong sense of collaboration and the ability to work well with others.
            The strict code of conduct also taught me the importance of taking responsibility for my actions and to always strive for excellence.
            My strong work ethic and determination to succeed has been further developed during my time at Grey high school, which is evident in the high-quality work I produce.
        </p>
        <h3><b>Passions:</b></h3>
        <p>I have always been passionate about a few things in my life, and they are Surfing, Racing, developing and building things.
            Surfing is my way of escaping the daily grind and finding peace in the ocean. I love the rush of catching a wave and the feeling of being one with nature.
            Racing is another passion of mine. I love the thrill of pushing a vehicle to its limits and the feeling of speed.
            I have been competing in races for quite some time now and have developed a keen understanding of what it takes to win.
            Developing is something that I have been doing for a while now.
            I find it incredibly satisfying to take an idea and turn it into a functioning piece of software or a website.
            And finally, building things. I have always been fascinated with creating things, whether it's building a piece of furniture or a robot.
            I find it very satisfying to take raw materials and turn them into something that can be used.
        </p>
        <h3><b>Who I am:</b></h3>
        <p>I am a highly motivated individual who is driven by a passion for creating and problem-solving.
            My experience in an all-boys school known for its emphasis on brotherhood and strict discipline has instilled in me a strong sense of teamwork and the ability to work well with others.
            I possess a keen understanding of the importance of taking responsibility for my actions and always striving for excellence.
            This mindset is evident in the high-quality work I produce as a developer, where I am able to take an idea and turn it into a functional software or website,
            I find this process incredibly satisfying.

            Additionally, I am also passionate about outdoor activities such as surfing and racing.
            These activities have taught me to be in the present moment and to navigate through the unknown.
            The rush of catching a wave and the feeling of speed while racing have taught me to be adaptable and to push my limits.
            Lastly, I am also passionate about building things. I find great satisfaction in taking raw materials and transforming them into something functional,
            this process allows me to unleash my creativity and to think outside the box.

            Overall, I am a well-rounded individual who is driven by a passion for problem-solving and creating.
            My experiences and passions have helped me to develop a unique perspective and approach to work and life, making me a valuable asset to any team.
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
)