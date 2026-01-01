"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserMd, FaStethoscope, FaGraduationCap, FaBuilding, FaPhoneAlt, FaClock, FaHandsHelping } from "react-icons/fa";
import { GiStethoscope, GiMuscleUp } from "react-icons/gi";
import {  MdLocalHospital } from "react-icons/md";

// Define types for doctor data
interface DoctorData {
  id: number;
  name: {
    en: string;
    ur: string;
  };
  designation: {
    en: string;
    ur: string;
  };
  additionalRole?: {
    en: string;
    ur: string;
  };
  qualifications: {
    en: string;
    ur: string;
  };
  affiliation?: {
    en: string;
    ur: string;
  };
  specialty: string;
  experience: string;
  availability: string;
  image: string;
}

// Doctor data with English and Urdu details
const DOCTORS_DATA: DoctorData[] = [
  {
    id: 1,
    name: {
      en: "Dr. Farrakh Bashir",
      ur: "ڈاکٹر فرخ بشیر"
    },
    designation: {
      en: "Consultant Orthopaedic Surgeon",
      ur: "کنسلٹنٹ آرتھوپیڈک سرجن"
    },
    additionalRole: {
      en: "Assistant Professor",
      ur: "اسسٹنٹ پروفیسر"
    },
    qualifications: {
      en: "M.B.B.S, F.C.P.S (Orthopedic Surgery)",
      ur: "ایم بی بی ایس، ایف سی پی ایس (آرتھوپیڈک سرجری)"
    },
    affiliation: {
      en: "Gujranwala Medical College",
      ur: "گوجرانوالہ میڈیکل کالج"
    },
    specialty: "Orthopaedic Surgery",
    experience: "15+ Years",
    availability: "Mon-Fri: 9AM-5PM",
    image: "/doctors/dr-farrakh.jpg"
  },
  {
    id: 2,
    name: {
      en: "Dr. Roman Asher Mian",
      ur: "ڈاکٹر رومان آشر میان"
    },
    designation: {
      en: "Consultant Cardiologist",
      ur: "کنسلٹنٹ کارڈیالوجسٹ"
    },
    qualifications: {
      en: "M.B.B.S, F.C.P.S (Cardiology), FRCP",
      ur: "ایم بی بی ایس، ایف سی پی ایس (کارڈیالوجی)، ایف آر سی پی"
    },
    specialty: "Clinical & Interventional Cardiology",
    experience: "12+ Years",
    availability: "Mon-Sat: 10AM-6PM",
    image: "/doctors/dr-roman.jpg"
  },
  {
    id: 3,
    name: {
      en: "Dr. Shazia Roman",
      ur: "ڈاکٹر شازیہ رومان"
    },
    designation: {
      en: "Consultant Gynecologist & Obstetrician",
      ur: "کنسلٹنٹ گائناکالوجسٹ اور اوبسٹیٹریشن"
    },
    qualifications: {
      en: "M.B.B.S, F.C.P.S",
      ur: "ایم بی بی ایس، ایف سی پی ایس"
    },
    affiliation: {
      en: "Sialkot Medical College",
      ur: "سیالکوٹ میڈیکل کالج"
    },
    specialty: "Gynecology & Obstetrics",
    experience: "10+ Years",
    availability: "Mon-Fri: 9AM-4PM",
    image: "/doctors/dr-shazia.jpg"
  },
  {
    id: 4,
    name: {
      en: "Dr. Nabeeia Laiqat Ghumman",
      ur: "ڈاکٹر نبیعہ لائق گھمن"
    },
    designation: {
      en: "Child Specialist",
      ur: "چائلڈ اسپیشلسٹ"
    },
    qualifications: {
      en: "M.B.B.S (King Edward), F.C.P.S",
      ur: "ایم بی بی ایس (کنگ ایڈورڈ)، ایف سی پی ایس"
    },
    specialty: "Pediatrics",
    experience: "8+ Years",
    availability: "Mon-Sat: 11AM-7PM",
    image: "/doctors/dr-nabeeia.jpg"
  },
  {
    id: 5,
    name: {
      en: "Dr. Chandni Mahmood",
      ur: "ڈاکٹر چاندنی محمود"
    },
    designation: {
      en: "Physiotherapist",
      ur: "فزیوتھراپسٹ"
    },
    qualifications: {
      en: "M.P.P.E (Punjab), D.P.T (Punjab)",
      ur: "ایم۔پی۔پی۔ای (پنجاب), ڈی۔پی۔ٹی (پنجاب)"
    },
    specialty: "Physiotherapy & Rehabilitation",
    experience: "2+ Years",
    availability: "Mon-Fri: 10AM-6PM",
    image: "/doctors/dr-chandni-mahmood.jpg"
  }
];

