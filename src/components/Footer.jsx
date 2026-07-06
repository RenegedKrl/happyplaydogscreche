import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-surface)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Happy Play Dog. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
