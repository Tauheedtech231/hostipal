"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaHeartbeat, FaUserMd, FaStethoscope, FaHospital } from "react-icons/fa";

// Slide data moved outside component to prevent recreation on each render
const SLIDES = [
  { 
    id: 1, 
    image: "/hero.jpg",
    alt: "SHMC Hospital Main Entrance",
    title: "Siddiq Hospital & Maternity Complex"
  },
  { 
    id: 2, 
    image: "/hero_images/siddiqih2.jpg", 
    alt: "Modern Hospital Interior",
    title: "Advanced Medical Facilities"
  },
  { 
    id: 3, 
    image: "/hero_images/siddiqih3.jpg", 
    alt: "Expert Medical Team",
    title: "Compassionate Healthcare"
  }
];

// Stats configuration without circles
const STATS_CONFIG = [
  { value: 0, label: "Patients Treated", icon: <FaHeartbeat />, suffix: "+", target: 150000, color: "#1FB6A6" },
  { value: 0, label: "Surgeries", icon: <FaStethoscope />, suffix: "+", target: 20000, color: "#064E3B" },
  { value: 0, label: "Bypasses", icon: <FaUserMd />, suffix: "+", target: 3000, color: "#0B6E5E" },
  { value: 0, label: "Hospital Beds", icon: <FaHospital />, suffix: "", target: 100, color: "#1FB6A6" }
];

// Floating Particles Component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[1px] h-[1px] bg-white/20 rounded-full"
        initial={{
          x: `${Math.random() * 100}vw`,
          y: `${Math.random() * 100}vh`,
          scale: 0
        }}
        animate={{
          x: [
            `${Math.random() * 100}vw`,
            `${Math.random() * 100}vw`,
            `${Math.random() * 100}vw`
          ],
          y: [
            `${Math.random() * 100}vh`,
            `${Math.random() * 100}vh`,
            `${Math.random() * 100}vh`
          ],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 25 + 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

// Animated Tagline Component with smooth enter/exit
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
        className="h-px w-12 bg-gradient-to-r from-[#1FB6A6] to-transparent"
      />
      
      <div className="relative h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTagline}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 right-0 text-[#1FB6A6] text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
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
        className="h-px w-12 bg-gradient-to-l from-[#1FB6A6] to-transparent"
      />
    </motion.div>
  );
};

// Slide Indicator Component
const SlideIndicator = ({ 
  slides, 
  currentSlide, 
  goToSlide 
}: { 
  slides: typeof SLIDES; 
  currentSlide: number; 
  goToSlide: (index: number) => void 
}) => (
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
    <div className="flex items-center gap-3">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className="relative focus:outline-none group/indicator"
        >
          <motion.div
            animate={{ width: index === currentSlide ? "32px" : "8px" }}
            className={`h-1 rounded-full ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-[#1FB6A6] to-[#064E3B]' 
                : 'bg-white/50 group-hover/indicator:bg-white/70'
            }`}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/indicator:opacity-100 transition-opacity whitespace-nowrap">
            Slide {index + 1}
          </div>
        </button>
      ))}
    </div>
  </div>
);

// Hero Slider Component with reduced height
const HeroSlider = ({ 
  currentSlide, 
  goToSlide 
}: { 
  currentSlide: number; 
  goToSlide: (index: number) => void 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="relative"
  >
    <div className="relative h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        {SLIDES.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <SlideIndicator 
        slides={SLIDES} 
        currentSlide={currentSlide} 
        goToSlide={goToSlide} 
      />
    </div>
  </motion.div>
);

// Simple Stat Item Component without circles - Made more rounded
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
    initial={{ opacity: 0, scale: 0.8 }}
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
    <div className="relative mx-auto flex flex-col items-center justify-center text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: hasAnimated ? 1 : 0 }}
        transition={{ delay: index * 0.3 + 0.5 }}
        className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center shadow-md"
      >
        <div className="text-xl" style={{ color: stat.color }}>
          {stat.icon}
        </div>
      </motion.div>
      
      {/* Counter Value with padding */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3 + 0.8 }}
        className="mb-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-white w-full"
      >
        <div className="text-3xl md:text-4xl font-bold" style={{ color: stat.color }}>
          {stat.value.toLocaleString()}
          <span className="text-[#064E3B] ml-1">{stat.suffix}</span>
        </div>
      </motion.div>
      
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.3 + 1 }}
        className="px-3"
      >
        <div className="text-base font-semibold text-[#1E293B] leading-tight">
          {stat.label}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(STATS_CONFIG);

  // Memoized animation function
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

  // Intersection Observer for stats animation
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

  // Auto slide for hero images
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#000000] via-[#0a1929] to-[#064E3B]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#064E3B]/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#1FB6A6]/30 via-transparent to-transparent" />
        </div>

        <FloatingParticles />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <AnimatedTagline />

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
              >
                <span className="bg-gradient-to-r from-white via-white/95 to-gray-200 bg-clip-text text-transparent">
                  Trusted Medical
                </span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-[#1FB6A6] via-white to-[#1FB6A6] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 100%"
                  }}
                >
                  Excellence
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[#E5E7EB] text-base md:text-lg leading-relaxed max-w-2xl"
              >
                For over two decades, SHMC has been delivering vital and specialized 
                healthcare services with compassion and advanced medical expertise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4"
              >
                <Link
                  href="/portfolio/contact"
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1FB6A6] to-[#0B6E5E] text-white rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-[#1FB6A6]/40 transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <FaPhoneAlt className="h-4 w-4" />
                  </motion.div>
                  <span className="relative z-10">Contact Now</span>
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.7 }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Image Slider */}
            <HeroSlider currentSlide={currentSlide} goToSlide={goToSlide} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">SCROLL</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative"
            >
              <div className="w-px h-12 bg-gradient-to-b from-[#1FB6A6] via-white/50 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-gradient-to-b from-white via-gray-50 to-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#064E3B]/30" />
              <div className="p-4 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-2xl shadow-lg">
                <FaHospital className="h-8 w-8 text-[#064E3B]" />
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#064E3B]/30" />
            </motion.div>
            
            <h2 className="text-[#064E3B] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
              Two Decades of Healthcare Excellence
            </h2>
            <p className="text-[#1E293B] text-base md:text-lg max-w-2xl mx-auto text-center">
              Trusted by thousands for compassionate, advanced medical care
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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