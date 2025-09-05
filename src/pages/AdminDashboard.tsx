import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, CheckCircle, XCircle, Mail, LogOut, FileText, Paperclip, Upload } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface EmailRequest {
  id: string
  company: string
  recipient: string
  recipientName: string
  attachment: string
  uploadedFiles?: File[]
  status: "pending" | "approved" | "rejected"
}

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [emailRequests, setEmailRequests] = useState<EmailRequest[]>([
    {
      id: "1",
      company: "amazon",
      recipient: "pihuagr26@gmail.com",
      recipientName: "pihu",
      attachment: "brAInwave Brochure",
      status: "pending"
    }
  ])

  useEffect(() => {
    // Check if admin is logged in
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login")
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    navigate("/admin/login")
  }

  const handleStatusChange = (id: string, newStatus: "approved" | "rejected") => {
    setEmailRequests(prev => 
      prev.map(req => 
        req.id === id ? { ...req, status: newStatus } : req
      )
    )
  }

  const handleFileUpload = (id: string, files: FileList | null) => {
    if (!files) return
    
    const fileArray = Array.from(files)
    setEmailRequests(prev => 
      prev.map(req => 
        req.id === id 
          ? { ...req, uploadedFiles: [...(req.uploadedFiles || []), ...fileArray] }
          : req
      )
    )
  }

  const getStatusStats = () => {
    const pending = emailRequests.filter(req => req.status === "pending").length
    const approved = emailRequests.filter(req => req.status === "approved").length
    const rejected = emailRequests.filter(req => req.status === "rejected").length
    
    return { pending, approved, rejected }
  }

  const stats = getStatusStats()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-warning/10 text-warning border-warning">pending</Badge>
      case "approved":
        return <Badge variant="outline" className="bg-success/10 text-success border-success">approved</Badge>
      case "rejected":
        return <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Email Generator
              </Button>
            </Link>
            <ThemeToggle />
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Requests</p>
                <p className="text-3xl font-bold">{stats.pending}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-3xl font-bold">{stats.approved}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mr-4">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rejected</p>
                <p className="text-3xl font-bold">{stats.rejected}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Email Requests Table */}
        <Card>
          <CardContent className="p-0">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Email Requests</h2>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Attachments</TableHead>
                    <TableHead>Upload Files</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{request.company}</p>
                          <p className="text-sm text-muted-foreground">web_user</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{request.recipient}</p>
                          <p className="text-sm text-muted-foreground">{request.recipientName}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            From: cybertroopers25@gmail.com
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">{request.attachment}</span>
                          </div>
                          {request.uploadedFiles && request.uploadedFiles.length > 0 && (
                            <div className="space-y-1">
                              {request.uploadedFiles.map((file, index) => (
                                <div key={index} className="flex items-center text-xs text-muted-foreground">
                                  <Paperclip className="w-3 h-3 mr-1" />
                                  {file.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="relative">
                          <input
                            type="file"
                            multiple
                            onChange={(e) => handleFileUpload(request.id, e.target.files)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-muted/50 hover:bg-muted border-border text-foreground"
                          >
                            <Paperclip className="w-4 h-4 mr-2" />
                            Upload Files
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(request.status)}
                          {request.status === "pending" && (
                            <div className="flex gap-1">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 px-2 text-xs bg-success/10 hover:bg-success/20 text-success border-success"
                                onClick={() => handleStatusChange(request.id, "approved")}
                              >
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 px-2 text-xs bg-destructive/10 hover:bg-destructive/20 text-destructive border-destructive"
                                onClick={() => handleStatusChange(request.id, "rejected")}
                              >
                                Reject
                              </Button>
                            </div>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}