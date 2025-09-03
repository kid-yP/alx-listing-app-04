import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '1rem', 
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid #eaeaea',
      marginTop: '2rem'
    }}>
      <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
    </footer>
  );
}