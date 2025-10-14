import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { GraduationCap, Briefcase, Award, Rocket, Calendar, MapPin, ArrowRight } from 'lucide-react'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  // Function to calculate duration from start date to now or end date
  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (years > 0 && remainingMonths > 0) {
      return `${years} yr ${remainingMonths} mo`
    } else if (years > 0) {
      return `${years} yr`
    } else {
      return `${remainingMonths} mo`
    }
  }

  const timeline = [
    {
      year: '2024-Present',
      startDate: '2024-04-01',
      endDate: undefined,
      duration: calculateDuration('2024-04-01'),
      title: 'Data Analyst',
      company: 'Bounce Back Project',
      location: 'London, United Kingdom',
      description: 'Designed Power BI dashboards reducing manual reporting by 20%. Contributed insights that helped secure £260k grant.',
      icon: Rocket,
      gradient: 'from-green-500 to-emerald-500',
      details: [
        'Designed and deployed interactive Power BI dashboards across 5 projects, reducing manual reporting by 20% and improving real-time visibility into 10+ organizational KPIs.',
        'Engineered automated ETL pipelines using Power Automate, Python, and SQL to integrate multi-source datasets, cutting manual data preparation time by 40% and improving KPI accuracy.',
        'Translated data driven insights into executive reports that influenced funding decisions and contributed to securing a £260k organizational grant.',
        'Collaborated with cross-functional teams to translate analytical findings into strategic recommendations, directly supporting business planning and stakeholder alignment.',
        'Delivered a centralized reporting framework adopted across all departments, improving the reliability and timeliness of business performance reviews.'
      ],
      skills: ['Power BI', 'Python', 'SQL', 'Power Automate', 'ETL', 'Data Analysis', 'Dashboard Design']
    },
    {
      year: '2022-23',
      startDate: '2022-09-01',
      endDate: '2023-09-01',
      duration: calculateDuration('2022-09-01', '2023-09-01'),
      title: 'MSc Data Science',
      company: 'University of Greenwich',
      location: 'London, United Kingdom',
      description: 'Awarded Distinction from University of Greenwich, London. Specialized in machine learning, NLP, and predictive analytics.',
      icon: Award,
      gradient: 'from-cyan-500 to-blue-500',
      details: [
        'Awarded a Distinction for MSc in Data Science',
        'Specialized in machine learning, natural language processing, and predictive analytics',
        'Completed enterprise project with Sainsbury\'s on customer choice modelling, achieving 78% F1 score',
        'Developed expertise in Python, R, TensorFlow, and advanced statistical methods',
        'Conducted research in deep learning and neural networks'
      ],
      skills: ['Machine Learning', 'NLP', 'Python', 'R', 'TensorFlow', 'Statistics', 'Deep Learning']
    },
    {
      year: '2021-22',
      startDate: '2021-07-01',
      endDate: '2022-07-01',
      duration: calculateDuration('2021-07-01', '2022-07-01'),
      title: 'Software Engineer',
      company: 'ClaySys Technologies',
      location: 'Goa, India',
      description: 'Implemented NLP-powered banking chatbots using Azure, increasing customer interactions by 20%. Automated HR workflows saving 5+ hours weekly.',
      icon: Briefcase,
      gradient: 'from-purple-500 to-pink-500',
      details: [
        'Implemented NLP-powered banking chatbots using Microsoft Azure and Bot Framework, increasing customer interactions by 20%.',
        'Optimized NLP-based utterance mapping, boosting chatbot accuracy and engagement by 15%.',
        'Automated HR approval workflows by developing a SQL-integrated leave-management bot, saving HR teams 5+ hours weekly.',
        'Collaborated in Agile product development using GitHub version control and CI/CD workflows for iterative deployment.',
        'Spearheaded the integration of conversational AI tools into production workflows, laying the foundation for scalable customer analytics pipelines.'
      ],
      skills: ['Azure', 'Bot Framework', 'NLP', 'SQL', 'Python', 'Agile', 'CI/CD', 'GitHub']
    },
    {
      year: '2017-21',
      startDate: '2017-08-01',
      endDate: '2021-06-01',
      duration: calculateDuration('2017-08-01', '2021-06-01'),
      title: 'BE Computer Engineering',
      company: 'Agnel Institute of Technology and Design',
      location: 'Goa, India',
      description: 'Graduated with Distinction (87%) from Agnel Institute of Technology and Design, Goa. Top 3 ranking in cohort of 100+ students.',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-indigo-500',
      details: [
        'Awarded a Distinction with 87% overall score',
        'Top 3 ranking in Computer Engineering cohort (out of 100+ students)',
        'Led development of Smart Hand Glove for hearing and speech impaired, achieving 92% accuracy with SVM classifier',
        'Published research in International Journal for Research in Applied Science and Engineering Technology (IJRASET)',
        'Led planning and execution of major university-wide tech-cultural festival with 600+ attendees'
      ],
      skills: ['Computer Engineering', 'Machine Learning', 'IoT', 'Python', 'Arduino', 'Project Management']
    },
  ]

  return (
    <section id="timeline" className="py-20 md:py-32 bg-gradient-to-br from-background via-dominant-light/20 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            My Professional Journey
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            A timeline of growth, learning, and innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-dominant to-primary transform -translate-x-1/2" />

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-20 lg:mb-32 ${
                  isEven ? 'lg:pr-[50%]' : 'lg:pl-[50%]'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -8, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
                  onClick={() => setSelectedExperience(selectedExperience === index ? null : index)}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    isEven ? 'lg:mr-16' : 'lg:ml-16'
                  }`}
                >
                  <div className={`grid gap-0 transition-all duration-500 ${
                    selectedExperience === index 
                      ? 'md:grid-cols-1' 
                      : 'md:grid-cols-5'
                  }`}>
                    {/* Gradient Background */}
                    <div className={`relative h-80 md:h-auto bg-gradient-to-br ${item.gradient} transition-all duration-500 ${
                      selectedExperience === index 
                        ? 'hidden' 
                        : `md:col-span-2 ${isEven ? 'md:order-1' : 'md:order-2'}`
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
                      
                      {/* Badges Container - Stacked vertically to avoid overlap */}
                      <div className="absolute top-6 left-6 space-y-3">
                        {/* Year Badge */}
                        <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg">
                          <span className="text-xl font-bold text-primary">{item.year}</span>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center space-x-2 shadow-lg">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm font-bold text-secondary">{item.duration}</span>
                        </div>
                      </div>
                      
                      {/* Click Hint - Positioned at bottom right */}
                      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg group-hover:scale-105 transition-transform">
                        <span className="text-xs font-bold text-primary tracking-wide">Click to expand</span>
                      </div>
                      
                      {/* Decorative Icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                        <item.icon className="w-32 h-32 text-white" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className={`p-10 flex flex-col justify-center transition-all duration-500 ${
                      selectedExperience === index 
                        ? 'md:col-span-1' 
                        : `md:col-span-3 ${isEven ? 'md:order-2' : 'md:order-1'}`
                    }`}>
                      <div className="flex items-center space-x-3 mb-6 lg:hidden">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold text-primary">{item.year}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary mb-4">
                        <MapPin className="w-5 h-5" />
                        <span className="text-base font-semibold">{item.company}</span>
                      </div>
                      <p className="text-secondary/70 leading-relaxed text-base mb-6">
                        {item.description}
                      </p>
                      
                      {/* Skills Preview */}
                      <div className="flex flex-wrap gap-2">
                        {(selectedExperience === index ? item.skills : item.skills.slice(0, 4)).map((skill) => (
                          <span
                            key={skill}
                            className="bg-gradient-to-br from-dominant-light to-dominant px-3 py-1.5 rounded-full text-secondary text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                        {selectedExperience !== index && item.skills.length > 4 && (
                          <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
                            +{item.skills.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {selectedExperience === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-8 pt-8 border-t border-secondary/10"
                          >
                            <h4 className="text-xl font-bold text-secondary mb-4 flex items-center">
                              <div className="w-1 h-6 bg-primary rounded-full mr-3" />
                              Key Responsibilities & Achievements
                            </h4>
                            <ul className="space-y-3">
                              {item.details.map((detail, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.08 }}
                                  className="flex items-start space-x-3 group"
                                >
                                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-lg mt-0.5 flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                  </div>
                                  <span className="text-secondary/80 leading-relaxed text-sm">{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-secondary/70 mb-8">
            Want to see how I apply these skills in real projects?
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

    </section>
  )
}

export default Timeline
