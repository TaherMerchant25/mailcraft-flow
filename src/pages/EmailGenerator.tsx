import { useState } from "react"
import { Header } from "@/components/Layout/Header"
import { StepIndicator } from "@/components/EmailGenerator/StepIndicator"
import { CompanyDetailsForm } from "@/components/EmailGenerator/CompanyDetailsForm"
import { EmailPreview } from "@/components/EmailGenerator/EmailPreview"
import { SubmissionComplete } from "@/components/EmailGenerator/SubmissionComplete"

const steps = [
  { number: 1, title: "Company Details" },
  { number: 2, title: "Edit Email" },
  { number: 3, title: "Send & Save" }
]

export default function EmailGenerator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [companyData, setCompanyData] = useState({})
  const [emailContent, setEmailContent] = useState("")

  const handleCompanyDataSubmit = (data: any) => {
    setCompanyData(data)
    setCurrentStep(2)
  }

  const handleEmailSubmit = (content: string) => {
    setEmailContent(content)
    setCurrentStep(3)
  }

  const handleBackToCompanyDetails = () => {
    setCurrentStep(1)
  }

  const handleBackToEmailEdit = () => {
    setCurrentStep(2)
  }

  const handleNewEmail = () => {
    setCurrentStep(1)
    setCompanyData({})
    setEmailContent("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <StepIndicator currentStep={currentStep} steps={steps} />
        
        <div className="flex justify-center">
          {currentStep === 1 && (
            <CompanyDetailsForm onNext={handleCompanyDataSubmit} />
          )}
          
          {currentStep === 2 && (
            <EmailPreview 
              companyData={companyData}
              onNext={handleEmailSubmit}
              onBack={handleBackToCompanyDetails}
            />
          )}
          
          {currentStep === 3 && (
            <SubmissionComplete
              companyData={companyData}
              onNewEmail={handleNewEmail}
              onBackToEdit={handleBackToEmailEdit}
            />
          )}
        </div>
      </main>

      <footer className="border-t bg-background py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 AIMS-DTU | brAInwave 2025</p>
          <p className="mt-1">Artificial Intelligence & Machine Learning Society, Delhi Technological University</p>
        </div>
      </footer>
    </div>
  )
}