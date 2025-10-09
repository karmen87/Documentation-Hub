import { useState } from "react";
import { TutorialCard } from "./TutorialCard";
import { TutorialFilterDropdown, FilterOption } from "./TutorialFilterDropdown";

const tutorials = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "A beginner-friendly introduction to React.",
    duration: "1h 25m",
    level: "Beginner",
    category: "React",
    thumbnail: "https://via.placeholder.com/400x225",
  },
  {
    id: 2,
    title: "Advanced State Management in React",
    description: "Learn advanced state management techniques.",
    duration: "2h 10m",
    level: "Intermediate",
    category: "React",
    thumbnail: "https://via.placeholder.com/400x225",
  },
  {
    id: 3,
    title: "Building a REST API with Node.js and Express",
    description: "Create a robust REST API from scratch.",
    duration: "3h 45m",
    level: "Intermediate",
    category: "Node.js",
    thumbnail: "https://via.placeholder.com/400x225",
  },
  {
    id: 4,
    title: "Mastering TypeScript",
    description: "A deep dive into TypeScript's features.",
    duration: "4h 30m",
    level: "Advanced",
    category: "TypeScript",
    thumbnail: "https://via.placeholder.com/400x225",
  },
  {
    id: 5,
    title: "Introduction to Vue.js",
    description: "A beginner's guide to the Vue.js framework.",
    duration: "1h 50m",
    level: "Beginner",
    category: "Vue.js",
    thumbnail: "https://via.placeholder.com/400x225",
  },
];

const filterOptions: FilterOption[] = [
  { value: "all", label: "All Levels" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];

export default function ComponentShowcase() {
  const [levelFilter, setLevelFilter] = useState("all");

  const filteredTutorials =
    levelFilter === "all"
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.level === levelFilter);

  return (
    <div className="p-8">
      <div className="mb-8">
        <TutorialFilterDropdown
          label="Filter by Level"
          options={filterOptions}
          value={levelFilter}
          onChange={setLevelFilter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            {...tutorial}
            onClick={() => console.log(`Clicked on tutorial ${tutorial.id}`)}
          />
        ))}
      </div>
    </div>
  );
}