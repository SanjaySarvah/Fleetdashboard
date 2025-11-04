import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";

interface SidebarProps {
  open: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggle }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className={`position-fixed top-0 start-0 h-100 text-white shadow-lg`}
      style={{
        width: 260,
        zIndex: 1050,
        backgroundColor: "#4A7CF7",
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Close Button */}
      <div className="d-flex justify-content-end p-3">
        <button
          className="btn btn-sm btn-light rounded-circle"
          onClick={toggle}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      {/* Search */}
      <div className="px-3 mb-3">
        <div className="input-group">
          <span className="input-group-text bg-white border-0">
            <i className="bi bi-search text-secondary"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search"
          />
        </div>
      </div>

      <ul className="list-unstyled px-3" style={{ fontSize: 15 }}>
        {/* Dashboard */}
        <li className="mb-2">
          <div
            className="d-flex justify-content-between align-items-center fw-semibold py-2"
            onClick={() => handleMenuToggle("dashboard")}
            style={{ cursor: "pointer" }}
          >
            <div>
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </div>
            <i
              className={`bi ${
                openMenu === "dashboard" ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </div>
          <Collapse in={openMenu === "dashboard"}>
            <div className="ms-4">
              <Link
                to="/dashboard-normal"
                className="d-block text-white-50 py-1 text-decoration-none"
              >
                Dashboard - Normal
              </Link>
              <Link
                to="/dashboard-metro"
                className="d-block text-white-50 py-1 text-decoration-none"
              >
                Dashboard - Metro
              </Link>
            </div>
          </Collapse>
        </li>

        {/* Vehicles */}
        <li className="mb-2">
          <div
            className="d-flex justify-content-between align-items-center fw-semibold py-2"
            onClick={() => handleMenuToggle("vehicles")}
            style={{ cursor: "pointer" }}
          >
            <div>
              <i className="bi bi-truck me-2"></i> Vehicles
            </div>
            <i
              className={`bi ${
                openMenu === "vehicles" ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </div>
          <Collapse in={openMenu === "vehicles"}>
            <div className="ms-4">
              <Link
                to="/vehicles-dashboard"
                className="d-block text-white-50 py-1 text-decoration-none"
              >
                Vehicles Dashboard
              </Link>
            </div>
          </Collapse>
        </li>

        {/* Reports */}
        <li className="mb-2">
          <div
            className="d-flex justify-content-between align-items-center fw-semibold py-2"
            onClick={() => handleMenuToggle("reports")}
            style={{ cursor: "pointer" }}
          >
            <div>
              <i className="bi bi-file-earmark-text me-2"></i> Reports
            </div>
            <i
              className={`bi ${
                openMenu === "reports" ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </div>
          <Collapse in={openMenu === "reports"}>
            <div className="ms-4">
              <Link to="/reports-dashboard" className="d-block text-white-50 py-1 text-decoration-none">Reports Dashboard</Link>
              <Link to="/reports-km" className="d-block text-white-50 py-1 text-decoration-none">Reports - Current KM</Link>
              <Link to="/reports-trip" className="d-block text-white-50 py-1 text-decoration-none">Reports - Trip</Link>
              <Link to="/reports-fuel" className="d-block text-white-50 py-1 text-decoration-none">Reports - Fuel</Link>
            </div>
          </Collapse>
        </li>

        {/* Employee */}
        <li className="mb-2">
          <div
            className="d-flex justify-content-between align-items-center fw-semibold py-2"
            onClick={() => handleMenuToggle("employee")}
            style={{ cursor: "pointer" }}
          >
            <div>
              <i className="bi bi-person me-2"></i> Employee
            </div>
            <i
              className={`bi ${
                openMenu === "employee" ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </div>
          <Collapse in={openMenu === "employee"}>
            <div className="ms-4">
              <Link to="/driver-dashboard" className="d-block text-white-50 py-1 text-decoration-none">Driver Dashboard</Link>
              <Link to="/attendance-reports" className="d-block text-white-50 py-1 text-decoration-none">Attendance Reports</Link>
            </div>
          </Collapse>
        </li>

        {/* Routes */}
        <li className="mb-2">
          <div
            className="d-flex justify-content-between align-items-center fw-semibold py-2"
            onClick={() => handleMenuToggle("routes")}
            style={{ cursor: "pointer" }}
          >
            <div>
              <i className="bi bi-map me-2"></i> Routes & Zones
            </div>
            <i
              className={`bi ${
                openMenu === "routes" ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </div>
          <Collapse in={openMenu === "routes"}>
            <div className="ms-4">
              <Link to="/routes-dashboard" className="d-block text-white-50 py-1 text-decoration-none">Routes Dashboard</Link>
            </div>
          </Collapse>
        </li>

        {/* Camera */}
        <li className="mb-2">
          <div className="fw-semibold py-2">
            <i className="bi bi-camera-video me-2"></i> Camera
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
