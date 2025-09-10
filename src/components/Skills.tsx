
import { 
  Code, 
  GitBranch, 
  Github
} from "lucide-react";
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "HTML5", icon: "🌐", level: 90 },
        { name: "CSS3", icon: "🎨", level: 85 },
        { name: "JavaScript (ES6+)", icon: "📜", level: 80 },
        { name: "TypeScript", icon: "🔷", level: 75 },
        { name: "C++", icon: "💻", level: 85 },
        { name: "SQL", icon: "🗄️", level: 70 },
        { name: "Python", icon: "🐍", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "⚛️", level: 85 },
        { name: "Bootstrap", icon: "🅱️", level: 80 },
        { name: "Tailwind CSS", icon: "🎨", level: 80 },
        { name: "jQuery", icon: "💛", level: 70 }
      ]
    },
    {
      title: "APIs & Integration",
      skills: [
        { name: "REST APIs", icon: "🔗", level: 75 },
        { name: "JSON", icon: "📄", level: 80 },
        { name: "DOM Manipulation", icon: "🌳", level: 85 }
      ]
    },
    {
      title: "Developer Tools & Others",
      skills: [
        { name: "Git", icon: GitBranch, level: 80 },
        { name: "GitHub", icon: Github, level: 85 },
        { name: "Data Structures & Algorithms", icon: "📊", level: 80 },
        { name: "Operating Systems", icon: "⚙️", level: 65 },
        { name: "OOP", icon: "🏗️", level: 75 },
        { name: "Computer Networks", icon: "🌐", level: 60 },
        { name: "Database Management", icon: "🗃️", level: 70 }
      ]
    }
  ];

  const renderIcon = (icon: any, name: string) => {
    if (typeof icon === 'string') {
      return <span className="text-2xl">{icon}</span>;
    }
    const IconComponent = icon;
    return <IconComponent size={24} className="text-primary" />;
  };

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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
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
            Technical Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              variants={itemVariants}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 card-hover"
            >
              <motion.h3 
                className="text-2xl font-semibold text-primary mb-6 text-center group-hover:gradient-text transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0">
                      {renderIcon(skill.icon, skill.name)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-secondary text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className="bg-gradient-to-r from-primary via-secondary to-accent h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
