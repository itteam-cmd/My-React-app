import { useState } from 'react'
import './App.css'

const features = [
  { icon: '⚡', title: 'Fast setup', text: 'Powered by Vite for a quick development server and optimized production build.' },
  { icon: '⚛️', title: 'React ready', text: 'A clean component-based starting point that you can customize for your own demo.' },
  { icon: '🚀', title: 'Deployable', text: 'Includes a GitHub Pages workflow so you can publish your project from a repository.' },
]

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page-shell">
      <nav className="nav">
        <a className="brand" href="#" aria-label="React Demo home">
          <span className="brand-mark">R</span>
          <span>React<span className="brand-muted">Demo</span></span>
        </a>
        <a className="nav-link" href="#features">Features <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero">
        <div className="eyebrow"><span className="status-dot" /> YOUR NEXT PROJECT STARTS HERE</div>
        <h1>Build something<br /><span>great with React.</span></h1>
        <p className="hero-copy">
          A simple, modern starter website made with React and Vite.
          Edit the components, make it yours, and publish your demo on GitHub.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#features">Explore features <span>↓</span></a>
          <button className="button button-secondary" onClick={() => setCount((value) => value + 1)}>
            Try the counter <span className="counter">{count}</span>
          </button>
        </div>
        <div className="hero-note"><span>✓</span> React <span>✓</span> Vite <span>✓</span> GitHub Pages ready</div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
      </section>

      <section className="features" id="features">
        <div className="section-heading">
          <p className="section-kicker">WHAT'S INCLUDED</p>
          <h2>Everything you need to get started.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>Made with <span className="heart">♥</span> and React</span>
        <span className="footer-right">Your demo. Your ideas.</span>
      </footer>
    </main>
  )
}
