import { useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  X,
  Lightbulb,
  AlertCircle,
  BrainCircuit,
} from "lucide-react";

interface TutorialStep {
  id: number;
  title: string;
  content: string;
  /** Optional simplified content for non-developer mode */
  content_simple?: string;
  annotation?: string;
  tip?: string;
  warning?: string;
  highlightArea?: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 1,
    title: "Welcome to Lamatic.ai",
    content:
      "Welcome! This interactive tutorial will guide you through creating your first AI-powered workflow. You'll learn how to set up nodes, connect them, and deploy your workflow in just a few minutes.",
    content_simple:
      "Welcome! Let's build your first automated task. We'll show you how to add steps, connect them, and turn your task on.",
    tip: "Take your time with each step. You can always go back if you need to review something.",
  },
  {
    id: 2,
    title: "Understanding the Workflow Canvas",
    content:
      "The workflow canvas is where you'll build your AI workflows. You can drag and drop nodes, connect them, and configure each step. The canvas supports zooming, panning, and snapping to grid for precision.",
    content_simple:
      "This is your workspace. You can add steps, connect them, and arrange them however you like.",
    annotation: "This is your main workspace where all the magic happens",
    highlightArea: {
      top: "20%",
      left: "10%",
      width: "80%",
      height: "60%",
    },
  },
  {
    id: 3,
    title: "Adding Your First Node",
    content:
      "Nodes are the building blocks of your workflow. Click the '+' button or use the right-click menu to add a new node. Start with an 'Input' node to receive data into your workflow.",
    content_simple:
      "Steps in your task are called 'nodes'. Click the '+' button to add your first one. A good first step is an 'Input' to get things started.",
    tip: "You can search for nodes by typing in the add menu to quickly find what you need.",
    highlightArea: {
      top: "15%",
      left: "45%",
      width: "10%",
      height: "10%",
    },
  },
  {
    id: 4,
    title: "Connecting Nodes",
    content:
      "To connect nodes, click and drag from the output port (right side) of one node to the input port (left side) of another. Connections determine how data flows through your workflow.",
    content_simple:
      "Connect your steps by dragging a line from the right side of one step to the left side of another. This shows how your task will run.",
    warning: "Make sure the data types match when connecting nodes to avoid errors.",
    highlightArea: {
      top: "30%",
      left: "30%",
      width: "40%",
      height: "40%",
    },
  },
  {
    id: 5,
    title: "Configuring Node Settings",
    content:
      "Each node has its own configuration panel. Click on a node to open its settings. Here you can customize parameters, set up API keys, and define how the node processes data.",
    content_simple:
      "Each step has settings. Click a step to see them. Here you can tell the step exactly what to do.",
    annotation: "Configuration panel appears on the right side",
    highlightArea: {
      top: "10%",
      left: "70%",
      width: "25%",
      height: "80%",
    },
  },
  {
    id: 6,
    title: "Testing Your Workflow",
    content:
      "Before deploying, it's important to test your workflow. Click the 'Test Run' button to execute your workflow with sample data. Monitor the execution in real-time and check the output of each node.",
    content_simple:
      "Before you turn your task on, it's a good idea to test it. Click 'Test Run' to see it in action with some example data.",
    tip: "Use the debug mode to see detailed logs and intermediate results from each step.",
  },
  {
    id: 7,
    title: "Deploying Your Workflow",
    content:
      "Once your workflow is tested and ready, click the 'Deploy' button to make it live. You'll get a unique API endpoint that you can use to trigger your workflow from anywhere.",
    content_simple:
      "When you're happy with your task, click 'Deploy' to turn it on. You'll get a special link you can use to start your task automatically.",
    tip: "Set up environment variables for API keys and sensitive data before deploying to production.",
  },
  {
    id: 8,
    title: "Tutorial Complete!",
    content:
      "Congratulations! You've completed the tutorial. You now know the basics of creating, testing, and deploying AI workflows with Lamatic.ai. Explore our documentation for advanced features and best practices.",
    content_simple:
      "Great job! You've finished the tutorial and now know how to build and run tasks in Lamatic.ai. Check out our other guides to learn even more.",
    tip: "Check out our API Integration tutorial next to learn how to connect external services.",
  },
];

interface InteractiveTutorialProps {
  tutorialId: number;
  onExit: () => void;
}

