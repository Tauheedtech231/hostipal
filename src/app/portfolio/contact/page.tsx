"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaStethoscope,
  FaCalendarCheck,
  FaClock,
  FaHeartbeat,
  FaAmbulance,
  FaUserMd,
  FaBaby,
  FaHospital,
  FaMapMarker,
  FaDirections
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ContactCard {
  title: string;
  email: string;
  location: string;
  phone: string;
  department?: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

interface ContactData {
  cards: ContactCard[];
  socialLinks: SocialLink[];
  formHeader?: string;
  formDescription?: string;
  operatingHours?: string;
  emergencyContact?: string;
}

 const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [contactData, setContactData] = useState<ContactData>({
    cards: [
      {
        title: "Siddique Heart Medical Complex",
        email: "romanasher@hotmail.com",
        location: "Sohawa Stop, Circular Road, Daska, Pakistan",
        phone: "0303 6828260",
        department: "Main Hospital"
      },
      {
        title: "Emergency Department",
        email: "emergency@shmc.com.pk",
        location: "Sohawa Stop, Circular Road, Daska, Pakistan",
        phone: "0303 6828260",
        department: "24/7 Emergency Care"
      },
      {
        title: "Appointments & OPD",
        email: "appointments@shmc.com.pk",
        location: "Sohawa Stop, Circular Road, Daska, Pakistan",
        phone: "0303 6828260",
        department: "Outpatient Department"
      }
    ],
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/SiddiqHeartMedicalComplex" },
      { platform: "instagram", url: "https://instagram.com/shmc" },
      { platform: "linkedin", url: "https://linkedin.com/company/shmc" },
    ],
    formHeader: "Book Your Appointment",
    formDescription: "Fill out the form below and our team will schedule your appointment within 24 hours.",
    operatingHours: "24/7 Emergency Services • OPD: 9:00 AM - 8:00 PM Daily",
    emergencyContact: "Emergency: 0303 6828260 (24/7)"
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector(".hero-title"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3
        }
      );

      gsap.fromTo(
        heroRef.current.querySelector(".hero-subtitle"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.6
        }
      );

      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-stats-item"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.9
        }
      );

      gsap.fromTo(
        heroRef.current.querySelector(".scroll-indicator"),
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          delay: 1.5
        }
      );
    }

    if (contactData.cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Left side animations
      gsap.fromTo(
        ".contact-info",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Right side animations
      gsap.fromTo(
        ".contact-form",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Icon animations
      gsap.fromTo(
        ".contact-icon",
        { scale: 0, rotation: -90 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Form element animations
      gsap.fromTo(
        ".form-element",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [contactData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Appointment Form submitted:", formData);
    alert("Thank you! Your appointment request has been submitted. We will contact you within 24 hours.");
    // Reset form
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      department: "", 
      message: "",
      preferredDate: "",
      preferredTime: ""
    });
  };

  // Helper function to get social icon
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return <FaLinkedin />;
      case 'instagram':
        return <FaInstagram />;
      case 'facebook':
        return <FaFacebook />;
      default:
        return null;
    }
  };

  // Helper function to get department icon
  const getDepartmentIcon = (department: string) => {
    switch (department?.toLowerCase()) {
      case 'main hospital':
        return <FaBuilding />;
      case '24/7 emergency care':
        return <FaStethoscope />;
      case 'outpatient department':
        return <FaCalendarCheck />;
      default:
        return <FaBuilding />;
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section id="contact" className="relative min-h-screen flex items-center justify-center bg-[#064E3B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1FB6A6]"></div>
            <span className="ml-3 text-white">Loading contact information...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section with Background Image */}
     <section
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: "url('/contact.jpg')",
  }}
>
  {/* Neutral dark overlay (NOT green) */}
  <div className="absolute inset-0 bg-black/45"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

    {/* Logo / Badge */}
    <div className="mb-8 flex justify-center">
      <div className="w-24 h-24 rounded-full border-4 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <FaHeartbeat className="text-white text-4xl" />
      </div>
    </div>

    {/* Main Title */}
    <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      Siddiq Hospital & Maternity Complex
    </h1>

    {/* Subtitle */}
    <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
      Providing Compassionate Healthcare with Advanced Medical Technology Since 2005
    </p>

    {/* Google Map Location */}
    <div className="mb-12 max-w-3xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-center mb-4">
          <FaMapMarker className="text-white text-2xl mr-3" />
          <h3 className="text-xl font-semibold text-white">Our Location</h3>
        </div>
        <p className="text-white/90 mb-4">
          81-A, Main Boulevard Sabzazar, Near Shah Farid Chowk Lahore, Punjab, Pakistan-54572
        </p>
        <a
          href="https://www.google.com/maps?ll=31.551055,73.837611&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&q=81-A,+Main+Boulevard+Sabzazar,+Near+Shah+Farid+Chowk+Lahore,+Punjab,+Pakistan-54572"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white hover:underline font-medium"
        >
          <FaDirections className="mr-2" />
          Get Directions on Google Maps
        </a>
      </div>
    </div>

  </div>
</section>


      {/* Contact Form Section (Existing) */}
      <section
        id="contact-form"
        ref={sectionRef}
        className="relative bg-white"
      >
        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Contact Info (Deep Emerald Background) */}
          <div className="lg:w-1/2 bg-[#064E3B] text-white p-8 lg:p-16">
            <div className="h-full flex flex-col justify-between contact-info">
              {/* Section Header */}
              <div>
                <div className="mb-8">
                  <span className="text-[#1FB6A6] text-sm font-light tracking-widest uppercase">
                    Get in Touch
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Contact SHMC
                </h1>
                
                <p className="text-white/80 text-lg mb-12 max-w-lg">
                  Connect with our specialized departments for medical inquiries, appointments, or emergency assistance.
                </p>
              </div>

              {/* Emergency Banner */}
              <div className="mb-8 p-6 bg-white/10 rounded-lg border border-[#1FB6A6]/30">
                <div className="flex items-center">
                  <div className="contact-icon mr-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                      <FaStethoscope className="text-[#1FB6A6] text-lg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      24/7 Emergency Services
                    </h3>
                    <p className="text-white/80">
                      Immediate medical attention available round the clock
                    </p>
                    <a 
                      href={`tel:${contactData.cards[1].phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center mt-2 text-[#1FB6A6] hover:text-white transition-colors font-medium"
                    >
                      <FaPhone className="mr-2" />
                      Call Emergency: {contactData.cards[1].phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-8 mb-12">
                {contactData.cards.map((contact, index) => (
                  <div 
                    key={index} 
                    className="p-6 border border-white/10 rounded-lg hover:border-[#1FB6A6]/30 transition-all duration-300 bg-white/5"
                  >
                    <div className="flex items-start mb-4">
                      <div className="contact-icon mr-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                          {getDepartmentIcon(contact.department || '')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {contact.title}
                        </h3>
                        {contact.department && (
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-[#1FB6A6]/20 text-[#1FB6A6] rounded-full">
                            {contact.department}
                          </span>
                        )}
                        <div className="w-16 h-0.5 bg-[#1FB6A6] mt-3 mb-4"></div>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                      {/* Email */}
                      <div className="flex items-center">
                        <div className="contact-icon mr-4">
                          <div className="w-10 h-10 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                            <FaEnvelope className="text-[#1FB6A6]" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">Email</p>
                          <a 
                            href={`mailto:${contact.email}`}
                            className="text-white hover:text-[#1FB6A6] transition-colors"
                          >
                            {contact.email}
                          </a>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start">
                        <div className="contact-icon mr-4 mt-1">
                          <div className="w-10 h-10 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                            <FaMapMarkerAlt className="text-[#1FB6A6]" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">Location</p>
                          <p className="text-white">
                            {contact.location}
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center">
                        <div className="contact-icon mr-4">
                          <div className="w-10 h-10 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                            <FaPhone className="text-[#1FB6A6]" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">Phone</p>
                          <a 
                            href={`tel:${contact.phone.replace(/\D/g, '')}`}
                            className="text-white hover:text-[#1FB6A6] transition-colors"
                          >
                            {contact.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Section */}
              <div className="pt-8 border-t border-white/10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="contact-icon mr-3">
                        <div className="w-8 h-8 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                          <FaClock className="text-[#1FB6A6] text-sm" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">
                          {contactData.operatingHours}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      {contactData.socialLinks.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-[#1FB6A6] text-[#1FB6A6] hover:bg-[#1FB6A6] hover:text-white transition-all duration-300 flex items-center justify-center"
                        >
                          {getSocialIcon(social.platform)}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-sm">
                      &copy; {new Date().getFullYear()} Siddique Heart Medical Complex. All Rights Reserved.
                    </p>
                    <p className="text-white/40 text-xs mt-1">
                      Providing Quality Healthcare Since 2005
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Appointment Form (White Background) - Updated Font Sizes */}
          <div className="lg:w-1/2 bg-white p-8 lg:p-16 flex items-center justify-center">
            <div className="w-full max-w-lg contact-form">
              {/* Heading: 1.5rem (≈ 24px) */}
              <div className="mb-10">
                <h2 className="text-[1.5rem] font-bold text-[#064E3B] mb-3">
                  {contactData.formHeader}
                </h2>
                {/* Supporting Text: 0.9rem */}
                <p className="text-[0.9rem] text-[#1E293B]">
                  {contactData.formDescription}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="form-element">
                  <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <FaUser className="text-gray-400 text-[0.85rem]" />
                    </div>
                    {/* Input Text: 0.85rem */}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email Field */}
                  <div className="form-element">
                    <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <FaEnvelope className="text-gray-400 text-[0.85rem]" />
                      </div>
                      {/* Input Text: 0.85rem */}
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="form-element">
                    <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <FaPhone className="text-gray-400 text-[0.85rem]" />
                      </div>
                      {/* Input Text: 0.85rem */}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                        placeholder="0303 6828260"
                      />
                    </div>
                  </div>
                </div>

                {/* Department Selection */}
                <div className="form-element">
                  <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-2" htmlFor="department">
                    Select Department *
                  </label>
                  {/* Input Text: 0.85rem */}
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                  >
                    <option value="">Choose a department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="gynecology">Gynecology</option>
                    <option value="surgery">Surgery</option>
                    <option value="internal-medicine">Internal Medicine</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="neurology">Neurology</option>
                    <option value="diagnostics">Diagnostics</option>
                  </select>
                </div>

                {/* Appointment Timing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div className="form-element">
                    <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-2" htmlFor="preferredDate">
                      Preferred Date
                    </label>
                    {/* Input Text: 0.85rem */}
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="form-element">
                    <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-2" htmlFor="preferredTime">
                      Preferred Time
                    </label>
                    {/* Input Text: 0.85rem */}
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-element">
                  <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-2" htmlFor="message">
                    Additional Information
                  </label>
                  {/* Input Text: 0.85rem */}
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 resize-none text-[0.85rem]"
                    placeholder="Please provide any additional details about your condition or specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="form-element pt-2">
                  {/* Submit Button Text: 0.9rem */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#1FB6A6] text-white font-semibold rounded-lg hover:bg-[#0D9488] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-[0.9rem]"
                  >
                    <FaPaperPlane className="mr-3" />
                    Book Appointment Now
                  </button>
                </div>

                {/* Privacy Notice */}
                <div className="form-element pt-4">
                  {/* Supporting Text: 0.9rem */}
                  <p className="text-gray-500 text-[0.9rem] text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-[#064E3B] hover:underline font-medium">
                      Privacy Policy
                    </a>
                    . Your information is confidential and secure.
                  </p>
                </div>
              </form>

              {/* Contact Methods Alternative */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="text-center p-5 border border-gray-100 rounded-lg hover:border-[#1FB6A6]/20 transition-all duration-300 bg-[#F5F5F5]">
                    <div className="w-10 h-10 rounded-full bg-[#1FB6A6]/10 flex items-center justify-center mx-auto mb-3">
                      <FaEnvelope className="text-[#064E3B] text-[0.9rem]" />
                    </div>
                    <p className="text-gray-600 text-[0.85rem] mb-1">Email Response Time</p>
                    <p className="font-semibold text-[#064E3B] text-[0.9rem]">Within 24 Hours</p>
                  </div>
                  <div className="text-center p-5 border border-gray-100 rounded-lg hover:border-[#1FB6A6]/20 transition-all duration-300 bg-[#F5F5F5]">
                    <div className="w-10 h-10 rounded-full bg-[#1FB6A6]/10 flex items-center justify-center mx-auto mb-3">
                      <FaPhone className="text-[#064E3B] text-[0.9rem]" />
                    </div>
                    <p className="text-gray-600 text-[0.85rem] mb-1">Phone Response Time</p>
                    <p className="font-semibold text-[#064E3B] text-[0.9rem]">Within 2 Hours</p>
                  </div>
                </div>
                
                {/* Quick Contact Info */}
                <div className="mt-5 p-4 bg-[#064E3B]/5 rounded-lg border border-[#064E3B]/10">
                  {/* Supporting Text: 0.9rem */}
                  <p className="text-center text-[#064E3B] text-[0.9rem]">
                    <strong>Urgent Medical Attention?</strong> Call our emergency line directly:{" "}
                    <a 
                      href={`tel:${contactData.cards[1].phone.replace(/\D/g, '')}`}
                      className="text-[#1FB6A6] hover:underline font-semibold"
                    >
                      {contactData.cards[1].phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactSection;