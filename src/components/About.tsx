import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate Full Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I work with technologies such as React, JavaScript, Python, Java, SQL, Tailwind CSS, and the MERN Stack.web applications. I enjoy building scalable solutions using technologies such as React, JavaScript, Node, NoSQL, Express, and Tailwind CSS. 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
            I also have knowledge of UI/UX design using Figma and basic Power BI for creating interactive dashboards. I enjoy writing clean, efficient code, solving real-world problems, and continuously learning new technologies to build impactful digital solutions.
            </p>
        
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold text-purple-400 mb-2">1+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-400">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
