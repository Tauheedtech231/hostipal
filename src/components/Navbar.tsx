"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, ChevronRight, Mail, MapPin, Clock, Phone, User, Home, Stethoscope, Users, GalleryVertical, Calendar, ExternalLink, MessageCircle } from "lucide-react";
/* eslint-disable */

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showContactSlider, setShowContactSlider] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showTopContactBar, setShowTopContactBar] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const contactSliderRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const topContactBarRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { 
      name: "Home", 
      href: "/",
      icon: <Home className="h-5 w-5" />,
      description: "Welcome to SHMC",
      keywords: ["home", "main", "welcome", "hospital", "shmc"]
    },
    { 
      name: "About Us", 
      href: "/portfolio/about",
      icon: <User className="h-5 w-5" />,
      description: "Our Story & Mission",
      keywords: ["about", "story", "mission", "vision", "about us", "who we are"]
    },
    {
      name: "Services",
      href: "/portfolio/services",
      icon: <Stethoscope className="h-5 w-5" />,
      description: "Medical Services & Care",
      keywords: ["services", "medical", "care", "treatment", "healthcare", "doctors"]
    },
    { 
      name: "Testimonials", 
      href: "/portfolio/testimonials",
      icon: <Users className="h-5 w-5" />,
      description: "Reviews from Patients",
      keywords: ["testimonials", "reviews", "patients", "feedback", "stories", "experience"]
    },
    { 
      name: "Carrers", 
      href: "/portfolio/careers",
      icon: <GalleryVertical className="h-5 w-5" />,
      description: "Join Our Team",
      keywords: ["careers", "jobs", "employment", "work", "join us", "vacancies", "hiring"]
    },
    { 
      name: "Contact", 
      href: "/portfolio/contact",
      icon: <Phone className="h-5 w-5" />,
      description: "Get in Touch with Us",
      cta: true,
      keywords: ["contact", "get in touch", "reach us", "phone", "email", "location", "address"]
    },
  ];

  const hospitalContact = {
    phone: "0303 6828260",
    whatsapp: "0303 6828260",
    email: "romanasher@hotmail.com",
    address: "Sohawa Stop, Circular Road, Daska, Pakistan",
    coordinates: "32.340264325439,74.350928656081",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=32.340264325439,74.350928656081",
    hours: {
      emergency: "24/7 Emergency",
      saturday: "9:00 AM - 10:00 PM",
      sunday: "9:00 AM - 8:00 PM"
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsScrolled(false);
        setShowTopContactBar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsScrolled(true);
        setShowTopContactBar(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
        if (currentScrollY < 100) {
          setShowTopContactBar(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const contactSlider = contactSliderRef.current;
      const locationButton = document.querySelector('.location-button');
      
      if (contactSlider && 
          !contactSlider.contains(event.target as Node) && 
          !locationButton?.contains(event.target as Node)) {
        setShowContactSlider(false);
      }
      
      const menu = document.querySelector('.menu-container');
      const menuButton = document.querySelector('.menu-button');
      const searchModal = document.querySelector('.search-modal-container');
      const searchButton = document.querySelector('.search-button');
      
      if (menu && !menu.contains(event.target as Node) && !menuButton?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      
      if (searchModal && !searchModal.contains(event.target as Node) && !searchButton?.contains(event.target as Node)) {
        setShowSearchModal(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen || showSearchModal || showContactSlider) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, showSearchModal, showContactSlider]);

  useEffect(() => {
    if (showSearchModal && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [showSearchModal]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      window.location.href = searchResults[0].href;
      setShowSearchModal(false);
      setSearchQuery("");
    }
  };

  const handleSearchClick = (href: string) => {
    window.location.href = href;
    setShowSearchModal(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      const filteredResults = navItems.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase()) ||
        item.keywords?.some(keyword => 
          keyword.toLowerCase().includes(value.toLowerCase())
        )
      );
      setSearchResults(filteredResults.slice(0, 8));
    } else {
      setSearchResults([]);
    }
  };

  const getEmojiForCategory = (name: string) => {
    switch(name.toLowerCase()) {
      case 'home': return '🏠';
      case 'about us': return '🏥';
      case 'services': return '⚕️';
      case 'testimonials': return '⭐';
      case 'carrers': return '💼';
      case 'contact': return '📞';
      default: return '🔍';
    }
  };

  return (
    <>
      {/* Top Contact Info Bar */}
      <AnimatePresence>
        {showTopContactBar && (
          <motion.div
            ref={topContactBarRef}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#064E3B] via-[#0B6E5E] to-[#064E3B] text-white shadow-md overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <motion.div 
                className="absolute -top-10 -left-20 w-[200%] h-32"
                animate={{ 
                  x: ["0%", "-100%"],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg viewBox="0 0 1200 120" className="w-full h-full">
                  <path 
                    d="M0,120 C150,60 300,180 450,60 C600,-60 750,120 900,60 C1050,0 1200,120 1200,120 L0,120 Z" 
                    fill="#1FB6A6" 
                    fillOpacity="0.3"
                  />
                </svg>
              </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between py-2 md:py-1">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm mb-2 md:mb-0">
                  <a 
                    href={`tel:${hospitalContact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 hover:text-[#1FB6A6] transition-colors group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors"
                    >
                      <Phone className="h-3 w-3 md:h-4 md:w-4" />
                    </motion.div>
                    <span className="font-medium">{hospitalContact.phone}</span>
                  </a>
                  
                  <div className="hidden md:block h-4 w-px bg-white/30"></div>
                  
                  <a 
                    href={`mailto:${hospitalContact.email}`}
                    className="hidden md:flex items-center gap-2 hover:text-[#1FB6A6] transition-colors group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors"
                    >
                      <Mail className="h-3 w-3 md:h-4 md:w-4" />
                    </motion.div>
                    <span className="font-medium truncate max-w-[200px]">{hospitalContact.email}</span>
                  </a>
                  
                  <div className="hidden md:block h-4 w-px bg-white/30"></div>
                  
                  <div className="hidden lg:flex items-center gap-2">
                    <motion.div 
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="p-1 bg-white/10 rounded-full"
                    >
                      <Clock className="h-3 w-3 md:h-4 md:w-4" />
                    </motion.div>
                    <span className="font-medium">24/7 Emergency</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <Link
                    href="/portfolio/contact"
                    className="flex items-center gap-2 px-3 py-1.5 bg-white text-[#064E3B] hover:bg-[#F0F0F0] rounded-full text-xs font-bold transition-colors"
                  >
                    <Calendar className="h-3 w-3" />
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.header
        key="main-navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed ${showTopContactBar ? 'top-8 md:top-10' : 'top-0'} left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3 border-b border-gray-200" 
            : "bg-white py-4 border-b border-gray-200"
        }`}
        style={{ display: isMenuOpen && isMobile ? 'none' : 'block' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <Image
                 src="https://siddiqhospital.com/wp-content/uploads/2023/12/logo-300x300.png"
                  alt="SHMC Hospital Logo"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactSlider(true)}
                className="location-button flex items-center gap-2 px-4 py-2.5 bg-[#F5F5F5] border border-gray-200 rounded-full hover:shadow-md hover:border-[#1FB6A6] transition-all duration-300 group"
              >
                <div className="p-1.5 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-full group-hover:from-[#064E3B]/20 group-hover:to-[#1FB6A6]/20">
                  <MapPin className="h-4 w-4 text-[#064E3B] group-hover:text-[#1FB6A6]" />
                </div>
                <span className="text-sm font-medium text-[#1E293B] group-hover:text-[#064E3B]">
                  Our Location
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearchModal(true)}
                className="search-button flex items-center gap-2 px-4 py-2.5 bg-[#F5F5F5] border border-gray-200 rounded-full hover:shadow-md hover:border-[#1FB6A6] transition-all duration-300 group"
              >
                <Search className="h-4 w-4 text-[#064E3B] group-hover:text-[#1FB6A6]" />
                <span className="text-sm font-medium text-[#1E293B] group-hover:text-[#064E3B]">
                  Search
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(true)}
                className="menu-button flex items-center gap-2 px-5 py-2.5 bg-[#064E3B] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#064E3B]/20 hover:bg-[#064E3B]/90 transition-all duration-300"
              >
                <Menu className="h-4.5 w-4.5" />
                <span>Menu</span>
              </motion.button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowContactSlider(true)}
                className="location-button p-3 bg-[#F5F5F5] border border-gray-200 rounded-full hover:shadow-sm hover:border-[#1FB6A6] transition-all duration-300"
              >
                <MapPin className="h-5 w-5 text-[#064E3B]" />
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSearchModal(true)}
                className="search-button p-3 bg-[#F5F5F5] border border-gray-200 rounded-full hover:shadow-sm hover:border-[#1FB6A6] transition-all duration-300"
              >
                <Search className="h-5 w-5 text-[#064E3B]" />
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(true)}
                className="menu-button p-3 bg-[#064E3B] text-white rounded-full hover:shadow-lg hover:bg-[#064E3B]/90 transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1FB6A6] to-transparent opacity-30 rounded-full">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#064E3B] via-[#1FB6A6] to-[#064E3B] rounded-full"
            animate={{ 
              scaleX: [0, 1, 0],
              translateX: ["-100%", "100%", "-100%"]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </motion.header>

      {/* Spacer for fixed navbar */}
      <div className={`transition-all duration-300 ${showTopContactBar ? 'h-28 md:h-32' : 'h-16 lg:h-20'} ${isScrolled ? 'lg:h-16' : ''}`} />

      {/* Enhanced Contact Slider */}
      <AnimatePresence>
        {showContactSlider && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactSlider(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            <motion.div
              ref={contactSliderRef}
              initial={{ 
                x: "-100%",
                opacity: 0,
                scale: 0.9
              }}
              animate={{ 
                x: 0,
                opacity: 1,
                scale: 1
              }}
              exit={{ 
                x: "-100%",
                opacity: 0,
                scale: 0.9
              }}
              transition={{ 
                type: "spring",
                damping: 20,
                stiffness: 150,
                mass: 0.8
              }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl px-4"
            >
              <motion.div 
                initial={{ rotateY: -15 }}
                animate={{ rotateY: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
              >
                <div className="relative bg-gradient-to-r from-[#064E3B] via-[#0B6E5E] to-[#064E3B] p-6">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1FB6A6] via-white to-[#1FB6A6] opacity-50"></div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="p-2 bg-white/20 rounded-full"
                      >
                        <MapPin className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h2 className="font-bold text-white text-xl">Contact & Location</h2>
                        <p className="text-sm text-white/80">Siddique Heart Medical Complex</p>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowContactSlider(false)}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <X className="h-5 w-5 text-white hover:text-[#1FB6A6]" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.a
                      whileHover={{ y: -5, scale: 1.02 }}
                      href={`tel:${hospitalContact.phone.replace(/\s/g, '')}`}
                      className="col-span-1 md:col-span-2 p-4 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 rounded-xl border border-[#064E3B]/20 hover:border-[#064E3B]/40 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="p-2 bg-[#064E3B] rounded-full"
                        >
                          <Phone className="h-5 w-5 text-white" />
                        </motion.div>
                        <div>
                          <div className="font-bold text-[#064E3B]">Emergency Call</div>
                          <div className="text-lg font-bold text-[#1E293B]">{hospitalContact.phone}</div>
                          <div className="text-xs text-[#1E293B]/60 mt-1">Tap to call instantly</div>
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      whileHover={{ y: -5, scale: 1.02 }}
                      href={`mailto:${hospitalContact.email}`}
                      className="p-4 bg-gradient-to-br from-[#064E3B]/5 to-[#F5F5F5] rounded-xl border border-[#064E3B]/20 hover:border-[#064E3B]/40 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-[#064E3B]/10 rounded-full">
                          <Mail className="h-4 w-4 text-[#064E3B]" />
                        </div>
                        <div className="text-sm font-medium text-[#064E3B]">Email</div>
                      </div>
                      <div className="text-sm text-[#1E293B] truncate mt-2">{hospitalContact.email}</div>
                    </motion.a>

                    <motion.a
                      whileHover={{ y: -5, scale: 1.02 }}
                      href={`https://wa.me/${hospitalContact.whatsapp.replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gradient-to-br from-[#25D366]/10 to-[#F5F5F5] rounded-xl border border-[#25D366]/20 hover:border-[#25D366]/40 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-[#25D366]/20 rounded-full">
                          <MessageCircle className="h-4 w-4 text-[#25D366]" />
                        </div>
                        <div className="text-sm font-medium text-[#064E3B]">WhatsApp</div>
                      </div>
                      <div className="text-sm text-[#1E293B] truncate mt-2">{hospitalContact.whatsapp}</div>
                    </motion.a>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity
                        }}
                        className="p-2 bg-[#064E3B]/20 rounded-full flex-shrink-0"
                      >
                        <MapPin className="h-5 w-5 text-[#064E3B]" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#064E3B] mb-1">Hospital Address</h4>
                        <p className="text-[#1E293B] text-sm leading-relaxed">
                          Sohawa Stop, Circular Road<br />
                          Daska, Pakistan
                        </p>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={hospitalContact.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#064E3B] text-white rounded-full font-medium hover:shadow-lg hover:bg-[#064E3B]/90 transition-all duration-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Open in Google Maps
                        </motion.a>
                      </div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative h-48 rounded-xl overflow-hidden border-2 border-[#064E3B]/30 shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#064E3B]/10 to-[#1FB6A6]/10 flex items-center justify-center">
                        <div className="text-center p-4">
                          <motion.div
                            animate={{ 
                              y: [0, -5, 0],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity
                            }}
                          >
                            <MapPin className="h-10 w-10 text-[#064E3B] mx-auto mb-3" />
                          </motion.div>
                          <div className="text-[#064E3B] font-bold text-lg">SHMC Location</div>
                          <div className="text-sm text-[#1E293B] mt-1">Daska, Pakistan</div>
                          <div className="text-xs text-[#1E293B]/60 mt-2">Lat: 32.340264, Long: 74.350928</div>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="absolute inset-0 border-4 border-[#064E3B]/20 rounded-xl"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-[#064E3B]/5 to-[#F5F5F5] rounded-xl border border-[#064E3B]/20 p-5"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="p-2 bg-[#064E3B]/20 rounded-full"
                      >
                        <Clock className="h-5 w-5 text-[#064E3B]" />
                      </motion.div>
                      <h4 className="font-semibold text-[#064E3B]">Working Hours</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                        <span className="text-sm font-medium text-[#1E293B]">Emergency</span>
                        <motion.span 
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 bg-red-500/10 text-red-600 text-sm font-bold rounded-full"
                        >
                          24/7 Service
                        </motion.span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                        <span className="text-sm font-medium text-[#1E293B]">Saturday</span>
                        <span className="text-sm font-medium text-[#064E3B]">9:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                        <span className="text-sm font-medium text-[#1E293B]">Sunday</span>
                        <span className="text-sm font-medium text-[#064E3B]">9:00 AM - 8:00 PM</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Modal - Only Search Input */}
      <AnimatePresence>
        {showSearchModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowSearchModal(false);
                setSearchQuery("");
                setSearchResults([]);
              }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              className="search-modal-container fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Search Input Only */}
                <div className="p-6 border-b border-gray-200">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Search className="h-5 w-5 text-[#064E3B]" />
                    </div>
                    <form onSubmit={handleSearch}>
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search for Home, About, Services, Testimonials, Carrers, or Contact..."
                        value={searchQuery}
                        onChange={(e) => handleSearchInputChange(e.target.value)}
                        className="w-full pl-12 pr-12 py-4 bg-[#F5F5F5] rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B] text-[#1E293B] placeholder-gray-500 text-base"
                        autoFocus
                      />
                    </form>
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSearchResults([]);
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="h-4 w-4 text-[#1E293B] hover:text-[#064E3B]" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {searchResults.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4"
                      >
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-[#064E3B] uppercase tracking-wider">
                            Search Results
                          </h3>
                          <p className="text-xs text-[#1E293B] mt-1">
                            {searchResults.length} results found
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          {searchResults.map((result, index) => (
                            <motion.button
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => handleSearchClick(result.href)}
                              className="w-full text-left p-4 bg-[#F5F5F5] hover:bg-[#064E3B]/5 rounded-xl transition-all duration-200 group/result border border-transparent hover:border-[#064E3B]/20"
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-full group-hover/result:bg-[#064E3B]/10 transition-colors flex-shrink-0 shadow-sm">
                                  <span className="text-xl">{getEmojiForCategory(result.name)}</span>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-[#064E3B] group-hover/result:text-[#1FB6A6] text-base">
                                      {result.name}
                                    </h3>
                                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover/result:text-[#064E3B] transform group-hover/result:translate-x-1 transition-transform" />
                                  </div>
                                  <p className="text-sm text-[#1E293B] mt-1">
                                    {result.description}
                                  </p>
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    ) : searchQuery ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-8 text-center"
                      >
                        <div className="inline-flex p-4 bg-[#F5F5F5] rounded-full mb-4">
                          <Search className="h-8 w-8 text-[#064E3B]" />
                        </div>
                        <h3 className="font-medium text-[#064E3B] mb-2 text-base">
                          No results found for "{searchQuery}"
                        </h3>
                        <p className="text-sm text-[#1E293B]">
                          Try searching for: Home, About, Services, Testimonials, Carrers, or Contact
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Menu - Slides from right */}
      <AnimatePresence>
        {isMenuOpen && !isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "tween",
                duration: 0.3,
                ease: "easeOut"
              }}
              className="menu-container fixed top-0 right-0 h-full w-96 z-50 bg-white shadow-2xl border-l border-gray-200 overflow-y-auto"
            >
              {/* Menu Header */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="sticky top-0 bg-white border-b border-gray-200 z-10"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://siddiqhospital.com/wp-content/uploads/2023/12/logo-300x300.png"
                        alt="SHMC Logo"
                        width={50}
                        height={50}
                        className="object-cover rounded-full"
                      />
                      <div>
                        <h2 className="font-bold text-[#064E3B] text-xl">SHMC</h2>
                        <p className="text-sm text-[#1E293B]">Siddique Heart Medical Complex</p>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
                    >
                      <X className="h-6 w-6 text-[#1E293B] hover:text-[#064E3B]" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Menu Content */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="p-6 space-y-6"
              >
                {/* Navigation Items */}
                <div className="space-y-4">
                  <motion.h3 
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-sm font-semibold text-[#1E293B] uppercase tracking-wider px-2"
                  >
                    Navigation
                  </motion.h3>
                  
                  <div className="space-y-2">
                    {navItems.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 + (idx * 0.05), duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                            item.cta
                              ? 'bg-gradient-to-r from-[#064E3B] to-[#064E3B]/90 hover:shadow-lg hover:shadow-[#064E3B]/20'
                              : 'hover:bg-[#F5F5F5]'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${
                            item.cta
                              ? 'bg-white/20'
                              : 'bg-[#064E3B]/10'
                          }`}>
                            <div className={item.cta ? 'text-white' : 'text-[#064E3B]'}>
                              {item.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-semibold ${
                              item.cta ? 'text-white' : 'text-[#064E3B]'
                            }`}>
                              {item.name}
                            </h3>
                            <p className={`text-xs ${
                              item.cta ? 'text-white/80' : 'text-[#1E293B]'
                            }`}>
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight className={`h-4 w-4 ${
                            item.cta ? 'text-white' : 'text-gray-400'
                          }`} />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact Info Card */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="p-4 bg-gradient-to-br from-[#064E3B]/5 to-[#F5F5F5] rounded-xl border border-[#064E3B]/20"
                >
                  <h4 className="font-bold text-[#064E3B] mb-3">Need Assistance?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#064E3B]/10 rounded-full">
                        <Phone className="h-4 w-4 text-[#064E3B]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#1E293B]">Emergency & Appointments</div>
                        <div className="text-[#064E3B] font-medium">{hospitalContact.phone}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu - Full screen slide from right */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "tween",
                duration: 0.3,
                ease: "easeOut"
              }}
              className="menu-container fixed top-0 right-0 h-full w-full z-40 bg-white shadow-2xl overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="sticky top-0 bg-white border-b border-gray-200 z-10 p-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://siddiqhospital.com/wp-content/uploads/2023/12/logo-300x300.png"
                      alt="SHMC Logo"
                      width={40}
                      height={40}
                      className="object-cover rounded-full"
                    />
                    <div>
                      <div className="font-bold text-[#064E3B] text-base">SHMC</div>
                      <div className="text-xs text-[#1E293B]">Siddique Heart Medical Complex</div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-[#1E293B] hover:text-[#064E3B]" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Mobile Menu Content */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.15
                    }
                  }
                }}
                className="p-4"
              >
                <nav className="space-y-2">
                  {navItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + (idx * 0.05), duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                          item.cta 
                            ? 'bg-gradient-to-r from-[#064E3B] to-[#064E3B]/90'
                            : 'hover:bg-[#F5F5F5]'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          item.cta 
                            ? 'bg-white/20' 
                            : 'bg-[#064E3B]/10'
                        }`}>
                          <div className={item.cta ? 'text-white' : 'text-[#064E3B]'}>
                            {item.icon}
                          </div>
                        </div>
                        <div className="text-left">
                          <div className={`font-semibold ${
                            item.cta ? 'text-white' : 'text-[#064E3B]'
                          }`}>{item.name}</div>
                          <div className={`text-xs ${
                            item.cta ? 'text-white/80' : 'text-[#1E293B]'
                          }`}>{item.description}</div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <motion.div 
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="mt-6 space-y-4"
                >
                  <div className="p-4 bg-gradient-to-br from-[#064E3B]/5 to-[#F5F5F5] rounded-xl border border-[#064E3B]/20">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#064E3B]/10 rounded-full">
                          <Phone className="h-4 w-4 text-[#064E3B]" />
                        </div>
                        <div>
                          <div className="text-xs text-[#1E293B]">Emergency & Appointments</div>
                          <div className="text-[#064E3B] font-medium">{hospitalContact.phone}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};