import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Users, Shield, Sparkles, ArrowRight } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Mail Agent
            </h1>
          </div>
          <span className="text-sm text-muted-foreground hidden md:block">
            AIMS-DTU • brAInwave 2025
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center max-w-4xl">
          {/* Hero Text */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
              Unlocking Potential,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Delivering Excellence.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            AI-powered email generation platform for brAInwave 2025 collaborations. 
            Create professional, personalized outreach with intelligent automation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/user/login">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-transparent border-2 border-primary/30 hover:border-primary/50 text-foreground px-12 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Users className="w-5 h-5 mr-3" />
                <span className="text-lg font-medium">USER LOGIN</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <Link to="/admin/login">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-transparent border-2 border-primary/30 hover:border-primary/50 text-foreground px-12 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Shield className="w-5 h-5 mr-3" />
                <span className="text-lg font-medium">ADMIN LOGIN</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Description */}
          <div className="max-w-lg mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              At Mail Agent, we believe in harnessing the power of technology to empower educational 
              institutions and businesses alike.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
            <span className="text-xs text-muted-foreground mt-2 tracking-wider uppercase">
              SCROLL DOWN
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Index