import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Clock, PlayCircle, Video } from "lucide-react";
import { useState } from "react";

interface TutorialCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  thumbnail: string;
  onClick: () => void;
}

export function TutorialCard({
  id,
  title,
  description,
  duration,
  level,
  category,
  thumbnail,
  onClick,
}: TutorialCardProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getLevelAriaLabel = (level: string) => {
    switch (level) {
      case "Beginner":
        return "Suitable for beginners";
      case "Intermediate":
        return "Intermediate level required";
      case "Advanced":
        return "Advanced level tutorial";
      default:
        return "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Enable keyboard navigation - Enter or Space to activate
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Card
      className={`
        overflow-hidden cursor-pointer transition-all duration-300 group border-2
        hover:shadow-xl hover:border-blue-accent
        focus-within:shadow-xl focus-within:border-blue-accent focus-within:ring-4 focus-within:ring-blue-accent/20
        ${isFocused ? "shadow-xl border-blue-accent ring-4 ring-blue-accent/20" : ""}
      `}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
      role="button"
      aria-label={`Start ${title} tutorial. ${level} level. Duration: ${duration}. Category: ${category}.`}
    >
      {/* Video Thumbnail Placeholder */}
      <div 
        className="relative aspect-video bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900"
        aria-hidden="true"
      >
        <img
          src={thumbnail}
          alt={`${title} tutorial preview`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Video Icon Indicator */}
        <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 shadow-lg">
          <Video className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Video Tutorial</span>
        </div>

        {/* Play Button Overlay - Enhanced for accessibility */}
        <div 
          className={`
            absolute inset-0 flex items-center justify-center 
            transition-opacity duration-300
            ${isFocused ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
          aria-hidden="true"
        >
          <div className="bg-blue-accent rounded-full p-5 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <PlayCircle className="w-14 h-14 text-white" fill="white" />
          </div>
        </div>

        {/* Duration Badge on Thumbnail */}
        <div 
          className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 shadow-lg"
          aria-label={`Tutorial duration: ${duration}`}
        >
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span className="font-medium">{duration}</span>
        </div>
      </div>

      {/* Card Content - 8px grid spacing: p-6 = 48px */}
      <div className="p-6 space-y-4">
        {/* Tags Section */}
        <div className="flex items-start gap-2 flex-wrap" role="group" aria-label="Tutorial metadata">
          <Badge 
            variant="secondary" 
            className="text-xs"
            aria-label={`Category: ${category}`}
          >
            {category}
          </Badge>
          <Badge 
            className={getLevelColor(level) + " text-xs"}
            aria-label={getLevelAriaLabel(level)}
          >
            {level}
          </Badge>
        </div>

        {/* Title and Description */}
        <div>
          <h3 className="mb-2 line-clamp-2 group-hover:text-blue-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        {/* Screen Reader Only Additional Info */}
        <div className="sr-only">
          Press Enter or Space to start this tutorial. 
          Use Tab to navigate between tutorial cards.
        </div>
      </div>
    </Card>
  );
}
