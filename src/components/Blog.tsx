import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const posts = [
    {
      title: 'The Power of Data Science',
      excerpt: 'Discover how data science is transforming industries and driving innovation across the globe.',
      image: '/assets/images/photo-1518770660439-4636190af475.jpeg',
      date: 'Oct 15, 2023',
      readTime: '5 min read',
      category: 'Data Science',
    },
    {
      title: 'Machine Learning Made Easy',
      excerpt: 'Learn the basics of machine learning and how it can benefit your business with practical examples.',
      image: '/assets/images/photo-1487058792275-0ad4aaf24ca7.jpeg',
      date: 'Oct 10, 2023',
      readTime: '7 min read',
      category: 'Machine Learning',
    },
    {
      title: 'Data Visualization 101',
      excerpt: 'Master the art of data visualization and create compelling visualizations that tell a story.',
      image: '/assets/images/photo-1695653422557-3b85c1d6d061.jpeg',
      date: 'Oct 5, 2023',
      readTime: '6 min read',
      category: 'Visualization',
    },
    {
      title: 'The Future of AI',
      excerpt: 'Explore the exciting possibilities of artificial intelligence and its impact on society.',
      image: '/assets/images/photo-1581090700227-1e37b190418e.jpeg',
      date: 'Sep 28, 2023',
      readTime: '8 min read',
      category: 'Artificial Intelligence',
    },
  ]

  return (
    <section id="blog" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Blog
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on data science and technology
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-secondary to-secondary-light rounded-3xl overflow-hidden shadow-2xl">
            {/* Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                {posts[0].category}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {posts[0].title}
              </h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {posts[0].excerpt}
              </p>
              
              {/* Meta */}
              <div className="flex items-center space-x-6 mb-8 text-white/70">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{posts[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{posts[0].readTime}</span>
                </div>
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center space-x-2 bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all w-fit"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-secondary/70 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-secondary/60 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary-dark transition-all shadow-lg"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
