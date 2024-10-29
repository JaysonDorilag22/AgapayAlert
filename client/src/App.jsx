import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StatisticsPage from "./pages/StatisticsPage";
import HowItWorksSection from "./components/HowItWorksSection";
import SignUp from "./pages/auth/SignUp";
import AboutPage from "./pages/AboutPage";
import ReportForm from "./pages/user/ReportForm";
import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/howitworks" element={<HowItWorksSection />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/report" element={<ReportForm />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;