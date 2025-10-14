import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#timeline' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-[#0077B5]' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-[#333]' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:bg-primary' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            {/* Name & Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">DS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Your Name</h3>
                  <p className="text-white/60 text-sm">Data Scientist</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Transforming complex data into actionable insights through machine learning and analytics.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-all inline-flex items-center group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Connect</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-white/70 hover:text-white transition-all group"
                  >
                    <div className={`bg-white/10 ${social.color} p-3 rounded-xl transition-all group-hover:shadow-lg`}>
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/10 pt-8 text-center"
          >
            <p className="text-white/50 text-sm">
              © {currentYear} Your Name. Crafted with passion and precision.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-primary to-primary-dark text-white p-4 rounded-2xl shadow-2xl shadow-primary/30 transition-all z-40 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  )
}

export default Footer
