"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Package, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Hide on scroll down
    } else {
      setHidden(false); // Show on scroll up
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '1rem 2rem' : '2rem 2rem',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem',
        borderRadius: '20px',
        background: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        border: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'
      }}>
        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ 
            background: '#000', 
            color: '#fff', 
            padding: '8px', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Package size={20} />
          </div>
          <span style={{ fontWeight: '900', fontSize: '1.25rem', color: '#000', letterSpacing: '-0.5px' }}>
            QUICKDOOT
          </span>
        </Link>

        {/* NAV LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '700', 
                color: '#555', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                textDecoration: 'none'
              }}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button style={{
          background: '#000',
          color: '#fff',
          padding: '0.8rem 1.5rem',
          borderRadius: '12px',
          border: 'none',
          fontWeight: '700',
          fontSize: '0.9rem',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          Admin Login
        </button>
      </div>
    </motion.nav>
  );
}