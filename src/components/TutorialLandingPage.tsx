import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { TutorialCard } from "./TutorialCard";
import { TutorialSearchBar } from "./TutorialSearchBar";
import { TutorialFilterDropdown, FilterOption } from "./TutorialFilterDropdown";
import { Skeleton } from "./ui/skeleton";
import { fetchTutorials, Tutorial } from "../api";
import { QUICK_LINKS_DATA } from "../data/LamaticQuickLinks.js";
import {
  BookOpen,
  Code,
  Zap,
  Database,
  GraduationCap,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Shield,
  GitBranch,
  AlertTriangle,
} from "lucide-react";

interface TutorialLandingPageProps {
  onStartTutorial: (tutorialId: number) => void;
}

export default function TutorialLandingPage({ onStartTutorial }: TutorialLandingPageProps) {
  // State for data fetching
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for filtering and search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  // Fetch data on component mount
  useEffect(() => {
    const loadTutorials = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTutorials();
        setTutorials(data);
      } catch (err) {
        setError("Failed to load tutorials. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadTutorials();
  }, []);

  // Memoized filter options to prevent re-calculation on every render
  const categoryOptions: FilterOption[] = [
    { value: "all", label: "All Categories", badge: tutorials.length.toString() },
    { value: "Getting Started", label: "Getting Started", icon: <BookOpen className="w-4 h-4" />, badge: tutorials.filter(t => t.category === "Getting Started").length.toString() },
    { value: "Workflows", label: "Workflows", icon: <Zap className="w-4 h-4" />, badge: tutorials.filter(t => t.category === "Workflows").length.toString() },
    { value: "API Integration", label: "API Integration", icon: <Code className="w-4 h-4" />, badge: tutorials.filter(t => t.category === "API Integration").length.toString() },
    { value: "Data Management", label: "Data Management", icon: <Database className="w-4 h-4" />, badge: tutorials.filter(t => t.category === "Data Management").length.toString() },
  ];

  const levelOptions: FilterOption[] = [
    { value: "all", label: "All Skill Levels", badge: tutorials.length.toString() },
    { value: "Beginner", label: "Beginner", icon: <GraduationCap className="w-4 h-4" />, badge: tutorials.filter(t => t.level === "Beginner").length.toString() },
    { value: "Intermediate", label: "Intermediate", icon: <TrendingUp className="w-4 h-4" />, badge: tutorials.filter(t => t.level === "Intermediate").length.toString() },
    { value: "Advanced", label: "Advanced", icon: <Award className="w-4 h-4" />, badge: tutorials.filter(t => t.level === "Advanced").length.toString() },
  ];

  // Filtering logic
  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || tutorial.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSearchQuery("");
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedLevel !== "all" || searchQuery !== "";

  const groupedQuickLinks = QUICK_LINKS_DATA.reduce((acc, link) => {
    const { category } = link;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(link);
    return acc;
  }, {} as Record<string, typeof QUICK_LINKS_DATA>);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header 
        className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b"
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-accent rounded-xl shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1>Documentation Hub</h1>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                Master Lamatic.ai with our comprehensive tutorials and guides. Learn at your own pace
                with step-by-step instructions, video walkthroughs, and hands-on examples.
              </p>
              
              {/* Quick Stats */}
              <div className="flex gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Beginner</div>
                    <div>{isLoading ? <Skeleton className="h-5 w-12" /> : `${tutorials.filter(t => t.level === "Beginner").length} tutorials`}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Intermediate</div>
                    <div>{isLoading ? <Skeleton className="h-5 w-12" /> : `${tutorials.filter(t => t.level === "Intermediate").length} tutorials`}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Advanced</div>
                    <div>{isLoading ? <Skeleton className="h-5 w-12" /> : `${tutorials.filter(t => t.level === "Advanced").length} tutorials`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-8 py-12">
        {/* Lamatic.ai Essential Guides and Interfaces */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Lamatic.ai Essential Guides and Interfaces</h2>
          {Object.entries(groupedQuickLinks).map(([category, links]) => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl font-semibold border-b pb-2 mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-lg mb-2">{link.title}</h4>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Search and Filters Section */}
        <section className="space-y-6 mb-12" aria-label="Search and filter tutorials">
          <div className="max-w-3xl">
            <TutorialSearchBar placeholder="Search tutorials by title, description, or topic..." onSearch={setSearchQuery} variant="prominent" />
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <TutorialFilterDropdown label="Category" options={categoryOptions} value={selectedCategory} onChange={setSelectedCategory} variant="default" />
            <TutorialFilterDropdown label="Skill Level" options={levelOptions} value={selectedLevel} onChange={setSelectedLevel} variant="default" />
            {hasActiveFilters && <Button variant="outline" onClick={handleClearFilters} className="ml-2">Clear all filters</Button>}
          </div>
        </section>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 id="tutorial-results-heading">{hasActiveFilters ? "Filtered Results" : "All Tutorials"}</h2>
            {!isLoading && !error && <p className="text-muted-foreground mt-2">Showing {filteredTutorials.length} {filteredTutorials.length === 1 ? "tutorial" : "tutorials"}</p>}
          </div>
        </div>

        {/* Content Grid - Handles Loading, Error, and Content states */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-16" aria-labelledby="tutorial-results-heading">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center py-16 px-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <AlertTriangle className="w-12 h-12 mx-auto text-red-500" />
              <h3 className="mt-4 text-red-600 dark:text-red-400">Error Loading Tutorials</h3>
              <p className="text-red-500 dark:text-red-300 mt-2">{error}</p>
            </div>
          ) : filteredTutorials.length > 0 ? (
            filteredTutorials.map((tutorial) => (
              <TutorialCard key={tutorial.id} {...tutorial} onClick={() => onStartTutorial(tutorial.id)} />
            ))
          ) : (
            <div className="col-span-full text-center py-16 px-4">
              <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/50" />
              <h3 className="mt-4">No tutorials found</h3>
              <p className="text-muted-foreground mt-2">We couldn't find any tutorials matching your search criteria.</p>
              <Button onClick={handleClearFilters} className="mt-4">Clear all filters</Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}