import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function Home() {
  return (
    <section className="hero-showcase">
      <div className="name-intro">
        <h1>Hello, I'm Marcky <br /> Paulo Balaba</h1>
      </div>
      <div className="expertise-sub-intro">
        <h4>UI/UX Designer &amp; Full Stack Developer</h4>
      </div>
      <div className="cta-button-box">
        {/* <Link> replaces <a href="project.html">: navigates with no page reload */}
        <Link className="cta-button" to="/projects">View My Projects</Link>
      </div>
      <div className="profile-image-area">
        <img className="profile-image" src="/images/profile.png" alt="Profile" />
      </div>
    </section>
  )
}
