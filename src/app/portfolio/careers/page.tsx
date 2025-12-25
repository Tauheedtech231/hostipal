"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaBriefcase,
  FaHandshake,
  FaBalanceScale,
  FaDollarSign,
  FaPaperPlane,
  FaArrowRight
} from "react-icons/fa";

const CareersPage: React.FC = () => {
  const fadeInUp: Variants = {
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

  const staggerContainer: Variants = {
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
        <div className="absolute inset-0">
          <Image
            src="/about/about2.jpg"
            alt="Hospital Team"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                <FaBriefcase className="text-white" />
                <span className="text-white font-medium">Join Our Team</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 text-[#1FB6A6] font-semibold">
                <FaHandshake className="text-xl" />
                <span>WHY JOIN SHMC</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Join Siddiq Hospital & Maternity Complex?
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Siddiq Hospital and Maternity Complex (SHMC) is committed to providing training 
                  and opportunities for medical professionals to enhance their skills and expand 
                  their expertise.
                </p>
                <p>
                  We view each team member as an integral part of our organization's success, 
                  and we uphold values of honesty, integrity, sincerity, loyalty, and patience 
                  among SHMC employees. At SHMC, you will be part of a community of like-minded 
                  professionals who foster camaraderie, offer positive reinforcement, and encourage 
                  healthy competition, creating an environment for you to excel in your field.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equal Opportunity Policy Section */}
      <section className="py-20 bg-gradient-to-r from-[#064E3B] to-[#0A3A2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 text-[#1FB6A6] font-semibold">
                <FaBalanceScale className="text-xl" />
                <span>OUR COMMITMENT</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Equal Opportunity Policy
              </h2>

              <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                <p>
                  Siddiq Hospital and Maternity Complex is committed to providing equal opportunities 
                  in all employment practices for qualified employees and applicants, irrespective of 
                  race, religion, gender, nationality, origin, age, disability, marital status, and 
                  military status.
                </p>
                <p>
                  This policy encompasses all facets of the employment relationship, encompassing 
                  recruitment, hiring, compensation, promotion, transfer, disciplinary action, training, 
                  as well as social and recreational programs. All employment decisions will be made 
                  without unlawful discrimination on any prohibited basis.
                </p>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 text-[#1FB6A6] font-semibold">
                <FaDollarSign className="text-xl" />
                <span>EMPLOYEE BENEFITS</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Employee Benefits
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Employees at Siddiq Hospital and Maternity Complex enjoy a comprehensive range 
                  of benefits. Several programs, including Social Security, Employee Old-Age Benefits 
                  Institution (EOBI), and mandatory health insurance coverage, are provided to all 
                  employees in accordance with regulations and laws.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Ready to Join Our Medical Team?
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Take the next step in your medical career with Siddiq Hospital & Maternity Complex. 
              We are looking for passionate professionals who share our commitment to excellence in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/portfolio/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#1FB6A6] text-white font-semibold rounded-lg hover:bg-[#0D9488] transition-all duration-300 hover:scale-105"
              >
                <FaPaperPlane className="mr-3" />
                Contact HR Department
              </Link>
              <a
                href="mailto:careers@shmc.com"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-[#064E3B] text-[#064E3B] font-semibold rounded-lg hover:bg-[#064E3B] hover:text-white transition-all duration-300"
              >
                Email Your CV
              </a>
            </div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;