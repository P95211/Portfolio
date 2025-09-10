
import { motion } from "framer-motion";

export const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack MERN Certificate",
      platform: "NullClass",
      description: "Completed Full Stack MERN certification from NullClass, gaining hands-on experience in MongoDB, Express.js, React, and Node.js through real-world projects. Developed frontend web application using HTML, CSS, JavaScript and React.",
      year: "May 2025 - Present",
      badge: "🎓"
    },
    {
      title: "Data Structure and Algorithms",
      platform: "YouTube, LeetCode, GFG",
      description: "Currently learning Data Structures and Algorithms (DSA) in C++ and JavaScript, with a focus on algorithmic efficiency and problem-solving strategies.",
      year: "Sep. 2021 - Present",
      badge: "📊"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0] 
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold gradient-text mb-4"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Certifications & Training
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and skill development through various platforms and courses
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-all duration-500 card-hover"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {cert.badge}
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {cert.title}
                  </motion.h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <motion.span 
                      className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium border border-secondary/30 hover:bg-secondary/30 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {cert.platform}
                    </motion.span>
                    <span className="text-muted-foreground text-sm">{cert.year}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
