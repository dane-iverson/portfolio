export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            I am a full-stack developer focused on building reliable,
            maintainable web applications with clear business value. My current
            focus is shipping CRM and workflow tools using React, Node.js,
            Express, and MongoDB.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            My sales and operations background helps me translate requirements
            into practical product decisions, deliver under real deadlines, and
            build tools teams can actually adopt in day-to-day work.
          </p>
        </div>
      </div>
    </section>
  );
}
