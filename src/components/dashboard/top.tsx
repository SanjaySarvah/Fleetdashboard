import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Top() {
  const stats = [
    {
      title: 'Total vehicles',
      value: '8',
      subtitle: 'active today',
      icon: 'bi-truck',
      color: '#2F80ED',
      percent: 100,
    },
    {
      title: 'Moving',
      value: '2',
      subtitle: 'currently active',
      icon: 'bi-send-fill',
      color: '#27AE60',
      percent: 25,
    },
    {
      title: 'Idle',
      value: '3',
      subtitle: 'engine on, stopped',
      icon: 'bi-pause-btn-fill',
      color: '#F2C94C',
      percent: 31,
    },
    {
      title: 'Parked',
      value: '3',
      subtitle: 'engine off',
      icon: 'bi-stop-fill',
      color: '#EB5757',
      percent: 38,
    },
    {
      title: 'Service',
      value: '3',
      subtitle: 'engine off, no data',
      icon: 'bi-wrench-adjustable',
      color: '#EB5757',
      percent: 10,
    },
  ]

  return (
    <div className="container-fluid py-3 px-3">
      {/* ✅ Responsive Grid: 2 cards (mobile) → 5 cards (desktop) */}
      <div
        className="d-grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="card border-0 shadow-sm h-100"
            style={{
              borderRadius: '15px',
              transition: 'all 0.3s ease',
            }}
          >
            <div className="card-body d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-2"
                  style={{
                    backgroundColor: `${item.color}20`,
                    width: 50,
                    height: 50,
                  }}
                >
                  <i
                    className={`${item.icon}`}
                    style={{ color: item.color, fontSize: '1.5rem' }}
                  ></i>
                </div>
                <div>
                  <h6 className="mb-1 fw-semibold text-secondary">
                    {item.title}
                  </h6>
                  <h5 className="fw-bold mb-0">{item.value}</h5>
                  <small className="text-muted">{item.subtitle}</small>
                </div>
              </div>

              {/* Circular progress indicator */}
              <div
                className="position-relative"
                style={{
                  width: 45,
                  height: 45,
                }}
              >
                <svg width="45" height="45" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="3"
                    strokeDasharray={`${item.percent}, 100`}
                  />
                </svg>
                <span
                  className="position-absolute top-50 start-50 translate-middle fw-semibold"
                  style={{ fontSize: '0.8rem', color: 'black' }}
                >
                  {item.percent}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive breakpoint for exact 5 per row */}
      <style>
        {`
          @media (min-width: 1200px) {
            .d-grid {
              grid-template-columns: repeat(5, 1fr) !important;
            }
          }
          @media (max-width: 767px) {
            .d-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Top
