export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks",
      icon: "🌐",
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      icon: "☁️",
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL API design and implementation",
      icon: "🔌",
    },
    {
      title: "Consulting",
      description: "Technical consulting and architecture planning",
      icon: "💼",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
            We offer comprehensive solutions for your digital needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}