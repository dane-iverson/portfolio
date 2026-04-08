export default function SecondaryProject() {
  return (
    <section id="secondary-project" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Vehicle Inventory & Customer Interest Platform
        </h2>
        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          A robust platform for auto dealerships to manage vehicle inventory while enabling customers to browse, save favorites, and express interest in vehicles.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span><strong>Admin Dashboard:</strong> Real-time inventory management and updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span><strong>User Authentication:</strong> Secure login for customers and admins</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span><strong>Favorites System:</strong> Customers can save and track interested vehicles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold">•</span>
                <span><strong>Analytics Tracking:</strong> Monitor user engagement and inventory performance</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Business Impact</h3>
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600 shadow-sm">
              <p className="text-gray-700 mb-4">
                Reduced manual inventory errors by <strong className="text-green-600">50%</strong> and increased customer engagement through personalized features, leading to higher conversion rates for dealership sales.
              </p>
              <p className="text-gray-700">
                Delivered on time and within budget, demonstrating strong project management and client collaboration skills.
              </p>
            </div>
          </div>
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
            href="https://github.com/dane-iverson/imperium-repo"
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
