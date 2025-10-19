import { Suspense, lazy } from "react";
import { Routes, Route, NavLink, Link, Outlet, useNavigate, useParams } from "react-router-dom";

import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { BookOpen, Layers, Accessibility } from "lucide-react";
import { TableOfContents } from "./components/TableOfContents";

// Lazy load the page components
const TutorialLandingPage = lazy(() => import("./components/TutorialLandingPage"));
const ComponentShowcase = lazy(() => import("./components/ComponentShowcase"));
const AccessibilityGuide = lazy(() => import("./pages/AccessibilityGuide.mdx"));
const InteractiveTutorial = lazy(() => import("./components/InteractiveTutorial"));

// Wrapper component to extract tutorialId from URL
const InteractiveTutorialWrapper = () => {
  const { tutorialId } = useParams();
  const id = tutorialId ? parseInt(tutorialId, 10) : 0;
  return <InteractiveTutorial tutorialId={id} onExit={() => window.history.back()} />;
};

// Main App component to define routes
export default function App() {
  const navigate = useNavigate();

  const handleStartTutorial = (tutorialId: number) => {
    navigate(`/tutorials/${tutorialId}`);
  };

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen w-full">Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TutorialLandingPage onStartTutorial={handleStartTutorial} />} />
          <Route path="components" element={<ComponentShowcase />} />
          <Route path="accessibility" element={<AccessibilityGuide />} />
        </Route>
        <Route 
          path="/tutorials/:tutorialId" 
          element={<InteractiveTutorialWrapper />} 
        />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
}


// Layout component including header, navigation, and content outlet
function MainLayout() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "bg-accent-blue text-white"
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    }`;

  const navLinks = (
    <>
      <NavLink to="/" className={getNavLinkClass} end>
        <BookOpen className="w-4 h-4 mr-2" />
        Tutorials
      </NavLink>
      <NavLink to="/components" className={getNavLinkClass}>
        <Layers className="w-4 h-4 mr-2" />
        Components
      </NavLink>
      <NavLink to="/accessibility" className={getNavLinkClass}>
        <Accessibility className="w-4 h-4 mr-2" />
        Accessibility
      </NavLink>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="p-2 bg-accent/50 rounded-lg">
                <BookOpen className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-semibold">Documentation Hub</h1>
                <p className="text-xs text-muted-foreground">
                  Documentation & Component Library
                </p>
              </div>
            </Link>

            <div className="flex-1 flex justify-center px-4">
              <div className="w-full max-w-md">
              </div>
            </div>
            <div className="flex items-center">
              <nav className="hidden md:flex items-center gap-1">
                {navLinks}
              </nav>
              
              {/* Icons removed as requested */}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_240px] gap-12">
          <main className="prose dark:prose-invert max-w-none">
            <Outlet />
          </main>
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}