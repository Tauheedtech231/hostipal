"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  FaStethoscope,
  FaHeartbeat,
  FaBaby,
  FaProcedures,
  FaAmbulance,
  FaUserMd,
  FaFlask,
  FaSyringe,
  FaLungs,
  FaBrain,
  FaBone,
  FaAppleAlt,
  FaHeart,
  FaUserNurse,
  FaHandHoldingMedical,
  FaShieldAlt,
  FaHospital,
  FaXRay,
  FaUserInjured
} from "react-icons/fa";

 const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Services data
  const services = [
    {
      id: 1,
      icon: <FaBaby className="text-2xl" />,
      title: "Pediatrics",
      description: "Comprehensive Child Health Care"
    },
    {
      id: 2,
      icon: <FaUserMd className="text-2xl" />,
      title: "Gynecology",
      description: "Antenatal, Intranatal, Postnatal care"
    },
    {
      id: 3,
      icon: <FaProcedures className="text-2xl" />,
      title: "Physiotherapy",
      description: "Targeted Physical Rehabilitation Treatment"
    },
    {
      id: 4,
      icon: <FaAmbulance className="text-2xl" />,
      title: "Emergency Care",
      description: "Immediate Emergency Medical Treatment"
    },
    {
      id: 5,
      icon: <FaUserInjured className="text-2xl" />,
      title: "Dermatology",
      description: "Holistic Skin Health Treatment"
    },
    {
      id: 6,
      icon: <FaFlask className="text-2xl" />,
      title: "Infectious Disease & Critical Care",
      description: "Effective Life-Threatening Illness Management"
    },
    {
      id: 7,
      icon: <FaSyringe className="text-2xl" />,
      title: "Diabetes & Endocrinology",
      description: "Comprehensive Hormonal Imbalance Management and Treatment"
    },
    {
      id: 8,
      icon: <FaStethoscope className="text-2xl" />,
      title: "Internal Medicine",
      description: "Comprehensive Non-Surgical Medical Treatment"
    },
    {
      id: 9,
      icon: <FaLungs className="text-2xl" />,
      title: "Gastroenterology",
      description: "Complete Digestive System Disorders Treatment"
    },
    {
      id: 10,
      icon: <FaHeart className="text-2xl" />,
      title: "Clinical Hematology",
      description: "Thorough Blood Disorders Treatment"
    },
    {
      id: 11,
      icon: <FaHandHoldingMedical className="text-2xl" />,
      title: "Anesthesia",
      description: "Safe and Painless Procedures"
    },
    {
      id: 12,
      icon: <FaBrain className="text-2xl" />,
      title: "Psychiatry",
      description: "Personalized Mental Health Treatment"
    },
    {
      id: 13,
      icon: <FaBone className="text-2xl" />,
      title: "Rheumatology",
      description: "Comprehensive Joint and Connective Tissue Disorders Treatment"
    },
    {
      id: 14,
      icon: <FaAppleAlt className="text-2xl" />,
      title: "Clinical Nutrition",
      description: "Tailored Dietary and Nutritional Management"
    },
    {
      id: 15,
      icon: <FaHeartbeat className="text-2xl" />,
      title: "Cardiology",
      description: "Advanced Heart Disease Treatment"
    },
    {
      id: 16,
      icon: <FaUserNurse className="text-2xl" />,
      title: "Essential Healthcare",
      description: "Physicians dedicated to ensuring your complete well-being"
    },
    {
      id: 17,
      icon: <FaProcedures className="text-2xl" />,
      title: "Surgery Services",
      description: "Comprehensive surgical interventions across various medical disciplines"
    },
    {
      id: 18,
      icon: <FaUserMd className="text-2xl" />,
      title: "Women's Well-being",
      description: "Tailor-made facilities to meet all your requirements"
    },
    {
      id: 19,
      icon: <FaHeart className="text-2xl" />,
      title: "Cardiovascular Care",
      description: "Holistic Support for Heart Health"
    },
    {
      id: 20,
      icon: <FaLungs className="text-2xl" />,
      title: "Gastrointestinal Wellness",
      description: "Addressing Stomach Concerns, Offering Pancreas to Liver Transplant Care"
    },
    {
      id: 21,
      icon: <FaBone className="text-2xl" />,
      title: "Spine & Ortho Care",
      description: "Advanced Treatments by Orthopedic Specialists and Surgeons"
    },
    {
      id: 22,
      icon: <FaXRay className="text-2xl" />,
      title: "Physiotherapy",
      description: "Cutting-edge Image-Guided Procedures and Therapies"
    },
    {
      id: 23,
      icon: <FaUserInjured className="text-2xl" />,
      title: "Dermatology",
      description: "Tailored Dermatology Care at Each Stage"
    }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
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
        damping: 12
      }
    }
  };

  const fadeInUp: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1702598472504-af58d6461d6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Medical Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-[#1FB6A6] rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold tracking-wider">
                COMPREHENSIVE HEALTHCARE
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Our Medical Services
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services across multiple specialties, 
              delivering expert medical care with compassion and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#064E3B] mb-6">
              Specialized Medical Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of medical specialties, each dedicated to 
              providing exceptional patient care and treatment outcomes.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group"
              >
                <div className="h-full p-6 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-xl hover:border-[#1FB6A6] transition-all duration-300 cursor-pointer">
                  {/* Icon Container */}
                  <div className="mb-5">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === service.id
                        ? 'bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E]'
                        : 'bg-[#F5F5F5]'
                    }`}>
                      <div className={`transition-all duration-300 ${
                        hoveredCard === service.id
                          ? 'text-white'
                          : 'text-[#1FB6A6]'
                      }`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#064E3B] mb-3 group-hover:text-[#1FB6A6] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#1E293B] text-sm leading-relaxed">
                    {service.description}
                  </p>

                
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-[#064E3B] to-[#0B6E5E] rounded-xl p-8 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">23+</div>
                  <div className="text-white/80 text-sm">Medical Specialties</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80 text-sm">Expert Doctors</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Emergency Services</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                  <div className="text-white/80 text-sm">Hospital Beds</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center"
          >
            <div className="inline-block max-w-2xl bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-[#064E3B] mb-4">
                Need Help Choosing a Service?
              </h3>
              <p className="text-gray-600 mb-6">
                Our medical coordinators are available to help you find the right specialist 
                for your healthcare needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
  onClick={() => {
    window.location.href = "/portfolio/contact";
  }}
  className="px-8 py-3.5 bg-gradient-to-r from-[#1FB6A6] to-[#0B6E5E] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#1FB6A6]/20 transition-all duration-300"
>
  Book Consultation
</button>

                <button className="px-8 py-3.5 bg-white text-[#064E3B] font-semibold rounded-lg border-2 border-[#064E3B] hover:bg-[#064E3B] hover:text-white transition-all duration-300">
                  Call 0303 6828260
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                24/7 emergency services available • Walk-in appointments welcome
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default ServicesSection;