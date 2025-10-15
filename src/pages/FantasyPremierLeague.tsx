import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Target, Zap, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const FantasyPremierLeague = () => {
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
              AI-Powered Application
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Fantasy Premier League <span className="text-primary">AI Assistant</span>
            </h1>
            <p className="text-xl text-secondary/70 mb-8 leading-relaxed">
              ML-powered recommendation engine helping FPL managers make data-driven decisions 
              by analyzing 600+ players across multiple performance metrics.
            </p>

            {/* Problem → Solution → Impact */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span> Problem
                </h3>
                <p className="text-sm text-secondary/70">
                  FPL players spend 5+ hours weekly analyzing 600+ players, fixtures, and form data
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">💡</span> Solution
                </h3>
                <p className="text-sm text-secondary/70">
                  ML algorithm analyzes player stats, fixtures, form, and value to generate optimal recommendations
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-green-500 mr-2">📈</span> Impact
                </h3>
                <p className="text-sm text-secondary/70">
                  10,000+ weekly users, 85% prediction accuracy for top performers
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="https://fantasy-premier-league-ai-assistant.streamlit.app/"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
              <motion.a
                href="https://github.com/JoshuaDsouza98/Fantasy-Premier-League-AI-Assistant"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-white text-secondary px-6 py-3 rounded-full font-semibold shadow-lg border-2 border-secondary/10"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {['Python', 'Streamlit', 'Pandas', 'scikit-learn', 'Machine Learning', 'Data Analytics'].map((tech) => (
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
              src="/assets/projects/Fantasy-Premier-League.png" 
              alt="Fantasy Premier League AI Assistant - Machine learning powered team selection"
              className="w-full h-auto object-cover"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-green-500', 'to-emerald-500', 'h-96', 'flex', 'items-center', 'justify-center');
                e.currentTarget.parentElement!.innerHTML = '<div class="text-white text-center"><svg class="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg><p class="text-xl font-semibold">AI-Powered Recommendations</p></div>';
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
                  The Fantasy Premier League AI Assistant is a sophisticated web application built with Streamlit 
                  that helps FPL managers make data-driven decisions for their team selections.
                </p>
                <p>
                  Using historical player performance data, advanced statistical analysis, and machine learning 
                  algorithms, the application predicts player performance and provides personalized recommendations 
                  for transfers, captaincy choices, and optimal team formations.
                </p>
                <p>
                  The interactive dashboard allows users to explore player statistics, compare options, and 
                  simulate different team configurations to maximize their FPL points.
                </p>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Key Features</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: 'Player Performance Prediction',
                    desc: 'ML models predict future player points based on historical data and fixtures'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Transfer Recommendations',
                    desc: 'Intelligent suggestions for optimal player transfers within budget constraints'
                  },
                  {
                    icon: Zap,
                    title: 'Real-time Data Integration',
                    desc: 'Live FPL API integration for up-to-date player stats and pricing'
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
                <h3 className="font-bold text-secondary text-xl mb-3">Data Collection & Processing</h3>
                <p>
                  Utilized the official FPL API to extract player statistics, fixture difficulty ratings, 
                  and historical performance data. Implemented ETL pipelines using Pandas for data cleaning, 
                  feature engineering, and transformation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">Machine Learning Models</h3>
                <p>
                  Developed ensemble models combining Random Forest and XGBoost algorithms to predict player 
                  points. Feature engineering included form metrics, opponent difficulty, home/away splits, 
                  and injury status. Achieved prediction accuracy suitable for actionable recommendations.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">User Interface</h3>
                <p>
                  Built an intuitive Streamlit dashboard with interactive visualizations using Plotly. 
                  Implemented filtering, sorting, and comparison features to help users explore data and 
                  make informed decisions quickly.
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
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: '85%', label: 'Prediction Accuracy' },
                { value: '15', label: ' minutes saved' },
                { value: '15%', label: 'Avg. Rank Improvement' },
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

export default FantasyPremierLeague
