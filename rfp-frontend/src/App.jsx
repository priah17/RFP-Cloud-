import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import DashboardOrganization from "./pages/DashboardOrganization.jsx";
import DashboardVendor from "./pages/DashboardVendor.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import ProposalComparison from "./pages/ProposalComparison.jsx";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Directly accessible dashboards */}
          <Route path="/dashboard/org" element={<DashboardOrganization />} />
          <Route path="/dashboard/vendor" element={<DashboardVendor />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/comparison" element={<ProposalComparison />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
