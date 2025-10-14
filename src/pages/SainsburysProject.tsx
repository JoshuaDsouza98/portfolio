import { motion } from 'framer-motion'
import { ArrowLeft,BarChart3, Brain, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const SainsburysProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-dominant-light/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Portfolio</span>
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Enterprise Machine Learning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Sainsbury's Customer <span className="text-primary">Choice Modelling</span>
            </h1>
            <p className="text-xl text-secondary/70 mb-8 leading-relaxed">
              Enterprise ML project analyzing 100,000+ transaction records to predict customer purchasing 
              behavior and optimize retail merchandising strategies.
            </p>

            {/* Problem → Solution → Impact */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span> Problem
                </h3>
                <p className="text-sm text-secondary/70">
                  Sainsbury's needed to predict customer product choices to optimize shelf placement and inventory
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">💡</span> Solution
                </h3>
                <p className="text-sm text-secondary/70">
                  Compared 5 ML algorithms (Decision Trees, Random Forest, XGBoost, Neural Networks, Ensemble) on 100k+ records
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-green-500 mr-2">📈</span> Impact
                </h3>
                <p className="text-sm text-secondary/70">
                  78% F1 score with XGBoost, 23% improvement over baseline, insights used for merchandising
                </p>
              </div>
            </div>

           
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {['Python', 'XGBoost', 'TensorFlow', 'scikit-learn', 'Pandas', 'Power BI', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-br from-dominant-light to-dominant px-4 py-2 rounded-full text-secondary text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image/Demo */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/assets/projects/sainsburys-retail-analytics.jpg" 
              alt="Sainsbury's Retail Analytics - Shopping cart with growth charts and data visualization"
              className="w-full h-auto object-cover"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-blue-500', 'to-cyan-500', 'h-96', 'flex', 'items-center', 'justify-center');
                e.currentTarget.parentElement!.innerHTML = '<div class="text-white text-center"><svg class="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><p class="text-xl font-semibold">Retail Analytics Dashboard</p></div>';
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Project Overview</h2>
              <div className="space-y-4 text-secondary/80 leading-relaxed">
                <p>
                  This enterprise project involved analyzing real-world Sainsbury's retail data to build 
                  predictive models that forecast customer purchasing behavior and product preferences.
                </p>
                <p>
                  Working with large-scale transactional data, the project aimed to identify patterns in 
                  customer choice behavior and provide actionable insights for merchandising teams to optimize 
                  product placement, pricing strategies, and inventory management.
                </p>
                <p>
                  The final model achieved a weighted F1 score of 78%, demonstrating strong predictive 
                  capability for real-world business applications.
                </p>
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Key Achievements</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Brain,
                    title: '78% F1 Score',
                    desc: 'Achieved strong predictive accuracy on real retail data'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Business Insights',
                    desc: 'Generated actionable recommendations for merchandising strategies'
                  },
                  {
                    icon: BarChart3,
                    title: 'Power BI Dashboard',
                    desc: 'Created interactive visualizations for stakeholder engagement'
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-md">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">{feature.title}</h3>
                      <p className="text-sm text-secondary/70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technical Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">Technical Implementation</h2>
            <div className="space-y-6 text-secondary/80 leading-relaxed">
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">Exploratory Data Analysis</h3>
                <p>
                  Conducted comprehensive EDA on millions of transaction records, identifying key patterns 
                  in customer behavior, seasonal trends, and product correlations. Used Python (Pandas, NumPy) 
                  for data manipulation and visualization libraries for insight generation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">Feature Engineering</h3>
                <p>
                  Created sophisticated features including customer purchase history, product affinity scores, 
                  temporal patterns, promotional impact metrics, and demographic indicators. Applied dimensionality 
                  reduction techniques to optimize model performance.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">Model Development & Evaluation</h3>
                <p>
                  Implemented and compared multiple algorithms: Decision Trees for interpretability, XGBoost 
                  for performance, and Neural Networks for complex pattern recognition. Used cross-validation 
                  and hyperparameter tuning to optimize results. Final ensemble model achieved 78% weighted F1 score.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">Business Intelligence</h3>
                <p>
                  Developed Power BI dashboards to present findings to stakeholders. Translated technical 
                  results into business recommendations for product placement, promotional strategies, and 
                  inventory optimization.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Results & Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Model Performance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: '78%', label: 'Weighted F1 Score' },
                { value: '2M+', label: 'Records Analyzed' },
                { value: '15+', label: 'Features Engineered' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-center text-white shadow-xl"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SainsburysProject
