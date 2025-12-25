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

// Stats configuration
const STATS_CONFIG = [
  { value: 0, label: "Patients Treated", icon: <FaHeartbeat />, suffix: "+", target: 150000 },
  { value: 0, label: "Surgeries Performed", icon: <FaStethoscope />, suffix: "+", target: 20000 },
  { value: 0, label: "Bypasses Performed", icon: <FaUserMd />, suffix: "+", target: 3000 },
  { value: 0, label: "Bed Hospital", icon: <FaHospital />, suffix: "", target: 100 }
];

// Floating Particles Component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[2px] h-[2px] bg-white/10 rounded-full"
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
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </div>
);

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

// Hero Slider Component
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
    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
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

      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 left-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-[#1FB6A6] rounded-full"
          />
          <span className="text-white text-sm font-medium">
            {SLIDES[currentSlide].title}
          </span>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

// Stats Item Component
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
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
    whileHover={{ y: -5 }}
    className="relative group"
  >
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, type: "spring" }}
        className="flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-[#1FB6A6]/10 to-[#064E3B]/10 group-hover:from-[#1FB6A6]/20 group-hover:to-[#064E3B]/20 transition-all duration-300"
      >
        <div className="text-[#1FB6A6] text-xl">
          {stat.icon}
        </div>
      </motion.div>
      
      <div className="mb-2 overflow-hidden">
        <div className="text-[#064E3B] text-3xl md:text-4xl font-bold">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stat.value.toLocaleString()}
          </motion.span>
          {stat.suffix && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-[#1FB6A6]"
            >
              {stat.suffix}
            </motion.span>
          )}
        </div>
      </div>
      
      <div className="text-[#1E293B] font-medium text-sm">
        {stat.label}
      </div>

      <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ 
            width: hasAnimated ? "100%" : "0%",
            backgroundColor: hasAnimated ? "#1FB6A6" : "#e5e7eb"
          }}
          transition={{ 
            duration: 2.2,
            delay: index * 0.2,
            ease: "easeOut"
          }}
          className="h-full rounded-full"
        />
      </div>
    </div>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB6A6]/0 via-[#064E3B]/0 to-[#1FB6A6]/0 group-hover:from-[#1FB6A6]/5 group-hover:via-[#064E3B]/5 group-hover:to-[#1FB6A6]/5 transition-all duration-500 blur-xl -z-10" />
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
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#000000] via-[#111111] to-[#064E3B]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-[#064E3B]/30 via-transparent to-[#0A3A2E]/20" />
        <FloatingParticles />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3"
              >
                <motion.div 
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-px w-12 bg-gradient-to-r from-[#1FB6A6] to-transparent"
                />
                <span className="text-[#1FB6A6] text-sm font-semibold tracking-[0.2em] uppercase">
                  EXCELLENCE IN HEALTHCARE
                </span>
                <motion.div 
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="h-px w-12 bg-gradient-to-l from-[#1FB6A6] to-transparent"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
              >
                <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                  Trusted Medical
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#1FB6A6] via-white to-[#1FB6A6] bg-clip-text text-transparent">
                  Excellence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[#E5E7EB] text-lg md:text-xl leading-relaxed max-w-2xl"
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
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1FB6A6] to-[#0B6E5E] text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#1FB6A6]/30 transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaPhoneAlt className="h-5 w-5" />
                  </motion.div>
                  <span>Book Appointment Now</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-wider">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-px h-6 bg-gradient-to-b from-[#1FB6A6] to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Dynamic Stats Bar */}
      <section ref={statsRef} className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#064E3B]/30" />
                <div className="p-3 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-xl">
                  <FaHospital className="h-6 w-6 text-[#064E3B]" />
                </div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#064E3B]/30" />
              </div>
              
              <h2 className="text-[#064E3B] text-3xl md:text-4xl font-bold">
                Two Decades of Healthcare Excellence
              </h2>
              <p className="text-[#1E293B] text-lg">
                Trusted by thousands for compassionate, advanced medical care
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {animatedStats.map((stat, index) => (
              <StatItem 
                key={index} 
                stat={stat} 
                index={index} 
                hasAnimated={hasAnimated} 
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hasAnimated ? 1 : 0 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-col items-center"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#064E3B]/5 to-[#1FB6A6]/5 rounded-full">
              {animatedStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: stat.value >= stat.target * 0.95 ? 1 : 0.5,
                    backgroundColor: stat.value >= stat.target * 0.95 ? "#1FB6A6" : "#d1d5db"
                  }}
                  transition={{ 
                    delay: index * 0.3 + 0.5,
                    type: "spring"
                  }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};