import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
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
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
          {/* Left side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Animated background rings */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Rotating border */}
              <motion.div 
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Image container */}
              <motion.div 
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden bg-card p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-muted to-card">
                  <img 
                    src="/uploads/de0a44a3-bce2-4186-85d3-b39ed1c1bbcb.png" 
                    alt="Praveen Kumar - Frontend Developer"
                    className="w-full h-full object-cover object-center filter brightness-110 contrast-105"
                  />
                </div>
              </motion.div>
              
              {/* Floating particles */}
              <motion.div 
                className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-8 left-8 w-1 h-1 bg-secondary rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              
              {/* Status indicator */}
              <motion.div 
                className="absolute bottom-6 right-6 flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.div 
                  className="w-2.5 h-2.5 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-muted-foreground font-medium">Available for work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Greeting with icon */}
            <motion.div 
              className="mb-6 flex items-center justify-center lg:justify-start space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="text-primary" size={22} />
              </motion.div>
              <span className="text-primary text-lg font-medium tracking-wide">Hi there, I'm</span>
              <motion.div
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="text-secondary" size={22} />
              </motion.div>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold mb-6 gradient-text leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Praveen Kumar
            </motion.h1>
            
            {/* Enhanced subtitle */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-xl xl:text-2xl text-secondary font-bold mb-3">
                Aspiring Frontend Developer
              </h2>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm md:text-base">
                {["C++ Enthusiast", "React Developer", "UI/UX Designer"].map((skill, index) => (
                  <motion.span 
                    key={skill}
                    className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm text-primary font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.3)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Enhanced description */}
            <motion.p 
              className="text-base md:text-lg lg:text-base xl:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Frontend Developer with hands-on experience in <span className="text-primary font-semibold">JavaScript, React, TypeScript</span>, and modern web development. 
              Skilled in building <span className="text-secondary font-semibold">responsive, mobile-first applications</span> and passionate about crafting user-centric digital experiences.
            </motion.p>
            
            {/* Enhanced buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.a 
                href="https://github.com/P95211"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 glow-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github size={20} />
                </motion.div>
                <span>View GitHub</span>
              </motion.a>
              
              <motion.a 
                href="mailto:praveenkumar1023@gmail.com"
                className="group relative border-2 border-primary/50 text-primary px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:bg-primary/10"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail size={20} />
                </motion.div>
                <span>Get in Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-muted-foreground text-sm font-medium group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <div className="p-3 rounded-full border-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:bg-primary/10">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} className="text-primary" />
            </motion.div>
          </div>
        </div>
      </motion.button>
    </section>
  );
};