// Doctor Card Component
const DoctorCard = ({ doctor, index }: { doctor: DoctorData; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get appropriate icon based on specialty
  const getSpecialtyIcon = () => {
    if (doctor.specialty.includes("Physiotherapy")) {
      return <FaStethoscope className="h-3 w-3 mr-2" />;
    } else if (doctor.specialty.includes("Cardiology")) {
      return <GiStethoscope className="h-3 w-3 mr-2" />;
    } else if (doctor.specialty.includes("Orthopaedic")) {
      return <GiMuscleUp className="h-3 w-3 mr-2" />;
    } else {
      return <FaStethoscope className="h-3 w-3 mr-2" />;
    }
  };

  const getSpecialtyIconUrdu = () => {
    if (doctor.specialty.includes("Physiotherapy")) {
      return <FaStethoscope className="h-3 w-3 ml-2" />;
    } else if (doctor.specialty.includes("Cardiology")) {
      return <GiStethoscope className="h-3 w-3 ml-2" />;
    } else if (doctor.specialty.includes("Orthopaedic")) {
      return <GiMuscleUp className="h-3 w-3 ml-2" />;
    } else {
      return <FaStethoscope className="h-3 w-3 ml-2" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-x-0 lg:divide-x divide-gray-100">
        
        {/* English Section (Left) */}
        <div className="p-8">
          {/* Doctor Header */}
          <div className="flex items-start gap-6 mb-6">
            {/* Avatar Placeholder */}
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-[#F9FAF7] to-[#E8F4F1] flex items-center justify-center shadow-md"
            >
              <FaUserMd className="h-10 w-10 text-[#064E3B]" />
              <motion.div
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-br from-[#1FB6A6]/10 to-transparent rounded-xl"
              />
            </motion.div>

            {/* Name and Designation */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#064E3B] mb-2">{doctor.name.en}</h3>
              <div className="flex items-center gap-2 mb-3">
                <FaStethoscope className="h-4 w-4 text-[#1FB6A6]" />
                <p className="text-gray-600 font-medium">{doctor.designation.en}</p>
              </div>
              
              {/* Specialty Badge */}
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1FB6A6] text-white text-sm font-semibold">
                {getSpecialtyIcon()}
                {doctor.specialty}
              </span>
            </div>
          </div>

          {/* Qualifications & Details */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-3"
            >
              <FaGraduationCap className="h-5 w-5 text-[#064E3B] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Qualifications</p>
                <p className="text-gray-800 font-medium">{doctor.qualifications.en}</p>
              </div>
            </motion.div>

            {doctor.affiliation && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <FaBuilding className="h-5 w-5 text-[#064E3B] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Affiliation</p>
                  <p className="text-gray-800 font-medium">{doctor.affiliation.en}</p>
                </div>
              </motion.div>
            )}

            {doctor.additionalRole && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1FB6A6]/20 to-transparent flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#064E3B]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Additional Role</p>
                  <p className="text-gray800 font-medium">{doctor.additionalRole.en}</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Availability and Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-6 border-t border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Availability */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1FB6A6]/10 to-transparent flex items-center justify-center">
                  <FaClock className="h-4 w-4 text-[#064E3B]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Availability</p>
                  <p className="text-sm font-semibold text-gray-800">{doctor.availability}</p>
                </div>
              </div>
              
              {/* Experience */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#064E3B]/10 to-transparent flex items-center justify-center">
                  <div className="text-[#064E3B] font-bold text-sm">Exp</div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="text-sm font-semibold text-gray-800">{doctor.experience}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Urdu Section (Right) */}
        <div className="p-8 bg-gradient-to-b from-[#F9FAF7] to-white border-t lg:border-t-0 lg:border-l border-gray-100">
          {/* Doctor Header - Urdu */}
          <div className="text-right mb-6">
            <h3 className="text-2xl font-bold text-[#064E3B] mb-2" dir="rtl">
              {doctor.name.ur}
            </h3>
            <div className="flex items-center justify-end gap-2 mb-3">
              <p className="text-gray-600 font-medium text-right" dir="rtl">
                {doctor.designation.ur}
              </p>
              <FaStethoscope className="h-4 w-4 text-[#1FB6A6]" />
            </div>
            
            {/* Specialty Badge - Urdu */}
            <div className="flex justify-end">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1FB6A6] text-white text-sm font-semibold">
                {doctor.specialty}
                {getSpecialtyIconUrdu()}
              </span>
            </div>
          </div>

          {/* Qualifications & Details - Urdu */}
          <div className="space-y-4 text-right" dir="rtl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-3"
            >
              <div className="text-right flex-1">
                <p className="text-sm text-gray-500 mb-1">تعلیمی قابلیت</p>
                <p className="text-gray-800 font-medium">{doctor.qualifications.ur}</p>
              </div>
              <FaGraduationCap className="h-5 w-5 text-[#064E3B] mt-1 flex-shrink-0" />
            </motion.div>

            {doctor.affiliation && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="text-right flex-1">
                  <p className="text-sm text-gray-500 mb-1">وابستگی</p>
                  <p className="text-gray-800 font-medium">{doctor.affiliation.ur}</p>
                </div>
                <FaBuilding className="h-5 w-5 text-[#064E3B] mt-1 flex-shrink-0" />
              </motion.div>
            )}

            {doctor.additionalRole && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="text-right flex-1">
                  <p className="text-sm text-gray-500 mb-1">اضافی کردار</p>
                  <p className="text-gray-800 font-medium">{doctor.additionalRole.ur}</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1FB6A6]/20 to-transparent flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#064E3B]" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Availability & Experience - Urdu */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-6 border-t border-gray-100 text-right"
          >
            <div className="space-y-4">
              {/* Availability - Urdu */}
              <div className="flex items-center justify-end gap-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1" dir="rtl">دستیابی</p>
                  <p className="text-sm font-semibold text-gray-800" dir="rtl">{doctor.availability}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1FB6A6]/10 to-transparent flex items-center justify-center">
                  <FaClock className="h-4 w-4 text-[#064E3B]" />
                </div>
              </div>
              
              {/* Experience - Urdu */}
              <div className="flex items-center justify-end gap-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1" dir="rtl">تجربہ</p>
                  <p className="text-sm font-semibold text-gray-800" dir="rtl">{doctor.experience}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#064E3B]/10 to-transparent flex items-center justify-center">
                  <div className="text-[#064E3B] font-bold text-sm">E</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hover Effect Line */}
      <motion.div
        animate={{ width: isHovered ? "100%" : "0%" }}
        className="h-1 bg-gradient-to-r from-[#064E3B] to-[#1FB6A6]"
      />
    </motion.div>
  );
};

