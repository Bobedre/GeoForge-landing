import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', zIndex: 10 }}>
          <div className="floating" style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-cyan)', borderRadius: '20px', color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '24px' }}>
            NOW IN DEVELOPMENT
          </div>
          <h1 className="text-gradient" style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '24px' }}>
            Design. Build. Assemble.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Master the flow in GeoForge: Assembly. Construct intricate factories, solve complex puzzles, and engineer your way through challenging sectors.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ animation: 'pulse-glow 2s infinite' }}>
              Join Waitlist
            </button>
            <a href="#gallery" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              View Screenshots
            </a>
          </div>
          <p style={{ marginTop: '24px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            * Coming soon to Android. iOS release planned for the future.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container" style={{ padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Engineer Your Solutions</h2>
          <p style={{ color: 'var(--text-muted)' }}>Utilize specialized tools to overcome complex logistical challenges.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="glass-panel" style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-cyan)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-cyan)' }}>
                <path d="M12 2v20" />
                <path d="m17 7-5-5-5 5" />
                <rect width="18" height="18" x="3" y="3" rx="2" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Emitters & Receivers</h3>
            <p style={{ color: 'var(--text-muted)' }}>Route elements precisely from start to finish. Master the grid to ensure perfect alignment.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--accent-amber)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-amber)' }}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
                <path d="M12 22.08V12" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Rotators & Splitters</h3>
            <p style={{ color: 'var(--text-muted)' }}>Manipulate the flow. Divide resources and change directions to optimize your factory layout.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--accent-green)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-green)' }}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Shapes & Colors</h3>
            <p style={{ color: 'var(--text-muted)' }}>Paint, combine, and transform elements. Match the exact specifications required by the objective.</p>
          </div>
        </div>
      </section>

      {/* Media / Gallery Section replacing Level Editor */}
      <section id="gallery" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.8) 100%)', zIndex: -1 }}></div>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Intricate Puzzles</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Get a glimpse into the logic and systems you'll be building.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', aspectRatio: '1', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-glass)' }}>
                {/* Fallback styling if image doesn't load */}
                <img src={`${import.meta.env.BASE_URL}screenshot1.png`} alt="GeoForge Puzzle Gameplay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <div style={{ display: 'none', color: 'var(--text-muted)' }}>Add /public/screenshot1.png</div>
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', aspectRatio: '1', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-glass)' }}>
                {/* Fallback styling if image doesn't load */}
                <img src={`${import.meta.env.BASE_URL}screenshot2.png`} alt="GeoForge Advanced Board" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <div style={{ display: 'none', color: 'var(--text-muted)' }}>Add /public/screenshot2.png</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
