import React, { useState } from 'react';

const AppStoreBadge = () => (
  <a href="#" className="store-badge">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M14.71 5.92c.67-.81 1.13-1.92.99-3.03-1.01.05-2.22.68-2.92 1.5-.54.63-1.07 1.76-.91 2.85 1.13.09 2.17-.53 2.84-1.32zm-3.03 1.95c-1.57-.04-2.8 1.05-3.56 1.05-.76 0-1.84-1-3.13-.98-1.68.02-3.23.97-4.1 2.49-1.76 3.06-.45 7.6 1.28 10.08.84 1.22 1.83 2.58 3.16 2.53 1.29-.05 1.78-.83 3.34-.83 1.55 0 2.01.83 3.36.8 1.39-.02 2.25-1.24 3.09-2.46.97-1.42 1.38-2.79 1.4-2.86-.03-.01-2.67-1.02-2.7-4.08-.03-2.56 2.09-3.8 2.13-3.83-1.2-1.74-3.05-1.98-3.7-2.01-1.63-.16-3.21.96-4.04.96z"/>
    </svg>
    <div>
      <span className="small-text">Download on the</span>
      <span className="large-text">App Store</span>
    </div>
  </a>
);

const GooglePlayBadge = () => (
  <a href="#" className="store-badge">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 2.5v19c0 .5.3.8.8.8.2 0 .4-.1.6-.2l10.3-6.2L2 2.5z" fill="#00E676"/>
      <path d="M13.7 15.9l4.5-2.7c.9-.5.9-1.4 0-1.9l-4.5-2.7L2 2.5l11.7 13.4z" fill="#FFC107"/>
      <path d="M2.6 2.3L13.7 15.9l1.6 1.6L2.6 2.3z" fill="#D50000"/>
      <path d="M13.7 8.1L2.6 21.7l12.7-12-1.6-1.6z" fill="#29B6F6"/>
    </svg>
    <div>
      <span className="small-text">GET IT ON</span>
      <span className="large-text">Google Play</span>
    </div>
  </a>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('students'); // 'students' or 'solvers'

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo-text">
            <span className="dark">Task</span>
            <span className="light">lie</span>
          </div>
          <button className="btn-navy" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            Get the App
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Streamline Your Studies. <br />
              <span>Earn on Your Terms.</span>
            </h1>
            <p className="hero-subtitle">
              The secure student-to-student mobile app to outsource academic tasks or unlock part-time income. All from your smartphone.
            </p>
            <div className="hero-badges">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
          <div className="hero-visual">
            <div className="mockup-container animate-float">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="mockup-ui">
                  {/* Fake UI Elements */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--navy-light)' }}></div>
                    <div style={{ width: '100px', height: '16px', borderRadius: '8px', background: 'var(--border-color)' }}></div>
                  </div>
                  <div style={{ height: '100px', borderRadius: '16px', background: 'var(--bg-white)', marginTop: '20px', padding: '16px' }}>
                    <div style={{ width: '60%', height: '14px', borderRadius: '4px', background: 'var(--border-color)', marginBottom: '12px' }}></div>
                    <div style={{ width: '40%', height: '14px', borderRadius: '4px', background: 'var(--border-color)' }}></div>
                  </div>
                  <div style={{ height: '80px', borderRadius: '16px', background: 'var(--emerald-light)', marginTop: '10px', padding: '16px', border: '1px solid var(--emerald-main)' }}>
                    <div style={{ width: '50%', height: '14px', borderRadius: '4px', background: 'var(--emerald-main)', marginBottom: '12px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. The App Experience */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Use Our App?</h2>
          <p className="section-subtitle">Designed exclusively for college students, providing a seamless, secure, and intuitive marketplace right in your pocket.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Instant In-App Chat</h3>
              <p className="feature-desc">Discuss assignment guidelines, share files, and get real-time updates directly with your peer solver inside the secure app chat.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <path d="M2 10h20M12 15h.01"></path>
                </svg>
              </div>
              <h3 className="feature-title">Escrow Secured Wallet</h3>
              <p className="feature-desc">Funds are safely locked in the app wallet when you hire, and only released to the solver after you review and approve the final work.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="feature-title">100% Identity Protection</h3>
              <p className="feature-desc">Complete anonymity. Your name, phone number, and university details are fully encrypted and never revealed to anyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">Academic Help and Earnings, Just a Tap Away</h2>
          
          <div className="tabs-container">
            <button 
              className={`tab-btn ${activeTab === 'students' ? 'active' : ''}`}
              onClick={() => setActiveTab('students')}
            >
              For Students Needing Help
            </button>
            <button 
              className={`tab-btn ${activeTab === 'solvers' ? 'active' : ''}`}
              onClick={() => setActiveTab('solvers')}
            >
              For Student Solvers
            </button>
          </div>

          <div className="steps-grid">
            {activeTab === 'students' ? (
              <>
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3 className="step-title">Download & Post</h3>
                  <p className="step-desc">Download the app & post your assignment details. Include deadlines, specific criteria, and attachments.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3 className="step-title">Review Bids</h3>
                  <p className="step-desc">Receive competitive bids from verified peer experts. Chat instantly to finalize the requirements.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3 className="step-title">Approve & Pay</h3>
                  <p className="step-desc">Approve the completed work and release the payment safely from your escrow wallet.</p>
                </div>
              </>
            ) : (
              <>
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3 className="step-title">Browse Tasks</h3>
                  <p className="step-desc">Browse active assignment posts in your field of study. Filter by budget, topic, and urgency.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3 className="step-title">Submit Proposal</h3>
                  <p className="step-desc">Submit your proposal and complete the task on time. Communicate directly with the student via chat.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3 className="step-title">Get Paid Instantly</h3>
                  <p className="step-desc">Get paid instantly into your secure in-app wallet once the student approves your excellent work.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. Honor Code & Trust Banner */}
      <section className="honor-banner">
        <div className="container honor-content">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-dark)" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
          <p className="honor-text">
            <strong>Academic Integrity First:</strong> Our platform strictly promotes ethical learning. All materials delivered through the app are intended for research, tutoring support, and reference purposes only.
          </p>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2 className="section-title">Ready to Transform Your College Life? <br />Download the App Today.</h2>
          <div className="hero-badges" style={{ justifyContent: 'center' }}>
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-text">
                <span className="light" style={{ color: 'white' }}>Task</span>
                <span className="light">lie</span>
              </div>
              <p>The premier peer-to-peer marketplace for academic tasks. Outsource safely, earn securely.</p>
            </div>
            <div className="footer-links">
              <h4>Legal & Trust</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Academic Honor Code</a>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Support</a>
              <a href="#">Community Guidelines</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tasklie. All rights reserved.</p>
            <div style={{ textAlign: 'right' }}>
              <p style={{ marginBottom: '4px' }}>Founder: <strong>Shivam Kumar</strong></p>
              <p style={{ opacity: 0.8 }}>Powered by <strong>KrypZen</strong></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
