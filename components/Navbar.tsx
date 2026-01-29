import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        borderBottom: "1px solid #eaeaea",
        padding: "1rem 0",
        backgroundColor: "white",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Company Name */}
        <Link
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
        >
          QuickDoot
        </Link>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>

          {/* Admin Login Button - Points to external deployed admin dashboard */}
          <a href="https://admin.quickdoot.com" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '0.9rem', backgroundColor: '#333', textDecoration: 'none' }}>
            Admin Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
