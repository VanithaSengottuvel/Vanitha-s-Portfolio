import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your Formspree endpoint or backend API
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                    vanithascs2004@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors">
                    +91 8056707244
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-400">
                    255/9 Ramanaicken palayam<br />
                    salem,Tamil Nadu<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/VanithaSengottuvel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 rounded-lg flex items-center justify-center hover:border-purple-500/50 hover:scale-110 transition-all"
                >
                  <Github className="text-purple-400" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vanitha-s-2b89a12a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 rounded-lg flex items-center justify-center hover:border-purple-500/50 hover:scale-110 transition-all"
                >
                  <Linkedin className="text-purple-400" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Connect With Me Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-red-400 bg-clip-text">
            Connect With Me
          </h3>
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              {/* Circle Container */}
              <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center">
                {/* Social Icons positioned around the circle */}
                <a
                  href="https://www.linkedin.com/in/vanitha-s-2b89a12a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ top: '20px', left: '50%', transform: 'translateX(-50%)' }}
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="https://www.instagram.com/_winter_bearrx_.__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ top: '50%', right: '20px', transform: 'translateY(-50%)' }}
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="https://github.com/VanithaSengottuvel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href="https://yourportfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ top: '50%', left: '20px', transform: 'translateY(-50%)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
