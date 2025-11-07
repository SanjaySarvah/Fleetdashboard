import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DesktopSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  // Mock user data - replace with actual authentication logic
  useEffect(() => {
    // Simulate fetching user data
    const userData = {
      name: "John Doe",
      email: "john.doe@example.com"
    };
    setUser(userData);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: "bi-speedometer2", path: "/" },
    { name: "Dealer License", icon: "bi-card-checklist", path: "/driverlicenseportal" },
    { name: "Reports", icon: "bi-graph-up", path: "/reports" },
    { name: "Group Management", icon: "bi-people", path: "/group-management" },
    { name: "Settings", icon: "bi-gear", path: "/settings" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setExpanded(false);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login clicked");
    navigate("/login");
    setExpanded(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");
    setUser(null);
    navigate("/login");
    setExpanded(false);
  };

  const handleIconHover = () => {
    if (!expanded) {
      // Set a small delay before expanding to avoid accidental triggers
      const timeout = window.setTimeout(() => {
        setExpanded(true);
      }, 300);
      setHoverTimeout(timeout);
    }
  };

  const handleIconLeave = () => {
    if (hoverTimeout) {
      window.clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`position-fixed top-0 start-0 h-100 bg-white shadow-sm border-end d-none d-md-flex flex-column ${
          expanded ? "p-3" : "p-2"
        }`}
        style={{
          width: expanded ? "280px" : "80px",
          transition: "all 0.3s ease",
          zIndex: 1050,
        }}
      >
        {/* Header Section */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <div
              className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
              style={{ width: 40, height: 40 }}
            >
              A
            </div>
            {expanded && (
              <span className="ms-3 fw-bold text-dark fs-5">AppName</span>
            )}
          </div>

          {/* Collapse button */}
          {expanded && (
            <button
              className="btn btn-link text-dark p-1"
              onClick={() => setExpanded(false)}
              aria-label="Collapse Sidebar"
            >
              <i className="bi bi-chevron-left fs-6"></i>
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="d-flex flex-column gap-2 flex-grow-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.name}
                className={`d-flex align-items-center text-decoration-none rounded-3 py-2 px-3 w-100 border-0 ${
                  isActive 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-dark bg-transparent"
                }`}
                onClick={() => handleNavigation(item.path)}
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
                style={{ 
                  transition: "all 0.2s ease",
                }}
              >
                <i className={`bi ${item.icon} fs-5 ${expanded ? "me-3" : ""} ${
                  isActive ? "text-white" : "text-dark"
                }`}></i>
                {expanded && (
                  <span className={`fw-semibold ${isActive ? "text-white" : "text-dark"}`}>
                    {item.name}
                  </span>
                )}
                {!expanded && isActive && (
                  <div 
                    className="position-absolute bg-primary rounded-pill"
                    style={{ 
                      width: '4px', 
                      height: '20px', 
                      right: '8px' 
                    }}
                  ></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Section / Login Logout at Bottom */}
        <div className="border-top pt-3 mt-3">
          {user ? (
            // User is logged in - show profile and logout
            <div className="d-flex flex-column gap-2">
              {expanded ? (
                <>
                  <div 
                    className="d-flex align-items-center px-2 py-1"
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                  >
                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white"
                      style={{ width: 32, height: 32, fontSize: '12px' }}>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ms-3">
                      <div className="fw-semibold text-dark small">{user.name}</div>
                      <div className="text-muted x-small">{user.email}</div>
                    </div>
                  </div>
                  <button
                    className="d-flex align-items-center text-decoration-none rounded-3 py-2 px-3 w-100 border-0 bg-transparent text-dark"
                    onClick={handleLogout}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    style={{ transition: "all 0.2s ease" }}
                  >
                    <i className="bi bi-box-arrow-right me-3"></i>
                    <span className="fw-semibold">Logout</span>
                  </button>
                </>
              ) : (
                // Collapsed state - just logout icon
                <button
                  className="d-flex align-items-center justify-content-center text-decoration-none rounded-3 py-2 px-2 w-100 border-0 bg-transparent text-dark"
                  onClick={handleLogout}
                  onMouseEnter={handleIconHover}
                  onMouseLeave={handleIconLeave}
                  title="Logout"
                  style={{ transition: "all 0.2s ease" }}
                >
                  <i className="bi bi-box-arrow-right fs-5"></i>
                </button>
              )}
            </div>
          ) : (
            // User is not logged in - show login
            <button
              className={`d-flex align-items-center text-decoration-none rounded-3 py-2 ${
                expanded ? "px-3" : "px-2 justify-content-center"
              } w-100 border-0 bg-primary text-white`}
              onClick={handleLogin}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              style={{ transition: "all 0.2s ease" }}
            >
              <i className={`bi bi-box-arrow-in-right ${expanded ? "me-3" : ""}`}></i>
              {expanded && <span className="fw-semibold">Login</span>}
            </button>
          )}
        </div>
      </aside>

      {/* Overlay for mobile-like experience */}
      {expanded && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-none d-md-block"
          style={{ zIndex: 1049 }}
          onClick={() => setExpanded(false)}
        ></div>
      )}
    </>
  );
};

export default DesktopSidebar;