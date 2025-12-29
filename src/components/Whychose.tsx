"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { 
  FaClock,
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaShieldAlt,
  FaHandHoldingMedical,
  FaStar,
  FaAward,
  FaCheckCircle,
  FaUsers,
  FaHandsHelping,
  FaChartLine
} from "react-icons/fa";

export const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Key reasons data
  const keyReasons = [
    {
      icon: <FaClock />,
      title: "24/7 Emergency Services",
      description: "Immediate medical attention available round the clock for urgent cases."
    },
    {
      icon: <FaStethoscope />,
      title: "Wide Range of Services",
      description: "Multi-specialty care including general medicine, surgery, maternity, cardiology, orthopedics, dermatology, physiotherapy, and diagnostics."
    },
    {
      icon: <FaUserMd />,
      title: "Experienced Medical Team",
      description: "Skilled doctors, nurses, and staff dedicated to personalized patient care."
    },
    {
      icon: <FaHospital />,
      title: "Modern Facilities",
      description: "Advanced medical equipment for accurate diagnosis, treatment, and faster recovery."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Convenient Location",
      description: "Centrally located for easy access to quality healthcare."
    }
  ];

  // Core values data
  const coreValues = [
    {
      icon: <FaAward />,
      title: "Excellence",
      description: "We continually push ourselves to improve every day, ensuring the highest standard of medical care."
    },
    {
      icon: <FaHeartbeat />,
      title: "Compassion",
      description: "Providing unwavering support to our patients in every possible way."
    },
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      description: "Approaching every medical challenge with honesty and professionalism."
    },
    {
      icon: <FaHandHoldingMedical />,
      title: "Trust",
      description: "Respecting and upholding the trust our patients place in us."
    },
    {
      icon: <FaCheckCircle />,
      title: "Transparency",
      description: "Ensuring our patients fully understand every medical decision they make."
    }
  ];

  // Achievement metrics
  const achievements = [
    { value: "20+", label: "Years Experience", icon: <FaChartLine /> },
    { value: "150K+", label: "Patients Treated", icon: <FaUsers /> },
    { value: "99%", label: "Patient Satisfaction", icon: <FaStar /> },
    { value: "24/7", label: "Emergency Care", icon: <FaHandsHelping /> }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardHover: Variants = {
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-16 md:py-20 bg-gradient-to-b from-[#0A1F1A] via-[#0C241F] to-[#0A1F1A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1FB6A6 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-r from-[#064E3B]/20 via-[#1FB6A6]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-gradient-to-l from-[#064E3B]/20 via-[#1FB6A6]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Animated dots */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#1FB6A6]/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#064E3B]/20 to-[#1FB6A6]/10 rounded-full border border-[#1FB6A6]/30">
              <div className="w-2 h-2 bg-[#1FB6A6] rounded-full animate-pulse" />
              <span className="text-[#1FB6A6] text-xs font-semibold tracking-wider uppercase">
                Trusted Healthcare
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Why Choose Siddiq Hospital?
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-[#E5E7EB] text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A trusted healthcare provider offering comprehensive medical services, modern facilities, 
            and 24/7 emergency care. Committed to patient-centered treatment with compassion, 
            reliability, and high-quality healthcare.
          </motion.p>
        </motion.div>

        {/* Achievement Metrics */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="relative p-4 md:p-5 bg-gradient-to-br from-[#111111] to-black rounded-xl border border-[#1FB6A6]/10 hover:border-[#1FB6A6]/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 p-3 bg-gradient-to-br from-[#1FB6A6]/20 to-[#064E3B]/20 rounded-lg">
                      <div className="text-[#1FB6A6] text-lg">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-[#E5E7EB] text-xs md:text-sm font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Reasons Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#1FB6A6]" />
              <span className="text-[#1FB6A6] font-semibold text-xs uppercase tracking-wider">
                What Sets Us Apart
              </span>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#1FB6A6]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Key Reasons to Choose Us
            </h3>
            <p className="text-[#E5E7EB] text-sm max-w-2xl mx-auto">
              Discover what makes Siddiq Hospital the preferred choice for healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {keyReasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <div className="relative p-5 md:p-6 bg-gradient-to-br from-[#111111] to-black rounded-xl border border-[#1FB6A6]/10 hover:border-[#1FB6A6]/30 transition-all duration-300 h-full">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6A6]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center shadow-lg shadow-[#1FB6A6]/20">
                      <div className="text-white text-base">
                        {reason.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1FB6A6] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#1FB6A6]" />
              <span className="text-[#1FB6A6] font-semibold text-xs uppercase tracking-wider">
                Our Foundation
              </span>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#1FB6A6]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Our Core Values
            </h3>
            <p className="text-[#E5E7EB] text-sm max-w-2xl mx-auto">
              These values reflect why patients trust Siddiq Hospital
            </p>
          </motion.div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {coreValues.slice(0, 3).map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative p-5 md:p-6 bg-gradient-to-br from-[#111111] to-black rounded-xl border border-[#1FB6A6]/10 hover:border-[#1FB6A6]/30 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center">
                      <div className="text-white text-sm">
                        {value.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Last two core values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mt-4 md:mt-6">
            {coreValues.slice(3, 5).map((value, index) => (
              <motion.div
                key={index + 3}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative p-5 md:p-6 bg-gradient-to-br from-[#111111] to-black rounded-xl border border-[#1FB6A6]/10 hover:border-[#1FB6A6]/30 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center">
                      <div className="text-white text-sm">
                        {value.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block max-w-2xl">
            <div className="bg-gradient-to-r from-[#064E3B]/20 to-[#1FB6A6]/10 rounded-2xl border border-[#1FB6A6]/20 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Ready to Experience Our Care?
              </h3>
              <p className="text-[#E5E7EB] text-sm md:text-base mb-6">
                Choose Siddiq Hospital for compassionate, reliable, and high-quality healthcare
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => window.location.href = "/portfolio/contact"}
                  className="px-6 py-3 bg-gradient-to-r from-[#1FB6A6] to-[#0B6E5E] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#1FB6A6]/20 transition-all duration-300 text-sm"
                >
                  Book Appointment Now
                </button>
                <button
                  onClick={() => window.location.href = "tel:03036828260"}
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                >
                  Call 0303 6828260
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};