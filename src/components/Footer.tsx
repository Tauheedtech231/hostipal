"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, 
  FaInstagram, FaHospital, FaArrowRight, FaHeartbeat 
} from "react-icons/fa";

export const FooterSection: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/portfolio/about" },
    { name: "Services", href: "/portfolio/services" },
    { name: "Departments", href: "/portfolio/department" },
    { name: "Contact", href: "/portfolio/contact" }
  ];

  const contactInfo = {
    address: "Sohawa Stop, Circular Road, Daska, Pakistan",
    phone: "0303 6828260",
    email: "info@siddiqhospital.com",
    phoneHref: "tel:03036828260",
    emailHref: "mailto:info@siddiqhospital.com"
  };

  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      href: "https://web.facebook.com/SiddiqHeartMedicalComplex/reviews", 
      label: "Facebook",
      color: "hover:bg-[#1877F2] hover:text-white"
    },
    { 
      icon: <FaInstagram />, 
      href: "https://www.instagram.com/siddiqhospital/", 
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-[#405DE6] hover:via-[#E4405F] hover:to-[#FFDC80] hover:text-white"
    }
  ];

  // Function to handle navigation with reload
  const handleNavigation = (href: string) => {
    window.location.href = href;
  };

  return (
    <footer className="bg-gradient-to-b from-[#064E3B] to-[#04332A] text-white">
      {/* Decorative Top Border */}
      <div className="h-1.5 bg-gradient-to-r from-[#1FB6A6] via-[#0D9488] to-[#1FB6A6]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-10">
          
          {/* Hospital Info - Enhanced */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1FB6A6] to-[#0B6E5E] flex items-center justify-center shadow-lg"
              >
                <FaHospital className="text-xl text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-white">Siddiq Heart</h2>
                <p className="text-[#1FB6A6] text-base font-semibold mt-1">Medical Complex</p>
              </div>
            </div>
            <p className="text-white/85 text-base leading-relaxed max-w-sm">
              Providing compassionate healthcare with advanced technology since 2005. 
              Your health and well-being are our top priority.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <FaHeartbeat className="text-[#1FB6A6] animate-pulse" />
              <span>24/7 Emergency Services Available</span>
            </div>
          </div>

          {/* Quick Links - Enhanced - Now using anchor tags */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-l-4 border-[#1FB6A6] pl-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                  className="group flex items-center gap-2 text-white/85 hover:text-[#1FB6A6] text-base transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
                >
                  <FaArrowRight className="text-[#1FB6A6] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-l-4 border-[#1FB6A6] pl-4">
              Contact Info
            </h3>
            
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <FaMapMarkerAlt className="text-[#1FB6A6] mt-1 text-lg flex-shrink-0" />
                <p className="text-white/85 text-base leading-relaxed">
                  {contactInfo.address}
                </p>
              </motion.div>
              
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
              >
                <FaPhoneAlt className="text-[#1FB6A6] text-lg group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white/85 text-base font-medium group-hover:text-[#1FB6A6] transition-colors duration-300">
                  {contactInfo.phone}
                </span>
              </a>
              
              <a
                href={contactInfo.emailHref}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
              >
                <svg
                  className="text-[#1FB6A6] text-lg group-hover:scale-110 transition-transform duration-300 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white/85 text-base font-medium group-hover:text-[#1FB6A6] transition-colors duration-300">
                  {contactInfo.email}
                </span>
              </a>
              
              <div className="flex items-center gap-4 p-3 text-white/85 text-base">
                <FaClock className="text-[#1FB6A6] text-lg" />
                <span className="font-medium">24/7 Emergency Service</span>
              </div>
            </div>

            {/* Social Media - Enhanced */}
            <div className="pt-4">
              <p className="text-white/70 text-sm mb-3">Follow Us</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.15, 
                      y: -3,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/85 transition-all duration-300 ${social.color} hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#1FB6A6] rounded-full" />
        </div>

        {/* Copyright - Enhanced */}
       <div className="text-center pt-4">
  <p className="text-white/70 text-sm">
    © {new Date().getFullYear()} Siddiq Heart & Medical Complex. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};