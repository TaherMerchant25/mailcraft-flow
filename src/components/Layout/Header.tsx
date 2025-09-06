import { Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Mail Agent
            </h1>
          </Link>
          <span className="hidden md:block text-sm text-muted-foreground">
            AI-powered email generator for brAInwave 2025
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
            <span>AIMS-DTU</span>
          </div>
          <ThemeToggle />
          <Link to="/admin/login">
            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10">
              <Shield className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}