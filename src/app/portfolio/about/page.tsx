"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  FaHospital, 
  FaHeartbeat, 
  FaStar,
  FaShieldAlt,
  FaHandsHelping,
  FaHandHoldingMedical,
  FaLightbulb,
  FaAward,
  FaUsers,
  FaChartLine,
  FaArrowRight
} from "react-icons/fa";

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionInView, setSectionInView] = useState(false);
  const [itemInView, setItemInView] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionInView(true);
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            if (!itemInView.includes(index)) {
              setItemInView(prev => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    document.querySelectorAll('[data-section-item]').forEach((el, index) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [itemInView]);

  // Animations
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const slideInFromRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInFromLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardHover: Variants = {
    rest: { y: 0, scale: 1 },
    hover: { 
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Core values
  const coreValues = [
    { 
      icon: <FaStar className="h-5 w-5" />, 
      title: "Excellence", 
      description: "International standards" 
    },
    { 
      icon: <FaHeartbeat className="h-5 w-5" />, 
      title: "Compassion", 
      description: "Personalized care" 
    },
    { 
      icon: <FaShieldAlt className="h-5 w-5" />, 
      title: "Integrity", 
      description: "Ethical practices" 
    },
    { 
      icon: <FaHandsHelping className="h-5 w-5" />, 
      title: "Trust", 
      description: "Patient confidence" 
    }
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#064E3B]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-[#1FB6A6]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-transparent via-[#064E3B]/3 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-full border border-[#064E3B]/20">
              <div className="w-2 h-2 bg-[#064E3B] rounded-full animate-pulse" />
              <span className="text-[#064E3B] text-xs font-semibold tracking-wider uppercase">
                About Our Hospital
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Siddiq Hospital & Maternity Complex
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
          >
            Premier Healthcare Provider in Pakistan
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Main Story */}
          <motion.div
            data-section-item
            data-index="1"
            initial="hidden"
            animate={itemInView.includes(1) ? "visible" : "hidden"}
            variants={slideInFromLeft}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-1 w-8 bg-gradient-to-r from-[#064E3B] to-[#1FB6A6]" />
              <span className="text-[#064E3B] font-semibold text-xs uppercase tracking-wider">
                Our Story
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Internationally Acclaimed Healthcare
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-base">
                Siddiq Hospital & Maternity Complex stands as a 100-bed tertiary care multi-specialty hospital. 
                This modern facility features sub-specialized departments in Medical, Surgical, Obstetrics & Gynecology, 
                and Pediatrics, complemented by state-of-the-art anesthesia, radiology, and laboratory services.
              </p>
              
              <p className="text-gray-600 leading-relaxed text-base">
                SHMC originated from the vision of a group of eminent medical specialists based in the United States 
                who wanted to bring their medical expertise back to their homeland, creating a beacon of healthcare 
                excellence in Pakistan.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div 
              initial="hidden"
              animate={itemInView.includes(1) ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-gradient-to-br from-[#064E3B]/5 to-[#1FB6A6]/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-[#064E3B]">100+</div>
                <div className="text-gray-600 text-sm">Hospital Beds</div>
              </div>
              <div className="bg-gradient-to-br from-[#064E3B]/5 to-[#1FB6A6]/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-[#064E3B]">20+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Main Image */}
          <motion.div
            data-section-item
            data-index="2"
            initial="hidden"
            animate={itemInView.includes(2) ? "visible" : "hidden"}
            variants={scaleIn}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/about/about1.jpg"
                  alt="Siddiq Hospital & Maternity Complex"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services & Technology Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Technology Image */}
          <motion.div
            data-section-item
            data-index="3"
            initial="hidden"
            animate={itemInView.includes(3) ? "visible" : "hidden"}
            variants={slideInFromLeft}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/about/about2.jpg"
                  alt="Advanced Medical Technology at SHMC"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Services Content */}
          <motion.div
            data-section-item
            data-index="4"
            initial="hidden"
            animate={itemInView.includes(4) ? "visible" : "hidden"}
            variants={slideInFromRight}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-1 w-8 bg-gradient-to-r from-[#1FB6A6] to-[#064E3B]" />
              <span className="text-[#064E3B] font-semibold text-xs uppercase tracking-wider">
                Beyond Conventional
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Comprehensive Healthcare Services
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-base">
                With a strong legacy of excellence, SHMC is committed to delivering high-quality medical care while 
                continuously improving standards across all departments.
              </p>
              
              <p className="text-gray-600 leading-relaxed text-base">
                The hospital actively invests in the latest healthcare technologies to ensure exceptional patient 
                outcomes, while focusing on innovation in clinical results, infrastructure development, and continuous 
                staff training.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          data-section-item
          data-index="5"
          initial="hidden"
          animate={itemInView.includes(5) ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#064E3B]/5 to-[#1FB6A6]/5 rounded-2xl border border-[#064E3B]/10 p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#064E3B]" />
                <span className="text-[#064E3B] font-semibold text-xs uppercase tracking-wider">
                  Our Commitment
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#064E3B]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Patient-Centered Excellence
              </h3>
              <p className="text-gray-600 text-sm max-w-3xl mx-auto">
                At Siddiq Hospital & Maternity Complex, we provide comprehensive medical care with exceptional service 
                at every stage of the patient journey.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group"
                >
                  <div className="h-full bg-white rounded-xl border border-gray-200 shadow-sm p-5 transition-all duration-300 group-hover:shadow-md group-hover:border-[#064E3B]/30">
                    <div className="mb-4 p-3 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-lg w-fit">
                      <div className="text-[#064E3B]">
                        {value.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#064E3B] transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            data-section-item
            data-index="6"
            initial="hidden"
            animate={itemInView.includes(6) ? "visible" : "hidden"}
            variants={slideInFromLeft}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-lg">
                  <FaHandHoldingMedical className="h-6 w-6 text-[#064E3B]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                To deliver accessible, innovative, and comprehensive medical care to our patients, 
                aligned with international standards of excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            data-section-item
            data-index="7"
            initial="hidden"
            animate={itemInView.includes(7) ? "visible" : "hidden"}
            variants={slideInFromRight}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#1FB6A6]/10 to-[#064E3B]/10 rounded-lg">
                  <FaLightbulb className="h-6 w-6 text-[#064E3B]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                To elevate SHMC to the pinnacle of healthcare delivery in Pakistan, advancing our technology 
                and embodying compassion in serving our patients.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          data-section-item
          data-index="8"
          initial="hidden"
          animate={itemInView.includes(8) ? "visible" : "hidden"}
          variants={scaleIn}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#064E3B] to-[#0B6E5E] rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Experience Healthcare Excellence
            </h3>
            <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have trusted SHMC for their healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.href = "/portfolio/contact"}
                className="px-6 py-3 bg-white text-[#064E3B] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md text-sm"
              >
                Book Appointment
              </button>
              <button
                onClick={() => window.location.href = "/portfolio/services"}
                className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                View Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;