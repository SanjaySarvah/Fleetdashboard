import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'

function VehicleDashboard() {
  const filters = [
    { name: 'All', count: 8, icon: 'bi-truck', color: '#2F80ED', active: true },
    { name: 'Moving', count: 2, icon: 'bi-send-fill', color: '#27AE60' },
    { name: 'Idle', count: 3, icon: 'bi-pause-btn-fill', color: '#F2C94C' },
    { name: 'Parked', count: 3, icon: 'bi-stop-fill', color: '#2F80ED' },
    { name: 'No data', count: 1, icon: 'bi-slash-circle', color: '#EB5757' },
    { name: 'Expired', count: 0, icon: 'bi-clock-history', color: '#B4690E' },
    { name: 'Disabled', count: 0, icon: 'bi-slash-circle', color: '#828282' },
  ]

  const vehicles = [
    {
      vehicleNo: 'TN 01 AV 2295',
      type: 'Tipper',
      category: 'Metro',
      driver: 'Swami',
      phone: '9488155961',
      address:
        '7/72 main rd,Venkatesapuram, Venkatesapuram new colony, Vysarpadi, Chennai, Tamil Nadu, 600012, India',
      status: 'PARKED',
      statusColor: '#2F80ED',
      statusText: '1h 20m from 08:50 AM',
      odo: '67 km',
      ignition: 'OFF',
      fuel: '27.9 L',
      distance: '1.2 km',
      subBadge: '',
    },
    {
      vehicleNo: 'TN 01 AV 2295',
      type: 'Tipper',
      category: 'Metro',
      driver: 'Swami',
      phone: '9488155961',
      address:
        '7/72 main rd,Venkatesapuram, Venkatesapuram new colony, Vysarpadi, Chennai, Tamil Nadu, 600012, India',
      status: 'Moving',
      statusColor: '#27AE60',
      statusText: '1h 20m from 08:50 AM',
      odo: '67 km',
      ignition: 'OFF',
      fuel: '27.9 L',
      distance: '1.2 km',
      subBadge: 'Charging',
    },
    {
      vehicleNo: 'TN 01 AV 2295',
      type: 'Tipper',
      category: 'Metro',
      driver: 'Swami',
      phone: '9488155961',
      address:
        '10/3, Thanigai Nagar, Kolathur, Chennai, Tamil Nadu 600099, India',
      status: 'Idle',
      statusColor: '#F2C94C',
      statusText: '1h 20m from 08:50 AM',
      odo: '67 km',
      ignition: 'OFF',
      fuel: '27.9 L',
      distance: '1.2 km',
      subBadge: 'Charging',
    },
    {
      vehicleNo: 'TN 01 AV 2295',
      type: 'Tipper',
      category: 'Metro',
      driver: 'Swami',
      phone: '9488155961',
      address:
        '10/3, Thanigai Nagar, Kolathur, Chennai, Tamil Nadu 600099, India',
      status: 'No data',
      statusColor: '#EB5757',
      statusText: '1h 20m from 08:50 AM',
      odo: '67 km',
      ignition: 'OFF',
      fuel: '27.9 L',
      distance: '1.2 km',
      subBadge: 'Charging',
    },
  ]

  return (
    <div className="container-fluid py-3 px-3" style={{ background: '#fafafa' }}>
      {/* 🔍 Search Row */}
      <div className="row mb-3 g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control rounded-3"
            placeholder="Search by vehicle number, category etc"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control rounded-3"
            placeholder="Search by Area, depot, model"
          />
        </div>
        <div className="col-md-4">
          <select className="form-select rounded-3">
            <option>All vehicles</option>
            <option>Active</option>
            <option>Idle</option>
            <option>Parked</option>
          </select>
        </div>
      </div>

  {/* 🚚 Filter Chips */}
<div
  className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4"
  style={{
    flexWrap: window.innerWidth < 768 ? 'wrap' : 'nowrap',
  }}
>
  {filters.map((f, i) => (
    <div
      key={i}
      className="d-flex align-items-center justify-content-center px-3 py-2 rounded-pill flex-fill"
      style={{
        backgroundColor: f.active ? '#2F80ED' : '#F7F9FC',
        color: f.active ? '#fff' : '#333',
        cursor: 'pointer',
        minWidth: '120px',
        maxWidth: '160px',
      }}
    >
      <i
        className={`${f.icon} me-2`}
        style={{
          color: f.active ? '#fff' : f.color,
          fontSize: '1rem',
        }}
      ></i>
      <span className="fw-semibold me-2 small">{f.name}</span>
      <span
        className="badge rounded-pill"
        style={{
          backgroundColor: f.active ? '#fff' : `${f.color}20`,
          color: f.active ? '#2F80ED' : f.color,
          fontWeight: 600,
        }}
      >
        {f.count}
      </span>
    </div>
  ))}
</div>


   <div className="container-fluid bg-light py-3">
      {vehicles.map((v, i) => (
        <div
          key={i}
          className="bg-white border rounded-4 shadow-sm p-3 mb-3"
          style={{ fontSize: '14px' }}
        >
          <div className="row align-items-center g-3">
            {/* Icon + Type */}
            <div className="col-auto text-center">
              <div
                className="rounded-3 d-flex align-items-center justify-content-center mx-auto"
                style={{ background: '#F3F7FF', width: 56, height: 56 }}
              >
                <i
                  className="bi-truck"
                  style={{ fontSize: '1.6rem', color: '#2F80ED' }}
                ></i>
              </div>
              <div className="small text-muted mt-1">{v.type}</div>
            </div>

            {/* Vehicle Info */}
            <div className="col-2">
              <h6 className="fw-bold mb-1">{v.vehicleNo}</h6>
              <span className="badge bg-light text-dark mb-1">{v.category}</span>
            </div>

            {/* Driver Info */}
            <div className="col-2">
              <div>
                <i className="bi-person me-1"></i> {v.driver}
              </div>
              <div>
                <i className="bi-telephone me-1"></i> {v.phone}
              </div>
              <div className="d-flex flex-wrap gap-1 mt-1">
                <span className="badge bg-primary-subtle text-primary">
                  Area
                </span>
                <span className="badge bg-primary-subtle text-primary">
                  Depot
                </span>
                <span className="badge bg-primary-subtle text-primary">
                  Model
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="col-3 text-muted">
              <i className="bi-geo-alt me-1"></i> {v.address}
            </div>

            {/* Status */}
            <div className="col-2">
              <div>
                <i
                  className="bi-link-45deg me-1"
                  style={{ color: v.statusColor }}
                ></i>
                <span
                  style={{ color: v.statusColor, fontWeight: 600 }}
                >
                  {v.status}:
                </span>{' '}
                <span className="fw-bold" style={{ color: v.statusColor }}>
                  {v.statusText}
                </span>
              </div>
              <span className="badge bg-light text-secondary mt-1">
                {v.lastSeen}
              </span>
            </div>

            {/* ODO + IGN + Fuel + Distance */}
            <div className="col-2 d-flex flex-wrap align-items-center gap-2 justify-content-end">
              <span className="badge bg-dark text-white">
                ODO: {v.odo}
              </span>
              <span className="badge bg-success text-white">
                IGN {v.ignition}
              </span>
              <div className="d-flex align-items-center">
                <i className="bi-ev-station text-secondary me-1"></i>
              </div>
              <span className="badge bg-light text-secondary border">
                <i className="bi-fuel-pump me-1"></i> {v.fuel}
              </span>
              <span className="badge bg-light text-secondary border">
                <i className="bi-geo me-1"></i> {v.distance}
              </span>
            </div>

            {/* Menu (3 dots) */}
            <div className="col-auto">
              <i className="bi-three-dots-vertical text-secondary"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default VehicleDashboard
