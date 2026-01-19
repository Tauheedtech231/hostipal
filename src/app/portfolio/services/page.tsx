"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState({
    hero: false,
    header: false,
    grid: false,
    stats: false,
    cta: false
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          setIsVisible(prev => ({ ...prev, [targetId]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    if (heroRef.current) {
      heroRef.current.id = "hero";
      observer.observe(heroRef.current);
    }
    if (headerRef.current) {
      headerRef.current.id = "header";
      observer.observe(headerRef.current);
    }
    if (gridRef.current) {
      gridRef.current.id = "grid";
      observer.observe(gridRef.current);
    }
    if (statsRef.current) {
      statsRef.current.id = "stats";
      observer.observe(statsRef.current);
    }
    if (ctaRef.current) {
      ctaRef.current.id = "cta";
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .stagger-delay-1 { animation-delay: 0.05s; opacity: 0; }
        .stagger-delay-2 { animation-delay: 0.1s; opacity: 0; }
        .stagger-delay-3 { animation-delay: 0.15s; opacity: 0; }
        .stagger-delay-4 { animation-delay: 0.2s; opacity: 0; }
        .stagger-delay-5 { animation-delay: 0.25s; opacity: 0; }
        .stagger-delay-6 { animation-delay: 0.3s; opacity: 0; }
        .stagger-delay-7 { animation-delay: 0.35s; opacity: 0; }
        .stagger-delay-8 { animation-delay: 0.4s; opacity: 0; }
        .stagger-delay-9 { animation-delay: 0.45s; opacity: 0; }
        .stagger-delay-10 { animation-delay: 0.5s; opacity: 0; }
        .stagger-delay-11 { animation-delay: 0.55s; opacity: 0; }
        .stagger-delay-12 { animation-delay: 0.6s; opacity: 0; }
        .stagger-delay-13 { animation-delay: 0.65s; opacity: 0; }
        .stagger-delay-14 { animation-delay: 0.7s; opacity: 0; }
        .stagger-delay-15 { animation-delay: 0.75s; opacity: 0; }
        .stagger-delay-16 { animation-delay: 0.8s; opacity: 0; }
        .stagger-delay-17 { animation-delay: 0.85s; opacity: 0; }
        .stagger-delay-18 { animation-delay: 0.9s; opacity: 0; }
        .stagger-delay-19 { animation-delay: 0.95s; opacity: 0; }
        .stagger-delay-20 { animation-delay: 1s; opacity: 0; }
        .stagger-delay-21 { animation-delay: 1.05s; opacity: 0; }
        .stagger-delay-22 { animation-delay: 1.1s; opacity: 0; }
        .stagger-delay-23 { animation-delay: 1.15s; opacity: 0; }

        .card-hover-effect {
          transition: all 0.3s ease;
        }

        .card-hover-effect:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .opacity-0 {
          opacity: 0;
        }
      `}</style>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/doctors/ser.jpg"
            alt="Medical Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div 
          ref={heroRef}
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 transition-all duration-700 ${
            isVisible.hero ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="space-y-8">
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
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible.header ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#064E3B] mb-6">
              Specialized Medical Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of medical specialties, each dedicated to 
              providing exceptional patient care and treatment outcomes.
            </p>
          </div>

          {/* Services Grid */}
          <div 
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card-hover-effect h-full p-6 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-xl hover:border-[#1FB6A6] transition-all duration-300 cursor-pointer ${
                  isVisible.grid ? `animate-fade-in-up stagger-delay-${index + 1}` : 'opacity-0'
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
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
            ))}
          </div>

          {/* Stats Banner */}
          <div 
            ref={statsRef}
            className={`mt-20 transition-all duration-700 ${
              isVisible.stats ? 'animate-slide-in-up' : 'opacity-0'
            }`}
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
          </div>

          {/* CTA Section */}
          <div 
            ref={ctaRef}
            className={`mt-20 text-center transition-all duration-700 ${
              isVisible.cta ? 'animate-scale-in' : 'opacity-0'
            }`}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;