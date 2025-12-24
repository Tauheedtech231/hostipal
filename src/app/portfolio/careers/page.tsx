"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserMd,
  FaStethoscope,
  FaHospital,
  FaHeartbeat,
  FaUsers,
  FaGraduationCap,
  FaShieldAlt,
  FaHandshake,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaArrowRight,
  FaBalanceScale,
  FaUserFriends,
  FaDollarSign,
  FaMedkit,
  FaAward
} from "react-icons/fa";

const CareersPage: React.FC = () => {
  


  const benefits = [
    {
      icon: <FaDollarSign className="text-xl" />,
      title: "Competitive Salary",
      description: "Market-competitive compensation packages with annual reviews"
    },
    {
      icon: <FaMedkit className="text-xl" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for employees and dependents"
    },
    {
      icon: <FaGraduationCap className="text-xl" />,
      title: "Professional Development",
      description: "Continuous training and skill enhancement programs"
    },
    {
      icon: <FaCalendarAlt className="text-xl" />,
      title: "Paid Leave",
      description: "Generous annual, sick, and maternity/paternity leave"
    },
    {
      icon: <FaAward className="text-xl" />,
      title: "Performance Bonuses",
      description: "Recognition and rewards for exceptional performance"
    },
    {
      icon: <FaUserFriends className="text-xl" />,
      title: "Team Environment",
      description: "Supportive and collaborative work culture"
    }
  ];

  const fadeInUp:Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/about/about2.jpg"
      alt="Hospital Team"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Optional dark overlay for text readability (neutral, NOT green) */}
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-center max-w-4xl mx-auto"
    >
      <motion.div variants={fadeInUp} className="mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
          <FaBriefcase className="text-white" />
          <span className="text-white font-medium">Join Our Team</span>
        </div>
      </motion.div>

      <motion.h1
        variants={fadeInUp}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
      >
        Careers at SHMC
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
      >
        Join Siddiq Hospital & Maternity Complex — Where Your Medical Career Thrives
      </motion.p>

 
    </motion.div>
  </div>
</section>


      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Medical Team Collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-3 text-white">
                  <FaUsers className="text-2xl" />
                  <div>
                    <p className="text-sm opacity-90">Join Our Team of</p>
                    <p className="text-xl font-bold">200+ Healthcare Professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[#1FB6A6] font-semibold">
                <FaHandshake className="text-xl" />
                <span>WHY JOIN SHMC</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Join Siddiq Hospital & Maternity Complex?
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Siddiq Hospital & Maternity Complex (SHMC) is dedicated to providing continuous 
                  training and growth opportunities for medical professionals, enabling them to 
                  enhance their skills and expand their expertise.
                </p>
                <p>
                  We consider every team member a vital contributor to the organizations success 
                  and strongly uphold the values of honesty, integrity, sincerity, loyalty, and 
                  patience. At SHMC, you become part of a collaborative community of like-minded 
                  professionals who promote teamwork, positive encouragement, and healthy 
                  competition—creating an environment where you can thrive and excel in your career.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#064E3B]/10 flex items-center justify-center">
                    <FaGraduationCap className="text-[#064E3B]" />
                  </div>
                  <span className="font-medium">Continuous Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#064E3B]/10 flex items-center justify-center">
                    <FaUserFriends className="text-[#064E3B]" />
                  </div>
                  <span className="font-medium">Team Collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#064E3B]/10 flex items-center justify-center">
                    <FaAward className="text-[#064E3B]" />
                  </div>
                  <span className="font-medium">Career Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#064E3B]/10 flex items-center justify-center">
                    <FaHeartbeat className="text-[#064E3B]" />
                  </div>
                  <span className="font-medium">Medical Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equal Opportunity Policy Section */}
      <section className="py-16 bg-gradient-to-r from-[#064E3B] to-[#0A3A2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[#1FB6A6] font-semibold">
                <FaBalanceScale className="text-xl" />
                <span>OUR COMMITMENT</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Equal Opportunity Policy
              </h2>

              <div className="space-y-4 text-white/90">
                <p>
                  Siddiq Hospital & Maternity Complex is committed to equal employment opportunities 
                  for all qualified applicants and employees, without discrimination based on race, 
                  religion, gender, nationality, ethnic origin, age, disability, marital status, or 
                  military status.
                </p>
                <p>
                  This policy applies to all aspects of employment, including recruitment, hiring, 
                  compensation, promotion, transfers, disciplinary actions, training, and participation 
                  in social and recreational programs. All employment decisions are made strictly on 
                  merit and in compliance with applicable laws and regulations.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {["No Discrimination", "Merit-Based", "Inclusive Culture", "Fair Treatment", "Legal Compliance", "Diverse Workforce"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#1FB6A6]" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
                  alt="Diverse Medical Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <FaShieldAlt className="text-2xl" />
                  <div>
                    <p className="text-sm opacity-90">Our Commitment to</p>
                    <p className="text-xl font-bold">Equality & Fairness</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
                  alt="Employee Benefits"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white">
                  <FaMedkit className="text-2xl" />
                  <div>
                    <p className="text-sm opacity-90">Comprehensive</p>
                    <p className="text-xl font-bold">Benefits Package</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[#1FB6A6] font-semibold">
                <FaDollarSign className="text-xl" />
                <span>EMPLOYEE BENEFITS</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Employee Benefits
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Employees at Siddiq Hospital & Maternity Complex receive a comprehensive benefits 
                  package designed to support their well-being and long-term security. These benefits 
                  include Social Security, Employee Old-Age Benefits Institution (EOBI), and mandatory 
                  health insurance coverage, provided in accordance with applicable laws and regulations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-[#064E3B]/10 flex items-center justify-center flex-shrink-0">
                      <div className="text-[#064E3B]">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Join Our Medical Team?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Take the next step in your medical career with Siddiq Hospital & Maternity Complex. 
              We are looking for passionate professionals who share our commitment to excellence in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1FB6A6] text-white font-semibold rounded-lg hover:bg-[#0D9488] transition-all duration-300 hover:scale-105"
              >
                <FaPaperPlane className="mr-2" />
                Contact HR Department
              </Link>
              <a
                href="mailto:careers@shmc.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#064E3B] text-[#064E3B] font-semibold rounded-lg hover:bg-[#064E3B] hover:text-white transition-all duration-300"
              >
                Email Your CV
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              HR Contact: careers@shmc.com • Phone: 0303 6828260 (Ext. 123)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default CareersPage;