// Specialties Filter Component
const SpecialtiesFilter = ({ activeFilter, setActiveFilter }: { activeFilter: string; setActiveFilter: (filter: string) => void }) => {
  const filters = ["All", "Cardiology", "Orthopaedic Surgery", "Gynecology & Obstetrics", "Pediatrics", "Physiotherapy & Rehabilitation"];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeFilter === filter
              ? "bg-gradient-to-r from-[#064E3B] to-[#1FB6A6] text-white shadow-lg"
              : "bg-white text-gray-600 hover:bg-gray-50 shadow"
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};

export default function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDoctors = DOCTORS_DATA.filter(doctor => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Cardiology") return doctor.specialty.includes("Cardiology");
    if (activeFilter === "Orthopaedic Surgery") return doctor.specialty.includes("Orthopaedic");
    if (activeFilter === "Gynecology & Obstetrics") return doctor.specialty.includes("Gynecology") || doctor.specialty.includes("Obstetrics");
    if (activeFilter === "Pediatrics") return doctor.specialty.includes("Pediatrics");
    if (activeFilter === "Physiotherapy & Rehabilitation") return doctor.specialty.includes("Physiotherapy");
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F9FAF7]">
      {/* Hero Header with clear background image */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Clear Background Image without blur */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg"
              fill
              alt="medical team"
              className="object-cover"
              quality={100}
              priority
              sizes="100vw"
              unoptimized={true} // Using unoptimized to ensure maximum quality from external URL
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#1FB6A6]/10 z-10" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#064E3B]/10 z-10" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50" />
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <FaUserMd className="h-8 w-8 text-white" />
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Our Medical <span className="text-[#1FB6A6]">Specialists</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-12 drop-shadow-md">
              Meet our team of experienced doctors dedicated to providing exceptional healthcare services with compassion and expertise.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "5", label: "Specialties" },
                { value: "100%", label: "Patient Satisfaction" },
                { value: "24/7", label: "Emergency Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-md">{stat.value}</div>
                  <div className="text-white/90 text-sm drop-shadow-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064E3B] mb-8">
              Find Your Specialist
            </h2>
            <SpecialtiesFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </motion.div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={index} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredDoctors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F9FAF7] to-white flex items-center justify-center shadow-lg">
                <FaUserMd className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-3">No Doctors Found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                No doctors match the selected specialty filter. Please try a different category.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-white to-[#F9FAF7] rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-[#064E3B] mb-4">
                Need to Book an Appointment?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team is ready to help you find the right specialist for your healthcare needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/portfolio/contact")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#064E3B] to-[#1FB6A6] text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Appointment Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}