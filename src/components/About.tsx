
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
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
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div 
            className="group bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-500 card-hover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-6 group-hover:gradient-text transition-all duration-300">Professional Summary</h4>
            
            <div className="text-4xl mb-4 text-center">👨‍💻</div>
            <blockquote className="text-lg text-muted-foreground leading-relaxed italic text-center mb-4">
              "Frontend Developer with hands-on experience in JavaScript, React, TypeScript, and modern web development, 
              skilled in building responsive, mobile-first applications. Proficient in creating reusable components and delivering 
              strong user interface designs with cross-browser compatibility."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed text-center mb-6">
              Passionate about crafting user-centric digital experiences and leveraging AI tools 
              <span className="text-primary font-semibold"> (ChatGPT, Gemini, Perplexity) </span>
              to enhance productivity and deliver innovative web solutions.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {["Mobile-First Design", "Cross-Browser Compatibility", "Performance Optimization", "AI-Enhanced Development"].map((skill, index) => (
                <motion.div 
                  key={skill}
                  className="bg-primary/20 text-primary px-3 py-2 rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="group bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-all duration-500 card-hover"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-xl font-semibold text-foreground mb-6 group-hover:text-secondary transition-colors duration-300">Education & Focus</h4>
            
              <div className="space-y-4">
                {[
                  { title: "B.Sc. Computer Science", desc: "Delhi University (Dec. 2021 - July 2024)" },
                  { title: "Web Development", desc: "Frontend Technologies & UI/UX" },
                  { title: "Problem Solving", desc: "Data Structures & Algorithms" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-secondary rounded-full mt-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <div>
                      <h5 className="text-foreground font-medium">{item.title}</h5>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6 mt-6">
              {[
                { value: "3+", label: "Years Learning" },
                { value: "10+", label: "Projects Built" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="group bg-card p-4 rounded-xl text-center border border-border hover:border-accent/50 transition-all duration-500 card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-accent group-hover:gradient-text transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
