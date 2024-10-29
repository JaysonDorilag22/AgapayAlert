import * as React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSideBar from "@/components/AdminSideBar";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AdminSideBar />
      <div className="ml-76 p-4"> {/* Adjusted margin-left to match the sidebar width */}
        <Outlet />
      </div>
    </SidebarProvider>
  );
}