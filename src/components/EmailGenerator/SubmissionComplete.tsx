import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface SubmissionCompleteProps {
  companyData: any
  onNewEmail: () => void
  onBackToEdit: () => void
}

export function SubmissionComplete({ companyData, onNewEmail, onBackToEdit }: SubmissionCompleteProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Send Email & Save</h2>
            <p className="text-muted-foreground">Your email is ready! Choose how you'd like to proceed</p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-5 h-5 text-primary mr-2" />
              <h3 className="font-semibold text-primary">Email Request Submitted</h3>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Your email request has been submitted for admin approval. Once approved by an administrator, the email will be automatically sent to the recipient.
            </p>
            <div className="mt-4 text-center">
              <span className="text-sm font-medium text-primary">Status: Pending Admin Approval</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={onBackToEdit} className="flex-1">
              Back to Edit
            </Button>
            <Button onClick={onNewEmail} className="flex-1">
              Create New Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}