
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  LayoutDashboard,
  Search,
  FileEdit,
  BarChart,
  Users,
  Settings,
  Menu,
  X
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Proposal Explorer",
    href: "/explorer",
    icon: Search,
  },
  {
    title: "Proposal Builder",
    href: "/builder",
    icon: FileEdit,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart,
  },
  {
    title: "Contributors",
    href: "/contributors",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Sidebar collapses on mobile when navigating
  const handleNavigation = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <>
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar} 
          className="fixed top-4 left-4 z-50"
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
      
      <aside
        className={cn(
          "bg-sidebar flex flex-col border-r border-sidebar-border transition-all duration-300 z-40",
          isOpen ? "w-64" : "w-0",
          isMobile ? "fixed h-full" : "relative"
        )}
      >
        {isOpen && (
          <>
            <div className="flex items-center justify-between h-14 px-4 border-b border-sidebar-border">
              <Link to="/" className="font-bold text-xl flex items-center space-x-2">
                <span className="text-primary">EIPs</span>
                <span>Insight</span>
              </Link>
              
              {isMobile && (
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <ScrollArea className="flex-1 py-2">
              <nav className="px-2 space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={handleNavigation}
                      className={cn(
                        "flex items-center gap-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </ScrollArea>
            
            <div className="p-4 border-t border-sidebar-border">
              <div className="flex items-center gap-x-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  D
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Dev User</span>
                  <span className="text-xs text-muted-foreground">dev@example.com</span>
                </div>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
