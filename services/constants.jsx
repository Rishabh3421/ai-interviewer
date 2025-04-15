import { Calendar, LayoutDashboardIcon, List, Settings, WalletCardsIcon } from "lucide-react";

export const SidebarNavigations=[
    {
        name:"Dashboard",
        path:"/dashboard",
        icon:LayoutDashboardIcon
    },
    {
        name:"Schedule Interview",
        path:"/schedule-interview",
        icon:Calendar,
    },
    {
        name:"All Interviews",
        path:"/all-interviews",
        icon:List
    },
    {
        name:"Billing",
        path:"/billing",
        icon:WalletCardsIcon
    },
    {
        name:"Settings",
        path:"/settings",
        icon:Settings
    },
   
]