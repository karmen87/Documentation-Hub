import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Filter, X } from "lucide-react";
import { Button } from "./ui/button";

export interface FilterOption {
  value: string;
  label: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface TutorialFilterDropdownProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "default" | "compact" | "pill";
  showClear?: boolean;
  showIcon?: boolean;
}

export function TutorialFilterDropdown({
  label,
  options,
  value,
  onChange,
  placeholder = "Select...",
  variant = "default",
  showClear = true,
  showIcon = true,
}: TutorialFilterDropdownProps) {
  const handleClear = () => {
    onChange("all");
  };

  const selectedOption = options.find((opt) => opt.value === value);
  const hasSelection = value !== "all";

  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return "h-10 text-sm";
      case "pill":
        return "h-10 rounded-full border-2 hover:border-blue-accent";
      default:
        return "h-12 border-2 hover:border-blue-accent";
    }
  };

  const getLabelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "text-green-600 dark:text-green-400";
      case "intermediate":
        return "text-blue-600 dark:text-blue-400";
      case "advanced":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="flex items-center gap-2">
      {variant !== "pill" && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {showIcon && <Filter className="w-4 h-4 text-blue-accent" />}
          <span>{label}:</span>
        </div>
      )}

      <div className="relative flex items-center gap-2">
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger
            className={`
              ${getVariantClasses()}
              transition-all
              ${hasSelection ? "border-blue-accent bg-blue-accent-light/30" : ""}
              ${variant === "pill" ? "min-w-[140px]" : "min-w-[180px]"}
            `}
          >
            <SelectValue placeholder={placeholder}>
              {selectedOption && (
                <div className="flex items-center gap-2">
                  {selectedOption.icon && (
                    <span className="flex-shrink-0">{selectedOption.icon}</span>
                  )}
                  <span className={getLabelColor(selectedOption.value)}>
                    {selectedOption.label}
                  </span>
                  {selectedOption.badge && (
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {selectedOption.badge}
                    </Badge>
                  )}
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {option.icon && (
                    <span className="flex-shrink-0">{option.icon}</span>
                  )}
                  <span className={getLabelColor(option.value)}>
                    {option.label}
                  </span>
                  {option.badge && (
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {option.badge}
                    </Badge>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {showClear && hasSelection && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="h-8 w-8 hover:text-blue-accent"
            aria-label="Clear filter"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
