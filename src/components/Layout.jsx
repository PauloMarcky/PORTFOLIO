// In your HTML, the header + side nav were copy-pasted into all 4 files.
// Here they live in one place. <Outlet /> is where the current page appears.
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import SideNav from './SideNav.jsx'

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <SideNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
