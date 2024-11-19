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
import AlertPage from "./pages/admin/AlertPage";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import UserHome from "./pages/user/UserHome";
import EmailVerfication from "./pages/auth/EmailVerfication";

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
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/verification" element={<EmailVerfication />} />

          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/alerts-management" element={<AlertPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;