import { motion } from 'framer-motion'
import { ArrowLeft, Cpu, FileText, Hand, Mic } from 'lucide-react'
import { Link } from 'react-router-dom'
import { asset } from '../config'

const SmartHandGlove = () => {
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
              IoT & Machine Learning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Smart Hand Glove for <span className="text-primary">ASL Translation</span>
            </h1>
            <p className="text-xl text-secondary/70 mb-8 leading-relaxed">
              IoT-enabled wearable device translating American Sign Language gestures into real-time 
              speech, bridging communication gaps for the hearing-impaired community.
            </p>

            {/* Problem → Solution → Impact */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span> Problem
                </h3>
                <p className="text-sm text-secondary/70">
                  466 million people worldwide with hearing loss face daily communication barriers
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">💡</span> Solution
                </h3>
                <p className="text-sm text-secondary/70">
                  IoT glove with flex sensors + SVM classifier trained on 1,000+ gesture samples for real-time translation
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <h3 className="font-bold text-secondary mb-2 flex items-center">
                  <span className="text-green-500 mr-2">📈</span> Impact
                </h3>
                <p className="text-sm text-secondary/70">
                  92% accuracy, Led 5-person team, Published in IJRASET journal
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="https://www.ijraset.com/fileserve.php?FID=37528"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                <FileText className="w-5 h-5" />
                <span>Read Paper</span>
              </motion.a>

            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {['Python', 'SVM', 'Arduino', 'IoT', 'Kivy', 'scikit-learn', 'NumPy', 'Machine Learning'].map((tech) => (
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
              src={asset('assets/projects/Smart-hand-Glove.png')} 
              alt="Smart Hand Glove for ASL Translation - IoT wearable device with sensors"
              className="w-full h-auto object-cover"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-purple-500', 'to-pink-500', 'h-96', 'flex', 'items-center', 'justify-center');
                e.currentTarget.parentElement!.innerHTML = '<div class="text-white text-center"><svg class="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg><p class="text-xl font-semibold">IoT Glove Prototype</p></div>';
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
                  The Smart Hand Glove is an innovative assistive technology device designed to bridge 
                  communication gaps for hearing and speech-impaired individuals by translating American 
                  Sign Language (ASL) gestures into real-time speech.
                </p>
                <p>
                  As team leader, I coordinated a 5-member multidisciplinary team to design, develop, 
                  and test this IoT-enabled wearable device. The project combined hardware engineering, 
                  machine learning, and mobile app development.
                </p>
                <p>
                  The research was published in the International Journal for Research in Applied Science 
                  and Engineering Technology (IJRASET), showcasing innovation in human-computer interaction 
                  and accessibility technology.
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
                    icon: Hand,
                    title: '92% Accuracy',
                    desc: 'SVM classifier achieved 92% accuracy in gesture recognition'
                  },
                  {
                    icon: Mic,
                    title: 'Real-time Speech',
                    desc: 'Instant conversion of gestures to audible speech output'
                  },
                  {
                    icon: Cpu,
                    title: 'Mobile Integration',
                    desc: 'Kivy-based mobile app for configuration and monitoring'
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
                <h3 className="font-bold text-secondary text-xl mb-3">Hardware Design</h3>
                <p>
                  Integrated flex sensors on each finger to capture hand movements and gestures. Used 
                  Arduino microcontroller for sensor data acquisition and processing. Designed ergonomic 
                  glove structure for comfortable extended wear while maintaining sensor accuracy.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">Data Collection & Labeling</h3>
                <p>
                  Created a comprehensive labeled dataset of ASL gestures by recording sensor readings 
                  for each sign language gesture. Collected data from multiple users to ensure model 
                  generalization. Implemented data preprocessing and normalization techniques.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">Machine Learning Model</h3>
                <p>
                  Implemented Support Vector Machine (SVM) classifier using scikit-learn for gesture 
                  recognition. Achieved 92% classification accuracy through feature engineering and 
                  hyperparameter optimization. Model trained on NumPy arrays of sensor data patterns.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-3">Mobile Application</h3>
                <p>
                  Developed cross-platform mobile app using Kivy framework for device configuration, 
                  real-time gesture display, and speech output control. Integrated text-to-speech engine 
                  for converting recognized gestures into audible speech.
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
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Project Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: '92%', label: 'Recognition Accuracy' },
                { value: '5', label: 'Team Members' },
                { value: 'IJRASET', label: 'Published Research' },
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

          {/* Publication */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border-2 border-primary/20"
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">Published Research</h3>
            <p className="text-secondary/80 mb-4">
              This project was published in the <span className="font-semibold text-secondary">
              International Journal for Research in Applied Science and Engineering Technology (IJRASET)</span>, 
              showcasing innovation in human-computer interaction and accessibility technology.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline"
            >
              <FileText className="w-5 h-5" />
              <span>Read Full Paper</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SmartHandGlove
