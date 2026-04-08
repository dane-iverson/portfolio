export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            I spent years in sales and operations before switching to
            development full-time. That background changes how I build. I think
            about who's actually using the tool and what they need it to do, not
            just what looks good on screen.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            The projects I take on tend to have real users with real deadlines.
            I keep things simple, maintainable, and built to last.
          </p>
        </div>
      </div>
    </section>
  );
}
