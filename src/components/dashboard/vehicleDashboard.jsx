import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

// 🔹 Icons
import TruckIcon from '../dashboard/assests/icons/truck-light-full.svg';
import TruckImage from '../dashboard/assests/icons/delivery-truck_301719 1.svg';
import MovingIcon from '../dashboard/assests/icons/paper-plane-regular-full.svg';
import IdleIcon from '../dashboard/assests/icons/pause-regular-full.png';
import ParkedIcon from '../dashboard/assests/icons/stop-regular-full.png';
import DatabaseIcon from '../dashboard/assests/icons/database-light-full 1.svg';
import ClockIcon from '../dashboard/assests/icons/clock-regular-full 1 (1).svg';
import BanIcon from '../dashboard/assests/icons/ban-regular-full 1.svg';
import Address from '../dashboard/assests/icons/Address.svg';
import Gauge from '../dashboard/assests/icons/gauge-simple-high-light-full 1.svg';
import User from '../dashboard/assests/icons/user-light-full (1).svg';
import NotCharging from '../dashboard/assests/icons/plug-regular-full.svg';
import Charging from '../dashboard/assests/icons/Charging.svg';
import Call from '../dashboard/assests/icons/phone-light-full.svg';
import Location from '../dashboard/assests/icons/arrow-progress-light-full 1.svg';
import Fuel from '../dashboard/assests/icons/gas-pump-regular-full.svg';
import Calender from '../dashboard/assests/icons/calendar-regular-full.svg';




