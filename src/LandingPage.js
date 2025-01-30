const LandingPage = () => {
  return (
    <div>
      <nav className="top-bar">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/GITAM_logo.svg/1200px-GITAM_logo.svg.png"
          alt="GITAM Logo"
          className="logo"
        />
        <ul>
          <li>Home</li>
          <li>G-Student</li>
          <li>Explore</li>
        </ul>
        <img
          src="https://github.com/Palleti-Varshita.png"
          style={{
            height: "48px",
            width: "48px",
            borderRadius: "50%",
          }}
        />
      </nav>
      <div className="container">
        <div className="goddess-container">
          <div className="circular-text">
            She Talks Tech - Empowering Women in Technology
          </div>
          <img
            src="df-removebg-preview.png"
            alt="She Talks Tech"
            className="goddess-image"
          />
        </div>

        <div className="login-box">
          <a href="dashboard.html">Get Started - Login/Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;