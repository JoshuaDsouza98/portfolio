import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-24 md:py-40 bg-gradient-to-br from-white via-dominant-light/10 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              variants={itemVariants}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              About Me
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight"
            >
              Turning Complex Data Into
              <span className="text-primary"> Business Value</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 mb-10 relative">
              {/* Profile Photo - Circular with text wrapping */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="float-none md:float-right mx-auto md:mx-0 md:ml-8 mb-6 w-48 h-48 md:w-64 md:h-64"
              >
                <img 
                  src="/assets/joshua-profile.jpg" 
                  alt="Joshua D'Souza - Data Scientist"
                  className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>

              <p className="text-secondary/80 text-xl leading-relaxed">
                I'm Joshua, a Data Scientist who loves turning messy data into 'aha!' moments. 
                Whether it's helping nonprofits secure <span className="font-bold text-primary">£260k grants</span> or building 
                AI assistants for <span className="font-bold text-primary">10,000+ fantasy football fans</span>, I'm passionate about making data work for real people.
              </p>
              
              <p className="text-secondary/80 text-lg leading-relaxed">
                My journey started with a <span className="font-bold text-primary">Computer Engineering degree</span> where I ranked 
                top 3 in my class, but it was building an IoT glove that translated sign language with <span className="font-bold text-primary">92% accuracy</span> that 
                made me fall in love with machine learning. That project got published, and I was hooked.
              </p>

              <p className="text-secondary/80 text-lg leading-relaxed">
                Fast forward to today: I hold an <span className="font-bold text-primary">MSc in Data Science (Distinction)</span> from 
                the University of Greenwich and I'm <span className="font-bold text-primary">Microsoft Certified in Azure Data Science</span>. 
                Currently at <span className="font-bold text-primary">Bounce Back Project</span>, I spend my days building Power BI dashboards 
                that cut reporting time by 20% and automating workflows that save teams hours of manual work.
              </p>

              <p className="text-secondary/80 text-lg leading-relaxed">
                What drives me? Seeing data solve real problems. Whether it's helping a nonprofit secure funding, 
                predicting customer behavior for retail giants like Sainsbury's, or just helping FPL managers pick better teams-
                if it makes someone's life easier, I'm in. My evenings? Usually tinkering with ML models, exploring new Azure features, 
                or playing footy with mates.
              </p>
              
             

              {/* What I'm About */}
              <div className="bg-gradient-to-br from-dominant-light to-dominant p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <span className="text-primary mr-2">💡</span> What I Bring to the Table
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1 text-xl">✓</div>
                    <div>
                      <div className="font-semibold text-secondary text-base">Technical Depth</div>
                      <div className="text-sm text-secondary/70">Python, SQL, ML, Power BI, Azure-I've got the full stack</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1 text-xl">✓</div>
                    <div>
                      <div className="font-semibold text-secondary text-base">Business Impact</div>
                      <div className="text-sm text-secondary/70">Not just models-results that move the needle</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1 text-xl">✓</div>
                    <div>
                      <div className="font-semibold text-secondary text-base">Clear Communication</div>
                      <div className="text-sm text-secondary/70">I translate tech jargon into business language</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1 text-xl">✓</div>
                    <div>
                      <div className="font-semibold text-secondary text-base">Continuous Learner</div>
                      <div className="text-sm text-secondary/70">Always exploring new tools and techniques</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-secondary/70 text-base text-center pt-4">
                <span className="font-semibold text-secondary">Want to know more?</span> Scroll down to explore my experience, projects, and certifications ↓
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
