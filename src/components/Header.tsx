import { useState } from 'react'
import Sidebar from './Sidebar'

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <header className="d-flex align-items-center justify-content-between px-3 py-2 shadow-sm bg-white">
        <div className="d-flex align-items-center gap-2">
          {/* Logo */}
          <div className="bg-primary rounded" style={{ width: 35, height: 35 }}></div>

          {/* Title */}
          <h5 className="m-0 text-primary fw-bold">AERO SOFT TRACK</h5>

          {/* ✅ Hamburger visible on all screens now */}
          <button
            className="btn btn-link text-dark ms-2"
            onClick={toggleSidebar}
            style={{ textDecoration: 'none' }}
          >
            <i className="bi bi-list fs-3"></i>
          </button>

          <span className="badge rounded-pill bg-light text-primary ms-3">Dashboard</span>
        </div>

        {/* Right section */}
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <i className="bi bi-bell fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              1
            </span>
          </div>
          <i className="bi bi-gear fs-5"></i>
          <span className="badge rounded-pill bg-light text-primary fw-bold">AS</span>
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar open={sidebarOpen} toggle={toggleSidebar} />
    </>
  )
}

export default Header
