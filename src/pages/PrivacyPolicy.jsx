import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main className="container" style={{ padding: '100px 24px', minHeight: '80vh' }}>
      <div className="glass-panel" style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '24px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-main)', lineHeight: '1.8' }}>
          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--accent-cyan)' }}>1. Information We Collect</h2>
            <p>
              When you play GeoForge: Assembly, we may collect minimal analytical data to improve the gameplay experience. This includes crash reports, basic device information, and session lengths. We do not collect personally identifiable information unless you explicitly provide it (e.g., via a support email).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--accent-cyan)' }}>2. How We Use Your Information</h2>
            <p>
              The information we collect is used solely for:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
              <li>Improving game stability and performance.</li>
              <li>Understanding player progression to balance levels.</li>
              <li>Providing customer support.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--accent-cyan)' }}>3. Third-Party Services</h2>
            <p>
              We may employ third-party companies and services (such as Google Analytics or AdMob) to facilitate our game, to provide the service on our behalf, or to assist us in analyzing how our game is used. These third parties have access to your basic usage data only to perform these tasks and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--accent-cyan)' }}>4. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
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
