import { motion } from 'framer-motion';


export const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background)) 50%, hsl(var(--primary) / 0.05) 100%)",
            "linear-gradient(225deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.05) 50%, hsl(var(--background)) 100%)",
            "linear-gradient(315deg, hsl(var(--background)) 0%, hsl(var(--accent) / 0.05) 50%, hsl(var(--primary) / 0.05) 100%)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-secondary/10 blur-xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-accent/10 blur-xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};