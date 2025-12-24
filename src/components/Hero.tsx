"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaPhoneAlt, 
  FaCalendarAlt, 
  FaStethoscope, 
  FaAmbulance,
  FaUserMd,
  FaHeartbeat,
  FaAward,
  FaClock,
  FaHospital,
  FaUserFriends,
  FaHandHoldingMedical,
  FaShieldAlt
} from "react-icons/fa";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Slides with your images
  const slides = [
    { 
      id: 1, 
      image: "/hero_images/sadiqih1.jpg", 
      alt: "SHMC Hospital Exterior",
      title: "Advanced Medical Facilities"
    },
    { 
      id: 2, 
      image: "/hero_images/siddiqih2.jpg", 
      alt: "Modern Hospital Interior",
      title: "Compassionate Patient Care"
    },
    { 
      id: 3, 
      image: "/hero_images/siddiqih3.jpg", 
      alt: "Expert Medical Team",
      title: "Specialized Medical Professionals"
    }
  ];

  // Auto slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Framer Motion variants with proper TypeScript types
  const slideVariants :Variants = {
    enter: { 
      x: 1000, 
      opacity: 0, 
      scale: 0.9 
    },
    center: { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        ease: "easeOut"
      }
    },
    exit: { 
      x: -1000, 
      opacity: 0, 
      scale: 0.9 
    }
  };

  const textVariants:Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const featureItem:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#111111]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B]/20 via-transparent to-[#0A3A2E]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full">
          {/* Single Column - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 max-w-3xl"
          >
            {/* Welcome Badge */}
            <motion.div variants={featureItem} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#064E3B]/30 rounded-full border border-[#1FB6A6]/20 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-[#1FB6A6] rounded-full animate-pulse" />
                <span className="text-[#1FB6A6] text-sm font-medium tracking-wide">
                  WELCOME TO SHMC
                </span>
              </div>
            </motion.div>

            {/* Main Heading - Increased font size */}
            <motion.div variants={textVariants}>
              <h1 className="text-[2.4rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-tight tracking-tight">
                Siddiq Hospital &<br />
                <span className="bg-gradient-to-r from-white via-[#E5E7EB] to-[#B0B7C3] bg-clip-text text-transparent">
                  Maternity Complex
                </span>
              </h1>
            </motion.div>

            {/* Subheading - Increased font size */}
            <motion.div variants={textVariants}>
              <p className="text-lg md:text-xl text-[#E5E7EB] font-medium tracking-normal">
                LEADING YOU TO A HEALTHY LIFE
              </p>
            </motion.div>

            {/* Description - Increased font size */}
            <motion.p 
              variants={textVariants}
              className="text-[#D1D5DB] text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Health crises do not wait, and neither should you. Our round-the-clock emergency 
              department offers prompt care for those requiring urgent medical attention. 
              Equipped with advanced technology, specialist physicians, and a skilled team, 
              SHMC ensures immediate and comprehensive medical assistance.
            </motion.p>

            {/* Action Buttons - Increased font size */}
            <motion.div 
              variants={textVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
            

              <Link
                href="/portfolio/contact"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-[#DC2626]/20 hover:scale-[1.02] transition-all duration-300"
              >
                <FaPhoneAlt className="h-4.5 w-4.5" />
                <span>Emergency Services</span>
              </Link>
            </motion.div>

            {/* Emergency Contact - Increased font size */}
            <motion.div 
              variants={textVariants}
              className="pt-6"
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[#064E3B]/30 to-[#0A3A2E]/20 rounded-lg border border-[#1FB6A6]/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="h-4 w-4 text-[#1FB6A6]" />
                  <span className="text-white text-base font-medium">Emergency:</span>
                  <a 
                    href="tel:03036828260"
                    className="text-[#1FB6A6] font-bold text-lg hover:text-white transition-colors"
                  >
                    0303 6828260
                  </a>
                </div>
                <div className="h-6 w-px bg-[#1FB6A6]/30" />
                <div className="flex items-center gap-3">
                  <FaClock className="h-4 w-4 text-[#1FB6A6]" />
                  <span className="text-[#D1D5DB] text-sm">24/7 Available</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-6 bg-[#1FB6A6]' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Emergency Alert Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30">
        <div className="bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#DC2626]">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <FaAmbulance className="h-4.5 w-4.5 text-white animate-pulse" />
                <span className="text-white text-sm font-medium">Emergency Services Active - 24/7 Available</span>
              </div>
              <a 
                href="tel:03036828260"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#DC2626] text-sm font-bold rounded hover:bg-gray-100 transition-colors"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                Call Now: 0303 6828260
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};