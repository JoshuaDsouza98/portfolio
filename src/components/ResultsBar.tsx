import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Award, Target, Zap } from 'lucide-react'

const ResultsBar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: TrendingUp,
      value: '3+',
      label: 'Years Experience',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      value: '10+',
      label: 'Projects Delivered',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      value: '£260k',
      label: 'Business Impact',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      value: '92%',
      label: 'Model Accuracy',
      color: 'from-orange-500 to-red-500'
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-white via-dominant-light/20 to-white relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary/5"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="text-4xl md:text-5xl font-bold text-secondary mb-2"
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-secondary/70 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultsBar
