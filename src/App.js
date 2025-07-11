import './App.css';

function App() {
  return (
    <div className="font-sans min-h-screen text-gray-900">
      <header className="bg-gradient-to-br from-blue-50 via-white to-gray-100 py-12 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <img src="/logo.svg" alt="Hussle Solutions Logo" className="mx-auto mb-4 w-12 h-12" />
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Seamless Automation for Veterinary Clinics</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Automate tasks and streamline workflows for your clinic—all within your existing practice management system.
          </p>
        </div>
        <div className="mt-10">
          <img src="/hero-image.png" alt="Clinic automation" className="rounded-xl shadow-lg mx-auto max-w-3xl" />
        </div>
      </header>

      <main className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <section className="bg-gray-50 p-8 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">What We Do</h2>
            <p className="text-gray-700">
              We integrate automation tools to increase efficiency, reduce manual work, and improve patient care.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">How It Works</h2>
            <ol className="text-left space-y-3 list-decimal list-inside text-gray-700">
              <li><strong>Assessment:</strong> We evaluate your clinic’s needs and current system</li>
              <li><strong>Integration:</strong> We set up and configure automation for key processes</li>
              <li><strong>Optimization:</strong> We provide ongoing support and adjustments</li>
            </ol>
          </section>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://calendly.com/taranjit-a/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Book Your Free Demo
          </a>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Hussle Solutions. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

