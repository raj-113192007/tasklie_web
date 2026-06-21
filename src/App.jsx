import React from 'react'

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar glass">
        <div className="logo-container">
          <img src="/logo.jpeg" alt="Tasklie Logo" className="logo-img animate-float" style={{ animationDuration: '4s' }} />
          <div className="logo-text">
            <span className="dark">Task</span>
            <span className="light">lie</span>
          </div>
        </div>
        <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '1rem' }}>
          Get Started
        </button>
      </nav>

      {/* Main Content */}
      <main className="container">
        
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Group Projects,<br />
              <span>Delivered</span> to Your Door.
            </h1>
            <p className="hero-subtitle">
              Tasklie is the ultimate assignment help platform. 
              We make academic collaboration seamless by ensuring your assignments 
              and project copies reach exactly where they need to go, on time.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-primary">Submit a Task</button>
              <button className="btn-primary" style={{ background: 'transparent', border: '2px solid var(--text-light)', color: 'var(--text-main)', boxShadow: 'none' }}>Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            {/* Visual element representing delivery/clipboard */}
            <div className="glass animate-float" style={{ width: '300px', height: '350px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ width: '100%', height: '40px', background: 'var(--accent-green)', borderRadius: '8px', opacity: 0.8 }}></div>
              <div style={{ width: '80%', height: '40px', background: 'var(--accent-blue)', borderRadius: '8px', opacity: 0.8 }}></div>
              <div style={{ width: '60%', height: '40px', background: 'var(--accent-yellow)', borderRadius: '8px', opacity: 0.8 }}></div>
              
              {/* Decorative circle */}
              <div style={{ marginTop: 'auto', width: '60px', height: '60px', background: 'linear-gradient(135deg, var(--primary), #9B66F9)', borderRadius: '50%', alignSelf: 'flex-end', boxShadow: '0 10px 20px rgba(110, 56, 247, 0.4)' }}></div>
            </div>
            {/* Floating smaller elements */}
            <div className="glass animate-float-delayed" style={{ position: 'absolute', left: '-50px', top: '50px', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '32px' }}>📝</span>
            </div>
            <div className="glass animate-float" style={{ animationDuration: '5s', position: 'absolute', right: '-30px', bottom: '80px', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '24px' }}>🚀</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="feature-grid">
          <div className="feature-card glass">
            <div className="feature-icon icon-green">📋</div>
            <h3 className="feature-title">Plan</h3>
            <p className="feature-desc">Organize your group tasks efficiently and outline all project requirements seamlessly.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon icon-blue">✍️</div>
            <h3 className="feature-title">Do</h3>
            <p className="feature-desc">Work on your assignment with your peers. Complete all criteria with confidence.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon icon-yellow">📦</div>
            <h3 className="feature-title">Submit</h3>
            <p className="feature-desc">We deliver the final physical copies directly to your professor or specified address.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Plan. Do. Submit. Succeed. <br /><br />&copy; 2026 Tasklie by KrypZen. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
