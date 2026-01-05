"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  FaAmbulance, 
  FaStethoscope, 
  FaProcedures, 
  FaFemale, 
  FaHeartbeat,
  FaBone,
  FaHandsHelping,
  FaAllergies,
  FaVial,
  FaHospital,
  FaStar,
  FaUserMd,
  FaShieldAlt,
  FaHandHoldingHeart
} from "react-icons/fa";

const DepartmentsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const departments = [
    { 
      icon: <FaAmbulance className="h-8 w-8" />, 
      title: "Emergency Department", 
      description: "24/7 urgent care unit with advanced life support and trauma care facilities. Immediate medical attention for critical conditions."
    },
    { 
      icon: <FaStethoscope className="h-8 w-8" />, 
      title: "General Healthcare", 
      description: "Comprehensive primary care services with modern diagnostics, preventive medicine, and routine health check-ups."
    },
    { 
      icon: <FaProcedures className="h-8 w-8" />, 
      title: "Surgery Department", 
      description: "Advanced surgical unit for operations and procedures with state-of-the-art operation theaters and expert surgeons."
    },
    { 
      icon: <FaFemale className="h-8 w-8" />, 
      title: "Women's Well-being", 
      description: "Specialized obstetrics and women's health services including prenatal care, delivery, and postnatal support."
    },
    { 
      icon: <FaHeartbeat className="h-8 w-8" />, 
      title: "Cardiology Department", 
      description: "Comprehensive heart and cardiovascular care with advanced diagnostics, treatment, and rehabilitation."
    },
    { 
      icon: <FaBone className="h-8 w-8" />, 
      title: "Orthopedics & Spine", 
      description: "Specialized treatments for bone, joint & spine conditions with advanced surgical and non-surgical options."
    },
    { 
      icon: <FaHandsHelping className="h-8 w-8" />, 
      title: "Physiotherapy", 
      description: "Comprehensive rehabilitation and therapy support for recovery, mobility improvement, and pain management."
    },
    { 
      icon: <FaAllergies className="h-8 w-8" />, 
      title: "Dermatology", 
      description: "Advanced skin care, cosmetic treatments, laser therapy, and management of skin diseases."
    },
    { 
      icon: <FaVial className="h-8 w-8" />, 
      title: "Laboratory", 
      description: "State-of-the-art lab and diagnostic testing support with accurate results for effective treatment planning."
    }
  ];

  const keyFeatures = [
    { icon: <FaHospital />, title: "100+ Beds", description: "Modern inpatient facilities" },
    { icon: <FaUserMd />, title: "Expert Specialists", description: "Highly qualified medical team" },
    { icon: <FaStar />, title: "Advanced Technology", description: "Latest medical equipment" },
    { icon: <FaShieldAlt />, title: "Quality Care", description: "International standards" }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#064E3B]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#1FB6A6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-full">
              <div className="w-2 h-2 bg-[#064E3B] rounded-full animate-pulse" />
              <span className="text-[#064E3B] text-sm font-semibold tracking-wider uppercase">
                Our Specialized Departments
              </span>
            </div>
          </div>

          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#064E3B] mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Comprehensive Medical Services
          </h2>

          <p 
            className={`text-[#1E293B] text-lg md:text-xl max-w-3xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Providing exceptional healthcare across specialized departments with advanced technology and compassionate care.
          </p>
        </div>

        {/* Key Features - Top Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full text-center flex flex-col items-center transform transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="p-4 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-2xl mb-4 text-2xl text-[#064E3B]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#064E3B] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#1E293B]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Departments Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col transform ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } hover:-translate-y-2`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="p-8 pb-4">
                  <div className="p-5 w-fit mx-auto bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 text-[#064E3B]">
                    {dept.icon}
                  </div>
                </div>
                <div className="p-6 text-center flex-1">
                  <h3 className="text-xl font-bold text-[#064E3B] mb-3">{dept.title}</h3>
                  <p className="text-[#1E293B] text-sm leading-relaxed">{dept.description}</p>
                </div>
                <div className="h-1.5 w-full bg-gradient-to-r from-[#064E3B] to-[#1FB6A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-20 transition-all duration-700 delay-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-r from-[#064E3B] to-[#0B6E5E] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Emergency Assistance?</h3>
              <p className="text-white/90 text-lg mb-8">Our Emergency Department is staffed 24/7 with experienced medical professionals.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = "tel:+924235110072"}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#064E3B] rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FaAmbulance className="animate-pulse" /> Emergency: +92 423 5110072
                </button>
                <button 
                  onClick={() => window.location.href = "/portfolio/contact"}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#064E3B] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FaHandHoldingHeart className="animate-pulse" /> Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS animations */}
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default DepartmentsSection;