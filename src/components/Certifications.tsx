import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, CheckCircle2, ExternalLink } from 'lucide-react'
import { asset } from '../config'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: 'Microsoft Certified: Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: 'August 17, 2025',
      credentialId: '12634FFF3D62C947',
      image: 'assets/certifications/azure-data-scientist.png',
      verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/JoshuaDsouza-2073/12634FFF3D62C947?sharingId=40407E50BB6D2429',
      skills: ['Azure Machine Learning', 'Python', 'Data Science', 'MLOps'],
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'May 7, 2025',
      credentialId: 'A65DC1E9580AAF6E',
      image: 'assets/certifications/Azure-Fundamentals.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/joshuadsouza-2073/credentials/a65dc1e9580aaf6e?ref=https%3A%2F%2Fwww.linkedin.com%2F',
      skills: ['Azure AI', 'Cognitive Services', 'NLP', 'Computer Vision'],
      gradient: 'from-purple-600 to-blue-500'
    },
  ]

  return (
    <section id="certifications" className="py-24 md:py-40 bg-gradient-to-br from-white via-dominant-light/20 to-white relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Award className="w-5 h-5" />
            <span>Professional Certifications</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            Microsoft <span className="text-primary">Certified</span>
          </h2>
          <p className="text-xl text-secondary/70 max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications demonstrating expertise in Azure, AI, and Data Analytics
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)" }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 w-full"
            >
              {/* Certificate Image/Badge */}
              <div className={`relative h-48 md:h-64 bg-gradient-to-br ${cert.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Certificate Image */}
                <img 
                  src={asset(cert.image)} 
                  alt={cert.title}
                  className="absolute inset-0 w-full h-full object-contain p-8 z-10"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'block'
                  }}
                />
                {/* Fallback Icon (hidden by default) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" style={{ display: 'none' }}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 flex items-center justify-center h-full"
                  >
                    <Award className="w-32 h-32 text-white opacity-90" />
                  </motion.div>
                </div>
                
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-full flex items-center space-x-2 shadow-lg z-20">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-bold text-secondary">Verified</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-secondary mb-2 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-primary mb-1">{cert.issuer}</p>
                  <p className="text-xs text-secondary/60">{cert.date}</p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gradient-to-br from-dominant-light to-dominant px-2.5 md:px-3 py-1 rounded-full text-xs font-semibold text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential ID */}
                <div className="mb-6 pb-6 border-b border-secondary/10">
                  <p className="text-xs text-secondary/50 mb-1">Credential ID</p>
                  <p className="text-sm font-mono text-secondary/80">{cert.credentialId}</p>
                </div>

                {/* Verify Button */}
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-secondary/60 text-sm">
            All certifications are verified and can be validated through Microsoft's official credential verification system
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
