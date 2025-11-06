import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useMemo } from 'react';

import TruckIcon from '../dashboard/assests/icons/truck-light-full.svg';
import MovingIcon from '../dashboard/assests/icons/paper-plane-regular-full.svg';
import IdleIcon from '../dashboard/assests/icons/pause-regular-full.png';
import ParkedIcon from '../dashboard/assests/icons/stop-regular-full.png';
import DatabaseIcon from '../dashboard/assests/icons/database-light-full 1.svg';
import ClockIcon from '../dashboard/assests/icons/clock-regular-full 1 (1).svg';
import BanIcon from '../dashboard/assests/icons/ban-regular-full 1.svg';
import TruckImage from '../dashboard/assests/icons/delivery-truck_301719 1.svg';
import Address from '../dashboard/assests/icons/Address.svg';
import Settings from '../dashboard/assests/icons/wrench-nodata.svg';
import ParkedWrench from '../dashboard/assests/icons/wrench-light-full 1 Parking.svg';
import Gauge from '../dashboard/assests/icons/gauge-simple-high-light-full 1.svg';
import User from '../dashboard/assests/icons/user-light-full (1).svg';
import NotCharging from '../dashboard/assests/icons/plug-regular-full.svg';
import Charging from '../dashboard/assests/icons/Charging.svg';
import Call from '../dashboard/assests/icons/phone-light-full.svg';
import Calender from '../dashboard/assests/icons/calendar-regular-full.svg';
import Location from '../dashboard/assests/icons/arrow-progress-light-full 1.svg';
import NoFuelIcon from '../dashboard/assests/icons/gas-pump-slash-light-full 1.svg';
import FuelIcon from '../dashboard/assests/icons/gas-pump-regular-full.svg';
import EllipsisIcon from '../dashboard/assests/icons/ellipsis-vertical-light-full 1.svg';

