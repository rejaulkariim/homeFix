import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Catalog",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Quotation",
      href: "/dashboard",
      icon: "docs",
    },
    {
      title: "Recept",
      href: "/dashboard/recept",
      icon: "docs",
    },
  ],
};
