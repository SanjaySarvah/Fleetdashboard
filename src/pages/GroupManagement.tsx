import { useState } from "react";
import {
    Users,
    Plus,
    Trash2,
    Edit3,
    ChevronDown,
    ChevronRight,
    Car,
    UserCheck,
    UserX,
  
} from "lucide-react";

interface Vehicle {
    id: number;
    name: string;
    number: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
}

interface Group {
    id: number;
    name: string;
    status: "Active" | "Inactive";
    vehicles: Vehicle[];
    users: User[];
}

interface StatCard {
    label: string;
    value: number;
    icon: React.ReactNode;
    color: string;
    change?: string;
}

const dummyGroups: Group[] = [
    {
        id: 1,
        name: "East Coast Fleet",
        status: "Active",
        vehicles: [
            { id: 1, name: "Ford Transit", number: "NY-12345" },
            { id: 2, name: "Volvo VNL 760", number: "NJ-54321" },
        ],
        users: [
            {
                id: 1,
                name: "Ragul",
                email: "ragul@fleet.co",
                avatar: "https://i.pravatar.cc/40?img=1",
            },
            {
                id: 2,
                name: "Victor",
                email: "victor@fleet.co",
                avatar: "https://i.pravatar.cc/40?img=2",
            },
        ],
    },
    {
        id: 2,
        name: "West Coast Logistics",
        status: "Active",
        vehicles: [],
        users: [],
    },
    {
        id: 3,
        name: "Southern Carriers",
        status: "Inactive",
        vehicles: [],
        users: [],
    },
];

