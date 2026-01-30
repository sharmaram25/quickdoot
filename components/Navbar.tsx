"use client";

import React, { Profiler, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Package, Menu, X, ChevronRight, Sparkles, MenuIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Adamina, Hanuman } from "next/font/google";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: scrolled ? "12px 20px" : "20px 20px",
          transition: "padding 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <motion.div 
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "12px 28px" : "16px 28px",
            borderRadius: scrolled ? "100px" : "24px",
            background: scrolled 
              ? "rgba(255, 255, 255, 0.92)" 
              : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: scrolled 
              ? "1px solid rgba(0, 0, 0, 0.06)" 
              : "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: scrolled 
              ? "0 8px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.6)" 
              : "0 4px 30px rgba(0, 0, 0, 0.03)",
            transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          layout
        >
          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg, #000 0%, #333 100%)",
                color: "#fff",
                padding: "10px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Package size={22} />
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ 
                fontWeight: 900, 
                fontSize: "1.25rem", 
                color: "#000", 
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
              }}>
                QUICKDOOT
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div 
            className="hidden md:flex"
            style={{
              display: "flex",
              gap: "4px",
              background: "linear-gradient(135deg, rgba(249, 250, 251, 0.9) 0%, rgba(243, 244, 246, 0.9) 100%)",
              padding: "5px",
              borderRadius: "100px",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.02)",
            }}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  style={{
                    position: "relative",
                    padding: "10px 22px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: isActive ? "#000" : hoveredPath === item.path ? "#000" : "#555",
                    textDecoration: "none",
                    zIndex: 10,
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    borderRadius: "100px",
                  }}
                >
                  {/* Hover Pill Animation */}
                  {hoveredPath === item.path && !isActive && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "100px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "#fff",
                        borderRadius: "100px",
                        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{item.name}</span>
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{
                        position: "absolute",
                        bottom: "6px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#10b981",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }} 
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex"
              style={{
                background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)",
                color: "#fff",
                padding: "12px 26px",
                borderRadius: "100px",
                border: "none",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <User size={16} />
              Admin Login
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              style={{ 
                background: mobileMenuOpen ? "#f3f4f6" : "transparent", 
                border: "none", 
                cursor: "pointer", 
                padding: "10px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease",
              }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} color="#000" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} color="#000" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>
      
      {/* Helper CSS for responsive behavior */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none !important; }
          .hidden.md\\:block { display: none !important; }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none !important; }
        }
      `}</style>
    </>
  );
}
