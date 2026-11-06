import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}.
      </footer>
    </>
  )
}
