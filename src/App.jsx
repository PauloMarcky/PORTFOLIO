// SINGLE PAGE: every section is stacked on one scrollable page.
// The side nav links jump to each section by its `id` (#home, #about, ...).
import Header from './components/Header.jsx'
import SideNav from './components/SideNav.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <Header />
      <SideNav />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
