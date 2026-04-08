export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Sales CRM for Real-World Teams
        </h2>
        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          A comprehensive CRM system designed to streamline sales processes for
          growing businesses. Currently used by active sales teams to manage
          leads, track opportunities, and close deals more effectively.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Key Features
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Lead Tracking & Management:</strong> Capture and
                  nurture leads from multiple sources
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Sales Pipeline Visualization:</strong> Monitor deal
                  progress with interactive dashboards
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Contact Database:</strong> Centralized customer
                  information with history
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Task Automation:</strong> Automated follow-ups and
                  reminders
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Reporting & Analytics:</strong> Real-time insights
                  into sales performance
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Business Impact
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 mb-4">
                This CRM has helped sales teams increase conversion rates by{" "}
                <strong className="text-blue-600">25%</strong>, reduce
                administrative time by{" "}
                <strong className="text-blue-600">40%</strong>, and provide
                actionable data for strategic decision-making.
              </p>
              <p className="text-gray-700">
                Built for real-world use, it handles daily operations for teams
                managing hundreds of leads.
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            React
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Redux
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Node.js
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Express
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            MongoDB
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            JWT
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://crm-demo-link.com"
            target="_blank"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 shadow-lg"
          >
            View Live Demo
          </a>
          <a
            href="https://github.com/dane-iverson/crm-repo"
            target="_blank"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
}
