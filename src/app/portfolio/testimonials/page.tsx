"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Xtylish Bhatti", text: "One of the best hospitals in our region. Dr. Roman Asher Mian is the best cardiologist, and Dr. Shazia Roman is the best gynecologist.", rating: 5 },
  { id: 2, name: "Husnain Dar", text: "Heart ki har waqt emergency ke liye best hospital hai. (Best hospital for heart emergencies.)", rating: 5 },
  { id: 3, name: "Ahmed Afzaal", text: "Best cardiac and infertility care center.", rating: 5 },
  { id: 4, name: "Sarah Khan", text: "Excellent service and care. The staff is very professional and attentive.", rating: 5 },
  { id: 5, name: "Ali Raza", text: "State-of-the-art facilities with compassionate care. Highly recommended!", rating: 5 },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    if (isMobile || index === activeIndex) {
      return { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 10 };
    }

    const total = testimonials.length;
    const angleStep = (2 * Math.PI) / (total - 1);
    const radius = 300;
    
    // Position other cards in a circle around center
    const offsetIndex = index > activeIndex ? index - 1 : index;
    const angle = offsetIndex * angleStep;
    
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    // Calculate distance for scale and opacity
    const distance = Math.sqrt(x * x + y * y);
    const scale = 0.6 + (1 - distance / (radius * 2)) * 0.4;
    const opacity = 0.3 + (1 - distance / (radius * 2)) * 0.7;

    return { x, y, scale: Math.max(0.5, scale), opacity, zIndex: 1 };
  };

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] rounded-full mb-6">
            <div className="w-2 h-2 bg-[#1FB6A6] rounded-full" />
            <span className="text-sm font-medium text-[#1E293B]">PATIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our patients about their experiences and the quality care they received at our hospital.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {!isMobile && (
            <>
              {/* Center Guide */}
              <div className="absolute w-24 h-24 border border-dashed border-[#1FB6A6]/20 rounded-full" />
              
              {/* Cards */}
              {testimonials.map((testimonial, index) => {
                const position = getPosition(index);
                const isActive = index === activeIndex;
                
                return (
                  <motion.div
                    key={testimonial.id}
                    className={`absolute cursor-pointer ${isActive ? "z-10" : "z-0"}`}
                    initial={false}
                    animate={{
                      x: position.x,
                      y: position.y,
                      scale: position.scale,
                      opacity: position.opacity,
                      rotateY: isActive ? 0 : 5
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      mass: 0.5
                    }}
                    onClick={() => setActiveIndex(index)}
                    style={{ left: "50%", top: "50%" }}
                  >
                    <div className={`w-72 md:w-80 bg-[#F5F5F5] rounded-2xl p-6 shadow-lg transform -translate-x-1/2 -translate-y-1/2 
                      ${isActive ? "border-2 border-[#1FB6A6] shadow-xl" : "border border-gray-200"}`}>
                      <FaQuoteLeft className={`text-3xl mb-4 ${isActive ? "text-[#1FB6A6]" : "text-[#1FB6A6]/60"}`} />
                      <p className={`text-[#1E293B] mb-6 leading-relaxed ${isActive ? "text-base" : "text-sm"}`}>
                        "{testimonial.text}"
                      </p>
                      <div className="h-px bg-gray-300/50 mb-3" />
                      <div>
                        <h4 className={`font-bold ${isActive ? "text-[#1E293B] text-lg" : "text-[#1E293B]/80"}`}>
                          {testimonial.name}
                        </h4>
                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`text-sm ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Navigation Dots */}
              <div className="absolute bottom-8 flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${activeIndex === index ? "bg-[#1FB6A6] w-6" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Mobile Version */}
          {isMobile && (
            <div className="w-full max-w-md mx-auto">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#F5F5F5] rounded-2xl p-6 shadow-lg"
              >
                <FaQuoteLeft className="text-3xl text-[#1FB6A6] mb-4" />
                <p className="text-[#1E293B] mb-6 leading-relaxed">"{testimonials[activeIndex].text}"</p>
                <div className="h-px bg-gray-300/50 mb-3" />
                <div>
                  <h4 className="font-bold text-[#1E293B]">{testimonials[activeIndex].name}</h4>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-sm ${i < testimonials[activeIndex].rating ? "text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Mobile Navigation */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-[#1FB6A6]" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;