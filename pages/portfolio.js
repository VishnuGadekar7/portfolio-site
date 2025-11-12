import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaCoffee, FaCalendar, FaClock, FaArrowRight, FaBookOpen } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import ContactForm from "../components/ContactForm";
import { projects } from "../data/projects";
import { blogs } from "../data/blogs";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ParallaxProvider>
      <div className="bg-black text-white font-sans">
        {/* Navbar */}
        <nav className="fixed w-full bg-black/80 backdrop-blur-lg z-50 flex justify-center gap-8 py-4 border-b border-gray-800">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              {sec.label}
            </button>
          ))}
        </nav>

        {/* Hero Section */}
        <section
          id="about"
          className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
        >
          <Parallax speed={-20}>
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="relative w-40 h-40 mx-auto">
                {/* Gradient Border Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-spin-slow"></div>
                {/* Image Container */}
                <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-black shadow-2xl">
                  <img
                    src="/profile.JPG"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-6xl font-extrabold text-center bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent"
            >
              Hey, I'm Vishnu 👋
            </motion.h1>
          </Parallax>

          <Parallax speed={10}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl text-gray-400 mt-4 text-center max-w-2xl"
            >
              Dedicated Software Developer Currently Studying and Building Crazy stuff. Self motivated undergrad with passion for Full Stack and Contributing towards Society. And also I do Math.
            </motion.p>
          </Parallax>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-8 bg-gradient-to-b from-black to-gray-900">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Skills & Tools
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-10">
            {[FaReact, FaNodeJs, FaPython, SiMongodb, SiFirebase, SiTailwindcss].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
              >
                <Icon size={60} className="text-cyan-400" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-8 bg-black">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-8 bg-gradient-to-b from-gray-900 to-black">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Experience & Hackathons
          </motion.h2>

          <div className="max-w-3xl mx-auto border-l-4 border-cyan-400 pl-8 space-y-12">
            {[
             { year: "2025", title: "RECKON 6.0 Finalist", desc: "Built AspireHub and developed a full website within 24 hours, securing Top 3 among 1000+ teams across India." },
             { year: "2025", title: "CYBERKAVACH 2.0 - 4th Place", desc: "Presented BlueCarbon, an MRV system for carbon tracking, to an expert panel in Pune." },
             { year: "2025", title: "SUPERHACK by AWS - Advanced Stage", desc: "Presented idea and prototype via PPT; received $100 AWS credits for advanced development." },
             { year: "2025", title: "TVS E.P.I.C 7", desc: "Successfully completed Analytics Challenge" },
             { year: "2025", title: "Cognitive Intelligence Test 8.0 NIT Durgapur", desc: "Successfully completed Cognitive Intelligence Test." },
             { year: "2025", title: "J.P.Morgan Software Engg. Simulations", desc: "Successfully completed Software Engineering Simulations on kafka , docker, RESTapi and H2." },
             { year: "2025", title: "SIH Internal", desc: "Cleared Internal Round of Smart India Hackathon 2025 and preparing for the National Round." },
             { year: "2025", title: "Hackrx Bangalore", desc: "Cleared Internal Rounds of Hackrx Bangalore 2025 and presented Adavanced Prototype Related To LLM's with over 80% accuracy." },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.desc}</p>
                <span className="text-cyan-400 text-sm">{exp.year}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <Parallax speed={-10}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Latest Blog Posts
                </h2>
                <p className="text-gray-400 text-lg">Thoughts, tutorials, and insights on web development</p>
              </motion.div>
            </Parallax>

            <Parallax speed={5}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, i) => (
                  <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                    <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-xs text-cyan-300 font-medium">
                      {blog.category}
                    </span>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FaCalendar />
                        <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <a
                      href="/blog"
                      className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:gap-3 transition-all"
                    >
                      <FaBookOpen />
                      <span>Read Article</span>
                      <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                  </motion.article>
                ))}
              </div>
            </Parallax>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                <span>View All Articles</span>
                <FaArrowRight />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <Parallax speed={-10}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-gray-400 text-lg">Have a project in mind? Let's work together!</p>
              </motion.div>
            </Parallax>

            <Parallax speed={8}>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <ContactForm />

                {/* Contact Info */}
                <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                  <p className="text-gray-400 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {[
                      { Icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
                      { Icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
                      { Icon: FaCoffee, href: "#", label: "Buy Me a Coffee" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                        aria-label={social.label}
                      >
                        <social.Icon className="text-xl" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Quick Info</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">📍</span>
                      <div>
                        <p className="text-gray-400">Location</p>
                        <p className="text-white">Pune, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">💼</span>
                      <div>
                        <p className="text-gray-400">Availability</p>
                        <p className="text-white">Open to opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">⚡</span>
                      <div>
                        <p className="text-gray-400">Response Time</p>
                        <p className="text-white">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
              </div>
            </Parallax>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </ParallaxProvider>
  );
}
