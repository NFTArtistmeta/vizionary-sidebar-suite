import { HomeIcon, BarChartIcon, UsersIcon, SettingsIcon } from "lucide-react";
import Index from "./pages/Index.jsx";

const Analytics = () => <div>Analytics Page</div>;
const Team = () => <div>Team Page</div>;
const Settings = () => <div>Settings Page</div>;

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChartIcon className="h-4 w-4" />,
    page: <Analytics />,
  },
  {
    title: "Team",
    to: "/team",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Team />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <Settings />,
  },
];