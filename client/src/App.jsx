import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StatisticsPage from "./pages/StatisticsPage";
import HowItWorksSection from "./components/HowItWorksSection";
import FooterSection from "./components/FooterSection";
import SignUp from "./pages/auth/SignUp";
import AboutPage from "./pages/AboutPage";
import ReportForm from "./pages/user/ReportForm";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/statistics" element={<StatisticsPage/>} />
          <Route path="/howitworks" element={<HowItWorksSection/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/report" element={<ReportForm/>} />

          <Route path="/admin-dashboard" element={<AdminDashboard/>} />

          {/* Add more routes as needed */}
        </Routes>
        <FooterSection/>
      </Router>
    </ThemeProvider>
  );
}

export default App;