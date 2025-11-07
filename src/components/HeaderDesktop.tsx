import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

function HeaderDesktop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header
        className="d-flex align-items-center justify-content-between px-3 py-2 shadow-sm bg-white position-fixed top-0 start-0 end-0 d-none d-md-flex"
        style={{ zIndex: 1030 }}
      >
        {/* Left Section */}
        <div className="d-flex align-items-center gap-3">
          <div className="bg-primary rounded" style={{ width: 35, height: 35 }}></div>
          <h5 className="m-0 text-primary fw-bold">AERO SOFT TRACK</h5>

          {!sidebarOpen ? (
            <button
              className="btn btn-link text-dark p-1"
              onClick={openSidebar}
              aria-label="Open menu"
            >
              <i className="bi bi-list fs-3"></i>
            </button>
          ) : (
            <button
              className="btn btn-link text-dark p-1"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <i className="bi bi-x-lg fs-3"></i>
            </button>
          )}

          <span className="badge rounded-pill bg-light text-primary ms-3">
            Dashboard
          </span>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <i className="bi bi-bell fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.6rem" }}>
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

      <MobileSidebar open={sidebarOpen} toggle={closeSidebar} />
      <div style={{ height: "60px" }}></div>
    </>
  );
}

export default HeaderDesktop;