function VehicleDashboard() {
    const filters = [
        { name: 'All', count: 8, icon: TruckIcon, color: '#2F80ED', active: true },
        { name: 'Moving', count: 2, icon: MovingIcon, color: '#27AE60' },
        { name: 'Idle', count: 3, icon: IdleIcon, color: '#F2C94C' },
        { name: 'Parked', count: 3, icon: ParkedIcon, color: '#2F80ED' },
        { name: 'No data', count: 1, icon: DatabaseIcon, color: '#EB5757' },
        { name: 'Expired', count: 0, icon: ClockIcon, color: '#B4690E' },
        { name: 'Disabled', count: 0, icon: BanIcon, color: '#828282' },
    ];

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
            statusText: '1h 20m ',
            StatusTime: '08:50 AM',
            odo: '67 km',
            ignition: 'OFF',
            fuel: '27.9 L',
            distance: '1.2 km',
            subBadge: '',
            parkedTime: '1d 2h 57m ago',
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
            statusText: '1h 20m ',
            StatusTime: '08:50 AM',
            odo: '67 km',
            ignition: 'ON',
            fuel: '27.9 L',
            distance: '1.2 km',
            subBadge: 'Charging',
            parkedTime: '1d 2h 57m ago',
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
            statusText: '1h 20m',
            StatusTime: '08:50 AM',
            odo: '67 km',
            ignition: 'OFF',
            fuel: '27.9 L',
            distance: '1.2 km',
            subBadge: 'Charging',
            parkedTime: '1d 2h 57m ago',
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
            statusText: '1h 20m ',
            StatusTime: '08:50 AM',
            odo: '67 km',
            ignition: 'OFF',
            fuel: '27.9 L',
            distance: '1.2 km',
            subBadge: 'Charging',
            parkedTime: '1d 2h 57m ago',
        },
    ];

    return (
        <div className="container-fluid py-3 px-3" style={{ background: '#fafafa' }}>
            {/* 🔍 Search Row */}
            <div className="row mb-3 g-2">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control rounded-3 fonttext-14"
                        placeholder="Search by vehicle number, category etc"
                        style={{ color: '#6F6F6F' }}
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control rounded-3 fonttext-14"
                        placeholder="Search by Area, depot, model"
                        style={{ color: '#6F6F6F' }}
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









            {/* 🚚 Vehicle Filters */}
            <div className="container-fluid bg-light py-3">
                {vehicles.map((v, i) => (
                    <div
                        key={i}
                        className="bg-white border rounded-4 shadow-sm p-3 mb-3"
                        style={{ fontSize: '14px', borderLeft: `5px solid ${v.statusColor}` }}
                    >
                        <div className="row row-cols-6 align-items-center g-3" style={{ flexWrap: 'nowrap' }}>

                            {/* 1️⃣ Icon + Type + Vehicle Info */}
                            <div className="col d-flex align-items-center">
                                <div className="text-center me-3">
                                    <div
                                        className="rounded-3 d-flex align-items-center justify-content-center"
                                        style={{ background: '#F3F7FF', width: 56, height: 56 }}
                                    >
                                        <img
                                            src={TruckImage}
                                            alt={v.type}
                                            style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="small text-muted mt-1">{v.type}</div>
                                </div>

                                <div>
                                    <h6 className="fw-bold mb-1">{v.vehicleNo}</h6>
                                    <span
                                        className="badge text-dark"
                                        style={{
                                            backgroundColor: '#E8F0FE',
                                            color: '#2F80ED',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {v.category}
                                    </span>
                                </div>
                            </div>

                            {/* 2️⃣ Driver Info */}
                            <div className="col">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={User}
                                        alt="driver"
                                        style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                    />
                                    <span className="fw-semibold">{v.driver}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={Call}
                                        alt="phone"
                                        style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                    />
                                    {v.phone}
                                </div>
                                <div className="d-flex flex-wrap gap-1 mt-1">
                                    <span className="badge bg-primary-subtle text-primary">Area</span>
                                    <span className="badge bg-primary-subtle text-primary">Depot</span>
                                    <span className="badge bg-primary-subtle text-primary">Model</span>
                                </div>
                            </div>

                            {/* 3️⃣ Address */}
                            <div className="col text-muted d-flex ">
                                <img
                                    src={Address}
                                    alt="address"
                                    style={{ width: '16px', height: '16px', marginRight: '4px', marginTop: '4px' }}
                                />
                                {v.address}
                            </div>

                            {/* 4️⃣ Status */}
                            <div className="col" style={{ fontSize: '14px' }}>

                                <div className="d-flex align-items-center flex-wrap fonttext-14" style={{ lineHeight: 1.4 }}>
                                    {/* Status label */}
                                    <span
                                        className="me-1"
                                        style={{ color: '#3D83F5', textTransform: 'uppercase' }}
                                    >
                                        {v.status}
                                    </span>

                                    {/* Status text */}
                                    <span className="fw-semibold me-1" style={{ color: '#3D83F5' }}>
                                        {v.statusText}
                                    </span>

                                    {/* "from" + time */}
                                    {v.StatusTime && (
                                        <>
                                            <span className=" me-1">from</span>
                                            <span className="fw-semibold " style={{ color: '#3D83F5' }}>{v.StatusTime}</span>
                                        </>
                                    )}
                                </div>
                                {/* Parked duration badge (on new line) */}
                                {v.parkedTime && (
                                    <div className="mt-1">
                                        <span
                                            style={{
                                                backgroundColor: 'rgba(108, 117, 125, 0.24)', // medium gray, visible even on white
                                                color: '#525252e2',                            // white text
                                                border: '1px solid rgba(255, 255, 255, 0.3)', // subtle white border
                                                borderRadius: '6px',
                                                fontSize: '13px',
                                                padding: '4px 10px',
                                                fontWeight: 500,
                                                display: 'inline-block',
                                                letterSpacing: '0.2px',
                                            }}
                                        >
                                            {v.parkedTime}
                                        </span>
                                    </div>
                                )}


                            </div>


                     




                            {/* 5️⃣ ODO + IGN + Parked Time */}
                            <div className="col ">
                                {/* ODO */}
                                <span
                                    className="badge d-flex align-items-center text-white"
                                    style={{
                                        backgroundColor: '#3B3B3B',
                                        fontWeight: 500,
                                        padding: '6px 10px',
                                        fontSize: '14px',
                                        marginRight: '80px',
                                    }}
                                >
                                    <img
                                        src={Gauge}
                                        alt="odo"
                                        style={{
                                            width: '14px',
                                            height: '14px',
                                            marginRight: '6px',

                                        }}
                                    />
                                    ODO: {v.odo}
                                </span>

                          <div className="mt-1">
  <span
    style={{
      backgroundColor: 'rgba(108, 117, 125, 0.24)', // subtle gray background
      color: '#525252',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '6px',
      fontSize: '13px',
      padding: '4px 10px',
      fontWeight: 500,
      display: 'inline-flex',     // ✅ makes background fit content only
      alignItems: 'center',
      letterSpacing: '0.2px',
      width: 'auto',   
      marginRight:'50px',           // ✅ ensures no stretching
    }}
  >
    <img
      src={Calender}
      alt="calendar"
      style={{
        width: '14px',
        height: '14px',
        marginRight: '6px',
      }}
    />
    {v.odo}
  </span>
</div>





                            </div>

                            {/* 6️⃣ IGN / Fuel / Distance */}
                            <div className="col" style={{ fontSize: '14px' }}>

                                {/* IGN (individual on first line) */}
                                <div className="mb-2">
                                    <span
                                        className="badge text-white fw-semibold"
                                        style={{
                                            backgroundColor: v.ignition === 'ON' ? '#27AE60' : '#EF4343',
                                            padding: '6px 10px',
                                            fontSize: '14px',
                                        }}
                                    >
                                        IGN {v.ignition}
                                    </span>
                                </div>

                                {/* Fuel + Distance (next line, flex layout) */}
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    {/* Fuel */}
                                    <span
                                        className="d-flex align-items-center border rounded-3"
                                        style={{
                                            backgroundColor: '#F8F9FA',
                                            color: '#6C757D',
                                            padding: '6px 10px',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            gap: '6px',
                                        }}
                                    >
                                        <img
                                            src={Fuel}
                                            alt="fuel"
                                            style={{ width: '16px', height: '16px' }}
                                        />
                                        {v.fuel}
                                    </span>

                                    {/* Distance */}
                                    <span
                                        className="d-flex align-items-center border rounded-3"
                                        style={{
                                            backgroundColor: '#F8F9FA',
                                            color: '#6C757D',
                                            padding: '6px 10px',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            gap: '6px',
                                        }}
                                    >
                                        <img
                                            src={Location}
                                            alt="distance"
                                            style={{ width: '16px', height: '16px' }}
                                        />
                                        {v.distance}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VehicleDashboard;
