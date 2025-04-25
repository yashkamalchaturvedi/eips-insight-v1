
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Github, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="h-14 border-b border-border flex items-center gap-4 px-4 md:px-6 bg-background">
      {!isMobile && (
        <div className="flex-1">
          <h1 className="text-lg font-semibold">EIPs Insight</h1>
        </div>
      )}
      
      <div className={`flex items-center gap-4 ${isMobile ? "flex-1 justify-end" : ""}`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="hidden md:flex">
              Resources
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Documentation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>EIPs Repository</DropdownMenuItem>
            <DropdownMenuItem>EIP Standards</DropdownMenuItem>
            <DropdownMenuItem>Ethereum Dev Docs</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <a href="https://github.com/ethereum/EIPs" target="_blank" rel="noreferrer">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
        </a>
        
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
