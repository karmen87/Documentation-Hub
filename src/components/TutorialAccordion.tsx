import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ChevronDown } from "lucide-react";

interface AccordionSection {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface TutorialAccordionProps {
  sections: AccordionSection[];
  defaultOpen?: string[];
  variant?: "default" | "bordered" | "elevated";
}

export function TutorialAccordion({
  sections,
  defaultOpen = [],
  variant = "default",
}: TutorialAccordionProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "bordered":
        return "border-2 border-border rounded-lg overflow-hidden";
      case "elevated":
        return "shadow-lg border-2 border-border rounded-lg overflow-hidden bg-card";
      default:
        return "";
    }
  };

  return (
    <Accordion
      type="multiple"
      defaultValue={defaultOpen}
      className={`w-full space-y-2 ${getVariantClasses()}`}
    >
      {sections.map((section, index) => (
        <AccordionItem
          key={section.id}
          value={section.id}
          className={`
            ${variant === "default" ? "border-b last:border-b-0" : ""}
            ${variant === "bordered" || variant === "elevated" ? "border-none" : ""}
            ${index > 0 && variant !== "default" ? "border-t-2" : ""}
          `}
        >
          <AccordionTrigger
            className={`
              hover:no-underline 
              hover:bg-blue-accent-light/50 
              transition-colors 
              px-6 py-4
              group
              data-[state=open]:bg-blue-accent-light
              data-[state=open]:text-blue-accent
            `}
          >
            <div className="flex items-center gap-3 text-left w-full">
              {section.icon && (
                <div className="flex-shrink-0 text-blue-accent group-data-[state=open]:text-blue-accent-dark">
                  {section.icon}
                </div>
              )}
              <span className="flex-1">{section.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-muted-foreground bg-muted/30">
            {section.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
