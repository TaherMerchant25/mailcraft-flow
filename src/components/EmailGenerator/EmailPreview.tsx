import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RotateCcw, Bold, Italic, List, CornerDownLeft, Undo, Redo, AlertTriangle } from "lucide-react"

interface EmailPreviewProps {
  companyData: any
  onNext: (emailContent: string) => void
  onBack: () => void
}

export function EmailPreview({ companyData, onNext, onBack }: EmailPreviewProps) {
  const [emailContent, setEmailContent] = useState(`
Collaboration Proposal - brAInwave 2025 AI Hackathon Partnership

Dear Madam/Sir,

I am writing to propose a collaborative partnership between ${companyData.companyName} and AIMS-DTU (Artificial Intelligence & Machine Learning Society, Delhi Technological University) for the second edition of brAInwave 2025, North India's largest student-led AI hackathon.

What is brAInwave?

brAInwave, a 30-hour AI hackathon organized by AIMS-DTU, provides a platform for participants and organizers to analyze and address real-world challenges. This event offers a unique opportunity to engage with bright, innovative, and forward-thinking young minds.

brAInwave 2024, in collaboration with Dubai-based AI startup On-Demand, attracted over 2,500 young participants and 600 teams nationwide. Participants developed AI solutions across diverse sectors including Medicine, Finance, Education, and Defense. We awarded over ₹10 lakh in prizes and received exceptional feedback, achieving a 4-star rating—the highest for a student-led AI hackathon in India.

Event Details

Venue: Delhi Technological University Main Campus
Date: 30th and 31st October 2025

${companyData.companyName} X AIMS-DTU Partnership Opportunities

Title Sponsorship: Secure maximum brand visibility as the primary sponsor, enjoying exclusive naming rights and prominent logo placement across all event materials and digital platforms.

Problem Statement Partnership: Present real-world challenges for participants to solve, gaining access to innovative solutions and direct interaction with top talent.

Judging Panel Participation: Participate in our expert judging panel, evaluating solutions and identifying promising candidates for potential recruitment.

Recruitment Opportunities: Gain exclusive access to our talented participant pool for internship and full-time recruitment, facilitated by dedicated networking sessions.

Workshop & Mentorship: Conduct technical workshops or offer mentorship to participants, solidifying your company's position as a leader in the AI field.

Brand Visibility Package: Benefit from comprehensive marketing exposure, including social media promotion, website placement, and promotional material distribution reaching 2,500+ participants.

${companyData.customDeliverables ? 
`Custom ${companyData.companyName} Deliverable: To further enhance your brand presence and engagement, we propose a tailored "${companyData.companyName} Sustainability Challenge." This initiative will focus on developing AI solutions addressing environmental concerns, aligning perfectly with ${companyData.companyName}'s commitment to sustainability and showcasing your dedication to innovative problem-solving. Participants will leverage their skills to create impactful solutions, directly benefiting your company's sustainability initiatives.` : ''}

We are flexible and welcome discussions to create a mutually beneficial partnership tailored to your specific needs.

Please find the attached collaboration brochure for your review.

Warm regards,

Pihu Agrawal
Co-Head, AIMS-DTU
Delhi Technological University (Formerly DCE)
+91 8700000077
  `)

  const handleSubmit = () => {
    onNext(emailContent)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Review & Edit Email</h2>
              <p className="text-muted-foreground">Make any necessary changes to the generated email</p>
            </div>
            <Button variant="outline" size="sm" onClick={onBack}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          </div>

          <div className="border rounded-lg">
            {/* Toolbar */}
            <div className="border-b p-3 bg-muted/30">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Bold className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Italic className="w-4 h-4" />
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm">
                  H2
                </Button>
                <Button variant="ghost" size="sm">
                  H3
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm">
                  <List className="w-4 h-4" />
                  List
                </Button>
                <Button variant="ghost" size="sm">
                  1. List
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm">
                  <CornerDownLeft className="w-4 h-4" />
                  Break
                </Button>
                <Button variant="ghost" size="sm">
                  ¶ Space
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm">
                  <Undo className="w-4 h-4" />
                  Undo
                </Button>
                <Button variant="ghost" size="sm">
                  <Redo className="w-4 h-4" />
                  Redo
                </Button>
              </div>
            </div>

            {/* Email Content Editor */}
            <div className="p-6">
              <textarea
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                className="w-full h-96 p-4 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background text-foreground"
                style={{ fontFamily: 'inherit', fontSize: '14px', lineHeight: '1.5' }}
              />
              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                <span>{emailContent.length} characters, {emailContent.split(' ').length} words</span>
                <span>Use ↵ Break for line breaks • Use ¶ Space for paragraph breaks</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button onClick={handleSubmit} className="bg-primary hover:bg-primary-hover">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Submit for Admin Approval
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}