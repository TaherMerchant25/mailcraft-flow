import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Lock, ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple auth check - in real app this would be secure
    if (credentials.username === "admin" && credentials.password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true")
      navigate("/admin/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
            <p className="text-muted-foreground">Access the email approval dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Enter your password"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Lock className="w-4 h-4 mr-2" />
              Login
            </Button>
          </form>

          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium text-center mb-2">Default Credentials:</p>
            <div className="text-sm text-muted-foreground text-center">
              <p>Username: <code className="bg-background px-1 rounded">admin</code></p>
              <p>Password: <code className="bg-background px-1 rounded">admin123</code></p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/" className="inline-flex items-center text-sm text-primary hover:underline">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Email Generator
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}