import React from 'react';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import Terminal from '../components/Terminal/Terminal';
import './Index.css';

const Index = () => {
  const handleCommand = (command: string) => {
    console.log('Command executed:', command);
  };

  return (
    <Layout>
      <div className="landing-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-bg-effects">
            <div className="grid-overlay"></div>
            <div className="glow-orb glow-orb-1"></div>
            <div className="glow-orb glow-orb-2"></div>
          </div>
          
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-gradient">CYBER</span>
              <span className="title-accent">DUEL</span>
            </h1>
            <p className="hero-subtitle">
              Real-time multiplayer cybersecurity warfare.<br/>
              Choose your side: <span className="text-cyan">Hacker</span> vs <span className="text-magenta">Counter-Hacker</span>
            </p>
            
            <div className="hero-actions">
              <Button variant="primary" size="lg">
                Play Now
              </Button>
              <Button variant="secondary" size="lg">
                View Leaderboard
              </Button>
            </div>
            
            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-number">1,247</span>
                <span className="stat-label">Active Players</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">89</span>
                <span className="stat-label">Live Matches</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Game Modes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Strategic Combat</h3>
              <p>Execute precise commands in real-time terminals. Every keystroke matters in the cyber battlefield.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-time Action</h3>
              <p>Live multiplayer matches with instant command execution and dynamic scoring systems.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Multiple Arenas</h3>
              <p>Battle across Data Centers, Bank Servers, and Citadel Networks. Each with unique objectives.</p>
            </div>
          </div>
        </div>

        {/* Terminal Demo Section */}
        <div className="demo-section">
          <h2 className="section-title">Experience the Terminal</h2>
          <div className="demo-terminals">
            <div className="demo-terminal-container">
              <h3 className="terminal-demo-title hacker-title">Hacker Terminal</h3>
              <Terminal role="hacker" onCommand={handleCommand} />
            </div>
            <div className="demo-terminal-container">
              <h3 className="terminal-demo-title defender-title">Defender Terminal</h3>
              <Terminal role="defender" onCommand={handleCommand} />
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="maps-section">
          <h2 className="section-title">Choose Your Battlefield</h2>
          <div className="maps-grid">
            <div className="map-card">
              <div className="map-preview">
                <div className="map-icon">🏢</div>
              </div>
              <h3>Data Center Breach</h3>
              <p>Infiltrate segmented server racks and exfiltrate 3 data shards while defenders isolate compromised systems.</p>
            </div>
            
            <div className="map-card">
              <div className="map-preview">
                <div className="map-icon">🏦</div>
              </div>
              <h3>Bank Server Heist</h3>
              <p>Escalate privileges to level 3 and extract vault keys while avoiding detection systems and countermeasures.</p>
            </div>
            
            <div className="map-card">
              <div className="map-preview">
                <div className="map-icon">🏰</div>
              </div>
              <h3>Citadel Infiltration</h3>
              <p>Plant beacons on core nodes and maintain persistence while defenders hunt for intrusions and restore integrity.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
