import { useState } from "react";
import DesktopSidebar from "./DesktopSidebar";

function HeaderDesktop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header
        className="d-flex align-items-center justify-content-between px-3 py-2 shadow-sm bg-white position-fixed top-0 start-0 end-0 d-none d-md-flex "
        style={{ zIndex: 1030 , marginLeft:'80px',}}
      >
     
        <div className="d-flex align-items-center gap-3">
          {/* {!sidebarOpen ? (
            <button
              className="btn btn-link text-dark p-1"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <i className="bi bi-list fs-3"></i>
            </button>
          ) : (
            <button
              className="btn btn-link text-dark p-1"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <i className="bi bi-x-lg fs-3"></i>
            </button>
          )} */}

          <div className="bg-primary rounded" style={{ width: 35, height: 35 }}></div>
          <h5 className="m-0 text-primary fw-bold">AERO SOFT TRACK</h5>

          <span className="badge rounded-pill bg-light text-primary ms-3">
            Dashboard
          </span>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <i className="bi bi-bell fs-5"></i>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.6rem" }}
            >
              1
            </span>
          </div>
          <i className="bi bi-gear fs-5"></i>
          <span
            className="badge fw-bold d-flex align-items-center justify-content-center"
            style={{
              fontSize: "14px",
              backgroundColor: "hsla(208, 100%, 50%, 0.20)",
              color: "#0F62FE",
              minWidth: "35px",
              minHeight: "35px",
              borderRadius: "20%",
            }}
          >
            AS
          </span>
        </div>
      </header>

      {/* Static Sidebar */}
      <DesktopSidebar />

      {/* Transparent overlay when sidebar expanded */}
      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-none d-md-block"
          style={{ zIndex: 1049 }}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Spacer to prevent jump */}
      <div style={{ height: "60px" }}></div>
    </>
  );
}

export default HeaderDesktop;
