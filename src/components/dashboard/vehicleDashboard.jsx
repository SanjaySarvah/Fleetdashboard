import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'
import TruckIcon from '../dashboard/assests/icons/truck-light-full.svg';
import MovingIcon from '../dashboard/assests/icons/paper-plane-regular-full.svg';
import IdleIcon from '../dashboard/assests/icons/pause-regular-full.png';
import ParkedIcon from '../dashboard/assests/icons/stop-regular-full.png';
import ServiceIcon from '../dashboard/assests/icons/wrench-light-full 1.png';
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
import Location from '../dashboard/assests/icons/arrow-progress-light-full 1.svg';
import Fuel from '../dashboard/assests/icons/gas-pump-regular-full.svg';

function VehicleDashboard() {
    const filters = [
        { name: 'All', count: 8, icon: TruckIcon, color: '#2F80ED', active: true },
        { name: 'Moving', count: 2, icon: MovingIcon, color: '#27AE60' },
        { name: 'Idle', count: 3, icon: IdleIcon, color: '#F2C94C' },
        { name: 'Parked', count: 3, icon: ParkedIcon, color: '#2F80ED' },
        { name: 'No data', count: 1, icon: DatabaseIcon, color: '#EB5757' },
        { name: 'Expired', count: 0, icon: ClockIcon, color: '#B4690E' },
        { name: 'Disabled', count: 0, icon: BanIcon, color: '#828282' },
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
            statusText: '1h 20m from 08:50 AM',
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
            status: 'Idle',
            statusColor: '#F2C94C',
            statusText: '1h 20m from 08:50 AM',
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
            statusText: '1h 20m from 08:50 AM',
            odo: '67 km',
            ignition: 'OFF',
            fuel: '27.9 L',
            distance: '1.2 km',
            subBadge: 'Charging',
            parkedTime: '1d 2h 57m ago',
        },
    ]

    return (
        <div className="container-fluid py-3 px-3" style={{ background: '#fafafa' }}>
            {/* 🔍 Search Row */}
            <div className="row mb-3 g-2">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control rounded-3 fonttext-14 "
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

            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                {filters.map((f, i) => (
                    <div
                        key={i}
                        className="d-flex justify-content-between align-items-center px-3 py-2 rounded-pill flex-grow-1"
                        style={{
                            backgroundColor: f.active ? f.color : '#fff',
                            border: f.active ? 'none' : '1px solid #E0E0E0',
                            color: f.active ? '#fff' : '#333',
                            boxShadow: f.active ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            minWidth: '180px',
                            maxWidth: '220px',
                        }}
                    >
                        <div className="d-flex align-items-center">
                            {/* Icon inside colored circle */}
                            <div
                                className="d-flex align-items-center justify-content-center me-2 rounded-circle"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    backgroundColor: f.color,
                                    flexShrink: 0,
                                }}
                            >
                                <img
                                    src={f.icon}
                                    alt={f.name}
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        objectFit: 'contain',
                                        filter: f.active
                                            ? 'brightness(0) invert(1)' // makes the icon fully white
                                            : 'none',
                                    }}
                                />
                            </div>
                            <span
                                className="fonttext-14"
                                style={{ color: f.active ? '#fff' : '#525252' }}
                            >
                                {f.name}
                            </span>
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





            <div className="container-fluid bg-light py-3">
                {vehicles.map((v, i) => (
                    <div
                        key={i}
                        className="bg-white border rounded-4 shadow-sm p-2 mb-3"
                        style={{
                            fontSize: '14px',
                            borderLeft: `5px solid ${v.statusColor}`,
                        }}
                    >
                        <div
                            className="row row-cols-6 align-items-center g-3"
                            style={{ flexWrap: 'nowrap' }}
                        >
                            {/* 1️⃣ Icon + Type + Vehicle Info */}
                            <div className="col d-flex align-items-center">
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
                                            src={TruckImage} // use Address icon here
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
                            <div className="col text-muted d-flex align-items-center">
                                <img
                                    src={Address}
                                    alt="address"
                                    style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                />
                                {v.address}
                            </div>

                            {/* 4️⃣ Status */}
                            <div className="col d-flex align-items-center">
                                <img
                                    src={Settings}
                                    alt="status"
                                    style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                />
                                <span
                                    className="fw-bold"
                                    style={{ color: v.statusColor, textTransform: 'uppercase' }}
                                >
                                    {v.status}
                                </span>
                                <span className="text-secondary fw-semibold ms-1">{v.statusText}</span>
                                <span className="badge bg-light text-secondary mt-1">{v.lastSeen}</span>
                            </div>

                            {/* 5️⃣ ODO / Parked Time */}
                            <div className="col">
                                <span
                                    className="badge text-white me-1"
                                    style={{ backgroundColor: v.statusColor }}
                                >
                                    <img
                                        src={Gauge}
                                        alt="status"
                                        style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                    />
                                    ODO: {v.odo}
                                </span>
                                {v.parkedTime && (
                                    <span className="badge bg-light text-dark border">{v.parkedTime}</span>
                                )}
                            </div>

                 
                            


                                <div className="col d-flex flex-wrap align-items-center justify-content-end gap-2">
                                    <span
                                        className="badge text-white"
                                        style={{
                                            backgroundColor: v.ignition === 'ON' ? '#27AE60' : '#BDBDBD',
                                        }}
                                    >
                                        IGN {v.ignition}
                                    </span>

                                    {/* SubBadge */}
                                    <span
                                        className="badge text-white d-flex align-items-center"
                                        style={{
                                            backgroundColor:
                                                v.subBadge === 'Charging'
                                                    ? 'rgba(5, 165, 63, 0.2)' // #05A53F with 20% opacity
                                                    : '#6b757d2b',              // gray for Not Charging
                                            color: v.subBadge === 'Charging' ? '#05A53F' : '#fff', // text color
                                        }}
                                    >
                                        <img
                                            src={v.subBadge === 'Charging' ? Charging : NotCharging} // conditional icon
                                            alt={v.subBadge || 'Not Charging'}
                                            style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                        />
                                        {v.subBadge }
                                    </span>

                                    {/* Fuel */}
                                    <span className="badge bg-light text-secondary border d-flex align-items-center">
                                        <img
                                            src={Address}
                                            alt="fuel"
                                            style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                        />
                                        {v.fuel}
                                    </span>

                                    {/* Distance */}
                                    <span className="badge bg-light text-secondary border d-flex align-items-center">
                                        <img
                                            src={Address}
                                            alt="distance"
                                            style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                        />
                                        {v.distance}
                                    </span>
                              


                                <span className="badge bg-light text-secondary border d-flex align-items-center">
                                    <img
                                        src={Address}
                                        alt="fuel"
                                        style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                    />
                                    {v.fuel}
                                </span>

                                <span className="badge bg-light text-secondary border d-flex align-items-center">
                                    <img
                                        src={Address}
                                        alt="distance"
                                        style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                    />
                                    {v.distance}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default VehicleDashboard
