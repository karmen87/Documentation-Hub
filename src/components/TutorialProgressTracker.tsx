import { CheckCircle2, Circle, Minus } from "lucide-react";
import { Progress } from "./ui/progress";

export interface ProgressStep {
  id: string;
  label: string;
  description?: string;
}

interface TutorialProgressTrackerProps {
  steps: ProgressStep[];
  currentStep: number;
  variant?: "horizontal" | "numbered" | "minimal";
  showLabels?: boolean;
  showPercentage?: boolean;
}

export function TutorialProgressTracker({
  steps,
  currentStep,
  variant = "horizontal",
  showLabels = true,
  showPercentage = true,
}: TutorialProgressTrackerProps) {
  const progress = ((currentStep + 1) / steps.length) * 100;

  const getStepState = (index: number): "completed" | "active" | "inactive" => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "active";
    return "inactive";
  };

  const getStepIcon = (state: "completed" | "active" | "inactive", index: number) => {
    if (state === "completed") {
      return <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />;
    }
    if (state === "active") {
      return (
        <div className="w-6 h-6 rounded-full bg-blue-accent text-white flex items-center justify-center animate-pulse">
          <span className="text-xs">{index + 1}</span>
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
        <span className="text-xs text-muted-foreground">{index + 1}</span>
      </div>
    );
  };

  if (variant === "minimal") {
    return (
      <div className="w-full space-y-2">
        <Progress value={progress} className="h-2 bg-muted">
          <div
            className="h-full bg-blue-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </Progress>
        {showPercentage && (
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>
              Step {currentStep + 1} of {steps.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className="w-full space-y-4">
        {/* Progress Bar */}
        <div className="relative">
          <Progress value={progress} className="h-3 bg-muted">
            <div
              className="h-full bg-blue-accent rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </Progress>
          {showPercentage && (
            <span className="absolute right-0 -top-6 text-xs text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          )}
        </div>

        {/* Step Labels */}
        {showLabels && (
          <div className="flex justify-between text-xs">
            {steps.map((step, index) => {
              const state = getStepState(index);
              return (
                <div
                  key={step.id}
                  className={`
                    flex flex-col items-center gap-1 flex-1 text-center px-2
                    ${state === "active" ? "text-blue-accent" : ""}
                    ${state === "completed" ? "text-green-600 dark:text-green-400" : ""}
                    ${state === "inactive" ? "text-muted-foreground" : ""}
                  `}
                >
                  <span className="truncate w-full max-w-[100px]">{step.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Numbered variant
  return (
    <div className="w-full">
      <div className="flex items-start justify-between relative">
        {/* Connecting Line */}
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-muted -z-10">
          <div
            className="h-full bg-blue-accent transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const state = getStepState(index);
          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-2 flex-1 relative"
            >
              {/* Step Icon */}
              <div className="bg-background p-1 rounded-full">
                {getStepIcon(state, index)}
              </div>

              {/* Step Label */}
              {showLabels && (
                <div className="text-center space-y-1 max-w-[120px]">
                  <div
                    className={`
                      text-sm
                      ${state === "active" ? "text-blue-accent" : ""}
                      ${state === "completed" ? "text-green-600 dark:text-green-400" : ""}
                      ${state === "inactive" ? "text-muted-foreground" : ""}
                    `}
                  >
                    {step.label}
                  </div>
                  {step.description && state === "active" && (
                    <div className="text-xs text-muted-foreground">
                      {step.description}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress Percentage */}
      {showPercentage && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-accent-light rounded-full">
            <span className="text-sm text-blue-accent">
              {Math.round(progress)}% Complete
            </span>
            <span className="text-xs text-muted-foreground">
              ({currentStep + 1}/{steps.length})
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
