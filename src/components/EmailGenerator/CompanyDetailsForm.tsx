import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, ChevronDown } from "lucide-react"

interface CompanyDetailsFormProps {
  onNext: (data: any) => void
}

export function CompanyDetailsForm({ onNext }: CompanyDetailsFormProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    emailStyle: "",
    attachment: "",
    customDeliverables: false,
    recipientEmail: "",
    recipientName: "",
    additionalEmails: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(formData)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Submit Email Request for Admin Approval</h2>
          <p className="text-muted-foreground">
            All emails require admin approval before sending. Provide company and recipient information.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="amazon"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="emailStyle">Email Template Style *</Label>
            <Select 
              value={formData.emailStyle} 
              onValueChange={(value) => setFormData({ ...formData, emailStyle: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Formal - Professional and business-oriented tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="formal">Formal - Professional and business-oriented tone</SelectItem>
                <SelectItem value="casual">Casual - Friendly and approachable tone</SelectItem>
                <SelectItem value="creative">Creative - Dynamic and innovative tone</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Choose the tone and style for your email template
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="attachment">Email Attachments</Label>
            <Select 
              value={formData.attachment} 
              onValueChange={(value) => setFormData({ ...formData, attachment: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="brAInwave 2025 Brochure" />
                <ChevronDown className="h-4 w-4 opacity-50" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brochure">brAInwave 2025 Brochure</SelectItem>
                <SelectItem value="partnership-deck">Partnership Deck</SelectItem>
                <SelectItem value="event-details">Event Details PDF</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Selected attachment will be included when the email is sent
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="customDeliverables"
                checked={formData.customDeliverables}
                onCheckedChange={(checked) => setFormData({ ...formData, customDeliverables: checked as boolean })}
              />
              <Label htmlFor="customDeliverables" className="text-sm font-medium">
                Do you want to add custom deliverables to your partnership proposal?
              </Label>
            </div>
            {formData.customDeliverables && (
              <p className="text-sm text-muted-foreground pl-6">
                Custom deliverables will be added to the standard partnership opportunities
              </p>
            )}
          </div>

          <Alert className="bg-warning/10 border-warning text-warning-foreground">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Admin Approval Required</strong><br />
              All emails must be approved by admin before sending. No direct email sending is allowed.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label htmlFor="recipientEmail">Recipient Email *</Label>
            <Input
              id="recipientEmail"
              type="email"
              value={formData.recipientEmail}
              onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })}
              placeholder="contact@company.com"
              required
            />
            <p className="text-sm text-muted-foreground">
              Required for admin approval workflow
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="recipientName">Recipient Name (optional)</Label>
            <Input
              id="recipientName"
              value={formData.recipientName}
              onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
              placeholder="e.g., John Smith, Dr. Jane Doe"
            />
            <p className="text-sm text-muted-foreground">
              If not provided, will default to "Dear Sir/Madam"
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalEmails">Additional Email Addresses (BCC) - Optional</Label>
            <Input
              id="additionalEmails"
              value={formData.additionalEmails}
              onChange={(e) => setFormData({ ...formData, additionalEmails: e.target.value })}
              placeholder="email1@company.com, email2@company.com"
            />
          </div>

          <Button type="submit" className="w-full">
            Continue to Review Email
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}