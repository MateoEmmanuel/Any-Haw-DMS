import React, { useState } from 'react';
import './style.css';
import LoginRegister from './LoginRegister';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <h1>Any-Haw</h1>
          <div className="tagline">Litsong Manok</div>
        </div>

        <nav className="nav-links">
          <a href="#">Menu</a>
          <a href="#">About</a>
          <button className="login-btn" onClick={() => setShowModal(true)}>
            LOGIN/REGISTER
          </button>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </header>

      {/* Hero Section without title */}
      <section className="hero">
        {/* Title removed per request */}
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <LoginRegister />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
