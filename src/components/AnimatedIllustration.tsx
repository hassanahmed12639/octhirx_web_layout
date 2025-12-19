"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedIllustration = () => {
  // Floating particles animation
  const particleVariants = {
    animate: (custom: number) => ({
      y: [0, -30, -60],
      x: [0, custom * 10, custom * 5],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: custom * 0.4,
        ease: "easeInOut",
      },
    }),
  };

  // Sparkle animation
  const sparkleVariants = {
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Glow pulse animation
  const glowVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Main container animation
  const containerVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Floating effect for the entire image
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Main illustration with floating effect */}
      <motion.div
        className="relative z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <Image
          src="/images/team-illustration.png"
          alt="Team collaboration illustration"
          width={600}
          height={400}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      {/* Animated overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left person hand glow - positioned at left person's hand */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-blue-400 blur-xl"
          style={{ left: "30%", top: "55%" }}
          variants={glowVariants}
          animate="animate"
        />

        {/* Right person hand glow - positioned at right person's hand */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-purple-400 blur-xl"
          style={{ left: "65%", top: "60%" }}
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />

        {/* Blocks center glow */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-pink-400 blur-xl"
          style={{ left: "48%", top: "65%" }}
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />

        {/* Floating particles around left person */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`particle-left-${i}`}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{ left: "25%", top: "40%" }}
            variants={particleVariants}
            animate="animate"
            custom={i}
          />
        ))}

        {/* Floating particles around right person */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`particle-right-${i}`}
            className="absolute w-2 h-2 bg-purple-500 rounded-full"
            style={{ left: "70%", top: "35%" }}
            variants={particleVariants}
            animate="animate"
            custom={i + 2}
          />
        ))}

        {/* Sparkles around blocks */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${45 + i * 8}%`,
              top: `${60 + i * 3}%`,
            }}
            variants={sparkleVariants}
            animate="animate"
            transition={{ delay: i * 0.6 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z"
                fill="#FFD700"
              />
            </svg>
          </motion.div>
        ))}

        {/* Geometric shapes floating */}
        <motion.div
          className="absolute w-6 h-6 border-2 border-blue-400 rounded"
          style={{ left: "20%", top: "30%" }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute w-5 h-5 bg-purple-400 rounded-full"
          style={{ left: "75%", top: "25%" }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
            transition: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        />

        <motion.div
          className="absolute w-4 h-4 border-2 border-pink-400"
          style={{ left: "55%", top: "20%", transform: "rotate(45deg)" }}
          animate={{
            y: [0, -25, 0],
            rotate: [45, 135, 45],
            transition: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-lg" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIllustration;

