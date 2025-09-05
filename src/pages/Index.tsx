import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Mail, Users, Zap, Shield, ArrowRight, Sparkles } from "lucide-react"

const Index = () => {
  const features = [
    {
      icon: Mail,
      title: "AI Email Generation",
      description: "Create professional collaboration emails with AI assistance",
      link: "/email-generator"
    },
    {
      icon: Users,
      title: "Multi-step Process",
      description: "Guided 3-step process for perfect email creation",
      link: "/email-generator"
    },
    {
      icon: Zap,
      title: "Custom Templates",
      description: "Choose from various email templates and themes",
      link: "/email-generator"
    },
    {
      icon: Shield,
      title: "Admin Dashboard",
      description: "Manage and track all generated emails",
      link: "/admin/login"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mail Generation Agent
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-powered email generator for brAInwave 2025 collaborations. Create professional, 
            personalized emails with our intelligent 3-step process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/email-generator">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3">
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Email
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/admin/login">
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Shield className="w-5 h-5 mr-2" />
                Admin Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create professional collaboration emails efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="group">
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-muted-foreground mb-8">
            Join the brAInwave 2025 collaboration movement with AI-powered email generation
          </p>
          <Link to="/email-generator">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Create Your First Email
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
