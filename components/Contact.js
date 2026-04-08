export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ready to build practical business tools that drive real results? Let's
          discuss your project and how I can help your team succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:hyperiondane@gmail.com"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
          >
            Email Me
          </a>
          <a
            href="https://github.com/dane-iverson"
            target="_blank"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://wa.me/27733801962"
            target="_blank"
            className="border-2 border-green-300 text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-200"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
