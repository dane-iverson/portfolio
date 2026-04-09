export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16"
    >
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
          Full-Stack Developer Building Real-World Business Tools
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
          Open to remote full-stack developer roles globally. I build practical
          web applications with React and Node.js that solve real workflow
          problems.
        </p>
        <p className="text-lg text-gray-600 mb-10 font-medium">
          Current role: Fluid Sales Representative at Stewarts and Lloyds.
          Available globally for remote developer roles with a standard two-week
          notice period.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#featured-project"
            className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
