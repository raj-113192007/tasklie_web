import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppStoreBadge = ({ onClick }) => (
  <motion.a 
    href="#" 
    className="store-badge"
    whileHover={{ y: -5, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M14.71 5.92c.67-.81 1.13-1.92.99-3.03-1.01.05-2.22.68-2.92 1.5-.54.63-1.07 1.76-.91 2.85 1.13.09 2.17-.53 2.84-1.32zm-3.03 1.95c-1.57-.04-2.8 1.05-3.56 1.05-.76 0-1.84-1-3.13-.98-1.68.02-3.23.97-4.1 2.49-1.76 3.06-.45 7.6 1.28 10.08.84 1.22 1.83 2.58 3.16 2.53 1.29-.05 1.78-.83 3.34-.83 1.55 0 2.01.83 3.36.8 1.39-.02 2.25-1.24 3.09-2.46.97-1.42 1.38-2.79 1.4-2.86-.03-.01-2.67-1.02-2.7-4.08-.03-2.56 2.09-3.8 2.13-3.83-1.2-1.74-3.05-1.98-3.7-2.01-1.63-.16-3.21.96-4.04.96z"/>
    </svg>
    <div>
      <span className="small-text">Download on the</span>
      <span className="large-text">App Store</span>
    </div>
  </motion.a>
);

const GooglePlayBadge = ({ onClick }) => (
  <motion.a 
    href="#" 
    className="store-badge"
    whileHover={{ y: -5, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
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
  </motion.a>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [showToast, setShowToast] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="app">
      {/* Toast Notification */}
      <div className="toast-container">
        <AnimatePresence>
          {showToast && (
            <motion.div 
              className="toast"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
              </svg>
              <span>🚀 The Tasklie app is currently in development. Coming Soon!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <div className="logo-text">
            <span className="dark">Task</span>
            <span className="light">lie</span>
          </div>
          <motion.button 
            className="btn-navy" 
            style={{ padding: '10px 24px', fontSize: '0.95rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadClick}
          >
            Get the App
          </motion.button>
        </div>
      </motion.nav>

      {/* 1. Hero Section */}
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Streamline Your Studies. <br />
              <span>Earn on Your Terms.</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The secure student-to-student mobile app to outsource academic tasks or unlock part-time income. All from your smartphone.
            </motion.p>
            <motion.div 
              className="hero-badges"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AppStoreBadge onClick={handleDownloadClick} />
              <GooglePlayBadge onClick={handleDownloadClick} />
            </motion.div>
          </div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="mockup-container animate-float">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="mockup-ui">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--navy-light)' }}></div>
                    <div style={{ width: '100px', height: '16px', borderRadius: '8px', background: 'var(--border-color)' }}></div>
                  </div>
                  <motion.div 
                    style={{ height: '100px', borderRadius: '16px', background: 'var(--bg-white)', marginTop: '20px', padding: '16px' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div style={{ width: '60%', height: '14px', borderRadius: '4px', background: 'var(--border-color)', marginBottom: '12px' }}></div>
                    <div style={{ width: '40%', height: '14px', borderRadius: '4px', background: 'var(--border-color)' }}></div>
                  </motion.div>
                  <motion.div 
                    style={{ height: '80px', borderRadius: '16px', background: 'var(--emerald-light)', marginTop: '10px', padding: '16px', border: '1px solid var(--emerald-main)' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div style={{ width: '50%', height: '14px', borderRadius: '4px', background: 'var(--emerald-main)', marginBottom: '12px' }}></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* NEW: Problem vs Solution Section */}
      <section className="problem-solution-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Broken Market vs. The Tasklie Solution
          </motion.h2>
          
          <div className="problem-grid" style={{ marginTop: '40px' }}>
            {/* The Problem */}
            <motion.div 
              className="problem-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="feature-icon-wrapper" style={{ marginBottom: '20px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="feature-title" style={{ color: '#991B1B' }}>The Problem</h3>
              <p className="feature-desc" style={{ color: '#7F1D1D' }}>
                The current market is broken. Students are overwhelmed by academic pressure and struggle to find reliable, affordable help without risking scams, exposed identities, or exorbitant agency fees.
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div 
              className="solution-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="feature-icon-wrapper" style={{ marginBottom: '20px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="feature-title" style={{ color: 'var(--emerald-hover)' }}>The Tasklie Solution</h3>
              <p className="feature-desc" style={{ color: 'var(--emerald-hover)' }}>
                A revolutionary peer-to-peer ecosystem. We connect students directly, guaranteeing 100% identity protection, secure escrow payments, and an intuitive chat interface to get work done efficiently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The App Experience */}
      <section className="features-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Use Our App?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Designed exclusively for college students, providing a seamless, secure, and intuitive marketplace right in your pocket.
          </motion.p>
          
          <div className="features-grid">
            {[
              {
                icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>,
                title: "Instant In-App Chat",
                desc: "Discuss assignment guidelines, share files, and get real-time updates directly with your peer solver inside the secure app chat."
              },
              {
                icon: <><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20M12 15h.01"></path></>,
                title: "Escrow Secured Wallet",
                desc: "Funds are safely locked in the app wallet when you hire, and only released to the solver after you review and approve the final work."
              },
              {
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>,
                title: "100% Identity Protection",
                desc: "Complete anonymity. Your name, phone number, and university details are fully encrypted and never revealed to anyone."
              }
            ].map((feature, i) => (
              <motion.div 
                className="feature-card"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="feature-icon-wrapper">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="how-it-works">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Academic Help and Earnings, Just a Tap Away
          </motion.h2>
          
          <motion.div 
            className="tabs-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button 
              className={`tab-btn ${activeTab === 'students' ? 'active' : ''}`}
              onClick={() => setActiveTab('students')}
            >
              For Students Needing Help
              {activeTab === 'students' && (
                <motion.div className="tab-indicator" layoutId="tab-indicator" />
              )}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'solvers' ? 'active' : ''}`}
              onClick={() => setActiveTab('solvers')}
            >
              For Student Solvers
              {activeTab === 'solvers' && (
                <motion.div className="tab-indicator" layoutId="tab-indicator" />
              )}
            </button>
          </motion.div>

          <div className="steps-grid">
            <AnimatePresence mode="wait">
              {activeTab === 'students' ? (
                <motion.div 
                  key="students"
                  style={{ display: 'contents' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
              ) : (
                <motion.div 
                  key="solvers"
                  style={{ display: 'contents' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Honor Code & Trust Banner */}
      <motion.section 
        className="honor-banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container honor-content">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-dark)" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
          <p className="honor-text">
            <strong>Academic Integrity First:</strong> Our platform strictly promotes ethical learning. All materials delivered through the app are intended for research, tutoring support, and reference purposes only.
          </p>
        </div>
      </motion.section>

      {/* 5. Final CTA */}
      <section className="final-cta">
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Ready to Transform Your College Life? <br />Download the App Today.</h2>
          <div className="hero-badges" style={{ justifyContent: 'center' }}>
            <AppStoreBadge onClick={handleDownloadClick} />
            <GooglePlayBadge onClick={handleDownloadClick} />
          </div>
        </motion.div>
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
