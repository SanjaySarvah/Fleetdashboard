import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderDesktop from "./components/HeaderDesktop";
import MobileHeader from "./components/MobileHeader";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import DealerLicensePortal from "./pages/DealerLicensePortal";
import GroupManagement from "./pages/GroupManagement"; // ✅ added

import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      {/* Desktop Header */}
      <div className="d-none d-md-block">
        <HeaderDesktop />
      </div>

      {/* Mobile Header */}
      <div className="d-block d-md-none">
        <MobileHeader />
      </div>

<main className="mt-3 main-content" >
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/driverlicenseportal" element={<DealerLicensePortal />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/group-management" element={<GroupManagement />} />
  </Routes>
</main>


    </Router>
  );
};

export default App;
