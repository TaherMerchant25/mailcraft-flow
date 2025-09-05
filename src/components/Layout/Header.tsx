import { Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">Mail Generation Agent</h1>
          </Link>
          <span className="text-sm text-muted-foreground">
            AI-powered email generator for brAInwave 2025 collaborations
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span>AIMS-DTU</span>
          </div>
          <ThemeToggle />
          <Link to="/admin/login">
            <Button variant="outline" size="sm">
              <Shield className="w-4 h-4 mr-2" />
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}