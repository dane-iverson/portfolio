export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Frontend</h3>
            <div className="space-y-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium inline-block">React</div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium inline-block">Next.js</div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium inline-block">Tailwind CSS</div>
            </div>
          </div>
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Backend</h3>
            <div className="space-y-4">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium inline-block">Node.js</div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium inline-block">Express</div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium inline-block">MongoDB</div>
            </div>
          </div>
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Other</h3>
            <div className="space-y-4">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium inline-block">REST APIs</div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium inline-block">JWT Auth</div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium inline-block">Git</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
