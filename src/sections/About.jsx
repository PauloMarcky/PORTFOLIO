import '../styles/about.css'

const socials = [
  { name: 'Facebook', icon: 'fb_clear.png', url: 'https://www.facebook.com/MARCKYBALABAPANGET' },
  { name: 'GitHub', icon: 'github_clear.png', url: 'https://github.com/PauloMarcky' },
  { name: 'Instagram', icon: 'insta_clear.png', url: 'https://www.instagram.com/marcky_balaba/' },
  { name: 'Telegram', icon: 'tele_clear.png', url: '#' },
]

export default function About() {
  return (
    <section id="about" className="page-section">
      <div className="about-main-grid">
        <div className="profile-image-wrap">
          <img className="profile-pic" src="/images/profile.png" alt="Profile" />
        </div>

        <div className="text-content-wrap">
          <h1>ABOUT ME</h1>
          <h2 className="about-name">Marcky Paulo Balaba (Pau-pau)</h2>

          <p className="biography">
            Dedicated Information Technology graduate with a passion of learning and having practical experience in
            system development, web design, and IT support. Developed technical skills through personal projects,
            academic work, and real-world exposures. I am willing to learn continuously in a dynamic IT environment.
          </p>
          <p className="biography">
            I have a solid foundation in programming particularly in Java, JavaScript, and Web Development Tools which
            has strengthened my ability to approach challenges with logical thinking, creativity, and a continuous
            learning mindset. I enjoy working with teams, sharing insights, and contributing to building solutions.
          </p>

          <div className="social-links-area">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                <img className="social-icon-img" src={`/images/${s.icon}`} alt={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
