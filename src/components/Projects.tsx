import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: 'Fantasy Premier League AI Assistant',
      description: 'Intelligent Streamlit application leveraging machine learning to provide optimal team selection recommendations for FPL players.',
      gradient: 'from-green-500 to-emerald-500',
      tags: ['Python', 'Streamlit', 'ML'],
      link: '/projects/fantasy-premier-league',
      image: 'assets/projects/Fantasy-Premier-League.png',
    },
    {
      title: 'Sainsbury\'s Customer Choice Modelling',
      description: 'Developed predictive models (Decision Trees, XGBoost, Neural Networks) on real-world retail data to forecast customer preferences, achieving a weighted F1 score of 78%.',
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Machine Learning', 'XGBoost', 'Python'],
      link: '/projects/sainsburys',
      image: '/assets/projects/sainsburys-retail-analytics.jpg',
    },
    {
      title: 'Smart Hand Glove for ASL Translation',
      description: 'Led a 5-member team to build an IoT-enabled glove translating ASL gestures to real-time speech with 92% accuracy using SVM classifier.',
      gradient: 'from-purple-500 to-pink-500',
      tags: ['IoT', 'SVM', 'Arduino'],
      link: '/projects/smart-hand-glove',
      image: '/assets/projects/Smart-hand-Glove.png',
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-24 md:py-40 bg-gradient-to-br from-white via-background to-white relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge technology
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-6xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary to-secondary-light">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image or Gradient Background */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`relative h-[400px] lg:h-[600px] ${projects[currentIndex].image ? '' : `bg-gradient-to-br ${projects[currentIndex].gradient}`}`}
              >
                {projects[currentIndex].image ? (
                  <>
                    <img 
                      src={projects[currentIndex].image!} 
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
                )}
              </motion.div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-primary-light text-sm font-semibold mb-4">
                    PROJECT {String(currentIndex + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Link to={projects[currentIndex].link}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`relative h-64 overflow-hidden ${project.image ? '' : `bg-gradient-to-br ${project.gradient}`}`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link to={project.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-white text-secondary px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-dominant-light text-secondary text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-secondary/70 mb-8">
            Impressed? Let's discuss how I can bring value to your team.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
