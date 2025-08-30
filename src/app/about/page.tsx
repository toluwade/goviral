export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Us
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We are a team of passionate developers dedicated to creating modern, 
              efficient, and user-friendly web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our mission is to leverage cutting-edge technologies to deliver 
              exceptional digital experiences that help businesses grow and thrive 
              in the digital age.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Innovation and creativity in every project</li>
              <li>Commitment to quality and excellence</li>
              <li>Transparent and honest communication</li>
              <li>Continuous learning and improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}