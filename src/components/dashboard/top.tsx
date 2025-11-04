import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import TruckIcon from '../dashboard/assests/icons/truck-light-full.png'; 
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
    <div className="container-fluid py-3 px-3">
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
                    backgroundColor: `${item.color}`, 
                    width: 50,
                    height: 50,
                  }}
                >
               <img
  src={item.icon}
  alt={item.title}
  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
/>

                </div>

                <div>
                  <h6 className="mb-1 fw-medium fonttext-14">{item.title}</h6>
                  <div className="d-flex align-items-center">
                    <h5 className="fw-bold mb-0 me-2 fonttext-24">{item.value}</h5>
                    <small className="fonttext-14 fw-medium">{item.subtitle}</small>
                  </div>
                </div>
              </div>

              <div
                className="position-relative"
                style={{
                  width: 45,
                  height: 45,
                }}
              >
                <svg width="45" height="45" viewBox="0 0 36 36">
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
          </div>
        ))}
      </div>

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
  );
}

export default Top;
