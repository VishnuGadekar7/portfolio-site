import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaDownload, FaHome, FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import Head from 'next/head'

export default function EResume() {
  return (
    <>
      <Head>
        <title>Resume - Professional CV</title>
        <meta name="description" content="View and download my professional resume" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Professional Resume
              </h1>
              <p className="text-gray-400 text-sm">View or download my complete CV</p>
            </div>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                <FaDownload />
                <span>Download PDF</span>
              </motion.a>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white font-semibold rounded-full hover:border-cyan-500/50 transition-all"
                >
                  <FaHome />
                  <span>Home</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gray-800/50 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">resume.pdf</span>
                </div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  Open in new tab →
                </a>
              </div>
              <div className="bg-gray-800 p-4" style={{height: '700px'}}>
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full rounded-lg"
                  title="Resume PDF"
                />
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400 text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Contact</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:you@example.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">vishnugadekar1132@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <FaPhone className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">+91 8806720107</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-gray-400">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span className="text-sm">Pune India</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <FaLinkedin className="text-blue-400 text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Social</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <FaLinkedin className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <FaGithub className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">GitHub Profile</span>
                </a>
              </div>
            </motion.div>

            {/* Skills Highlight */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <FaCode className="text-green-400 text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Top Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python', 'MongoDB'].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-cyan-400 font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-cyan-400" />
                    <span className="text-sm text-gray-400">Experience</span>
                  </div>
                  <span className="text-white font-semibold">1+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaCode className="text-cyan-400" />
                    <span className="text-sm text-gray-400">Projects</span>
                  </div>
                  <span className="text-white font-semibold">15+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-cyan-400" />
                    <span className="text-sm text-gray-400">Education</span>
                  </div>
                  <span className="text-white font-semibold">Bachelor's</span>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-white mb-2">Let's Work Together</h3>
              <p className="text-white/80 text-sm mb-4">Interested in collaboration?</p>
              <Link href="/portfolio#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </>
  )
}
