"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaHeartbeat, FaUserMd, FaStethoscope, FaHospital } from "react-icons/fa";

// Background sliding images
const BACKGROUND_IMAGES = [
"https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681995244531-1db59c892c8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675686363477-c28d5bf65adb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/2217159786/photo/doctor-checking-the-blood-pressure-on-a-woman-in-a-consultation.jpg?s=1024x1024&w=is&k=20&c=Q-0BWiD5wQWUgpjY88fcnzsP4bpULu0yUfjnkqz4Iwo="
];

// Stats configuration
const STATS_CONFIG = [
  { value: 0, label: "Patients Treated", icon: <FaHeartbeat />, suffix: "+", target: 150000, color: "#FFFFFF" },
  { value: 0, label: "Surgeries", icon: <FaStethoscope />, suffix: "+", target: 20000, color: "#FFFFFF" },
  { value: 0, label: "Bypasses", icon: <FaUserMd />, suffix: "+", target: 3000, color: "#FFFFFF" },
  { value: 0, label: "Hospital Beds", icon: <FaHospital />, suffix: "", target: 100, color: "#FFFFFF" }
];

// Background Sliding Animation Component - REMOVED OVERLAY
const BackgroundSlidingAnimation = () => {
  const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentBgImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Current Image */}
      <motion.div
        key={`current-${currentBgImageIndex}`}
        initial={{ 
          y: "0%",
          opacity: 1,
        }}
        animate={isTransitioning ? {
          y: "-100%",
          opacity: 0.7,
        } : {
          y: "0%",
          opacity: 1,
        }}
        transition={{ 
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-20"
      >
        <Image
          src={BACKGROUND_IMAGES[currentBgImageIndex]}
          alt={`Medical Facility ${currentBgImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
          priority
        />
      </motion.div>

      {/* Next Image */}
      <motion.div
        key={`next-${(currentBgImageIndex + 1) % BACKGROUND_IMAGES.length}`}
        initial={{ 
          y: "100%",
          opacity: 0,
        }}
        animate={isTransitioning ? {
          y: "0%",
          opacity: 1,
        } : {
          y: "100%",
          opacity: 0,
        }}
        transition={{ 
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-10"
      >
        <Image
          src={BACKGROUND_IMAGES[(currentBgImageIndex + 1) % BACKGROUND_IMAGES.length]}
          alt="Next medical facility"
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
      </motion.div>

      {/* REMOVED GRADIENT OVERLAY - Images will appear sharp and clear */}
    </div>
  );
};

// Floating Particles Component - Updated for better visibility on images
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden z-40 pointer-events-none">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[1px] h-[1px] bg-white/20 rounded-full"
        initial={{
          x: `${Math.random() * 100}vw`,
          y: `${Math.random() * 100}vh`,
        }}
        animate={{
          x: `${Math.random() * 100}vw`,
          y: `${Math.random() * 100}vh`,
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

// Animated Tagline Component
const AnimatedTagline = () => {
  const taglines = useMemo(() => [
    "EXCELLENCE IN HEALTHCARE",
    "TRUSTED MEDICAL CARE",
    "ADVANCED TECHNOLOGY",
    "COMPASSIONATE SERVICE"
  ], []);

  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-3"
    >
      <motion.div 
        animate={{ 
          width: ["0%", "100%", "0%"],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="h-px w-8 md:w-12 bg-gradient-to-r from-white to-transparent"
      />
      
      <div className="relative h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTagline}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 right-0 text-white text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap drop-shadow-lg"
          >
            {taglines[currentTagline]}
          </motion.span>
        </AnimatePresence>
      </div>
      
      <motion.div 
        animate={{ 
          width: ["0%", "100%", "0%"],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="h-px w-8 md:w-12 bg-gradient-to-l from-white to-transparent"
      />
    </motion.div>
  );
};

// Stat Item Component
const StatItem = ({ 
  stat, 
  index, 
  hasAnimated 
}: { 
  stat: typeof STATS_CONFIG[0] & { value: number }; 
  index: number; 
  hasAnimated: boolean 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      delay: index * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 15
    }}
    whileHover={{ scale: 1.02 }}
    className="relative group"
  >
    <div className="relative mx-auto flex flex-col items-center justify-center text-center p-4 md:p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-white/20">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: hasAnimated ? 1 : 0 }}
        transition={{ delay: index * 0.3 + 0.5 }}
        className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 rounded-xl bg-gradient-to-br from-[#064E3B]/10 to-white flex items-center justify-center shadow-sm"
      >
        <div className="text-base md:text-lg text-[#064E3B]">
          {stat.icon}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3 + 0.8 }}
        className="mb-1 md:mb-2"
      >
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#064E3B]">
          {stat.value.toLocaleString()}
          <span className="text-[#064E3B] ml-1">{stat.suffix}</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.3 + 1 }}
      >
        <div className="text-xs md:text-sm font-semibold text-gray-700 px-1">
          {stat.label}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export const HeroSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(STATS_CONFIG);

  const animateCounter = useCallback((index: number, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    
    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);
      
      setAnimatedStats(prev => prev.map((stat, i) => 
        i === index ? { ...stat, value: currentValue } : stat
      ));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setAnimatedStats(prev => prev.map((stat, i) => 
          i === index ? { ...stat, value: end } : stat
        ));
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animatedStats.forEach((stat, index) => {
              setTimeout(() => {
                animateCounter(index, 0, stat.target, 2000);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, [hasAnimated, animatedStats, animateCounter]);

  return (
    <>
      {/* Hero Section - Only Background Images, No Overlay */}
      <section className="relative min-h-[85vh] md:min-h-screen pt-24 md:pt-28 overflow-hidden">
        {/* Clear Background Images Only - No Overlay */}
        <BackgroundSlidingAnimation />
        
        <FloatingParticles />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full text-center lg:text-left py-8 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto lg:mx-0"
            >
              <div className="space-y-6 md:space-y-8">
                <AnimatedTagline />

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white drop-shadow-2xl"
                >
                  Siddiq Hospital
                  <br />
                  <span className="text-white/95 drop-shadow-2xl"> & Medical Complex</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-lg font-medium backdrop-blur-sm bg-black/10 px-4 py-2 rounded-lg"
                >
                  For over two decades, delivering vital and specialized healthcare services with compassion and advanced medical expertise. Trusted by thousands for exceptional medical care.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="pt-6 md:pt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/portfolio/contact"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#064E3B] to-[#0A3A2E] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#064E3B]/50 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10"
                    >
                      <FaPhoneAlt className="h-5 w-5" />
                    </motion.div>
                    <span className="relative z-10">Emergency Contact Now</span>
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.7 }}
                    />
                  </Link>
                  
                  <Link
                    href="/portfolio/services"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-sm text-[#064E3B] border-2 border-white/50 hover:border-[#064E3B] rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                  >
                    <span className="relative z-10">Our Services</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#064E3B]/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.7 }}
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex flex-col items-center gap-3"
        >
          
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative"
          >
            <div className="w-px h-12 bg-gradient-to-b from-white via-white/70 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-gradient-to-b from-white via-gray-50 to-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center gap-4 mb-6 md:mb-8"
            >
              <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-[#064E3B]/50" />
              <div className="p-3 md:p-4 bg-gradient-to-br from-[#064E3B] to-[#0A3A2E] rounded-2xl shadow-lg">
                <FaHospital className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-[#064E3B]/50" />
            </motion.div>
            
            <h2 className="text-[#064E3B] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 text-center px-2">
              Two Decades of Healthcare Excellence
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto text-center px-4">
              Trusted by thousands for compassionate, advanced medical care
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {animatedStats.map((stat, index) => (
              <StatItem 
                key={index} 
                stat={stat} 
                index={index} 
                hasAnimated={hasAnimated} 
              />
            ))}
          </div>

        
        </div>
      </section>
    </>
  );
};