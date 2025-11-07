import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

type LicenseStatus = "In Stock" | "Live" | "Expired";

type License = {
  code: string;
  status: LicenseStatus;
  startDate?: string;
  endDate?: string;
  device?: string;
  vehicle?: string;
  actionState?: "Activated" | "Activate" | "Renew";
};

const DealerLicensePortal: React.FC = () => {

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | LicenseStatus>("All");

  const colors = {
    primaryBlue: "#2F80ED",
    inStockBg: "#FFF2CC",
    inStockText: "#8B5E00",
    liveBg: "#DFF6E9",
    liveText: "#047A3A",
    expiredBg: "#FDEDEF",
    expiredText: "#C93A3A",
    cardBg: "#FFFFFF",
    surface: "#FAFAFA",
    mutedText: "#6F6F6F",
    border: "#E6E6E6",
  };

  const initialLicenses: License[] = [
    {
      code: "PREM–FLT–8A4B2C",
      status: "Live",
      startDate: "2024-06-01",
      endDate: "2025-05-31",
      device: "GT06N GPS Tracker",
      vehicle: "Truck-01 (DL1C AB1234)",
      actionState: "Activated",
    },
    {
      code: "PREM–FLT–9D7E5F",
      status: "In Stock",
      actionState: "Activate",
    },
    {
      code: "PREM–FLT–1G3H6K",
      status: "Expired",
      startDate: "2023-05-15",
      endDate: "2024-05-14",
      device: "Teltonika FMB920",
      vehicle: "Bus-05 (HR26 DC5678)",
      actionState: "Renew",
    },
    {
      code: "PREM–FLT–2B8C9D",
      status: "In Stock",
      actionState: "Activate",
    },
    {
      code: "PREM–FLT–7Z6Y5X",
      status: "Live",
      startDate: "2024-08-01",
      endDate: "2025-07-31",
      device: "GT06N",
      vehicle: "Truck-05 (KA03 AB1111)",
      actionState: "Activated",
    },
  ];

  const [licenses, setLicenses] = useState<License[]>(initialLicenses);

  const counts = useMemo(() => {
    const total = licenses.length;
    const inStock = licenses.filter((l) => l.status === "In Stock").length;
    const live = licenses.filter((l) => l.status === "Live").length;
    const expired = licenses.filter((l) => l.status === "Expired").length;
    return { total, inStock, live, expired };
  }, [licenses]);

  const filtered = useMemo(() => {
    return licenses.filter((l) => {
      const matchesFilter = activeFilter === "All" ? true : l.status === activeFilter;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        l.code.toLowerCase().includes(q) ||
        (l.vehicle || "").toLowerCase().includes(q) ||
        (l.device || "").toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter, licenses]);
const stats = [
    {
      label: "Total Licenses",
      value: 500,
      icon: "bi bi-layers", // Bootstrap icon
      color: "#3B82F6", // blue
      bg: "rgba(59, 130, 246, 0.1)",
    },
    {
      label: "In Stock",
      value: 350,
      icon: "bi bi-box-seam",
      color: "#FACC15", // yellow
      bg: "rgba(250, 204, 21, 0.1)",
    },
    {
      label: "Live",
      value: 125,
      icon: "bi bi-telephone",
      color: "#10B981", // green
      bg: "rgba(16, 185, 129, 0.1)",
    },
    {
      label: "Expired",
      value: 25,
      icon: "bi bi-hourglass-split",
      color: "#EF4444", // red
      bg: "rgba(239, 68, 68, 0.1)",
    },
  ];
  const handleActivate = (code: string) => {
    setLicenses((prev) =>
      prev.map((l) => {
        if (l.code === code) {
          return {
            ...l,
            status: "Live",
            startDate: new Date().toISOString().slice(0, 10),
            endDate: undefined,
            actionState: "Activated",
          };
        }
        return l;
      })
    );
  };

  const handleRenew = (code: string) => {
    setLicenses((prev) =>
      prev.map((l) => {
        if (l.code === code) {
          const start = new Date();
          const end = new Date();
          end.setFullYear(end.getFullYear() + 1);
          return {
            ...l,
            status: "Live",
            startDate: start.toISOString().slice(0, 10),
            endDate: end.toISOString().slice(0, 10),
            actionState: "Activated",
          };
        }
        return l;
      })
    );
  };


  return (
    <div style={{ background: colors.surface, padding: "24px 36px", minHeight: "100vh" }}>
 <div className="container-fluid">
      <div className="row g-3 mb-4">
        {stats.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div
              className="stat-card p-3 rounded-4 shadow-sm d-flex align-items-center justify-content-between"
              style={{
                background: "#fff",
                borderLeft: `6px solid ${item.color}`,
                height: "120px",
                transition: "all 0.3s ease",
              }}
            >
                 {/* Icon Section */}
              <div
                className="d-flex align-items-center justify-content-center ms-3"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  backgroundColor: `${item.color}20`,
                  flexShrink: 0,
                }}
              >
                <i
                  className={item.icon}
                  style={{
                    color: item.color,
                    fontSize: "28px",
                  }}
                ></i>
              </div>
              {/* Content Section */}
              <div className="d-flex flex-column justify-content-center flex-grow-1 " style={{ marginLeft: "15px" }}>
                <div
                  className="stat-label"
                  style={{
                    color: "#6B7280",
                    fontSize: "17px",
                    fontWeight: 500,
                    marginBottom: "8px",
                    lineHeight: "1.2",
                  
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="stat-value"
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0F172A",
                    lineHeight: "1.1",
                  }}
                >
                  {item.value}
                </div>
              </div>

           
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .stat-card:hover {
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
            transform: translateY(-3px);
            border-left-width: 8px;
          }

          @media (max-width: 576px) {
            .stat-card {
              height: 100px !important;
              padding: 1rem !important;
            }
            
            .stat-label {
              font-size: 13px !important;
            }
            
            .stat-value {
              font-size: 20px !important;
            }
            
            .stat-card .d-flex[style*="width: 70px"] {
              width: 60px !important;
              height: 60px !important;
            }
            
            .stat-card .d-flex[style*="width: 70px"] i {
              font-size: 24px !important;
            }
          }

          @media (max-width: 768px) {
            .stat-card {
              height: 110px;
            }
          }
        `}
      </style>
    </div>
 <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-3">
 <h4 className="mb-2 fw-bold mt-2" style={{marginLeft:"10px",  color: "#2B2E4A" }}>Allocated License Packages</h4>

    <div style={{ width: 360 }}>
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0 rounded-start-3">
          <i className="bi bi-search text-secondary" style={{ fontSize: 14 }}></i>
        </span>
        <input
          className="form-control rounded-end-3"
          placeholder="Search by license code or vehicle..."
          style={{ height: 44 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
    </div>

    <div className="rounded-4 shadow-sm p-4" style={{ background: colors.cardBg }}>
  {/* Header */}
  <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-3">
    <div>
      <h5 className="fw-bold" style={{ marginTop: 8, color: "#5B21B6" }}>Premium Fleet Package</h5>
   <div style={{ color: colors.mutedText, marginTop: 6 }}>
  <span className="me-3">
    <i className="bi bi-hash me-1"></i>250 Licenses
  </span>
  <span className="me-3">
    <i className="bi bi-clock me-1"></i>365 Days Duration
  </span>
  <span>
    <i className="bi bi-calendar-event me-1"></i>Allocated: 2024-05-20
  </span>
</div>

    </div>

    <div className="d-flex gap-2 align-items-center flex-wrap">
     


<div className="d-flex align-items-center gap-2 flex-wrap">
  <div style={{ fontWeight: 600 }}>Filter by status:</div>
  {(["All", "In Stock", "Live", "Expired"] as ("All" | LicenseStatus)[]).map((f) => {
    const active = activeFilter === f;

    // 🎯 Assign background color
    const bg =
      f === "All"
        ? active
          ? colors.primaryBlue
          : "#fff"
        : f === "In Stock"
        ? active
          ? colors.inStockText
          : "#fff"
        : f === "Live"
        ? active
          ? colors.liveText
          : "#fff"
        : active
        ? colors.expiredText
        : "#fff";

    // 🎯 Assign border & text color
    const border = active ? "none" : `1px solid ${colors.border}`;
    const color = active
      ? "#fff"
      : f === "All"
      ? "#2B2E4A"
      : f === "In Stock"
      ? colors.inStockText
      : f === "Live"
      ? colors.liveText
      : colors.expiredText;

    const padding = "6px 14px";

    // 🎯 Select correct count
    const count =
      f === "All"
        ? counts.total
        : f === "In Stock"
        ? counts.inStock
        : f === "Live"
        ? counts.live
        : counts.expired;

    return (
      <button
        key={f}
        onClick={() => setActiveFilter(f)}
        className="rounded-pill"
        style={{
          background: active ? bg : "#fff",
          border,
          color,
          padding,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span>{f}</span>
        <span
          className="badge rounded-pill"
          style={{
            background: active ? "#fff" : bg,
            color: active ? bg : color,
            fontSize: "12px",
          }}
        >
          {count}
        </span>
      </button>
    );
  })}
</div>

    </div>
  </div>

  <hr />



{/* Cards instead of Table */}
<div className="d-flex flex-column gap-3">
  {filtered.length > 0 ? (
    filtered.map((l) => (
      <div
        key={l.code}
        className="rounded-4 shadow-sm p-3 d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center gap-3"
        style={{
          background: "#fff",
          border: `1px solid ${colors.border}`,
          transition: "all 0.3s ease",
        }}
      >
        {/* License Info */}
        <div
          className="flex-grow-1"
          style={{
            minWidth: "160px",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 15 }}>{l.code}</div>
          <div style={{ color: colors.mutedText, fontSize: 13 }}>
            {l.startDate ? `${l.startDate} / ${l.endDate ?? "-"}` : "N/A"}
          </div>
        </div>

        {/* Status */}
        <div
          className="text-md-center"
          style={{
            minWidth: "120px",
          }}
        >
          {l.status === "Live" && (
            <span
              style={{
                padding: "6px 12px",
                borderRadius: 20,
                background: colors.liveBg,
                color: colors.liveText,
              }}
            >
              Live
            </span>
          )}
          {l.status === "In Stock" && (
            <span
              style={{
                padding: "6px 12px",
                borderRadius: 20,
                background: colors.inStockBg,
                color: colors.inStockText,
              }}
            >
              In Stock
            </span>
          )}
          {l.status === "Expired" && (
            <span
              style={{
                padding: "6px 12px",
                borderRadius: 20,
                background: colors.expiredBg,
                color: colors.expiredText,
              }}
            >
              Expired
            </span>
          )}
        </div>

        {/* Vehicle & Device */}
        <div
          style={{
            minWidth: "200px",
          }}
        >
          {l.vehicle ? (
            <>
              <div style={{ fontWeight: 600 }}>{l.vehicle}</div>
              <div style={{ color: colors.mutedText, fontSize: 13 }}>{l.device}</div>
            </>
          ) : (
            <div style={{ color: colors.mutedText }}>Not Mapped</div>
          )}
        </div>

        {/* Action */}
        <div style={{ minWidth: "130px", textAlign: "end" }}>
          {l.actionState === "Activated" && (
            <div style={{ color: colors.mutedText }}>Activated</div>
          )}
          {l.actionState === "Activate" && (
            <button
              className="btn btn-success btn-sm"
              onClick={() => handleActivate(l.code)}
            >
              <i className="bi bi-power me-2" /> Activate
            </button>
          )}
          {l.actionState === "Renew" && (
            <button
              className="btn text-primary p-0"
              onClick={() => handleRenew(l.code)}
            >
              Renew
            </button>
          )}
        </div>
      </div>
    ))
  ) : (
    <div className="text-center py-5 text-muted">
      No licenses found matching your search criteria.
    </div>
  )}
</div>


  <style>
    {`
      .rounded-4 {
        border-radius: 1rem !important;
      }

      .shadow-sm {
        box-shadow: 0 2px 8px rgba(0,0,0,0.05) !important;
      }

      .rounded-4:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
      }

      @media (max-width: 767px) {
        .license-card {
          flex-direction: column !important;
          align-items: flex-start !important;
        }
      }
    `}
  </style>
</div>











      <style >{`
        .rounded-4 { border-radius: 12px; }
        .shadow-sm { box-shadow: 0 6px 20px rgba(17,24,39,0.06); }
        h5 { font-size: 20px; }
        @media (max-width: 768px) {
          .table-responsive { overflow-x: auto; }
        }
      `}</style>
    </div>
  );


}
export default DealerLicensePortal;