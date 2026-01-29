"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* 
        HERO SECTION
        Purpose: Main landing area with app highlight and call to action.
      */}
      <section className="section" style={{ backgroundColor: '#f9fafb', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '800' }}>
            {/* Placeholder: App Name/Tagline */}
            QuickDoot
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#666' }}>
            {/* Placeholder: Short description or value prop */}
            Your peer-to-peer delivery network. Fast, reliable, and community-driven.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {/* Placeholder: App Store Buttons */}
            <button className="btn" style={{ fontSize: '1.1rem', backgroundColor: '#000' }}>Download on App Store</button>
            <button className="btn" style={{ fontSize: '1.1rem', backgroundColor: '#0070f3' }}>Get it on Google Play</button>
          </div>
        </div>
      </section>

      {/* 
        DESCRIPTION SECTION
        Purpose: Explain the peer-to-peer delivery concept.
      */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
          <div className="grid">
            {/* Placeholder: Feature 1 */}
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Post a Request</h3>
              <p>Tell us what needs moving and where it needs to go. Connect with locals instantly.</p>
            </div>
            {/* Placeholder: Feature 2 */}
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Connect with Peers</h3>
              <p>Find a traveler or local going that way. Utilize existing trips for efficiency.</p>
            </div>
            {/* Placeholder: Feature 3 */}
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Fast Delivery</h3>
              <p>Get your items delivered quickly and securely. track every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ABOUT US PREVIEW SECTION
        Purpose: Short intro to the team/product linking to full page.
      */}
      <section className="section" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Who We Are</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: '#555', lineHeight: '1.6' }}>
            {/* Placeholder: Mission excerpt */}
            We are building the future of logistics through community collaboration, making delivery accessible to everyone.
          </p>
          <Link href="/about" className="btn" style={{ padding: '0.75rem 2rem' }}>
            Meet the Team
          </Link>
        </div>
      </section>

       {/* 
        CONTACT US SECTION
        Purpose: Way for users to reach out.
      */}
      <section className="section">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h2>
          {/* Placeholder: Contact form */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name</label>
              <input type="text" className="input" placeholder="Your Name" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
              <input type="email" className="input" placeholder="your@email.com" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message</label>
              <textarea className="input" rows={5} placeholder="How can we help?" style={{ resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn" style={{ alignSelf: 'flex-start', padding: '0.75rem 2rem' }}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
