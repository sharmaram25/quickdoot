"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Package, Shield, Zap, Smartphone, MapPin, Users, Star } from 'lucide-react';
import styles from './home.module.css';

export default function Home() {
  const scrollRef = useRef(null);
  
  return (
    <main className={styles.main} ref={scrollRef}>
      
      {/* 
        HERO SECTION
        Concept: Split screen with large typography on left, 
        floating 3D-style phone interaction on right.
      */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>Send anything,<br /> anywhere,<br /> with anyone.</h1>
            <p>
              QuickDoot connects you with travelers heading your way. 
              The world's first true peer-to-peer decentralized delivery network.
            </p>
            <div className={styles.ctaGroup}>
              <button className={styles.primaryBtn}>
                Get the App <Smartphone size={20} />
              </button>
              <a href="#how-it-works" className={styles.secondaryBtn}>
                How it works
              </a>
            </div>
            
            <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex' }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: `#ddd url(https://picsum.photos/seed/${i}/100)`,
                    backgroundSize: 'cover',
                    border: '3px solid #fff',
                    marginLeft: i > 1 ? '-15px' : 0
                  }} />
                ))}
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>
                Trusted by 50,000+ users
              </span>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Phone Frame Mockup */}
            <motion.div 
              className={styles.phoneFrame}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className={styles.screenContent} style={{ 
                background: 'linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)',
                display: 'flex', flexDirection: 'column'
              }}>
                {/* Mock UI Header */}
                <div style={{ padding: '2rem 1.5rem', background: '#fff' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eee', marginBottom: '1rem' }}></div>
                  <div style={{ height: '10px', width: '100px', background: '#eee', borderRadius: '5px' }}></div>
                </div>
                {/* Mock Map View */}
                <div style={{ flex: 1, background: '#e1e5ea', position: 'relative' }}>
                   {/* Map Markers */}
                   <motion.div 
                     style={{ position: 'absolute', top: '30%', left: '40%', color: '#000' }}
                     animate={{ scale: [1, 1.2, 1] }}
                     transition={{ repeat: Infinity, duration: 2 }}
                   >
                     <MapPin size={32} fill="#000" />
                   </motion.div>
                </div>
                {/* Mock Bottom Sheet */}
                <div style={{ padding: '20px', background: '#fff', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                  <div style={{ height: '5px', width: '40px', background: '#ddd', margin: '0 auto 15px auto', borderRadius: '3px' }}></div>
                  <div style={{ height: '50px', width: '100%', background: '#000', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    Find a Traveler
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Context Cards */}
            <motion.div 
              className={styles.floatCard}
              style={{ top: '20%', right: '-5%' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className={styles.floatIcon}><Package size={24} /></div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Package Delivered</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>2 mins ago • New York</div>
              </div>
            </motion.div>

            <motion.div 
              className={styles.floatCard}
              style={{ bottom: '25%', left: '-10%' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className={styles.floatIcon}><Shield size={24} /></div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Insured & Secure</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Up to $500 protection</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 
        MARQUEE SECTION
        Concept: Infinite scrolling text to create energy
      */}
      <div className={styles.tickerSection}>
        <div className={styles.tickerContent}>
          <span className={styles.tickerItem}>Peer to Peer •</span>
          <span className={styles.tickerItem}>Fast Delivery •</span>
          <span className={styles.tickerItem}>Global Network •</span>
          <span className={styles.tickerItem}>Secure •</span>
          <span className={styles.tickerItem}>Community Driven •</span>
          <span className={styles.tickerItem}>Peer to Peer •</span>
          <span className={styles.tickerItem}>Fast Delivery •</span>
        </div>
      </div>

      {/* 
        SHOWCASE SECTION
      */}
      <section className={styles.showcaseSection} id="features">
        <div className={styles.showcaseContainer}>
          <div className={styles.showcaseHeader}>
            <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 'bold', color: '#888' }}>Why QuickDoot?</span>
            <h2 className={styles.largeHeading}>Delivery reimagined for the <br/> modern connected world.</h2>
          </div>

          <div className={styles.featuresGrid}>
            <FeatureCard 
              icon={<Zap size={40} />}
              title="Lightning Fast"
              description="Utilize travelers already heading to your destination. Same-day delivery across cities is now a reality."
            />
            <FeatureCard 
              icon={<Shield size={40} />}
              title="Bank-Level Trust"
              description="Verified profiles, escrow payments, and real-time tracking ensure your items are always in safe hands."
            />
            <FeatureCard 
              icon={<Users size={40} />}
              title="Community First"
              description="Join thousands of peers helping each other. Rated and reviewed by real people for real accountability."
            />
          </div>
        </div>
      </section>

      {/* 
        HOW IT WORKS - Horizontal Steps
      */}
      <section className={styles.stepsSection} id="how-it-works">
        <div className={styles.stepsContainer}>
           <StepRow 
             number="01"
             title="Post your request"
             description="Tell us what you need to move, where it is, and where it needs to go. Set your price or let the market decide."
             imagePlaceholder="Post Request"
           />
           <StepRow 
             number="02"
             title="Connect with a Dooter"
             description="Chat with verified travelers heading that way. Review their profile, ratings, and vehicle details."
             imagePlaceholder="Match Found"
             reversed
           />
           <StepRow 
             number="03"
             title="Track & Relax"
             description="Follow your item in real-time. Release payment only when the item arrives safely and is verified by you."
             imagePlaceholder="Live Tracking"
           />
        </div>
      </section>

      {/* 
        DOWNLOAD PROMPT
      */}
      <section className={styles.downloadSection}>
        <div className={styles.downloadContent}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.largeHeading} style={{ color: '#fff' }}>
              Ready to start <span className={styles.gradientText}>Dooting?</span>
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem', color: '#aaa' }}>
              Download the QuickDoot app today. Available on iOS and Android.
              Join the revolution of decentralized logistics.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <DownloadBadge store="App Store" />
              <DownloadBadge store="Google Play" />
              <DownloadBadge store="Direct APK" />
            </div>
            
            {/* Contextual mockups peeking from bottom */}
            <div style={{ marginTop: '5rem', position: 'relative', height: '300px' }}>
               <img 
                 src="https://placehold.co/400x800/111/444?text=Mobile+App+Screen" 
                 alt="App Screen" 
                 style={{ 
                   width: '300px', 
                   position: 'absolute', 
                   left: '50%', 
                   transform: 'translateX(-120%) rotate(-10deg)',
                   borderRadius: '40px',
                   boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                   border: '4px solid #333'
                 }} 
               />
               <img 
                 src="https://placehold.co/400x800/222/555?text=Dashboard" 
                 alt="App Screen" 
                 style={{ 
                   width: '300px', 
                   position: 'absolute', 
                   left: '50%', 
                   transform: 'translateX(20%) rotate(10deg)',
                   zIndex: 2,
                   borderRadius: '40px',
                   boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                   border: '4px solid #333'
                 }} 
               />
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

// Subcomponents
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className={styles.featureCard}>
      <div>
        <div style={{ width: '60px', height: '60px', background: '#000', borderRadius: '15px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
          {icon}
        </div>
        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', lineHeight: 1.1 }}>{title}</h3>
        <p style={{ color: '#666', lineHeight: 1.6 }}>{description}</p>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
        Learn more <ArrowRight size={16} />
      </div>
    </div>
  );
}

function StepRow({ number, title, description, imagePlaceholder, reversed = false }: { number: string, title: string, description: string, imagePlaceholder: string, reversed?: boolean }) {
  return (
    <motion.div 
      className={`${styles.stepRow} ${reversed ? styles.reversed : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.stepText}>
        <span className={styles.stepNumber}>{number}</span>
        <h3 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', marginTop: '1rem' }}>{title}</h3>
        <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: 1.6 }}>{description}</p>
      </div>
      <div className={styles.stepVisual}>
        <div style={{ 
          width: '100%', 
          maxWidth: '500px', 
          height: '400px', 
          background: '#f0f0f0', 
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#aaa',
          overflow: 'hidden'
        }}>
          <img src={`https://placehold.co/600x400/eee/999?text=${encodeURIComponent(imagePlaceholder)}`} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </motion.div>
  );
}

function DownloadBadge({ store }: { store: string }) {
  return (
    <button style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.8rem', 
      padding: '0.8rem 1.5rem', 
      background: 'rgba(255,255,255,0.15)', 
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '12px',
      color: '#fff',
      cursor: 'pointer',
      textAlign: 'left'
    }}>
      <div style={{ fontSize: '2rem' }}>
        {store.includes('Apple') ? <Smartphone /> : <Smartphone />}
      </div>
      <div>
        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>Download on</div>
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{store}</div>
      </div>
    </button>
  );
}