export function InteractiveTutorial({ tutorialId, onExit }: InteractiveTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  /** State to manage the non-developer mode, simplifying content */
  const [isNonDeveloperMode, setIsNonDeveloperMode] = useState(false);
  const progress = ((currentStep + 1) / tutorialSteps.length) * 100;
  const step = tutorialSteps[currentStep];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header with Progress */}
      <div className="border-b bg-white dark:bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={onExit} className="hover:text-blue-accent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit Tutorial
              </Button>
              <div>
                <h2>Getting Started with Lamatic.ai</h2>
                <p className="text-muted-foreground">
                  Step {currentStep + 1} of {tutorialSteps.length}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onExit} className="hover:text-blue-accent">
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="h-3 bg-muted">
              <div 
                className="h-full bg-blue-accent rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </Progress>
            <p className="text-xs text-muted-foreground text-right">{Math.round(progress)}% Complete</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Step Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="mb-6">Tutorial Steps</h3>
              <div className="space-y-3">
                {tutorialSteps.map((s, index) => (
                  <button
                    key={s.id}
                    onClick={() => handleStepClick(index)}
                    className={`w-full flex items-start gap-3 p-4 rounded-lg text-left transition-all duration-200 border-2 ${
                      index === currentStep
                        ? "bg-blue-accent text-white border-blue-accent shadow-md"
                        : index < currentStep
                        ? "bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-950/30"
                        : "border-transparent hover:bg-muted/50 hover:border-muted"
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" />
                    ) : (
                      <Circle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${index === currentStep ? "text-white" : "text-muted-foreground"}`} />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{s.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tutorial Content and Demo Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Mock Workflow Canvas with Overlay */}
            <div className="relative bg-muted rounded-lg overflow-hidden" style={{ height: "400px" }}>
              {/* Simulated Canvas Background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              {/* Mock workflow elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-muted-foreground/50">
                  <svg width="400" height="300" viewBox="0 0 400 300">
                    <defs>
                      <pattern
                        id="grid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="400" height="300" fill="url(#grid)" />
                    {/* Mock nodes */}
                    <rect x="50" y="120" width="80" height="60" rx="8" fill="currentColor" opacity="0.2" />
                    <rect x="170" y="120" width="80" height="60" rx="8" fill="currentColor" opacity="0.2" />
                    <rect x="290" y="120" width="80" height="60" rx="8" fill="currentColor" opacity="0.2" />
                    {/* Mock connections */}
                    <line x1="130" y1="150" x2="170" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                    <line x1="250" y1="150" x2="290" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                  </svg>
                </div>
              </div>

              {/* Highlight Overlay */}
              {step.highlightArea && (
                <div
                  className="absolute border-4 rounded-lg animate-pulse shadow-2xl"
                  style={{
                    top: step.highlightArea.top,
                    left: step.highlightArea.left,
                    width: step.highlightArea.width,
                    height: step.highlightArea.height,
                    borderColor: "var(--blue-accent)",
                    backgroundColor: "rgba(0, 123, 255, 0.15)",
                    boxShadow: "0 0 0 4px rgba(0, 123, 255, 0.2)",
                  }}
                />
              )}

              {/* Annotation Callout */}
              {step.annotation && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-blue-accent text-white px-6 py-3 rounded-lg shadow-xl max-w-md border-2 border-blue-accent-dark">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{step.annotation}</span>
                    </div>
                    {/* Arrow pointer */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-accent rotate-45" />
                  </div>
                </div>
              )}
            </div>

            {/* Step Content Card */}
            <Card className="p-8 border-2 shadow-lg">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-4 bg-blue-accent text-white hover:bg-blue-accent-dark">
                      Step {currentStep + 1} of {tutorialSteps.length}
                    </Badge>
                    <h2 className="mb-4">{step.title}</h2>
                  </div>
                  {/* Non-Developer Mode Toggle */}
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                    <BrainCircuit className="w-5 h-5 text-blue-accent" />
                    <Label htmlFor="non-dev-mode" className="cursor-pointer">
                      Simplified Mode
                    </Label>
                    <Switch
                      id="non-dev-mode"
                      checked={isNonDeveloperMode}
                      onCheckedChange={setIsNonDeveloperMode}
                      aria-label="Toggle non-developer mode"
                    />
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {isNonDeveloperMode && step.content_simple
                    ? step.content_simple
                    : step.content}
                </p>

                {step.tip && (
                  <div className="flex gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
                    <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-blue-900 dark:text-blue-100 mb-1">💡 Tip</div>
                      <p className="text-blue-800 dark:text-blue-200">{step.tip}</p>
                    </div>
                  </div>
                )}

                {step.warning && (
                  <div className="flex gap-3 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-900">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-amber-900 dark:text-amber-100 mb-1">⚠️ Warning</div>
                      <p className="text-amber-800 dark:text-amber-200">{step.warning}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="border-2 hover:border-blue-accent hover:text-blue-accent disabled:opacity-50"
                size="lg"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="text-muted-foreground">
                {currentStep + 1} / {tutorialSteps.length}
              </div>

              {currentStep < tutorialSteps.length - 1 ? (
                <Button 
                  onClick={handleNext}
                  className="bg-blue-accent hover:bg-blue-accent-dark text-white"
                  size="lg"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  onClick={onExit}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  Complete Tutorial
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
