import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://demo-project-1.com',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://demo-project-2.com',
      githubUrl: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with 7-day forecast, maps, and location-based recommendations.',
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'API Integration', 'CSS3'],
      liveUrl: 'https://demo-project-3.com',
      githubUrl: 'https://github.com/yourusername/project3'
    },
    {
      title: 'Social Media Clone',
      description: 'Full-stack social media application with posts, comments, likes, and user profiles.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Express', 'PostgreSQL'],
      liveUrl: 'https://demo-project-4.com',
      githubUrl: 'https://github.com/yourusername/project4'
    },
    {
      title: 'Portfolio Builder',
      description: 'No-code portfolio builder with drag-and-drop interface and customizable templates.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://demo-project-5.com',
      githubUrl: 'https://github.com/yourusername/project5'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness tracking app with workout plans, progress charts, and goal setting.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Chart.js', 'Python'],
      liveUrl: 'https://demo-project-6.com',
      githubUrl: 'https://github.com/yourusername/project6'
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
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
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
