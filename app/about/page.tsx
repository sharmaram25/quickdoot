import React from 'react';

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ marginBottom: '3rem', textAlign: 'center' }}>About Us</h1>

      {/* Product Overview */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Our Vision</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6', color: '#444' }}>
          {/* Placeholder: Vision statement */}
          To revolutionize the delivery industry by empowering individuals to become part of a global logistics network.
          We believe in a world where sending a package is as easy as sending a text.
        </p>
      </section>

      {/* Team Section */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet the Team</h2>
        <div className="grid">
          {/* Team Member 1 */}
          <div className="card">
            <div style={{ height: '200px', backgroundColor: '#e0e0e0', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
               {/* Placeholder Image */}
               <span style={{ color: '#888' }}>Photo Placeholder</span>
            </div>
            <h3 style={{ marginBottom: '0.25rem' }}>Arex Smith</h3>
            <h4 style={{ color: '#0070f3', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Founder & CEO</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              {/* Placeholder: Bio */}
              Visionary leader with 10+ years in logistics and tech startups. Passionate about community-driven solutions.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="card">
            <div style={{ height: '200px', backgroundColor: '#e0e0e0', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
               {/* Placeholder Image */}
               <span style={{ color: '#888' }}>Photo Placeholder</span>
            </div>
            <h3 style={{ marginBottom: '0.25rem' }}>Sarah Jones</h3>
            <h4 style={{ color: '#0070f3', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Head of Operations</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              {/* Placeholder: Bio */}
              Expert in operational efficiency and scaling peer-to-peer networks. Formerly at Uber.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="card">
            <div style={{ height: '200px', backgroundColor: '#e0e0e0', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
               {/* Placeholder Image */}
               <span style={{ color: '#888' }}>Photo Placeholder</span>
            </div>
            <h3 style={{ marginBottom: '0.25rem' }}>Mike Chen</h3>
            <h4 style={{ color: '#0070f3', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Lead Engineer</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              {/* Placeholder: Bio */}
              Full-stack wizard specializing in scalable architecture and secure payment systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
