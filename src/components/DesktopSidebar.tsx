import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  icon: string;
  path: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  path: string;
}

const DesktopSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: "bi-speedometer2", path: "/" },
    {
      name: "Dealer License",
      icon: "bi-card-checklist",
      path: "/driverlicenseportal",
      submenu: [
        { name: "Applications", path: "/driverlicenseportal/applications" },
        { name: "Renewals", path: "/driverlicenseportal/renewals" },
        { name: "History", path: "/driverlicenseportal/history" },
      ],
    },
    {
      name: "Reports",
      icon: "bi-graph-up",
      path: "/reports",
      submenu: [
        { name: "Sales Report", path: "/reports/sales" },
        { name: "Performance", path: "/reports/performance" },
        { name: "Analytics", path: "/reports/analytics" },
      ],
    },
    {
      name: "Group Management",
      icon: "bi-people",
      path: "/group-management",
      submenu: [
        { name: "Users", path: "/group-management/users" },
        { name: "Roles", path: "/group-management/roles" },
        { name: "Permissions", path: "/group-management/permissions" },
      ],
    },
    {
      name: "Settings",
      icon: "bi-gear",
      path: "/settings",
      submenu: [
        { name: "Profile", path: "/settings/profile" },
        { name: "Security", path: "/settings/security" },
        { name: "Preferences", path: "/settings/preferences" },
      ],
    },
  ];

  const handleParentMenuClick = (item: MenuItem) => {
    if (!expanded) {
      // When sidebar is collapsed, clicking any icon expands the sidebar
      setExpanded(true);
      // Don't navigate immediately, just expand and show submenu if exists
      if (item.submenu && item.submenu.length > 0) {
        setActiveMenu(item.name);
      }
    } else {
      // When sidebar is expanded, navigate to parent path
      navigate(item.path);
      // Close submenu if it's open
      if (activeMenu === item.name) {
        setActiveMenu(null);
      }
    }
  };

  const handleArrowClick = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent parent menu click
    
    if (!expanded) {
      setExpanded(true);
    }
    
    // Toggle submenu
    if (item.submenu && item.submenu.length > 0) {
      setActiveMenu(activeMenu === item.name ? null : item.name);
    }
  };

  const handleSubmenuClick = (path: string) => {
    navigate(path);
    setActiveMenu(null);
  };

  const handleToggleSidebar = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setActiveMenu(null);
    }
  };

  const isActive = (path: string) => location.pathname === path;
  const isSubmenuActive = (submenu: SubMenuItem[] | undefined) =>
    submenu?.some((item) => isActive(item.path));

  return (
    <>
      {/* Sidebar */}
      <aside
        className="position-fixed top-0 start-0 h-100 bg-white d-flex flex-column justify-content-between border-end"
        style={{
          width: expanded ? "280px" : "50px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 1050,
          borderColor: "#e9ecef !important",
        }}
      >
        {/* Top section (Logo + Menu) */}
        <div>
          {/* Header Section */}
          <div 
            className="d-flex align-items-center justify-content-between p-3 border-bottom"
            style={{ 
              minHeight: "60px",
              borderColor: "#e9ecef !important" 
            }}
          >
            {/* Toggle Button - Only show when expanded */}
            {expanded && (
              <button
                className="btn btn-link p-0 border-0"
                onClick={handleToggleSidebar}
                style={{
                  minWidth: "20px",
                  color: "#6c757d",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-chevron-left fs-6"></i>
              </button>
            )}
          </div>

          {/* Menu Items */}
          <nav className="d-flex flex-column mt-3 px-2">
            {menuItems.map((item) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isItemActive = isActive(item.path) || isSubmenuActive(item.submenu);
              const isSubmenuOpen = activeMenu === item.name;

              return (
                <div key={item.name} className="mb-1">
                  {/* Main Menu Item */}
                  <div
                    className={`d-flex align-items-center justify-content-between w-100 rounded ${
                      isItemActive ? "text-primary bg-light" : "text-secondary"
                    }`}
                    style={{ 
                      cursor: "pointer",
                      minHeight: "44px"
                    }}
                  >
                    {/* Main button area - Clicking this navigates to parent path */}
                    <button
                      className={`border-0 bg-transparent d-flex align-items-center flex-grow-1 py-2 ${
                        expanded ? "px-3" : "px-2 justify-content-center"
                      }`}
                      onClick={() => handleParentMenuClick(item)}
                      style={{
                        minHeight: "44px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <i
                        className={`bi ${item.icon} fs-6 ${
                          expanded ? "me-3" : ""
                        } ${isItemActive ? "text-primary" : "text-secondary"}`}
                        style={{ 
                          color: isItemActive ? "#0d6efd" : "#6c757d",
                          minWidth: expanded ? "20px" : "auto"
                        }}
                      ></i>

                      {expanded && (
                        <span
                          className="fw-medium flex-grow-1 text-start"
                          style={{
                            color: isItemActive ? "#0d6efd" : "#495057",
                            fontSize: "0.9rem",
                          }}
                        >
                          {item.name}
                        </span>
                      )}
                    </button>

                    {/* Submenu arrow - Clicking this toggles submenu */}
                    {expanded && hasSubmenu && (
                      <button
                        className="border-0 bg-transparent py-2 px-2 d-flex align-items-center justify-content-center"
                        onClick={(e) => handleArrowClick(item, e)}
                        style={{
                          color: isItemActive ? "#0d6efd" : "#6c757d",
                          minWidth: "30px",
                          minHeight: "44px",
                        }}
                      >
                        <i
                          className={`bi bi-chevron-down fs-7 transition-rotate ${
                            isSubmenuOpen ? "rotate-180" : ""
                          }`}
                          style={{
                            transition: "transform 0.3s ease",
                          }}
                        ></i>
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  {expanded && hasSubmenu && isSubmenuOpen && (
                    <div
                      className="mt-1 ms-4 ps-2 border-start"
                      style={{
                        animation: "slideDown 0.3s ease-out",
                        borderColor: "#e9ecef !important",
                      }}
                    >
                      {item.submenu!.map((subItem) => (
                        <button
                          key={subItem.name}
                          className={`border-0 w-100 text-start d-flex align-items-center py-2 px-3 rounded mb-1 ${
                            isActive(subItem.path)
                              ? "text-primary bg-light"
                              : "bg-transparent text-secondary"
                          }`}
                          onClick={() => handleSubmenuClick(subItem.path)}
                          style={{
                            transition: "all 0.2s ease",
                            fontSize: "0.85rem",
                            minHeight: "36px",
                          }}
                        >
                          <i
                            className="bi bi-dot me-2"
                            style={{
                              color: isActive(subItem.path) ? "#0d6efd" : "#6c757d",
                            }}
                          ></i>
                          <span
                            style={{
                              color: isActive(subItem.path) ? "#0d6efd" : "#495057",
                            }}
                          >
                            {subItem.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div
          className="border-top p-3"
          style={{ 
            borderColor: "#e9ecef !important",
            minHeight: "80px"
          }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: expanded ? "32px" : "28px", 
                  height: expanded ? "32px" : "28px",
                  transition: "all 0.3s ease"
                }}
              >
                <i
                  className="bi bi-person text-white"
                  style={{ 
                    width: "16px", 
                    height: "16px", 
                    fontSize: "0.8rem" 
                  }}
                ></i>
              </div>
              {expanded && (
                <div className="ms-3">
                  <div
                    className="fw-medium small"
                    style={{ color: "#495057" }}
                  >
                    John Doe
                  </div>
                  <div className="small" style={{ color: "#6c757d" }}>
                    Administrator
                  </div>
                </div>
              )}
            </div>
          </div>

          {expanded && (
            <div className="mt-3">
              <button
                className="btn btn-outline-secondary btn-sm w-100"
                style={{ 
                  borderColor: "#6c757d", 
                  color: "#6c757d",
                  fontSize: "0.85rem"
                }}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Overlay when expanded */}
      {expanded && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-10"
          style={{
            zIndex: 1049,
            animation: "fadeIn 0.3s ease-out",
          }}
          onClick={() => setExpanded(false)}
        ></div>
      )}

      {/* Add CSS animations */}
      <style>
        {`
          .hover-bg-light:hover {
            background-color: rgba(0, 0, 0, 0.04) !important;
          }

          .rotate-180 {
            transform: rotate(180deg);
          }

          .transition-rotate {
            transition: transform 0.3s ease;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Perfectly center icons when sidebar is collapsed */
          aside nav button {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          aside nav button .bi {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          /* Smooth hover effects */
          aside nav button:hover {
            background-color: rgba(0, 0, 0, 0.04) !important;
          }

          aside nav button:active {
            transform: scale(0.98);
          }

          /* Arrow button specific styles */
          aside nav button.bg-transparent:hover {
            background-color: rgba(0, 0, 0, 0.1) !important;
          }
        `}
      </style>
    </>
  );
};

export default DesktopSidebar;