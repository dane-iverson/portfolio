import { useState } from "react";

export default function FeaturedProject() {
  const [showImageFallback, setShowImageFallback] = useState(false);

  return (
    <section id="featured-project" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Sales CRM for Real-World Teams
        </h2>
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Status: In Active Development - Client Rollout Planned (AlgoaFM)
          </span>
        </div>
        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          A full-stack CRM I am building for my own sales work. It manages
          leads, tracks pipeline movement, and keeps daily follow-ups organized
          in one place.
        </p>
        <div className="mb-12">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
            {!showImageFallback ? (
              <img
                src="/images/CRM.png"
                alt="CRM dashboard landing page"
                className="aspect-video w-full rounded-lg border border-gray-200 object-cover"
                onError={() => setShowImageFallback(true)}
              />
            ) : (
              <div className="aspect-video w-full rounded-lg border-2 border-dashed border-gray-300 bg-white flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-base font-semibold text-gray-700">
                    CRM Screenshot Placeholder
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Add /public/images/CRM.png to show your CRM landing page
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Implemented Features
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Authentication and Access:</strong> JWT login,
                  protected routes, and role-based access for sales reps and
                  admins
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Lead Management:</strong> Full CRUD workflow with
                  status pipeline (New, Contacted, Quoted, Closed)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Search and Filtering:</strong> Search by name or
                  phone, status filters, and admin-level lead assignment
                  filtering
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Follow-up Tools:</strong> One-click WhatsApp links,
                  per-lead reminders, and scheduled email reminder support
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>
                  <strong>Ops and Reliability:</strong> Helmet security headers,
                  rate limiting, health checks, and deployment-ready environment
                  configuration
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
                This project is currently in active development and is already
                helping me structure my own sales process during the work day.
              </p>
              <p className="text-gray-700">
                A client deployment is lined up with <strong>AlgoaFM</strong>,
                where I will tailor features to their workflow and continue
                shipping improvements based on real usage.
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
            React Router
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Axios
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Bootstrap
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
            Mongoose
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            JWT
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Nodemailer
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Node Schedule
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://crm-coral-two.vercel.app"
            target="_blank"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 shadow-lg"
          >
            View Live Demo
          </a>
          <a
            href="https://github.com/dane-iverson/crm"
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
