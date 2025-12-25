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
  FaDirections
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ContactCard {
  title: string;
  email: string;
  phone: string;
  department?: string;
}

interface ContactData {
  cards: ContactCard[];
  socialLinks: { platform: string; url: string }[];
  operatingHours?: string;
}

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoading] = useState(false);
  
  const [contactData] = useState<ContactData>({
    cards: [
      {
        title: "Main Hospital",
        email: "romanasher@hotmail.com",
        phone: "0303 6828260",
        department: "General Inquiries & Appointments"
      }
    ],
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/SiddiqHeartMedicalComplex" },
      { platform: "instagram", url: "https://instagram.com/siddiqhospital" },
      { platform: "linkedin", url: "https://linkedin.com/company/siddiqhospital" },
    ],
    operatingHours: "24/7 Emergency Services • OPD: 9:00 AM - 8:00 PM Daily",
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
    if (!heroRef.current) return;

    // Hero animations
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

    // Form section animations
    const ctx = gsap.context(() => {
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
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment Form submitted:", formData);
    alert("Thank you! Your appointment request has been submitted. We will contact you within 24 hours.");
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
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/contact.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <FaHeartbeat className="text-white text-4xl" />
            </div>
          </div>

          {/* Title */}
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Siddiq Hospital & Maternity Complex
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Providing Compassionate Healthcare with Advanced Medical Technology Since 2005
          </p>

          {/* Location */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <FaMapMarkerAlt className="text-white text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-white">Our Location</h3>
              </div>
              <p className="text-white/90 mb-6 text-lg">
                Sohawa Stop, Circular Road, Daska, Pakistan
              </p>
              <a
                href="https://www.google.com/maps?api=1&destination=32.340264325439,74.350928656081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:underline font-medium text-lg"
              >
                <FaDirections className="mr-3" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        ref={sectionRef}
        className="relative bg-white"
      >
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2 bg-[#064E3B] text-white p-8 lg:p-16">
            <div className="h-full flex flex-col justify-between contact-info">
              {/* Header */}
              <div className="space-y-8">
                <div>
                  <span className="text-[#1FB6A6] text-sm font-light tracking-widest uppercase">
                    Get in Touch
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold">
                  Contact SHMC
                </h1>
                
                <p className="text-white/80 text-lg max-w-lg">
                  Connect with us for medical inquiries or appointments.
                </p>
              </div>

              {/* Emergency Banner */}
              <div className="my-12 p-8 bg-white/10 rounded-lg border border-[#1FB6A6]/30">
                <div className="flex items-center">
                  <div className="contact-icon mr-6">
                    <div className="w-14 h-14 rounded-full border-2 border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                      <FaAmbulance className="text-[#1FB6A6] text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      24/7 Emergency Services
                    </h3>
                    <p className="text-white/80 mb-3">
                      Immediate medical attention available round the clock
                    </p>
                    <a 
                      href="tel:+92-339-398-8222"
                      className="inline-flex items-center text-[#1FB6A6] hover:text-white transition-colors font-medium text-lg"
                    >
                      <FaPhone className="mr-3" />
                     Call: +92-339-398-8222
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-8 mb-12">
                {contactData.cards.map((contact, index) => (
                  <div 
                    key={index} 
                    className="p-8 border border-white/10 rounded-lg hover:border-[#1FB6A6]/30 transition-all duration-300 bg-white/5"
                  >
                    <div className="flex items-start mb-6">
                      <div className="contact-icon mr-6">
                        <div className="w-14 h-14 rounded-full border-2 border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                          <FaBuilding className="text-[#1FB6A6] text-lg" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {contact.title}
                        </h3>
                        {contact.department && (
                          <span className="inline-block px-4 py-1 text-sm font-medium bg-[#1FB6A6]/20 text-[#1FB6A6] rounded-full">
                            {contact.department}
                          </span>
                        )}
                        <div className="w-20 h-0.5 bg-[#1FB6A6] mt-4 mb-6"></div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Email */}
                      <div className="flex items-center">
                        <div className="contact-icon mr-5">
                          <div className="w-12 h-12 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                            <FaEnvelope className="text-[#1FB6A6]" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-2">Email</p>
                          <a 
                            href={`mailto:${contact.email}`}
                            className="text-white hover:text-[#1FB6A6] transition-colors"
                          >
                            {contact.email}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center">
                        <div className="contact-icon mr-5">
                          <div className="w-12 h-12 rounded-full border border-[#1FB6A6] flex items-center justify-center bg-[#1FB6A6]/10">
                            <FaPhone className="text-[#1FB6A6]" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-2">Phone</p>
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

              {/* Operating Hours */}
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <div className="flex items-center mb-4">
                  <FaClock className="text-[#1FB6A6] mr-3" />
                  <h3 className="text-lg font-semibold text-white">Operating Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Emergency</span>
                    <span className="text-white font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">OPD Hours</span>
                    <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="lg:w-1/2 bg-white p-8 lg:p-16 flex items-center justify-center">
            <div className="w-full max-w-lg contact-form">
              <div className="mb-12">
                <h2 className="text-[1.5rem] font-bold text-[#064E3B] mb-4">
                  Book Your Appointment
                </h2>
                <p className="text-[0.9rem] text-[#1E293B]">
                  Fill out the form below and our team will schedule your appointment within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="form-element">
                  <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-3" htmlFor="name">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <FaUser className="text-gray-400 text-[0.85rem]" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <div className="form-element">
                    <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-3" htmlFor="email">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <FaEnvelope className="text-gray-400 text-[0.85rem]" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="form-element">
                    <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-3" htmlFor="phone">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <FaPhone className="text-gray-400 text-[0.85rem]" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                        placeholder="0303 6828260"
                      />
                    </div>
                  </div>
                </div>

                {/* Department Selection */}
                <div className="form-element">
                  <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-3" htmlFor="department">
                    Select Department *
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                  >
                    <option value="">Choose a department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="gynecology">Gynecology</option>
                    <option value="surgery">Surgery</option>
                  </select>
                </div>

                {/* Appointment Timing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div className="form-element">
                    <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-3" htmlFor="preferredDate">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="form-element">
                    <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-3" htmlFor="preferredTime">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 text-[0.85rem]"
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
                  <label className="block text-[#1E293B] text-[0.9rem] font-medium mb-3" htmlFor="message">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-lg focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20 focus:outline-none transition-all duration-300 resize-none text-[0.85rem]"
                    placeholder="Please provide any additional details about your condition or specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="form-element pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#1FB6A6] text-white font-semibold rounded-lg hover:bg-[#0D9488] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-[0.9rem]"
                  >
                    <FaPaperPlane className="mr-3" />
                    Book Appointment Now
                  </button>
                </div>

                {/* Privacy Notice */}
                <div className="form-element pt-6">
                  <p className="text-gray-500 text-[0.9rem] text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-[#064E3B] hover:underline font-medium">
                      Privacy Policy
                    </a>
                    . Your information is confidential and secure.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;