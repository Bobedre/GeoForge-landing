import React from 'react';

export default function Credits() {
  return (
    <main className="container" style={{ padding: '80px 24px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '24px', color: 'var(--accent-cyan)' }}>Credits</h1>
      
      <div className="glass-panel" style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>Music</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '12px' }}>
            <strong style={{ fontSize: '1.1rem' }}>In Motion</strong> by <em>tatami</em>
            <br />
            <a 
              href="https://uppbeat.io/track/tatami/in-motion?rt=uc-referral" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-amber)', textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}
            >
              License & Download on Uppbeat
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
