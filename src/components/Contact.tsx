import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // FormSubmit will handle the actual email sending
    // The form action is set to FormSubmit's endpoint
    const form = e.target as HTMLFormElement
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'joshuamdsouza98@gmail.com',
      link: 'mailto:joshuamdsouza98@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'London, UK',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-background via-dominant-light/20 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 md:mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h4>
                  <p className="text-secondary/70 text-center">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  action="https://formsubmit.co/joshuamdsouza98@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* FormSubmit Configuration - Hidden Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission!" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary/10 focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary/10 focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-secondary mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary/10 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-secondary/10 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-6 md:p-8 lg:p-12 text-white shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Let's Connect</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  I'm always excited to discuss new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 md:space-x-4 group"
                    >
                      <div className="bg-white/10 backdrop-blur-sm p-2.5 md:p-3 rounded-xl group-hover:bg-white/20 transition-colors">
                        <info.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <div className="text-xs md:text-sm text-white/70 mb-1">{info.title}</div>
                        <div className="font-semibold text-base md:text-lg break-all">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl"
              >
                <h3 className="text-xl font-bold text-secondary mb-6">Quick Questions?</h3>
                <div className="space-y-4">
                  {[
                    { q: 'Response Time', a: 'Usually within 24 hours' },
                    { q: 'Availability', a: 'Open to new projects' },
                    { q: 'Consultation', a: 'Free initial consultation' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.q}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="flex justify-between items-center pb-4 border-b border-secondary/10 last:border-0"
                    >
                      <span className="text-secondary/70">{item.q}</span>
                      <span className="font-semibold text-secondary">{item.a}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
