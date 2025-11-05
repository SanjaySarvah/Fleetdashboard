import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";

interface SidebarProps {
  open: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggle }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleMenuToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // 🔸 Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (open) toggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, toggle]);

  const dividerStyle = {
    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
    margin: "20px 0",
  };

  return (
    <>
      <div
        ref={sidebarRef}
        className="position-fixed top-0 start-0 h-100 text-white shadow-lg d-flex flex-column"
        style={{
          width: 260,
          zIndex: 1050,
          backgroundColor: "#4A7CF7",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          paddingTop: "20px",
        }}
      >
        {/* 🔍 Search */}
        <div className="px-3 mb-3">
          <div
            className="d-flex align-items-center rounded-4 px-3 py-2"
            style={{ backgroundColor: "#fff" }}
          >
            <i className="bi bi-search text-secondary me-2"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none p-0"
              placeholder="Search"
              style={{
                background: "transparent",
                fontSize: 15,
                color: "#333",
              }}
            />
          </div>
        </div>

        {/* 🧭 Menu */}
        <ul className="list-unstyled px-3" style={{ fontSize: 15 }}>
          {/* Dashboard */}
          <li className="mb-2">
            <div
              className="d-flex justify-content-between align-items-center fw-semibold py-2"
              onClick={() => handleMenuToggle("dashboard")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-speedometer2 me-2"></i>
                Dashboard
              </div>
              <i
                className={`bi ${
                  openMenu === "dashboard" ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse in={openMenu === "dashboard"}>
              <div className="ms-4 mt-2">
                <Link
                  to="/dashboard-normal"
                  className="d-block text-white text-decoration-none mb-2"
                  style={{ opacity: 0.85 }}
                >
                  Dashboard- Normal
                </Link>
                <Link
                  to="/dashboard-metro"
                  className="d-block text-white text-decoration-none"
                  style={{ opacity: 0.85 }}
                >
                  Dashboard- Metro
                </Link>
              </div>
            </Collapse>
          </li>

          <div style={dividerStyle}></div>

          {/* Vehicles */}
          <li className="mb-2">
            <div
              className="d-flex justify-content-between align-items-center fw-semibold py-2"
              onClick={() => handleMenuToggle("vehicles")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-truck me-2"></i> Vehicles
              </div>
              <i
                className={`bi ${
                  openMenu === "vehicles" ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
          </li>

          <div style={dividerStyle}></div>

          {/* Reports */}
          <li className="mb-2">
            <div
              className="d-flex justify-content-between align-items-center fw-semibold py-2"
              onClick={() => handleMenuToggle("reports")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-file-earmark-text me-2"></i> Reports
              </div>
              <i
                className={`bi ${
                  openMenu === "reports" ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse in={openMenu === "reports"}>
              <div className="ms-4 mt-2">
                <Link
                  to="/reports-dashboard"
                  className="d-block text-white text-decoration-none mb-1"
                  style={{ opacity: 0.85 }}
                >
                  Reports Dashboard
                </Link>
                <Link
                  to="/reports-km"
                  className="d-block text-white text-decoration-none mb-1"
                  style={{ opacity: 0.85 }}
                >
                  Reports- Current KM
                </Link>
                <Link
                  to="/reports-trip"
                  className="d-block text-white text-decoration-none mb-1"
                  style={{ opacity: 0.85 }}
                >
                  Reports- Trip
                </Link>
                <Link
                  to="/reports-fuel"
                  className="d-block text-white text-decoration-none"
                  style={{ opacity: 0.85 }}
                >
                  Reports- Fuel
                </Link>
              </div>
            </Collapse>
          </li>

          <div style={dividerStyle}></div>

          {/* Employee */}
          <li className="mb-2">
            <div
              className="d-flex justify-content-between align-items-center fw-semibold py-2"
              onClick={() => handleMenuToggle("employee")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-person me-2"></i> Employee
              </div>
              <i
                className={`bi ${
                  openMenu === "employee" ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse in={openMenu === "employee"}>
              <div className="ms-4 mt-2">
                <Link
                  to="/driver-dashboard"
                  className="d-block text-white text-decoration-none mb-1"
                  style={{ opacity: 0.85 }}
                >
                  Driver Dashboard
                </Link>
                <Link
                  to="/attendance-reports"
                  className="d-block text-white text-decoration-none"
                  style={{ opacity: 0.85 }}
                >
                  Attendance Reports
                </Link>
              </div>
            </Collapse>
          </li>

          <div style={dividerStyle}></div>

          {/* Routes & Zones */}
          <li className="mb-2">
            <div
              className="d-flex justify-content-between align-items-center fw-semibold py-2"
              onClick={() => handleMenuToggle("routes")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-diagram-3 me-2"></i> Routes & Zones
              </div>
              <i
                className={`bi ${
                  openMenu === "routes" ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse in={openMenu === "routes"}>
              <div className="ms-4 mt-2">
                <Link
                  to="/routes-dashboard"
                  className="d-block text-white text-decoration-none"
                  style={{ opacity: 0.85 }}
                >
                  Routes Dashboard
                </Link>
              </div>
            </Collapse>
          </li>

          <div style={dividerStyle}></div>

          {/* Camera */}
          <li className="mb-2">
            <div
              className="d-flex justify-content-between align-items-center fw-semibold py-2"
              onClick={() => handleMenuToggle("camera")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-camera-video me-2"></i> Camera
              </div>
              <i
                className={`bi ${
                  openMenu === "camera" ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
            <Collapse in={openMenu === "camera"}>
              <div className="ms-4 mt-2">
                <Link
                  to="/mwv-camera"
                  className="d-block text-white text-decoration-none"
                  style={{ opacity: 0.85 }}
                >
                  MWV- camera
                </Link>
              </div>
            </Collapse>
          </li>

          <div style={dividerStyle}></div>

          {/* Geofence */}
          <li className="mb-2">
            <div className="fw-semibold py-2 d-flex align-items-center">
              <i className="bi bi-geo-alt me-2"></i> Geofence
            </div>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
          style={{ zIndex: 1040 }}
          onClick={toggle}
        />
      )}
    </>
  );
};

export default Sidebar;
