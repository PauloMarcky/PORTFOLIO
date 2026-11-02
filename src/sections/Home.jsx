import '../styles/home.css'

export default function Home() {
  return (
    <section id="home" className="page-section">
      <div className="hero-showcase">
        <div className="name-intro">
          <h1>Hello, I'm Marcky <br /> Paulo Balaba</h1>
        </div>
        <div className="expertise-sub-intro">
          <h4>UI/UX Designer &amp; Full Stack Developer</h4>
        </div>
        <div className="cta-button-box">
          {/* A plain anchor scrolls down to the #projects section */}
          <a className="cta-button" href="#projects">View My Projects</a>
        </div>
        <div className="profile-image-area">
          <img className="profile-image" src="/images/profile.png" alt="Profile" />
        </div>
      </div>
    </section>
  )
}
