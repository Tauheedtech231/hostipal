"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { 
  FaUserMd,
  FaHeartbeat,
  FaStethoscope,
  FaHospital,
  FaAward,
  FaUsers,
  FaClock,
  FaAmbulance,
  FaMicroscope,
  FaShieldAlt,
  FaHandHoldingMedical,
  FaChartLine,

  FaUserFriends,
 
  FaLeaf,
  FaStar,
  FaCheckCircle,
  FaThumbsUp,
 
  FaMobileAlt,
  FaCertificate
} from "react-icons/fa";

export const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Main reasons data
  const mainReasons = [
    {
      icon: <FaUserMd />,
      title: "Expert Medical Team",
      description: "Board-certified specialists with international training and decades of collective experience in advanced medical procedures.",
      features: ["International Certifications", "15+ Years Average Experience", "Continuous Training"]
    },
    {
      icon: <FaHeartbeat />,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and modern diagnostic tools ensuring accurate diagnosis and effective treatment.",
      features: ["Digital Imaging Systems", "Minimal Invasive Surgery", "Modern ICU"]
    },
    {
      icon: <FaHospital />,
      title: "Comprehensive Care",
      description: "Full spectrum healthcare services from preventive care to complex surgical interventions under one roof.",
      features: ["Multi-Specialty Departments", "24/7 Emergency", "Maternity & NICU"]
    },
    {
      icon: <FaAward />,
      title: "Quality & Safety",
      description: "Rigorous quality control measures and international safety protocols to ensure patient well-being at every step.",
      features: ["ISO Certified", "Infection Control", "Patient Safety Protocols"]
    }
  ];

  // Additional features
  const features = [
    {
      icon: <FaClock />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services with immediate response teams"
    },
    {
      icon: <FaAmbulance />,
      title: "Quick Ambulance",
      description: "Advanced life support ambulance service with GPS tracking"
    },
    {
      icon: <FaMicroscope />,
      title: "Modern Lab",
      description: "Fully equipped pathology lab with rapid test results"
    },
    {
      icon: <FaShieldAlt />,
      title: "Patient Privacy",
      description: "Strict confidentiality and data protection measures"
    },
    {
      icon: <FaHandHoldingMedical />,
      title: "Insurance Support",
      description: "Direct billing with major insurance providers"
    },
    {
      icon: <FaChartLine />,
      title: "Digital Records",
      description: "Electronic medical records for seamless care coordination"
    }
  ];

  // Stats data
  const stats = [
    { value: "99%", label: "Patient Satisfaction" },
    { value: "24/7", label: "Emergency Services" },
    { value: "50+", label: "Specialists" },
    { value: "20+", label: "Medical Departments" }
  ];

  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 40, opacity: 0 },
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

  const cardHover:Variants = {
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
      className="relative py-24 bg-[#000000] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1FB6A6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-[#1FB6A6]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-[#1FB6A6]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Animated dots */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#1FB6A6]/30 rounded-full"
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
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1FB6A6]/20 to-[#1FB6A6]/10 rounded-full border border-[#1FB6A6]/30">
              <div className="w-2 h-2 bg-[#1FB6A6] rounded-full animate-pulse" />
              <span className="text-[#1FB6A6] text-sm font-semibold tracking-wider uppercase">
                Excellence in Healthcare
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Why Choose
            <span className="block text-[#1FB6A6] mt-2">Siddiq Hospital?</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-[#E5E7EB] text-lg md:text-xl max-w-3xl mx-auto"
          >
            Discover the distinct advantages that make us the preferred healthcare destination 
            for thousands of patients across Pakistan.
          </motion.p>
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {mainReasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
             
              className="group relative"
            >
              <div className="relative p-8 bg-[#111111] rounded-2xl border border-[#1FB6A6]/10 hover:border-[#1FB6A6]/30 transition-all duration-500 overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6A6]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center shadow-lg shadow-[#1FB6A6]/20">
                    <div className="text-white text-2xl">
                      {reason.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-[#E5E7EB] mb-6">
                  {reason.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#1FB6A6] flex-shrink-0" />
                      <span className="text-[#E5E7EB] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1FB6A6] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-[#E5E7EB] max-w-2xl mx-auto">
              Every aspect of our hospital is designed with patient comfort and medical excellence in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <div className="relative p-6 bg-[#111111] rounded-xl border border-[#1FB6A6]/5 hover:border-[#1FB6A6]/20 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#1FB6A6]/10 flex items-center justify-center">
                      <div className="text-[#1FB6A6] text-lg">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-[#E5E7EB] text-sm">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute top-0 right-0 mt-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-[#1FB6A6] rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative mb-20"
        >
          <div className="relative bg-gradient-to-r from-[#111111] to-[#1a1a1a] rounded-2xl overflow-hidden border border-[#1FB6A6]/20">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#E5E7EB] text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Pattern overlay */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #1FB6A6 2px, transparent 2px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>
        </motion.div>

        {/* Unique Selling Points */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#111111] to-black rounded-2xl border border-[#1FB6A6]/20 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - USP list */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-8">
                  What Sets Us Apart
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <FaCertificate />,
                      title: "International Standards",
                      description: "Accredited healthcare services meeting global medical protocols"
                    },
                    {
                      icon: <FaUserFriends />,
                      title: "Patient-Centric Approach",
                      description: "Personalized care plans tailored to individual patient needs"
                    },
                    {
                      icon: <FaLeaf />,
                      title: "Healing Environment",
                      description: "Modern facilities designed for comfort and quick recovery"
                    },
                    {
                      icon: <FaMobileAlt />,
                      title: "Digital Convenience",
                      description: "Online appointment booking and telemedicine consultations"
                    }
                  ].map((usp, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center flex-shrink-0">
                        <div className="text-white text-lg">
                          {usp.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {usp.title}
                        </h4>
                        <p className="text-[#E5E7EB] text-sm">
                          {usp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Testimonial/CTA */}
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-[#1FB6A6]/10 to-transparent rounded-xl p-8 border border-[#1FB6A6]/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center">
                      <FaThumbsUp className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Trust & Reliability</h4>
                      <p className="text-[#E5E7EB] text-sm">Verified by Patients</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-[#E5E7EB] italic">
                      The care I received at Siddiq Hospital was exceptional. From diagnosis to recovery, 
                      every step was handled with utmost professionalism and compassion.
                    </p>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      <span className="text-white text-sm ml-2">4.9/5 Rating</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#1FB6A6]/20">
                    <button className="w-full py-3.5 bg-gradient-to-r from-[#1FB6A6] to-[#0B6E5E] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#1FB6A6]/20 transition-all duration-300">
                      Experience Our Care
                    </button>
                    <p className="text-center text-[#E5E7EB] text-sm mt-3">
                      Join thousands of satisfied patients
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block max-w-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Experience Excellence?
            </h3>
            <p className="text-[#E5E7EB] mb-8">
              Choose Siddiq Hospital for world-class healthcare in Pakistan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-gradient-to-r from-[#1FB6A6] to-[#0B6E5E] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#1FB6A6]/20 transition-all duration-300">
                Book Appointment Now
              </button>
              <button className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Call 0303 6828260
              </button>
            </div>
            <p className="text-[#E5E7EB] text-sm mt-6">
              Emergency services available 24/7 • Free ambulance within city limits
            </p>
          </div>
        </motion.div>
      </div>

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};