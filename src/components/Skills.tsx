import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Database, LineChart, Code, Cloud, Cpu } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      icon: Brain,
      title: 'Machine Learning',
      color: 'from-blue-500 to-cyan-500',
      details: [
        { label: 'Algorithms', value: 'XGBoost, Random Forest, SVM, Neural Networks' },
        { label: 'Libraries', value: 'scikit-learn, TensorFlow, Keras, PyTorch' },
        { label: 'Experience', value: '1.5+ years of analytical experience' },
        { label: 'Best Result', value: '92% accuracy on ASL classification' },
      ]
    },
    {
      icon: Database,
      title: 'Data Analysis & Engineering',
      color: 'from-purple-500 to-pink-500',
      details: [
        { label: 'Languages', value: 'Python, SQL, R, DAX' },
        { label: 'Libraries', value: 'pandas, NumPy, SciPy, Polars' },
        { label: 'Databases', value: 'SQL Server, PostgreSQL, MySQL' },
        { label: 'ETL', value: 'Power Query, Data pipelines, Automation' },
      ]
    },
    {
      icon: LineChart,
      title: 'Data Visualization & BI',
      color: 'from-orange-500 to-red-500',
      details: [
        { label: 'Tools', value: 'Power BI, Tableau, Excel' },
        { label: 'Python Viz', value: 'Matplotlib, Seaborn, Plotly' },
        { label: 'Dashboards', value: 'Interactive reports, KPI tracking' },
        { label: 'Impact', value: '20% efficiency gain, £260k grant secured' },
      ]
    },
    {
      icon: Code,
      title: 'Programming & Development',
      color: 'from-green-500 to-emerald-500',
      details: [
        { label: 'Languages', value: 'Python, Node.js, .NET, SQL, R, JavaScript' },
        { label: 'Frameworks', value: 'Streamlit, Flask, FastAPI' },
        { label: 'Tools', value: 'Git/GitHub, VS Code, Jupyter' },
        { label: 'Best Practices', value: 'Version control, Code review, Testing' },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Platforms',
      color: 'from-indigo-500 to-purple-500',
      details: [
        { label: 'Azure', value: 'ML Studio, Bot Framework, Functions' },
        { label: 'Certified', value: 'Azure Data Scientist Associate, Azure Fundamentals' },
        { label: 'Deployment', value: 'Streamlit, Web apps, APIs' },
        { label: 'Automation', value: 'Power Automate, Workflows' },
      ]
    },
    {
      icon: Cpu,
      title: 'NLP & AI',
      color: 'from-pink-500 to-rose-500',
      details: [
        { label: 'NLP Tools', value: 'NLTK, spaCy' },
        { label: 'Azure AI', value: 'Bot Framework, Cognitive Services' },
        { label: 'Applications', value: 'Chatbots, Text analysis, Sentiment' },
        { label: 'Impact', value: '20% increase in customer interactions' },
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 md:py-40 bg-gradient-to-br from-background via-dominant-light/30 to-background relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%'
        }}
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            Comprehensive data science and software development capabilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>

              {/* Details List */}
              <div className="space-y-4">
                {skill.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="group/item">
                    <div className="flex items-center mb-1.5">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} mr-2.5`}></div>
                      <span className="font-bold text-secondary text-sm uppercase tracking-wide">{detail.label}</span>
                    </div>
                    <p className="text-secondary/70 text-sm leading-relaxed pl-4.5">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