function VehicleDashboard() {
    const [searchTerm1, setSearchTerm1] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        { name: 'All', count: 8, icon: TruckIcon, color: '#2F80ED', active: true },
        { name: 'Moving', count: 2, icon: MovingIcon, color: '#27AE60' },
        { name: 'Idle', count: 3, icon: IdleIcon, color: '#F49E0C' },
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
            address: '7/72 main rd, Venkatesapuram, Venkatesapuram new colony, Vysarpadi, Chennai, Tamil Nadu, 600012, India',
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
            crossedkm: '244 km',
        },
        {
            vehicleNo: 'TN 01 AV 2295',
            type: 'Tipper',
            category: 'Metro',
            driver: 'Swami',
            phone: '9488155961',
            address: '7/72 main rd, Venkatesapuram, Venkatesapuram new colony, Vysarpadi, Chennai, Tamil Nadu, 600012, India',
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
            crossedkm: '244 km',
        },
        {
            vehicleNo: 'KA51AH3004',
            type: 'Tipper',
            category: 'Metro',
            driver: 'Guna',
            phone: '9486655961',
            address: '10/3, Thanigai Nagar, Kolathur, Chennai, Tamil Nadu 600099, India',
            status: 'Idle',
            statusColor: '#F49E0C',
            statusText: '1h 20m ',
            statusTime: '08:50 AM',
            odo: '163,493 km',
            ignition: 'OFF',
            fuel: '10 L',
            distance: '1.5 km',
            subBadge: 'Charging',
            parkedTime: '1d 2h 57m ago',
            crossedkm: '244 km',
        },
        {
            vehicleNo: 'TN 01 AV 2288 (D 072)',
            type: 'Tipper',
            category: 'Metro',
            driver: 'Muthu',
            phone: '9488123456',
            address: '10/3, Thanigai Nagar, Kolathur, Chennai, Tamil Nadu 600099, India',
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
        {
            vehicleNo: 'TN 01 AV 2288 (D 072)',
            type: 'Tipper',
            category: 'Metro',
            driver: 'Muthu',
            phone: '9488123456',
            address: '10/3, Thanigai Nagar, Kolathur, Chennai, Tamil Nadu 600099, India',
            status: 'Disabled',
            statusColor: '#5b5b5bff',
            statusText: '1h 20m ',
            statusTime: '08:50 AM',
            odo: '163,493 km',
            ignition: 'OFF',
            fuel: '10L',
            distance: '1.5 km',
            subBadge: 'Charging',
            parkedTime: '1d 2h 57m ago',
            crossedkm: '244 km',
        },
    ];

    // Filter vehicles based on search terms and selected status
    const filteredVehicles = useMemo(() => {
        return vehicles.filter(vehicle => {
            // Status filter
            const statusMatch = activeFilter === 'All' ||
                vehicle.status.toLowerCase() === activeFilter.toLowerCase() ||
                (activeFilter === 'No data' && vehicle.status === 'No data') ||
                (activeFilter === 'Expired' && vehicle.status === 'Expired') ||
                (activeFilter === 'Disabled' && vehicle.status === 'Disabled');

            // Search term 1: vehicle number, category, etc.
            const search1Match = !searchTerm1 ||
                vehicle.vehicleNo.toLowerCase().includes(searchTerm1.toLowerCase()) ||
                vehicle.category.toLowerCase().includes(searchTerm1.toLowerCase()) ||
                vehicle.type.toLowerCase().includes(searchTerm1.toLowerCase()) ||
                vehicle.driver.toLowerCase().includes(searchTerm1.toLowerCase());

            // Search term 2: area, depot, model, address
            const search2Match = !searchTerm2 ||
                vehicle.address.toLowerCase().includes(searchTerm2.toLowerCase());

            return statusMatch && search1Match && search2Match;
        });
    }, [searchTerm1, searchTerm2, activeFilter]);

    // Update filter counts based on current filtered results
    const updatedFilters = useMemo(() => {
        return filters.map(filter => {
            const count = filter.name === 'All'
                ? filteredVehicles.length
                : filteredVehicles.filter(v =>
                    v.status.toLowerCase() === filter.name.toLowerCase() ||
                    (filter.name === 'No data' && v.status === 'No data') ||
                    (filter.name === 'Expired' && v.status === 'Expired') ||
                    (filter.name === 'Disabled' && v.status === 'Disabled')
                ).length;

            return {
                ...filter,
                count,
                active: activeFilter === filter.name
            };
        });
    }, [filteredVehicles, activeFilter]);

    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);
        setSelectedStatus(filterName === 'All' ? 'All vehicles' : filterName);
    };

    const handleSearch1Change = (e) => {
        setSearchTerm1(e.target.value);
    };

    const handleSearch2Change = (e) => {
        setSearchTerm2(e.target.value);
    };

    const handleStatusChange = (e) => {
        const value = e.target.value;
        setSelectedStatus(value);
        setActiveFilter(value === 'All vehicles' ? 'All' : value);
    };

    return (
        <div className="container-fluid py-3  " style={{backgroundColor: '#FAFAFA',padding: "0 20px"}}>
            {/* 🔍 Search Row */}
            <div className="row mb-3 g-5 pt-3">
                <div className="col-md-4">
                    <div className="input-group">
                        <span
                            className="input-group-text bg-white border-end-0 rounded-start-3"
                            style={{ paddingRight: '6px', paddingLeft: '10px', paddingTop:'5px' , paddingBottom:'5px'}} // 🔹 reduced spacing
                        >
                            <i className="bi bi-search text-secondary" style={{ fontSize: '14px' }}></i>
                        </span>
                        <input
                            type="text"
                            className="form-control rounded-end-3 fonttext-14 border-start-0"
                            placeholder="Search by vehicle number, category etc"
                            style={{
                                color: '#6F6F6F',
                                paddingLeft: '4px',
                                  height: '48px', // 🔹 reduce gap between icon and text
                            }}
                            value={searchTerm1}
                            onChange={handleSearch1Change}
                        />
                    </div>
                </div>


                <div className="col-md-4 position-relative">
                    <i
                        className="bi bi-search position-absolute"
                        style={{
                            top: '50%',
                            left: '33px', // 🔹 slightly closer to input edge
                            transform: 'translateY(-50%)',
                            color: '#6F6F6F',
                            fontSize: '14px',
                        }}
                    ></i>
                    <input
                        type="text"
                        className="form-control rounded-3 fonttext-14"
                        placeholder="Search by Area, depot, model"
                        style={{
                            color: '#6F6F6F',
                            paddingLeft: '32px', // 🔹 tighter gap between icon and text
                            height: '48px', // optional: consistent height with other fields
                        }}
                        value={searchTerm2}
                        onChange={handleSearch2Change}
                    />
                </div>

<div className="col-md-4 fonttext-14 position-relative">
  <select
    className="form-select rounded-3 pe-5"
    value={selectedStatus}
    style={{  height: '48px',}}
    onChange={handleStatusChange}
  >
    <option value="All vehicles" style={{ color: '#6F6F6F', fontWeight: 'normal' }}>All vehicles</option>
    <option value="Moving">Moving</option>
    <option value="Idle">Idle</option>
    <option value="Parked">Parked</option>
    <option value="No data">No data</option>
    <option value="Disabled">Disabled</option>
  </select>

  {/* 🔹 Vertical line + Right arrow */}
  <div
    className="position-absolute d-flex align-items-center"
    style={{
      right: '26px',
      top: '50%',
      transform: 'translateY(-50%)',
      height: '60%',
    }}
  >
    <div
      style={{
        width: '1px',
        height: '100%',
        backgroundColor: '#D0D0D0',
        marginRight: '30px',
      }}
    ></div>
    <i
      className="bi bi-chevron-bottom"
      style={{
        color: '#6F6F6F',
        fontSize: '14px',
        fontWeight: 'normal',
      }}
    ></i>
  </div>
</div>



            </div>

            {/* 🚚 Filter Chips */}
            <div className="d-flex flex-wrap align-items-center gap-4 mb-4 filter-chips-container">
                {updatedFilters.map((f, i) => (
                    <div
                        key={i}
                        className="d-flex justify-content-between align-items-center px-2 py-1 rounded-pill flex-grow-1"
                        style={{
                            backgroundColor: f.active ? f.color : '#fff',
                            border: f.active ? 'none' : '1px solid #E0E0E0',
                            color: f.active ? '#fff' : '#333',
                            minWidth: '150px',
                            maxWidth: '180px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}
                        onClick={() => handleFilterClick(f.name)}
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
            <div className="container-fluid" style={{ paddingLeft: '0px', paddingRight: '0px'   }}>
                {filteredVehicles.length > 0 ? (
                    filteredVehicles.map((v, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-4 shadow-sm p-3 mb-3 vehicle-card"
                            style={{
                                fontSize: '14px',
                                position: 'relative',
                            }}
                        >
                            {/* Ellipsis menu in top-right corner */}
                            <img
                                src={EllipsisIcon}
                                alt="menu"
                                style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    width: '20px',
                                    height: '20px',
                                    cursor: 'pointer',
                                }}
                            />

                            <div className="row align-items-start">
                                {/* 1️⃣ Vehicle Info */}
                                <div className="col-lg-3 d-flex">
                                    <div className="text-center me-3">
                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                background: '#F3F7FF',
                                                width: 80,
                                                height: 80,
                                            }}
                                        >
                                            <img
                                                src={TruckImage}
                                                alt={v.type}
                                                style={{ width: '60px', height: '60px' }}
                                            />
                                        </div>
                                        <div className="mt-1 " style={{}}>{v.type}</div>
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
                                        height: '100%',
                                        minHeight: '100%',
                                    }}
                                >
                                    {/* 🔹 Status — top aligned */}
                                    <div className="d-flex align-items-start">
                                        {v.status === 'PARKED' && (
                                            <img
                                                src={ParkedWrench}
                                                alt="status"
                                                style={{ width: '16px', height: '16px', marginRight: '6px', marginTop: '2px' }}
                                            />
                                        )}
                                        {v.status === 'No data' && (
                                            <img
                                                src={Settings}
                                                alt="status"
                                                style={{ width: '16px', height: '16px', marginRight: '6px', marginTop: '2px' }}
                                            />
                                        )}
                                        <span
                                            className=""
                                            style={{ color: v.statusColor, textTransform: 'uppercase', fontSize: '14px' }}
                                        >
                                            {v.status}:
                                        </span>
                                        <span className="fw-bold ms-1" style={{ color: v.statusColor }}>
                                            {v.statusText}
                                        </span>
                                        <span style={{ paddingLeft: '4px', color: v.statusColor }}>from</span>
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
                                        className="d-flex align-items-center flex-wrap gap-2 justify-content-start"
                                        style={{
                                            marginTop: '55px',
                                            paddingTop: '6px',
                                            fontSize: '14px',
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
                                                {v.crossedkm}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* 4️⃣ IGN + Sub Badges */}
                                <div className="col-lg-3 d-flex flex-column">
                                    {/* IGN badge at the top */}
                                    <span
                                        className="badge text-white mb-2 align-self-start"
                                        style={{
                                            backgroundColor: v.ignition === 'ON' ? '#27AE60' : '#EF4343',
                                            fontSize: '14px',
                                            fontWeight: 'normal',
                                            padding: '8px 12px',
                                        }}
                                    >
                                        IGN {v.ignition}
                                    </span>

                                    {/* Other badges */}
                                    <div className="d-flex flex-wrap gap-2" style={{ marginTop: '80px', fontSize: '14px' }}>
                                        <span
                                            className="badge d-flex align-items-center"
                                            style={{
                                                backgroundColor: v.subBadge === 'Charging' ? 'rgba(5,165,63,0.15)' : '#e9ecef',
                                                color: v.subBadge === 'Charging' ? '#05A53F' : '#6c757d',
                                            }}
                                        >
                                            <img
                                                src={v.subBadge === 'Charging' ? Charging : NotCharging}
                                                alt={v.subBadge || 'Not Charging'}
                                                style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                            />
                                            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>{v.subBadge}</span>
                                        </span>

                                        <span
                                            className="badge d-flex align-items-center"
                                            style={{
                                                backgroundColor: v.fuel ? '#F1F5F9' : '#e9ecef',
                                                color: '#6c757d',
                                            }}
                                        >
                                            <img
                                                src={v.fuel ? FuelIcon : NoFuelIcon}
                                                alt={v.fuel ? 'Fuel Available' : 'No Fuel'}
                                                style={{ width: '16px', height: '16px', marginRight: '4px' }}
                                            />
                                            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>
                                                {v.fuel || ''}
                                            </span>
                                        </span>

                                        {v.distance && (
                                            <span className="badge" style={{ backgroundColor: '#F1F5F9', color: '#6c757d', fontWeight: 'normal' }}>
                                                <img
                                                    src={Location}
                                                    alt="status"
                                                    style={{ width: '16px', height: '16px', marginRight: '6px' }}
                                                />
                                                <span style={{ fontSize: '14px', fontWeight: 'normal', marginTop: '20px' }}> {v.distance}</span>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-5">
                        <p className="text-muted">No vehicles found matching your search criteria.</p>
                    </div>
                )}
            </div>

            {/* 🚀 Mobile-Only Responsive Styles */}
            <style>
                {`
@media (max-width: 768px) {
  .vehicle-card {
    padding: 16px !important;
    border-radius: 12px !important;
    overflow: hidden !important;
  }

  .vehicle-card .row {
    display: flex !important;
    flex-direction: column !important;
    gap: 16px !important;
  }

  .vehicle-card .col-lg-3 {
    width: 100% !important;
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }

  .vehicle-card h6 {
    font-size: 14px !important;
  }

  .vehicle-card .badge {
    font-size: 12px !important;
    padding: 6px 10px !important;
  }

  .vehicle-card img {
    max-width: 100% !important;
    height: auto !important;
  }

  .vehicle-card .d-flex.flex-wrap {
    gap: 6px !important;
  }

  .vehicle-card img[alt="phone"],
  .vehicle-card img[alt="driver"],
  .vehicle-card img[alt="address"],
  .vehicle-card img[alt="status"] {
    width: 14px !important;
    height: 14px !important;
  }
}



`}
            </style>

        </div>
    );
}

export default VehicleDashboard;