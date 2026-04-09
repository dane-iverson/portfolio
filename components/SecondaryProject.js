export default function SecondaryProject() {
  return (
    <section id="secondary-project" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Imperium Auto Group Website
        </h2>
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
            Status: Frontend Delivered - Backend Scaffolded - Feature Rebuild In
            Progress
          </span>
        </div>
        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          A production-oriented marketing and customer contact website built for
          an automotive spares business. The delivered scope focused on brand,
          services, branch information, and lead generation.
        </p>
        <div className="mb-12">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <img
              src="/images/Imperium.png"
              alt="Imperium vehicle platform landing page"
              className="aspect-video w-full rounded-lg border border-gray-200 object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Delivered Scope
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span>
                  <strong>React SPA with structured routes:</strong> Home,
                  Services, Shop placeholder, and Contact pages via React Router
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Business-ready UX:</strong> Hero sections,
                  testimonials, service cards, branch details, and clear contact
                  pathways
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Responsive shared layout:</strong> Mobile/desktop
                  navigation, footer service summary, trading hours, and branch
                  addresses
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Production foundations:</strong> GA4 page tracking,
                  optimized imagery, Tailwind styling, Framer Motion, and icon
                  systems (Font Awesome/React Icons)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Backend scaffold prepared:</strong> Express + Mongoose
                  setup, CORS/JSON middleware, health route, and
                  environment-based Mongo connection
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Project Context and Next Step
            </h3>
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600 shadow-sm">
              <p className="text-gray-700 mb-4">
                The client contract ended for budget reasons before the full
                feature roadmap moved into production.
              </p>
              <p className="text-gray-700">
                I am now rebuilding and extending the planned features as a
                standalone product direction, including ecommerce and account
                workflows backed by API-driven data.
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Tech Stack Used
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            React
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            React Router
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            Tailwind CSS
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            Framer Motion
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            Font Awesome
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            Node.js
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            Express
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            Mongoose
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            MongoDB
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://imperium-auto-group-site.vercel.app/"
            target="_blank"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
          >
            View Live Site
          </a>
          <a
            href="mailto:hyperiondane@gmail.com?subject=Imperium%20Repo%20Access%20Request"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Private Repo (Available on Request)
          </a>
        </div>
      </div>
    </section>
  );
}
