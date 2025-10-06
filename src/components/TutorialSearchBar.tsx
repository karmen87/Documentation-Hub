import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, X } from "lucide-react";

interface TutorialSearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onClear?: () => void;
  defaultValue?: string;
  showSubmitButton?: boolean;
  variant?: "default" | "compact" | "prominent";
}

export function TutorialSearchBar({
  placeholder = "Search tutorials...",
  onSearch,
  onClear,
  defaultValue = "",
  showSubmitButton = false,
  variant = "default",
}: TutorialSearchBarProps) {
  const [searchValue, setSearchValue] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleClear = () => {
    setSearchValue("");
    onSearch("");
    onClear?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (!showSubmitButton) {
      onSearch(e.target.value);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "h-10";
      case "prominent":
        return "h-14 text-lg";
      default:
        return "h-12";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search
            className={`
              absolute left-4 top-1/2 transform -translate-y-1/2 
              text-blue-accent
              ${variant === "compact" ? "w-4 h-4" : variant === "prominent" ? "w-6 h-6" : "w-5 h-5"}
            `}
          />
          <Input
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleChange}
            className={`
              ${variant === "compact" ? "pl-10 pr-10" : variant === "prominent" ? "pl-14 pr-14" : "pl-12 pr-12"}
              ${getVariantClasses()}
              border-2 
              focus:border-blue-accent 
              focus:ring-blue-accent
              transition-all
              duration-200
            `}
          />
          {searchValue && (
            <button
              type="button"
              onClick={handleClear}
              className={`
                absolute right-4 top-1/2 transform -translate-y-1/2 
                text-muted-foreground 
                hover:text-foreground 
                transition-colors
                ${variant === "compact" ? "w-4 h-4" : variant === "prominent" ? "w-6 h-6" : "w-5 h-5"}
              `}
              aria-label="Clear search"
            >
              <X className="w-full h-full" />
            </button>
          )}
        </div>

        {showSubmitButton && (
          <Button
            type="submit"
            className={`
              bg-blue-accent 
              hover:bg-blue-accent-dark 
              text-white
              ${variant === "compact" ? "h-10 px-4" : variant === "prominent" ? "h-14 px-8" : "h-12 px-6"}
            `}
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        )}
      </div>
    </form>
  );
}
