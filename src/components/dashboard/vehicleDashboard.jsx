import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

import TruckIcon from '../dashboard/assests/icons/truck-light-full.svg';
import MovingIcon from '../dashboard/assests/icons/paper-plane-regular-full.svg';
import IdleIcon from '../dashboard/assests/icons/pause-regular-full.png';
import ParkedIcon from '../dashboard/assests/icons/stop-regular-full.png';
import DatabaseIcon from '../dashboard/assests/icons/database-light-full 1.svg';
import ClockIcon from '../dashboard/assests/icons/clock-regular-full 1 (1).svg';
import BanIcon from '../dashboard/assests/icons/ban-regular-full 1.svg';
import TruckImage from '../dashboard/assests/icons/delivery-truck_301719 1.svg';
import Address from '../dashboard/assests/icons/Address.svg';
import Settings from '../dashboard/assests/icons/Settings.svg';
import Gauge from '../dashboard/assests/icons/gauge-simple-high-light-full 1.svg';
import User from '../dashboard/assests/icons/user-light-full (1).svg';
import NotCharging from '../dashboard/assests/icons/plug-regular-full.svg';
import Charging from '../dashboard/assests/icons/Charging.svg';
import Call from '../dashboard/assests/icons/phone-light-full.svg';
import Calender from '../dashboard/assests/icons/calendar-regular-full.svg';
import Location from '../dashboard/assests/icons/arrow-progress-light-full 1.svg';
import NoFuelIcon from '../dashboard/assests/icons/gas-pump-slash-light-full 1.svg';
import FuelIcon from '../dashboard/assests/icons/gas-pump-regular-full.svg';


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
                '7/72 main rd, Venkatesapuram, Venkatesapuram new colony, Vysarpadi, Chennai, Tamil Nadu, 600012, India',
            status: 'PARKED',
            statusColor: '#2F80ED',
            statusText: '1h 20m ',
            statusTime: '08:50 AM',
            odo: '67 km',
            ignition: 'ON',
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
                '7/72 main rd, Venkatesapuram, Venkatesapuram new colony, Vysarpadi, Chennai, Tamil Nadu, 600012, India',
            status: 'Moving',
            statusColor: '#27AE60',
            statusText: '1h 20m ',
            statusTime: '08:50 AM',
            odo: '163,493 km',
            ignition: 'OFF',
            fuel: '',
            distance: '244 km',
            subBadge: 'Charging',
            parkedTime: '1d 2h 57m ago',
        },
        {
            vehicleNo: 'KA51AH3004',
            type: 'Tipper',
            category: 'Metro',
            driver: 'Guna',
            phone: '9486655961',
            address:
                '10/3, Thanigai Nagar, Kolathur, Chennai, Tamil Nadu 600099, India',
            status: 'Idle',
            statusColor: '#F2C94C',
            statusText: '1h 20m ',
            statusTime: '08:50 AM',
            odo: '163,493 km',
            ignition: 'OFF',
            fuel: '10 L',
            distance: '1.5 km',
            subBadge: 'Charging',
            parkedTime: '1d 2h 57m ago',
        },
        {
            vehicleNo: 'TN 01 AV 2288 (D 072)',
            type: 'Tipper',
            category: 'Metro',
            driver: 'Muthu',
            phone: '9488123456',
            address:
                '10/3, Thanigai Nagar, Kolathur, Chennai, Tamil Nadu 600099, India',
            status: 'No data',
            statusColor: '#EB5757',
            statusText: '1h 20m ',
            statusTime: '08:50 AM',
            odo: '',
            ignition: 'OFF',
            fuel: '',
            distance: '',
            subBadge: '',
            parkedTime: '',
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

            {/* 🚚 Filter Chips */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                {filters.map((f, i) => (
                    <div
                        key={i}
                        className="d-flex justify-content-between align-items-center px-3 py-2 rounded-pill flex-grow-1"
                        style={{
                            backgroundColor: f.active ? f.color : '#fff',
                            border: f.active ? 'none' : '1px solid #E0E0E0',
                            color: f.active ? '#fff' : '#333',
                            minWidth: '180px',
                            maxWidth: '220px',
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <div
                                className="d-flex align-items-center justify-content-center me-2 rounded-circle"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    backgroundColor: f.color,
                                }}
                            >
                                <img
                                    src={f.icon}
                                    alt={f.name}
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        objectFit: 'contain',
                                        filter: f.active ? 'brightness(0) invert(1)' : 'none',
                                    }}
                                />
                            </div>
                            <span className="fonttext-14">{f.name}</span>
                        </div>
                        <span
                            className="d-flex align-items-center justify-content-center rounded-circle fonttext-14"
                            style={{
                                backgroundColor: f.active ? 'rgba(255,255,255,0.3)' : `${f.color}20`,
                                color: f.active ? '#fff' : f.color,
                                width: '22px',
                                height: '22px',
                            }}
                        >
                            {f.count}
                        </span>
                    </div>
                ))}
            </div>

            {/* 🚛 Vehicle Cards */}
            <div className="container-fluid bg-light py-3">
                {vehicles.map((v, i) => (
                    <div
                        key={i}
                        className="bg-white border rounded-4 shadow-sm p-3 mb-3"
                        style={{
                            fontSize: '14px',
                            borderLeft: `5px solid ${v.statusColor}`,
                        }}
                    >
                        <div className="row align-items-start">
                            {/* 1️⃣ Vehicle Info */}
                            <div className="col-lg-3 d-flex">
                                <div className="text-center me-3">
                                    <div
                                        className="rounded-3 d-flex align-items-center justify-content-center"
                                        style={{
                                            background: '#F3F7FF',
                                            width: 56,
                                            height: 56,
                                        }}
                                    >
                                        <img
                                            src={TruckImage}
                                            alt={v.type}
                                            style={{ width: '48px', height: '48px' }}
                                        />
                                    </div>
                                    <div className="small text-muted mt-1">{v.type}</div>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <h6 className="fw-bold mb-1">{v.vehicleNo}</h6>
                                    <span
                                        className="badge"
                                        style={{
                                            backgroundColor: '#F1F5F9',
                                            color: '#525252',
                                            fontSize: '14px',
                                            fontWeight: 'normal',
                                        }}
                                    >
                                        {v.category}
                                    </span>
                                    <div className="d-flex align-items-center mt-1">
                                        <img
                                            src={User}
                                            alt="driver"
                                            style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                        />
                                        <span>{v.driver}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={Call}
                                            alt="phone"
                                            style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                        />
                                        {v.phone}
                                    </div>
                                    <div className="d-flex flex-wrap gap-1 mt-3">
                                        <span className="badge text-primary" style={{ backgroundColor: '#E5EEFF', fontSize: '14px', fontWeight: 'normal' }}>Area</span>
                                        <span className="badge text-primary" style={{ backgroundColor: '#E5EEFF', fontSize: '14px', fontWeight: 'normal' }}>Depot</span>
                                        <span className="badge text-primary" style={{ backgroundColor: '#E5EEFF', fontSize: '14px', fontWeight: 'normal' }}>Model</span>
                                    </div>
                                </div>
                            </div>









                            {/* 2️⃣ Address */}
                            <div className="col-lg-3 align-self-start" style={{ fontSize: '14px' }}>
                                <div className="d-flex align-items-start">
                                    <img
                                        src={Address}
                                        alt="address"
                                        style={{ width: '16px', height: '16px', marginRight: '8px', marginTop: '2px' }}
                                    />
                                    <span>{v.address}</span>
                                </div>
                            </div>








                            {/* 3️⃣ Status (Top) + ODO / ParkedTime (Bottom) */}
                            <div
                                className="col-lg-3 d-flex flex-column justify-content-between"
                                style={{
                                    fontSize: '14px',
                                    height: '100%',     // make column height consistent with siblings
                                    minHeight: '100%',  // ensures stretch
                                }}
                            >
                                {/* 🔹 Status — top aligned */}
                                <div className="d-flex align-items-start">
                                    <img
                                        src={Settings}
                                        alt="status"
                                        style={{ width: '16px', height: '16px', marginRight: '6px' }}
                                    />
                                    <span
                                        className=""
                                        style={{ color: v.statusColor, textTransform: 'uppercase', fontSize: '14px' }}
                                    >
                                        {v.status}:
                                    </span>
                                    <span className="fw-bold ms-1" style={{ color: v.statusColor }}>
                                        {v.statusText}
                                    </span>
                                    <span style={{ paddingLeft: '4px' }}>from</span>
                                    <span className="fw-bold ms-1" style={{ color: v.statusColor }}>
                                        {v.statusTime}
                                    </span>
                                </div>
                                <div>
                                    {v.parkedTime && (
                                        <span className="badge " style={{ fontSize: '14px', backgroundColor: '#F1F5F9', color: '#525252', fontWeight: 'normal', marginTop: '4px' }}>
                                            {v.parkedTime}
                                        </span>
                                    )}
                                </div>

                                {/* 🔹 Bottom badges — pushed to last bottom */}
                                <div
                                    className="d-flex align-items-center flex-wrap gap-2 justify-content-start "
                                    style={{
                                        marginTop: '55px',   // 👈 pushes badges to the very bottom
                                        paddingTop: '6px',
                                        fontSize: '14px',   // small breathing space above badges
                                    }}
                                >
                                    {v.odo && (
                                        <span
                                            className="badge"
                                            style={{ fontSize: '14px', backgroundColor: '#0F1828', color: '#ffffffff', fontWeight: 'normal' }}
                                        >
                                            <img
                                                src={Gauge}
                                                alt="ODO"
                                                style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                            />
                                            ODO: {v.odo}
                                        </span>
                                    )}
                                    {v.parkedTime && (
                                        <span className="badge " style={{ fontSize: '14px', backgroundColor: '#F1F5F9', color: '#525252', fontWeight: 'normal' }}>

                                            <img
                                                src={Calender}
                                                alt="ODO"
                                                style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                            />

                                            {v.odo}
                                        </span>
                                    )}
                                </div>
                            </div>















                            <div className="col-lg-3 d-flex flex-column">
                                {/* IGN badge at the top */}
                                <span
                                    className="badge text-white mb-2 align-self-start"
                                    style={{
                                        backgroundColor: v.ignition === 'ON' ? '#27AE60' : '#EF4343',
                                        fontSize: '14px',
                                        fontWeight: 'normal',
                                    }}
                                >
                                    IGN {v.ignition}
                                </span>

                                {/* Other badges in one flex row */}
                                <div className="d-flex flex-wrap gap-2" style={{ marginTop: '80px' }}>
                                    <span
                                        className="badge d-flex align-items-center"
                                        style={{
                                            backgroundColor:
                                                v.subBadge === 'Charging' ? 'rgba(5,165,63,0.15)' : '#e9ecef',
                                            color: v.subBadge === 'Charging' ? '#05A53F' : '#6c757d',
                                        }}
                                    >
                                        <img
                                            src={v.subBadge === 'Charging' ? Charging : NotCharging}
                                            alt={v.subBadge || 'Not Charging'}
                                            style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                        />
                                        {v.subBadge}
                                    </span>

                            



<span
  className="badge d-flex align-items-center"
  style={{
    backgroundColor:
      v.fuel !== null && v.fuel !== undefined && v.fuel !== ''
        ? '#e9ecef'
        : '#e9ecef',
    color:
      v.fuel !== null && v.fuel !== undefined && v.fuel !== ''
        ? '#6c757d'
        : '#6c757d',
  }}
>
  <img
    src={
      v.fuel !== null && v.fuel !== undefined && v.fuel !== ''
        ? FuelIcon
        : NoFuelIcon
    }
    alt={
      v.fuel !== null && v.fuel !== undefined && v.fuel !== ''
        ? 'Fuel Available'
        : 'No Fuel'
    }
    style={{ width: '16px', height: '16px', marginRight: '4px' }}
  />
  {v.fuel !== null && v.fuel !== undefined && v.fuel !== ''
    ? v.fuel
    : ''}
</span>

                                          
                                 

                                    {v.distance && (
                                        <span className="badge bg-light text-secondary border">


                                            <img
                                                src={Location}
                                                alt="status"
                                                style={{ width: '16px', height: '16px', marginRight: '6px' }}
                                            />
                                            {v.distance}
                                        </span>
                                    )}
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
