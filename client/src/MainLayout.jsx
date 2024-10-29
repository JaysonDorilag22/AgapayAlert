import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <FooterSection />
    </div>
  );
}

export default MainLayout;