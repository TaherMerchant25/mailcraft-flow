import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, CheckCircle, XCircle, Mail, LogOut, FileText } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface EmailRequest {
  id: string
  company: string
  recipient: string
  recipientName: string
  senderAccount: string
  attachment: string
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
      senderAccount: "Cyber Troopers (cybertroopers25@gmail.com)",
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
        return <Badge variant="outline" className="bg-status-pending/10 text-status-pending border-status-pending">pending</Badge>
      case "approved":
        return <Badge variant="outline" className="bg-status-approved/10 text-status-approved border-status-approved">approved</Badge>
      case "rejected":
        return <Badge variant="outline" className="bg-status-rejected/10 text-status-rejected border-status-rejected">rejected</Badge>
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
              <div className="w-12 h-12 bg-status-pending/10 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-status-pending" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Requests</p>
                <p className="text-3xl font-bold">{stats.pending}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="w-12 h-12 bg-status-approved/10 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-status-approved" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-3xl font-bold">{stats.approved}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="w-12 h-12 bg-status-rejected/10 rounded-full flex items-center justify-center mr-4">
                <XCircle className="w-6 h-6 text-status-rejected" />
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
                    <TableHead>Sender Account</TableHead>
                    <TableHead>Attachment</TableHead>
                    <TableHead>Select Sender Account</TableHead>
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
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm">{request.senderAccount}</p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{request.attachment}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select defaultValue="default">
                          <SelectTrigger className="w-48">
                            <SelectValue placeholder="Select Account" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Select Account</SelectItem>
                            <SelectItem value="cyber-troopers">Cyber Troopers</SelectItem>
                            <SelectItem value="aims-dtu">AIMS-DTU Official</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(request.status)}
                          {request.status === "pending" && (
                            <div className="flex gap-1">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 px-2 text-xs bg-status-approved/10 hover:bg-status-approved/20 text-status-approved border-status-approved"
                                onClick={() => handleStatusChange(request.id, "approved")}
                              >
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 px-2 text-xs bg-status-rejected/10 hover:bg-status-rejected/20 text-status-rejected border-status-rejected"
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