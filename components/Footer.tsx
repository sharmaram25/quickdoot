import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid #eaeaea', padding: '2rem 0', marginTop: 'auto', backgroundColor: '#f9f9f9' }}>
      <div className="container" style={{ textAlign: 'center', color: '#666' }}>
        {/* Footer Content Placeholder */}
        <p>&copy; {new Date().getFullYear()} QuickDoot. All rights reserved.</p>
        
        {/* Placeholder for additional footer links */}
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          {/* 
            Placeholder: Privacy Policy Link
            Placeholder: Terms of Service Link 
          */}
          <span>Privacy Policy (Placeholder)</span>
          <span>Terms of Service (Placeholder)</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