export default function GroupManagement() {
    const [groups,] = useState(dummyGroups);
    const [openGroup, setOpenGroup] = useState<number | null>(1);

    // Calculate statistics from groups data
    const totalVehicles = groups.reduce((sum, group) => sum + group.vehicles.length, 0);
    const totalUsers = groups.reduce((sum, group) => sum + group.users.length, 0);
    const totalActive = groups.filter(group => group.status === "Active").length;
    const totalInactive = groups.filter(group => group.status === "Inactive").length;

    const stats: StatCard[] = [
        {
            label: "Total Vehicles",
            value: totalVehicles,
            icon: <Car size={24} />,
            color: "#3B82F6",
            change: "+12.5%"
        },
        {
            label: "Total Users",
            value: totalUsers,
            icon: <Users size={24} />,
            color: "#FACC14",
            change: "+8.2%"
        },
        {
            label: "Total Active",
            value: totalActive,
            icon: <UserCheck size={24} />,
            color: "#059669",
            change: "+5.3%"
        },
        {
            label: "Total Inactive",
            value: totalInactive,
            icon: <UserX size={24} />,
            color: "#EF4444",
            change: "-2.1%"
        }
    ];

    return (
        <div className="p-4 max-w-7xl mx-auto font-sans">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-1">
                <div>

                    <h4 className=" fw-bold mt-2" style={{ marginLeft: "10px", color: "#2B2E4A" }}>Group Management</h4>

                </div>
                <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center gap-2">
                        <div className="text-muted small">Total Groups</div>
                        <div>|</div>
                        <div className="fw-bold fs-5 text-dark">{groups.length}</div>
                    </div>

                    <button className="btn btn-primary d-flex align-items-center gap-2 rounded-pill px-3">
                        <Plus size={18} /> Create New Group
                    </button>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="row g-3 mb-4">
                {stats.map((stat, index) => (
                    <div className="col-12 col-sm-6 col-xl-3" key={index}>
                        <div
                            className="stat-card p-4 rounded-4 shadow-sm d-flex align-items-center justify-content-between"
                            style={{
                                background: "#fff",
                                borderLeft: `6px solid ${stat.color}`,
                                height: "120px",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {/* Content Section */}
                            <div className="d-flex flex-column justify-content-center flex-grow-1">
                                <div
                                    className="stat-label mb-2"
                                    style={{
                                        color: "#6B7280",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        lineHeight: "1.2",
                                    }}
                                >
                                    {stat.label}
                                </div>
                                <div
                                    className="stat-value mb-1"
                                    style={{
                                        fontSize: "28px",
                                        fontWeight: 700,
                                        color: "#0F172A",
                                        lineHeight: "1.1",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                {stat.change && (
                                    <div className="d-flex align-items-center gap-1">
                                        <span
                                            className={`badge ${stat.change.startsWith('+')
                                                    ? 'bg-success-subtle text-success'
                                                    : 'bg-danger-subtle text-danger'
                                                } rounded-pill`}
                                            style={{ fontSize: "11px" }}
                                        >

                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Icon Section */}
                            <div
                                className="d-flex align-items-center justify-content-center ms-3"
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    backgroundColor: `${stat.color}15`,
                                    flexShrink: 0,
                                }}
                            >
                                <div style={{ color: stat.color }}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Group Cards */}
            {groups.map((group) => {
                const isOpen = openGroup === group.id;
                const totalVehicles = group.vehicles.length;
                const totalUsers = group.users.length;

                return (
                    <div
                        key={group.id}
                        className="bg-white border rounded-4 shadow-sm mb-3"
                    >
                        {/* Group Header */}
                        <div
                            className="d-flex justify-content-between align-items-center p-3"
                            onClick={() => setOpenGroup(isOpen ? null : group.id)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="d-flex align-items-center gap-2">
                                {isOpen ? <ChevronDown /> : <ChevronRight />}
                                <h5 className="mb-0">{group.name}</h5>
                                <span
                                    className={`badge ${group.status === "Active"
                                            ? "bg-success-subtle text-success"
                                            : "bg-danger-subtle text-danger"
                                        }`}
                                >
                                    {group.status}
                                </span>
                            </div>

                            <div className="d-flex align-items-center gap-4 text-muted small">
                                <div>Vehicles <span className="fw-semibold">{totalVehicles}</span></div>
                                <div>Users <span className="fw-semibold">{totalUsers}</span></div>
                                <Edit3 size={16} />
                            </div>
                        </div>

                        {/* Expanded Section */}
                        {isOpen && (
                            <div className="p-3 border-top bg-light">
                                <div className="row">
                                    {/* Vehicles */}
                                    <div className="col-md-6">
                                        <h6 className="fw-semibold mb-2">Vehicle Information</h6>
                                        {group.vehicles.map((v) => (
                                            <div
                                                key={v.id}
                                                className="d-flex justify-content-between align-items-center bg-white border rounded-3 p-2 mb-2"
                                            >
                                                <div>
                                                    <div className="fw-semibold">{v.name}</div>
                                                    <div className="text-muted small">{v.number}</div>
                                                </div>
                                                <Trash2 size={16} className="text-danger" style={{ cursor: "pointer" }} />
                                            </div>
                                        ))}
                                        <button className="btn btn-outline-primary w-100 mt-2 rounded-pill">
                                            + Add New Vehicle
                                        </button>
                                    </div>

                                    {/* Users */}
                                    <div className="col-md-6">
                                        <h6 className="fw-semibold mb-2">User Information</h6>
                                        {group.users.map((u) => (
                                            <div
                                                key={u.id}
                                                className="d-flex justify-content-between align-items-center bg-white border rounded-3 p-2 mb-2"
                                            >
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        src={u.avatar}
                                                        alt={u.name}
                                                        className="rounded-circle"
                                                        width={36}
                                                        height={36}
                                                    />
                                                    <div>
                                                        <div className="fw-semibold">{u.name}</div>
                                                        <div className="text-muted small">{u.email}</div>
                                                    </div>
                                                </div>
                                                <Users size={16} className="text-danger" style={{ cursor: "pointer" }} />
                                            </div>
                                        ))}
                                        <button className="btn btn-outline-primary w-100 mt-2 rounded-pill">
                                            + Add New User
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}

            <style>
                {`
          .stat-card:hover {
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
            transform: translateY(-3px);
            border-left-width: 8px;
          }

          @media (max-width: 576px) {
            .stat-card {
              height: 110px !important;
              padding: 1rem !important;
            }
            
            .stat-label {
              font-size: 13px !important;
            }
            
            .stat-value {
              font-size: 22px !important;
            }
            
            .stat-card .d-flex[style*="width: 60px"] {
              width: 50px !important;
              height: 50px !important;
            }
          }

          @media (max-width: 768px) {
            .stat-card {
              height: 115px;
            }
          }
        `}
            </style>
        </div>
    );
}