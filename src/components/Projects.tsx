import { ExternalLink, Github } from 'lucide-react';
import chatImg from "../assets/Chat.jpg";
import powerImg from "../assets/sales.jpg";
import figmaImg from "../assets/portfolio.jpg";
import yoloImg from "../assets/Yolo.jpg";
import AIImg from "../assets/Ai.jpg";


export default function Projects() {
  const projects = [
    {
      title: 'AI Voice Recognition',
      description: 'A modern AI-powered Voice Recognition Assistant built with React, TypeScript, and Vite, featuring speech recognition.',
      image:AIImg,
      tags: ['TypeScript', 'React.js', 'Vite', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
      githubUrl: 'https://github.com/VanithaSengottuvel/Ai-Voice-Command'
    },
    {
      title: 'Real Time Chat App',
      description: 'A Real-Time Chat Application enables users to send and receive messages instantly using technologies like MERN stack & Socket.IO.',
      image: chatImg,
      tags: ['React', 'Express', 'Tailwind CSS','Javascript','MongoDB'],
      githubUrl: 'https://github.com/VanithaSengottuvel/Chat-App'
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather dashboard with forecast and location-based recommendations.',
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'API Integration', 'CSS3','HTML5'],
      githubUrl: 'https://github.com/VanithaSengottuvel/Weather-App'
    },
    {
      title: 'YOLO Object Detection',
      description: 'YOLO (You Only Look Once) Object Detection is a real-time computer vision model that detects and classifies multiple objects in images or videos with high speed and accuracy.',
      image: yoloImg,
      tags: ['Python', 'YOLOv8', 'OpenCV', 'Deep Learning'],
      githubUrl: 'https://github.com/VanithaSengottuvel/Real-Time-Object-Detection-'
    },
    {
      title: 'Portfolio Using UI & UX',
      description: 'No-code portfolio using Figma interface and customizable templates.',
      image: figmaImg,
      tags: ['Figma','Wireframe','Prototyping','UI','UX'],
      githubUrl: 'https://github.com/VanithaSengottuvel/UI-UX-Portfolio-'
    },
    {
      title: 'Sales Management Analysis',
      description: 'A Adidas sales management analysis using PowerBI which developed to analyze sales performance, revenue, profit, and regional trends.',
      image: powerImg,
      tags: ['PowerBI','Excel','Quires','SQL'],
      liveUrl: 'https://demo-project-6.com',
      githubUrl: 'https://github.com/VanithaSengottuvel/Adidas-Sales-Analysis-Power-Bi-'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl border border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-purple-900/50 border border-purple-500/30 rounded-full text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
