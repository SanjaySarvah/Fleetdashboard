import { useState } from "react";
import Sidebar from "./MobileSidebar";

function MobileHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header
        className="d-flex align-items-center justify-content-between px-3 py-2 shadow-sm bg-white position-fixed top-0 start-0 end-0 d-flex d-md-none"
        style={{ zIndex: 1030 }}
      >
        <div className="d-flex align-items-center gap-2">
          <div className="bg-primary rounded" style={{ width: 30, height: 30 }}></div>
          <h6 className="m-0 text-primary fw-bold">AERO SOFT TRACK</h6>
        </div>

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
              minWidth: "30px",
              minHeight: "30px",
              borderRadius: "20%",
            }}
          >
            AS
          </span>

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
        </div>
      </header>

      <Sidebar open={sidebarOpen} toggle={closeSidebar} />
      <div style={{ height: "55px" }}></div>
    </>
  );
}

export default MobileHeader;
