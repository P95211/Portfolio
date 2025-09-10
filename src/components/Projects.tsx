import { Github, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Rajasthan Stories Online",
      description: "A full-stack website using TypeScript, React, and Supabase to showcase Rajasthan's culture. Built for a YouTube channel, the platform features dynamic content, secure backend, and responsive UI, combining storytelling with modern web technologies and AI tools.",
      techStack: ["TypeScript", "React", "Supabase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&h=300&fit=crop",
      github: "#",
      live: "https://rajasthan-stories-online.lovable.app/"
    },
    {
      title: "YouTube Learning Hub",
      description: "AI-powered learning platform that transforms YouTube videos into intelligent summaries, interactive flashcards, and adaptive quizzes. Features customizable difficulty levels, smart content extraction, and personalized learning materials generation.",
      techStack: ["React", "AI/ML", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "https://youtube-summary-generator.vercel.app/"
    },
    {
      title: "Global Export Business",
      description: "Professional export business website serving 25+ countries with comprehensive trade solutions. Features product showcasing, market intelligence, documentation support, and quality assurance services for international trade.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
      github: "#",
      live: "https://import-export-project-seven.vercel.app/"
    },
    {
      title: "Travel Destination Explorer",
      description: "Interactive web application for exploring travel destinations with detailed information, search functionality, and user-friendly interface to help users discover their next travel adventure.",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      github: "https://github.com/P95211/Travel-Destination-Explorer-Project",
      live: "#"
    },
    {
      title: "StackOverflow Clone",
      description: "Built a full-stack Stack Overflow clone during internship training using modern web technologies. Implemented user authentication, question-answer flow, voting, and database integration.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
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
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and problem-solving
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 card-hover"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a 
                    href={project.github}
                    className="bg-primary/20 backdrop-blur-sm hover:bg-primary/30 text-primary p-3 rounded-full transition-all duration-300 border border-primary/30"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href={project.live}
                    className="bg-secondary/20 backdrop-blur-sm hover:bg-secondary/30 text-secondary p-3 rounded-full transition-all duration-300 border border-secondary/30"
                    whileHover={{ scale: 1.1, rotate: -360 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowUp size={20} />
                  </motion.a>
                </motion.div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
