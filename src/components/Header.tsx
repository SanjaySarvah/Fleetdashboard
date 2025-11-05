import { useState } from 'react'
import Sidebar from './Sidebar'

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <>
      {/* Fixed Header */}
      <header
        className="d-flex align-items-center justify-content-between px-3 px-md-3 py-2 shadow-sm bg-white position-fixed top-0 start-0 end-0"
        style={{ zIndex: 1030 }}
      >
        <div className="d-flex align-items-center gap-2">
          {/* Logo */}
          <div className="bg-primary rounded d-none d-sm-flex" style={{ width: 35, height: 35 }}></div>

          {/* Mobile Logo - Smaller */}
          <div className="bg-primary rounded d-sm-none" style={{ width: 30, height: 30 }}></div>

          {/* Title */}
          <h5 className="m-0 text-primary fw-bold d-none d-md-block">AERO SOFT TRACK</h5>
          
          {/* Mobile Title - Smaller */}
          <h6 className="m-0 text-primary fw-bold d-md-none">AERO SOFT TRACK</h6>

          {/* Hamburger - Better mobile sizing */}
          <button
            className="btn btn-link text-dark ms-2 p-1"
            onClick={toggleSidebar}
            style={{ textDecoration: 'none' }}
            aria-label="Toggle menu"
          >
            <i className="bi bi-list fs-3 fs-md-3"></i>
          </button>

          {/* Dashboard Badge - Responsive */}
          <span className="badge rounded-pill bg-light text-primary ms-2 ms-md-3 d-none d-sm-inline-block">
            Dashboard
          </span>
        </div>

        {/* Right section - Improved mobile spacing */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          {/* Notification Bell */}
          <div className="position-relative">
            <i className="bi bi-bell fs-5 fs-md-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
              1
            </span>
          </div>
          
          {/* Settings Gear */}
          <i className="bi bi-gear fs-5 fs-md-5 d-none d-sm-block"></i>
          
          {/* User Badge - Responsive sizing */}
       <span 
  className="badge fw-bold d-flex align-items-center justify-content-center" 
  style={{
    fontSize: 'clamp(14px, 4vw, 16px)',
    backgroundColor: 'hsla(208, 100%, 50%, 0.20)', // ✅ correct
    color: '#0F62FE',
    minWidth: '35px',
    minHeight: '35px',
    width: 'clamp(35px, 10vw, 40px)',
    height: 'clamp(35px, 10vw, 40px)',
    borderRadius: '20%',
  }}
>


            AS
          </span>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} toggle={toggleSidebar} />
      
      {/* Push content below header - Responsive height */}
      <div style={{ height: 'clamp(50px, 10vw, 60px)' }}></div>
    </>
  )
}

export default Header