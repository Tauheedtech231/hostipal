"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaStethoscope,
  FaUserMd,
  FaAmbulance,
  FaHeartbeat,
  FaHospital,
  FaArrowRight,
  FaShieldAlt,
  FaCertificate,
  FaFirstAid,
  FaBaby,
  FaProcedures,
  FaUserNurse
} from "react-icons/fa";

export const FooterSection: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "/", icon: <FaHospital className="text-sm" /> },
    { name: "About Us", href: "/about", icon: <FaUserNurse className="text-sm" /> },
    { name: "Services", href: "/services", icon: <FaStethoscope className="text-sm" /> },
    { name: "Departments", href: "/departments", icon: <FaProcedures className="text-sm" /> },
    { name: "Doctors", href: "/doctors", icon: <FaUserMd className="text-sm" /> },
    { name: "Appointments", href: "/appointments", icon: <FaClock className="text-sm" /> },
    { name: "Emergency", href: "/emergency", icon: <FaAmbulance className="text-sm" /> },
    { name: "Contact", href: "/contact", icon: <FaPhoneAlt className="text-sm" /> }
  ];

  const medicalServices = [
    "Cardiology & Heart Care",
    "Maternity & Gynecology",
    "Pediatrics & Child Care",
    "Emergency & Trauma Care",
    "General Surgery",
    "Orthopedics",
    "Neurology",
    "Diagnostic Services",
    "ICU & Critical Care",
    "Dental Care"
  ];

  const contactInfo = {
    address: "81-A, Main Boulevard Sabzazar, Near Shah Farid Chowk Lahore, Punjab, Pakistan-54572",
    phone: "0303 6828260",
    emergencyPhone: "0303 6828260 (24/7)",
    email: "info@siddiqhospital.com",
    emergencyEmail: "emergency@siddiqhospital.com",
    opdHours: "9:00 AM - 8:00 PM",
    emergencyHours: "24/7 Available"
  };



  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com/siddiqhospital", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com/siddiqhospital", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com/siddiqhospital", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/siddiqhospital", label: "LinkedIn" },
    { icon: <FaYoutube />, href: "https://youtube.com/siddiqhospital", label: "YouTube" }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Punjab Healthcare Commission",
    "PMDC Registered",
    "Emergency Care Certified"
  ];

  const fadeInUp:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-[#064E3B] text-white overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1FB6A6] via-[#0D9488] to-[#1FB6A6]" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231FB6A6' fill-opacity='0.1'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath d='M30 30h30v30H30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Hospital Info & Logo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-4 border-[#1FB6A6] flex items-center justify-center bg-white/10">
                  <FaHospital className="text-[#1FB6A6] text-2xl" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Siddiq Hospital &</h2>
                <p className="text-[#1FB6A6] text-lg font-semibold">Maternity Complex</p>
                <p className="text-white/80 text-sm mt-2 max-w-lg">
                  Providing compassionate healthcare with advanced medical technology since 2005. 
                  Your health and safety are our top priorities. We offer 24/7 emergency services, 
                  specialized medical departments, and expert healthcare professionals.
                </p>
              </div>
            </div>

            {/* Hospital Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <FaFirstAid className="text-[#1FB6A6] text-lg" />
                <div>
                  <div className="text-white font-semibold text-sm">Emergency</div>
                  <div className="text-white/60 text-xs">24/7</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <FaBaby className="text-[#1FB6A6] text-lg" />
                <div>
                  <div className="text-white font-semibold text-sm">Maternity</div>
                  <div className="text-white/60 text-xs">Care</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <FaUserMd className="text-[#1FB6A6] text-lg" />
                <div>
                  <div className="text-white font-semibold text-sm">Expert</div>
                  <div className="text-white/60 text-xs">Doctors</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <FaCertificate className="text-[#1FB6A6] text-lg" />
                <div>
                  <div className="text-white font-semibold text-sm">Certified</div>
                  <div className="text-white/60 text-xs">Facility</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white border-l-4 border-[#1FB6A6] pl-3">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-white/80 hover:text-[#1FB6A6] transition-colors text-sm group py-2"
                >
                  <span className="mr-3 text-[#1FB6A6] opacity-80">{link.icon}</span>
                  <span className="flex-1">{link.name}</span>
                  <FaArrowRight className="text-[#1FB6A6] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white border-l-4 border-[#1FB6A6] pl-3">Contact Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10 flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#1FB6A6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Address</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10 flex-shrink-0">
                  <FaPhoneAlt className="text-[#1FB6A6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Phone Numbers</h4>
                  <div className="space-y-1">
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} 
                      className="block text-white/70 hover:text-[#1FB6A6] transition-colors text-sm"
                    >
                      📞 General: {contactInfo.phone}
                    </a>
                    <a 
                      href={`tel:${contactInfo.emergencyPhone.replace(/\D/g, '')}`} 
                      className="block text-white/70 hover:text-red-400 transition-colors text-sm"
                    >
                      🚨 Emergency: {contactInfo.emergencyPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10 flex-shrink-0">
                  <FaEnvelope className="text-[#1FB6A6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Email Address</h4>
                  <div className="space-y-1">
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="block text-white/70 hover:text-[#1FB6A6] transition-colors text-sm"
                    >
                      ✉️ {contactInfo.email}
                    </a>
                    <a 
                      href={`mailto:${contactInfo.emergencyEmail}`} 
                      className="block text-white/70 hover:text-red-400 transition-colors text-sm"
                    >
                      🚨 {contactInfo.emergencyEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10 flex-shrink-0">
                  <FaClock className="text-[#1FB6A6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Timings</h4>
                  <div className="space-y-1">
                    <p className="text-white/70 text-sm">🏥 OPD: {contactInfo.opdHours}</p>
                    <p className="text-white/70 text-sm">🚨 Emergency: {contactInfo.emergencyHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Button */}
            <div className="pt-4">
              <a
                href={`tel:${contactInfo.emergencyPhone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <FaAmbulance className="mr-3 animate-pulse" />
                Emergency Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Services & Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Medical Services */}
            <div>
              <h3 className="text-lg font-bold text-white border-l-4 border-[#1FB6A6] pl-3 mb-4">Medical Services</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {medicalServices.slice(0, 9).map((service, index) => (
                  <div key={index} className="flex items-center space-x-2 py-2">
                    <FaHeartbeat className="text-[#1FB6A6] text-xs flex-shrink-0" />
                    <span className="text-white/80 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Social */}
            <div>
              <div className="flex flex-col space-y-6">
                {/* Certifications */}
                <div>
                  <h3 className="text-lg font-bold text-white border-l-4 border-[#1FB6A6] pl-3 mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-sm text-white/80 hover:border-[#1FB6A6]/30 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <FaShieldAlt className="text-[#1FB6A6]" />
                          <span>{cert}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-bold text-white border-l-4 border-[#1FB6A6] pl-3 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border-2 border-white/20 text-white hover:bg-[#1FB6A6] hover:border-[#1FB6A6] hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar - #04332A */}
      <div className="bg-[#04332A] py-6 border-t border-[#1FB6A6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">
                &copy; {new Date().getFullYear()} Siddiq Hospital & Maternity Complex. All rights reserved.
              </p>
              <p className="text-white/50 text-xs mt-1">
                🏥 Providing Quality Healthcare Since 2005 | 🚑 Emergency Services Available 24/7
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link 
                href="/privacy-policy" 
                className="text-white/70 hover:text-[#1FB6A6] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/30">•</span>
              <Link 
                href="/terms-of-service" 
                className="text-white/70 hover:text-[#1FB6A6] transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-white/30">•</span>
              <Link 
                href="/sitemap" 
                className="text-white/70 hover:text-[#1FB6A6] transition-colors"
              >
                Sitemap
              </Link>
              <span className="text-white/30">•</span>
              <Link 
                href="/careers" 
                className="text-white/70 hover:text-[#1FB6A6] transition-colors"
              >
                Careers
              </Link>
              <span className="text-white/30">•</span>
              <Link 
                href="/faq" 
                className="text-white/70 hover:text-[#1FB6A6] transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Floating Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href={`tel:${contactInfo.emergencyPhone.replace(/\D/g, '')}`}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
          aria-label="Emergency Call"
        >
          <FaPhoneAlt className="text-xl" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-28 right-6 z-50 lg:hidden">
        <a
          href="https://wa.me/923036828260"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp Chat"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.032,0C5.398,0,0,5.398,0,12.032s5.398,12.032,12.032,12.032c2.371,0,4.565-0.768,6.347-2.067l4.254,1.414l-1.414-4.254c1.299-1.782,2.067-3.976,2.067-6.347C24.065,5.398,18.667,0,12.032,0z M12.032,21.749c-2.071,0-4.018-0.608-5.654-1.654l-0.192-0.113l-3.835,1.277l1.277-3.835l-0.113-0.192C3.892,16.018,3.284,14.071,3.284,12.032c0-4.828,3.92-8.748,8.748-8.748c4.828,0,8.748,3.92,8.748,8.748C20.78,17.829,16.86,21.749,12.032,21.749z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};