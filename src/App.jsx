import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function Layout({ children }) {
  return (
    <>
      <div className="grid-bg"></div>
      
      <nav style={{ padding: '24px 0', borderBottom: '1px solid var(--border-glass)', backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2 style={{ color: 'var(--accent-cyan)', margin: 0 }}>Geo<span style={{ color: 'var(--text-main)' }}>Forge</span></h2>
          </Link>
          <div style={{ display: 'flex', gap: '24px' }}>
            {/* Using standard anchor tags for hash links so they scroll properly when already on the landing page */}
            <a href="/#features" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}>Features</a>
            <a href="/#gallery" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}>Gallery</a>
          </div>
        </div>
      </nav>

      {children}

      <footer style={{ borderTop: '1px solid var(--border-glass)', padding: '48px 0 24px 0', marginTop: '40px', backgroundColor: '#0b1120' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '32px', marginBottom: '48px' }}>
            <div>
              <h2 style={{ color: 'var(--accent-cyan)', margin: '0 0 16px 0' }}>Geo<span style={{ color: 'var(--text-main)' }}>Forge</span></h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
                A premium puzzle assembly experience. Route, combine, and engineer.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '48px' }}>
              <div>
                <h4 style={{ marginBottom: '16px', color: 'var(--text-main)' }}>Game</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li><a href="/#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Features</a></li>
                  <li><a href="/#gallery" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Gallery</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '16px', color: 'var(--text-main)' }}>Legal</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li><Link to="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</Link></li>
                  <li><Link to="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--border-glass)', paddingTop: '24px' }}>
            © {new Date().getFullYear()} GeoForge Assembly. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
