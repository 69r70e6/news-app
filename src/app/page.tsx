import React from 'react';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', color: 'black' }}>
      {/* Header */}
      <header style={{ backgroundColor: 'black', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'red', fontSize: '2rem' }}>ಇ-ವಾರಧಿ</h1>
        <nav>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>ಮುಖಪುಟ</a>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>ರಾಜ್ಯ</a>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>ದೇಶ</a>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>ಕ್ರೀಡೆ</a>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>ಸಿನಿಮಾ</a>
        </nav>
        <div style={{ border: '1px solid red', padding: '0.5rem' }}>
          <input type="text" placeholder="ಹುಡುಕಿ" style={{ background: 'black', color: 'white', border: 'none' }} />
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '2rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 style={{ color: 'green' }}>ಮುಖ್ಯ ಸುದ್ದಿಗಳು</h2>
              <div style={{ border: '1px solid green', padding: '1rem', marginBottom: '1rem' }}>
                <h3>ಕರ್ನಾಟಕದಲ್ಲಿ ಹೊಸ ಹೂಡಿಕೆ</h3>
                <p>
                  ಕರ್ನಾಟಕದಲ್ಲಿ ಹೊಸ ಹೂಡಿಕೆ ಮಾಡಲು ಹಲವು ಕಂಪನಿಗಳು ಮುಂದೆ ಬಂದಿವೆ.
                  ಇದು ರಾಜ್ಯದ ಆರ್ಥಿಕತೆಗೆ ದೊಡ್ಡ ಉತ್ತೇಜನ ನೀಡಲಿದೆ.
                </p>
              </div>
              <div style={{ border: '1px solid green', padding: '1rem', marginBottom: '1rem' }}>
                <h3>ಕ್ರೀಡಾ ಲೋಕದಲ್ಲಿ ಭಾರತದ ಪಾರಮ್ಯ</h3>
                <p>
                  ಕ್ರೀಡಾ ಲೋಕದಲ್ಲಿ ಭಾರತದ ಆಟಗಾರರು ಉತ್ತಮ ಪ್ರದರ್ಶನ ನೀಡುತ್ತಿದ್ದಾರೆ.
                  ಇದು ದೇಶಕ್ಕೆ ಹೆಮ್ಮೆಯ ವಿಷಯ.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{ backgroundColor: '#e0e0e0', padding: '1rem' }}>
                <h3 style={{ color: 'red' }}>ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು</h3>
                <ul>
                  <li>ಹೊಸ ಚಲನಚಿತ್ರ ಬಿಡುಗಡೆ</li>
                  <li>ರಾಜಕೀಯದಲ್ಲಿ ಹೊಸ ಬೆಳವಣಿಗೆ</li>
                  <li>ಹವಾಮಾನ ವರದಿ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <p>&copy; 2026 ಇ-ವಾರಧಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.</p>
        <div>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>ಫೇಸ್ಬುಕ್</a>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>ಟ್ವಿಟ್ಟರ್</a>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>ಇನ್ಸ್ಟಾಗ್ರಾಮ್</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
