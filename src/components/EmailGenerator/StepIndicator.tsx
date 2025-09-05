import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepIndicatorProps {
  currentStep: number
  steps: { title: string; number: number }[]
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center w-full mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex items-center">
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200",
                currentStep > step.number
                  ? "bg-step-completed border-step-completed text-white"
                  : currentStep === step.number
                  ? "bg-step-active border-step-active text-white"
                  : "bg-background border-step-inactive text-step-inactive"
              )}
            >
              {currentStep > step.number ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-medium">{step.number}</span>
              )}
            </div>
            <span
              className={cn(
                "ml-3 text-sm font-medium",
                currentStep >= step.number
                  ? "text-foreground"
                  : "text-step-inactive"
              )}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-20 h-0.5 mx-4 transition-all duration-200",
                currentStep > step.number
                  ? "bg-step-completed"
                  : "bg-step-inactive"
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}