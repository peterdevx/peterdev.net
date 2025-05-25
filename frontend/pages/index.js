import BackgroundParticles from "../components/BackgroundParticles";

export default function Home() {
  return (
    <main className="relative bg-[#0d1117] text-white flex flex-col items-center px-4">
      <BackgroundParticles />
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center max-w-2xl pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-green-400">Peter Gyamfi</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
          Software Engineer, Full Stack Developer, & Tech Enthusiast
        </h2>
        <a
          href="#projects"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition duration-300"
        >
          Get in Touch
        </a>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="bg-[#161b22]/80 backdrop-blur-md w-full text-white py-16 px-4 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6">About Me</h2>
        <img
          src="/profile.jpg"
          alt="Peter Gyamfi"
          className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mb-6"
        />
        <p className="max-w-2xl text-gray-300 text-md leading-relaxed">
          I’m a dedicated Software Engineer and Full Stack Developer passionate
          about building fast, accessible, and scalable web applications. I
          enjoy solving real-world problems through code and continuously
          learning new technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-[#0d1117]/80 backdrop-blur-md w-full py-16 px-4 text-white text-center"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {/* Project 1: Weather Forecast App */}
          <div className="bg-[#161b22] rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="/project1.png"
              alt="Weather Forecast App"
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Weather Forecast App</h3>
            <p className="text-gray-400 mb-3 text-sm">
              A responsive weather app showing real-time forecasts, historical
              data, and alerts.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                React
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                Node.js
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                Weather API
              </span>
            </div>
            <div className="flex justify-center gap-6 text-sm text-green-400">
              <a href="#" className="hover:underline">
                🌐 Live Demo
              </a>
              <a href="#" className="hover:underline">
                💻 Code
              </a>
            </div>
          </div>

          {/* Project 2: Sentiment Analysis Web App */}
          <div className="bg-[#161b22] rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="/projects/customer-sentiment-analysis-app.jpg"
              alt="Sentiment Analysis Web App"
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              Sentiment Analysis App
            </h3>
            <p className="text-gray-400 mb-3 text-sm">
              An NLP-powered sentiment analyzer with FastAPI, BiLSTM and React.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                Python
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                TensorFlow
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                FastAPI
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                React
              </span>
            </div>
            <div className="flex justify-center gap-6 text-sm text-green-400">
              <a href="#" className="hover:underline">
                🌐 Live Demo
              </a>
              <a href="#" className="hover:underline">
                💻 Code
              </a>
            </div>
          </div>

          {/* Project 3: ASCII Text-Based Game */}
          <div className="bg-[#161b22] rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="/ascii-game.png"
              alt="ASCII Game"
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              ASCII Text-Based Game
            </h3>
            <p className="text-gray-400 mb-3 text-sm">
              A terminal-based game with ASCII graphics and interactive
              storytelling.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                C++
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                OOP
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                Terminal UI
              </span>
            </div>
            <div className="flex justify-center gap-6 text-sm text-green-400">
              <a href="#" className="hover:underline">
                🌐 Live Demo
              </a>
              <a href="#" className="hover:underline">
                💻 Code
              </a>
            </div>
          </div>

          {/* Project 4: Portfolio Website */}
          <div className="bg-[#161b22] rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="/portfolio-preview.png"
              alt="Portfolio Website"
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-3 text-sm">
              Personal portfolio site with animations, dark mode, and responsive
              UI.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                Next.js
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                Tailwind CSS
              </span>
              <span className="bg-green-800 px-2 py-1 text-xs rounded">
                Framer Motion
              </span>
            </div>
            <div className="flex justify-center gap-6 text-sm text-green-400">
              <a href="https://peterdev.net" className="hover:underline">
                🌐 Live Demo
              </a>
              <a
                href="https://github.com/yourusername/peterdev.net"
                className="hover:underline"
              >
                💻 Code
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        className="bg-[#161b22] w-full py-16 px-4 text-white text-center"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-12">Skills</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "C++", "Javascript"].map((skill) => (
                <span
                  key={skill}
                  className="bg-green-800 text-sm px-3 py-1 rounded-md text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Frameworks & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "FastAPI",
                "Koa.js",
                "Spring Boot",
              ].map((tool) => (
                <span
                  key={tool}
                  className="bg-green-800 text-sm px-3 py-1 rounded-md text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "MongoDB",
                "Docker",
                "Git & GitHub",
                "SQL & MySQL",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-green-800 text-sm px-3 py-1 rounded-md text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#0d1117]/80 backdrop-blur-md w-full py-16 px-4 text-white text-center"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6">Contact Me</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          Got a question, proposal, or just want to say hi? Feel free to drop a
          message.
        </p>

        <form
          className="max-w-xl mx-auto space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Form submitted (connect to backend or service like EmailJS)"
            );
          }}
        >
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1 text-sm text-gray-400">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="px-4 py-2 rounded-md bg-[#161b22] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 text-sm text-gray-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="px-4 py-2 rounded-md bg-[#161b22] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-1 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              className="px-4 py-2 rounded-md bg-[#161b22] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-12 text-sm text-gray-400 space-y-2">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-green-400 hover:underline"
            >
              peter@peterdev.net
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/peter-g-a57117259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              https://www.linkedin.com/feed/
            </a>
          </p>
          <p>
            🐙 GitHub:{" "}
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              https://github.com/peterdevx
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
