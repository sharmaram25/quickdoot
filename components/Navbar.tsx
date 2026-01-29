"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Package, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
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
        // border: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
        transition: 'background 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease'
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
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '700', 
                color: '#555', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                textDecoration: 'none'
              }}
            >
              {item.name}
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
