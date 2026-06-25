import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <main className="container" style={{ padding: '100px 24px', minHeight: '80vh' }}>
      <div className="glass-panel" style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '24px' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-main)', lineHeight: '1.8' }}>
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--accent-cyan)' }}>1. Acceptance of Terms</h2>
            <p>
              By accessing and playing GeoForge: Assembly, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the game.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--accent-cyan)' }}>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of GeoForge: Assembly per device for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--accent-cyan)' }}>3. Disclaimer</h2>
            <p>
              The materials within GeoForge: Assembly are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link to="/" className="btn-secondary" style={{ textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
