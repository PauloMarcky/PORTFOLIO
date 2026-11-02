// A component is just a function that returns JSX (HTML-like syntax).
// Note: `class` becomes `className` in JSX.
export default function Header() {
  return (
    <header className="top-header">
      <span className="logo-text">MKY.DEV</span>
    </header>
  )
}
