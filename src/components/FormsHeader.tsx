import { useNavigate } from "react-router-dom";

interface HeaderDesktopProps {
  title: string;
  backTo?: string; // optional URL to navigate to
}

function HeaderDesktop({ title, backTo }: HeaderDesktopProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo); // navigate to provided URL
    } else {
      navigate(-1); // go back one page
    }
  };

  return (
    <header
      className="d-flex align-items-center justify-content-between px-3 shadow-sm bg-white position-fixed top-0 start-0 end-0 d-none d-md-flex"
      style={{ zIndex: 1030, marginLeft: "50px", height: "60px" }}
    >
      {/* Left Section - Back Arrow + Title */}
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-link text-dark p-0"
          onClick={handleBack}
          aria-label="Go back"
          style={{ textDecoration: "none" }}
        >
          <i className="bi bi-arrow-left fs-4"></i>
        </button>
        <h5 className="m-0">{title}</h5>
      </div>

      {/* Right Section - Icons */}
      <div className="d-flex align-items-center gap-3 ms-auto">
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
  );
}

export default HeaderDesktop;
