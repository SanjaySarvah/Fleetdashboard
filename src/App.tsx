import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderDesktop from "./components/HeaderDesktop";
import MobileHeader from "./components/MobileHeader";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import DealerLicensePortal from "./pages/DealerLicensePortal";
import GroupManagement from "./pages/GroupManagement";
import ActivateLicense from "./pages/ActivateLicense";
import FormsHeader from "./components/FormsHeader";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
     <div className="d-none d-md-block" style={{backgroundColor:'#FAFAFA'}}>
        <HeaderDesktop />
      </div>

      <div className="d-block d-md-none">
        <MobileHeader />
      </div>

      <main className="main-content" style={{backgroundColor:'#fafafa'}}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/driverlicenseportal" element={<DealerLicensePortal />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/group-management" element={<GroupManagement />} />

          <Route
            path="/activate-license"
            element={
              <>
                <FormsHeader title="Activation New License" />
                <ActivateLicense />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
