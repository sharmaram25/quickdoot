import React from 'react';

export default function ServicesPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ marginBottom: '3rem', textAlign: 'center' }}>Our Services</h1>

      {/* Services Overview */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
           <h2 style={{ marginBottom: '1rem' }}>What We Offer</h2>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            {/* Placeholder: Service overview text */}
            QuickDoot provides a decentralized logistics platform connecting senders with travelers. 
            We make delivery faster, cheaper, and friendlier.
           </p>
        </div>
      </section>

      {/* Peer-to-Peer Model Breakdown */}
      <section className="section">
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>How Peer-to-Peer Works</h2>
        <div className="grid">
          <div className="card">
            <h3 style={{ marginBottom: '0.5rem' }}>For Senders</h3>
            <p>Cheap, fast shipping by utilizing extra space in cars or bags. Ship anything from keys to furniture.</p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '0.5rem' }}>For Delivery Partners</h3>
            <p>Earn money while you travel by carrying packages. Offset your travel costs effortlessly.</p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '0.5rem' }}>For Receivers</h3>
            <p>Real-time tracking and secure handoff. Know exactly when your package will arrive.</p>
          </div>
        </div>
      </section>

      {/* Pricing Model Placeholder */}
      <section className="section">
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Pricing Model</h2>
        <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ marginBottom: '1rem' }}>Flexible Pricing</h3>
          {/* Placeholder: Pricing details */}
          <p style={{ marginBottom: '1rem' }}>Prices are determined by distance, weight, and urgency. Negotiable between peers.</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
             <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #ddd' }}>Small Items: $5 - $15</li>
             <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #ddd' }}>Medium Packages: $15 - $40</li>
             <li style={{ padding: '0.5rem 0' }}>Large/Bulky: $40+</li>
          </ul>
        </div>
      </section>

      {/* Use Cases Placeholder */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Common Use Cases</h2>
        <div className="grid">
           <div className="card">
              <h4>Forgot Keys?</h4>
              <p>Get them delivered in minutes.</p>
           </div>
           <div className="card">
              <h4>College Move-in</h4>
              <p>Find help moving boxes to dorms.</p>
           </div>
           <div className="card">
              <h4>Business Couriers</h4>
              <p>Send documents across town securely.</p>
           </div>
           <div className="card">
              <h4>Online Marketplace Buys</h4>
              <p>Bought something on Craigslist? Get it picked up.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
