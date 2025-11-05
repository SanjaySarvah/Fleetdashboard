import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import TruckIcon from '../dashboard/assests/icons/truck-light-full.svg'; 
import MovingIcon from '../dashboard/assests/icons/paper-plane-regular-full.svg';      
import IdleIcon from '../dashboard/assests/icons/pause-regular-full.png';         
import ParkedIcon from '../dashboard/assests/icons/stop-regular-full.png';    
import ServiceIcon from '../dashboard/assests/icons/wrench-light-full 1.png';    

function Top() {
  const stats = [
    {
      title: 'Total vehicles',
      value: '8',
      subtitle: 'active today',
      icon: TruckIcon, 
      color: '#3D83F5',
      percent: 100,
    },
    {
      title: 'Moving',
      value: '2',
      subtitle: 'currently active',
      icon: MovingIcon, 
      color: '#27AE60',
      percent: 25,
    },
    {
      title: 'Idle',
      value: '3',
      subtitle: 'engine on, stopped',
      icon: IdleIcon,
      color: '#F49E0C',
      percent: 31,
    },
    {
      title: 'Parked',
      value: '3',
      subtitle: 'engine off',
      icon: ParkedIcon,
      color: '#EF4343',
      percent: 38,
    },
    {
      title: 'Service',
      value: '3',
      subtitle: 'engine off, no data',
      icon: ServiceIcon,
      color: '#EF4343',
      percent: 10,
    },
  ];

  return (
    <div className="container-fluid py-2 px-3">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <div className="card-content">

              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: `${item.color}`,
                    width: 44,
                    height: 44,
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                  />
                </div>

                <div className="position-relative" style={{ width: 44, height: 44 }}>
                  <svg width="44" height="44" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke="#e6e6e6"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="3"
                      strokeDasharray="100"
                      strokeDashoffset={100 - item.percent}
                      strokeLinecap="round"
                      transform="rotate(-90 18 18)"
                    />
                  </svg>
                  <span
                    className="position-absolute top-50 start-50 translate-middle fw-semibold fonttext-12"
                    style={{ color: 'black' }}
                  >
                    {item.percent}%
                  </span>
                </div>
              </div>

              {/* Bottom section: Title, Value, Subtitle */}
              <div>
                <h6 className="mb-1 fw-medium fonttext-13" style={{ color: '#666' }}>
                  {item.title}
                </h6>
                <div className="d-flex align-items-baseline gap-2">
                  <h5 className="fw-bold mb-0 fonttext-22">{item.value}</h5>
                  <small className="fonttext-13 fw-medium" style={{ color: '#666' }}>
                    {item.subtitle}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          /* 🔹 Grid layout */
          .stats-grid {
            display: grid;
            gap: 10px; /* reduced gap */
            grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          }

          /* 🔹 Card styling */
          .stat-card {
            background: white;
            border-radius: 14px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            height: 138px;
            width: 100%;
          }

          .stat-card:hover {
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
            transform: translateY(-1px);
          }

          .card-content {
            padding: 12px 14px; /* reduced padding but preserved space */
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          /* ✅ Desktop (1200px+): 5 cards per row */
          @media (min-width: 1200px) {
            .stats-grid {
              grid-template-columns: repeat(5, 1fr);
            }
            .stat-card {
              width: 210px;
            }
          }

          /* ✅ Tablet (768px–1199px): 3 cards per row */
          @media (min-width: 768px) and (max-width: 1199px) {
            .stats-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          /* ✅ Mobile (<768px): 2 cards per row */
          @media (max-width: 767px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 8px;
            }
            .stat-card {
              height: 134px;
            }
            .card-content {
              padding: 10px 12px;
            }
          }

          /* ✅ Small mobile (<480px): 1 card per row */
          @media (max-width: 479px) {
            .stats-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Top;
