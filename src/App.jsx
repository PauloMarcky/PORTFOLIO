// ROUTING: this replaces your 4 separate .html files.
// Each <Route> says "when the URL is X, show component Y".
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'

export default function App() {
  return (
    <Routes>
      {/* Layout (header + side nav) wraps every page, so it is written ONCE */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}
