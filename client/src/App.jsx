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

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/statistics" element={<StatisticsPage/>} />
          <Route path="/howitworks" element={<HowItWorksSection/>} />
          {/* Add more routes as needed */}
        </Routes>
        <FooterSection/>
      </Router>
    </ThemeProvider>
  );
}

export default App;