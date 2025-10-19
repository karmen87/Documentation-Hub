import { useState, useEffect } from "react";
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
  BrainCircuit,
} from "lucide-react";

// Updated interface to match the MDX front matter structure
interface TutorialStep {
  step_number: number;
  step_title: string;
  narrator_script: string;
  on_screen_text: string[];
  action_visual_cue: string;
}

interface InteractiveTutorialProps {
  tutorialId: number;
  onExit: () => void;
}

export default function InteractiveTutorial({ tutorialId, onExit }: InteractiveTutorialProps) {
  const [tutorialSteps, setTutorialSteps] = useState<TutorialStep[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isNonDeveloperMode, setIsNonDeveloperMode] = useState(false);

  useEffect(() => {
    const loadTutorial = async () => {
      try {
        setIsLoading(true);
        const modules = import.meta.glob('../pages/quickstart-*.mdx');
        const path = `../pages/quickstart-0${tutorialId}.mdx`;
        
        if (modules[path]) {
          const module: any = await modules[path]();
          if (module.frontmatter && module.frontmatter.steps) {
            setTutorialSteps(module.frontmatter.steps);
          } else {
            setError('Invalid tutorial format: `steps` array not found in module.frontmatter.');
          }
        } else {
          setError(`Tutorial with ID ${tutorialId} not found.`);
        }
      } catch (e) {
        setError('Failed to load tutorial content.');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    loadTutorial();
  }, [tutorialId]);

  const progress = tutorialSteps.length > 0 ? ((currentStep + 1) / tutorialSteps.length) * 100 : 0;
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

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen w-full">Loading Tutorial...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen w-full">Error: {error}</div>;
  }

  if (!step) {
    return <div className="flex justify-center items-center h-screen w-full">No steps available for this tutorial.</div>;
  }

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
                    key={s.step_number}
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
                      <div className="text-sm truncate">{s.step_title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tutorial Content and Demo Area */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="p-8 border-2 shadow-lg">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-4 bg-blue-accent text-white hover:bg-blue-accent-dark">
                      Step {currentStep + 1} of {tutorialSteps.length}
                    </Badge>
                    <h2 className="mb-4">{step.step_title}</h2>
                  </div>
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
                  {step.narrator_script}
                </p>

                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2">On-Screen Text:</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                        {step.on_screen_text.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>

                <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Visual Cue:</h4>
                    <p className="text-muted-foreground">{step.action_visual_cue}</p>
                </div>

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
