import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main
        className="mt-3"
        style={{
          padding: "20px",        // ✅ Global inline margin
            // ✅ Keep header offset if needed (adjust)
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
