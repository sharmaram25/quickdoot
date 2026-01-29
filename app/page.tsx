"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Package, Shield, Zap, Smartphone, MapPin, Users, Star, Car } from 'lucide-react';
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
        {/* Decorative Background Elements */}
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />

        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
            
            <motion.div 
              style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div style={{ display: 'flex' }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{ 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    background: `#f0f9ff url(https://picsum.photos/seed/${i + 15}/100)`,
                    backgroundSize: 'cover',
                    border: '3px solid #fff',
                    marginLeft: i > 1 ? '-18px' : 0,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }} />
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: '2px', color: '#fbbf24', marginBottom: '4px' }}>
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>
                  Trusted by 50,000+ happy dooters
                </span>
              </div>
            </motion.div>
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
                {/* Mock UI Header - Status Bar & Search */}
                <div style={{ padding: '1rem', background: '#fff', zIndex: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '10px', fontWeight: 'bold' }}>
                    <span>9:41</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <div style={{ width: 12, height: 12, background: '#000', borderRadius: '2px' }} />
                      <div style={{ width: 12, height: 12, background: '#000', borderRadius: '50%' }} />
                    </div>
                  </div>
                  <div style={{ 
                    background: '#f3f4f6', 
                    padding: '10px 15px', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }}></div>
                    <span style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '500' }}>Where to?</span>
                  </div>
                </div>

                {/* Mock Map View */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#e5e7eb' }}>
                   {/* Reliable Static Map Image (Google Maps Style) */}
                   <img 
                     src="/raipur-map.png" 
                     alt="Raipur City Map"
                     style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 }}
                   />
                   
                   {/* Route Line SVG */}
                   <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}>
                     <motion.path 
                       d="M 120 250 Q 200 350 180 450" 
                       fill="transparent" 
                       stroke="#0ea5e9" 
                       strokeWidth="4" 
                       strokeDasharray="8 4"
                       strokeLinecap="round"
                       initial={{ strokeDashoffset: 0 }}
                       animate={{ strokeDashoffset: -100 }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     />
                     {/* Start Dot */}
                     <circle cx="120" cy="250" r="4" fill="#ef4444" />
                   </svg>

                   {/* Floating Context Label */}
                   <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.9)', padding: '6px 12px', borderRadius: '15px', fontSize: '0.7rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 10 }}>
                      Raipur, CG
                   </div>

                   {/* Marker: Sender */}
                   <motion.div 
                     style={{ position: 'absolute', top: '230px', left: '105px', zIndex: 5 }}
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                   >
                     <div style={{ position: 'relative' }}>
                       <div style={{ width: 30, height: 30, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                          <div style={{ width: 12, height: 12, background: '#ef4444', borderRadius: '50%' }}></div>
                       </div>
                     </div>
                   </motion.div>

                   {/* Marker: Receiver */}
                   <motion.div 
                     style={{ position: 'absolute', top: '440px', left: '165px', zIndex: 5 }}
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                   >
                     <div style={{ width: 30, height: 30, background: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                        <MapPin size={14} color="#fff" />
                     </div>
                     <div style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', background: '#000', color: '#fff', padding: '4px 8px', borderRadius: '8px', fontSize: '0.6rem', whiteSpace: 'nowrap' }}>
                        Drop off
                     </div>
                   </motion.div>

                   {/* Moving Driver - Car Animation */}
                   <motion.div 
                     style={{ position: 'absolute', zIndex: 6 }}
                     // Bezier curve approximation for: M 120 250 Q 200 350 180 450
                     // Adjusted for icon center offset (-15px)
                     animate={{ 
                       top: [235, 285, 335, 385, 435], 
                       left: [105, 139, 160, 169, 165],
                       rotate: [25, 45, 80, 100, 110] // Approximate tangential rotation
                     }} 
                     transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                   >
                      <div style={{ 
                        background: '#fff', 
                        padding: '8px', 
                        borderRadius: '50%', 
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)', 
                        border: '2px solid #10b981',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px'
                      }}>
                        <Car size={18} color="#10b981" fill="#ecfdf5" />
                      </div>
                      {/* Pulse Effect */}
                      <motion.div 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.4)', zIndex: -1 }}
                        animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
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
                <div style={{ fontSize: '0.8rem', color: '#666' }}>2 mins ago • Pune, MH</div>
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
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Up to ₹15,000 protection</div>
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
            
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <DownloadBadge store="App Store" />
              <DownloadBadge store="Google Play" />
            </div>

            {/* Distinct APK Button - Separated & Glowing */}
            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  padding: '1rem 2rem', 
                  background: 'rgba(16, 185, 129, 0.1)', // Very subtle green tint
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '100px', // Pill shape
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.2), inset 0 0 10px rgba(16, 185, 129, 0.05)', // Subtle Glow
                  backdropFilter: 'blur(10px)'
                }}
                className="apk-btn"
              >
                <div style={{ color: '#34d399', display: 'flex' }}>
                   <Package size={24} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#34d399', fontWeight: 'bold' }}>Developer Option</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Download Direct APK</span>
                </div>
              </motion.button>
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
