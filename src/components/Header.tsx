import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const openSidebar = () => setSidebarOpen(true)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      <header
        className="d-flex align-items-center justify-content-between px-3 px-md-3 py-2 shadow-sm bg-white position-fixed top-0 start-0 end-0"
        style={{ zIndex: 1030 }}
      >
        {/* Left Section */}
        <div className="d-flex align-items-center gap-2" style={{ paddingRight: isMobile ? '0' : '120px' }}>
          {/* Logo (Desktop) */}
          <div className="bg-primary rounded d-none d-sm-flex" style={{ width: 35, height: 35 }}></div>

          {/* Logo (Mobile) */}
          <div className="bg-primary rounded d-sm-none" style={{ width: 30, height: 30 }}></div>

          {/* Title */}
          <h5 className="m-0 text-primary fw-bold d-none d-md-block">AERO SOFT TRACK</h5>
          <h6 className="m-0 text-primary fw-bold d-md-none">AERO SOFT TRACK</h6>

          {/* Hamburger/Close Button - Only visible on mobile */}
          {isMobile && (
            <div className="ms-auto me-3">
              {!sidebarOpen ? (
                <button
                  className="btn btn-link text-dark p-1"
                  onClick={openSidebar}
                  style={{ textDecoration: 'none' }}
                  aria-label="Open menu"
                >
                  <i className="bi bi-list fs-3"></i>
                </button>
              ) : (
                <button
                  className="btn btn-link text-dark p-1"
                  onClick={closeSidebar}
                  style={{ textDecoration: 'none' }}
                  aria-label="Close menu"
                >
                  <i className="bi bi-x-lg fs-3"></i>
                </button>
              )}
            </div>
          )}

          {/* Desktop Hamburger Button - Position unchanged */}
          {!isMobile && (
            <>
              {!sidebarOpen && (
                <button
                  className="btn btn-link text-dark p-1"
                  onClick={openSidebar}
                  style={{ textDecoration: 'none', marginLeft: '50px' }}
                  aria-label="Open menu"
                >
                  <i className="bi bi-list fs-3 fs-md-3"></i>
                </button>
              )}

              {sidebarOpen && (
                <button
                  className="btn btn-link text-dark p-1"
                  onClick={closeSidebar}
                  style={{ textDecoration: 'none', marginLeft: '50px' }}
                  aria-label="Close menu"
                >
                  <i className="bi bi-x-lg fs-3 fs-md-3"></i>
                </button>
              )}
            </>
          )}

          {/* Dashboard Badge */}
          <span className="badge rounded-pill bg-light text-primary ms-2 ms-md-3 d-none d-sm-inline-block">
            Dashboard
          </span>
        </div>

        {/* Right Section - Reordered for mobile */}
        <div className={`d-flex align-items-center ${isMobile ? 'gap-3' : 'gap-2 gap-md-3'}`}>
          {/* Mobile: Hamburger menu on far right */}
          {!isMobile && (
            <>
              {/* Notification Bell */}
              <div className="position-relative">
                <i className="bi bi-bell fs-5 fs-md-5"></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.6rem' }}
                >
                  1
                </span>
              </div>

              {/* Gear Icon (hidden on small screens) */}
              <i className="bi bi-gear fs-5 fs-md-5 d-none d-sm-block"></i>
            </>
          )}

          {/* User Badge */}
          <span
            className="badge fw-bold d-flex align-items-center justify-content-center"
            style={{
              fontSize: 'clamp(14px, 4vw, 16px)',
              backgroundColor: 'hsla(208, 100%, 50%, 0.20)',
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

          {/* Mobile: Notification and Gear icons */}
          {isMobile && (
            <div className="d-flex align-items-center gap-3">
              {/* Notification Bell */}
              <div className="position-relative">
                <i className="bi bi-bell fs-5"></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.6rem' }}
                >
                  1
                </span>
              </div>

              {/* Gear Icon */}
              <i className="bi bi-gear fs-5"></i>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar open={sidebarOpen} toggle={closeSidebar} />

      {/* Header Spacer */}
      <div style={{ height: 'clamp(50px, 10vw, 60px)' }}></div>
    </>
  )
}

export default Header