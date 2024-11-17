import * as React from "react";
import { Link } from "react-router-dom";
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react";
import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import { useTheme } from "@/components/theme-provider";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      emoji: "🏠",
    },
    {
      title: "Alerts Management",
      url: "/alerts-management",
      emoji: "🚨",
      items: [
        {
          title: "All Alerts",
          url: "/alerts-management/all-alerts",
        },
        {
          title: "Pending Alerts",
          url: "/alerts-management/pending-alerts",
        },
        {
          title: "Verified Alerts",
          url: "/alerts-management/verified-alerts",
        },
        {
          title: "Resolved Alerts",
          url: "/alerts-management/resolved-alerts",
        },
      ],
    },
    {
      title: "User Management",
      url: "/user-management",
      emoji: "👤",
      items: [
        {
          title: "View All Users",
          url: "/user-management/view-all-users",
        },
        {
          title: "Manage Officers",
          url: "/user-management/manage-officers",
        },
        {
          title: "Manage Roles and Permissions",
          url: "/user-management/manage-roles-permissions",
        },
      ],
    },
    {
      title: "City Management",
      url: "/city-management",
      emoji: "🌆",
      items: [
        {
          title: "Add/Update Cities",
          url: "/city-management/add-update-cities",
        },
        {
          title: "Manage City Coverage Areas",
          url: "/city-management/manage-city-coverage-areas",
        },
      ],
    },
    {
      title: "ALPR Management",
      url: "/alpr-management",
      emoji: "🔍",
      items: [
        {
          title: "License Plate Matches",
          url: "/alpr-management/license-plate-matches",
        },
        {
          title: "View Logs",
          url: "/alpr-management/view-logs",
        },
        {
          title: "Upload Data/Records",
          url: "/alpr-management/upload-data-records",
        },
      ],
    },
    {
      title: "Statistics & Reports",
      url: "/statistics-reports",
      emoji: "📊",
      items: [
        {
          title: "Analytics Overview",
          url: "/statistics-reports/analytics-overview",
        },
        {
          title: "Generate Reports (Downloadable)",
          url: "/statistics-reports/generate-reports",
        },
        {
          title: "Incident Trends",
          url: "/statistics-reports/incident-trends",
        },
      ],
    },
    {
      title: "Feedback & Suggestions",
      url: "/feedback-suggestions",
      emoji: "📝",
      items: [
        {
          title: "View Feedback",
          url: "/feedback-suggestions/view-feedback",
        },
        {
          title: "Respond to Feedback",
          url: "/feedback-suggestions/respond-feedback",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      emoji: "⚙️",
      items: [
        {
          title: "Notification Settings",
          url: "/settings/notification-settings",
        },
        {
          title: "System Configuration",
          url: "/settings/system-configuration",
        },
      ],
    },
    {
      title: "Help & Support",
      url: "/help-support",
      emoji: "❓",
      items: [
        {
          title: "FAQ",
          url: "/help-support/faq",
        },
        {
          title: "Contact Support",
          url: "/help-support/contact-support",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { theme } = useTheme();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <img
                    src={theme === "dark" ? logo4 : logo3}
                    className="size-7"
                    alt="Logo"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">AgapayAlert</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        {item.emoji}{"   "}{item.title}{" "}
                        <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                        <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link to={subItem.url}>{subItem.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}