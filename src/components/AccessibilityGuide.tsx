import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Keyboard, 
  Eye, 
  MousePointer, 
  Accessibility,
  Check,
  Monitor,
  Smartphone
} from "lucide-react";

export function AccessibilityGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-accent rounded-xl shadow-lg">
              <Accessibility className="w-8 h-8 text-white" />
            </div>
            <h1>Accessibility Features</h1>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Our Tutorial Hub is designed with accessibility in mind, following WCAG 2.1 AA standards
            to ensure all users can navigate and interact with content effectively.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Keyboard Navigation */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-accent-light rounded-lg">
              <Keyboard className="w-6 h-6 text-blue-accent" />
            </div>
            <h2>Keyboard Navigation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <h3>Tutorial Cards</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-accent text-white mt-0.5">Tab</Badge>
                  <p className="text-muted-foreground flex-1">
                    Navigate between tutorial cards sequentially
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-accent text-white mt-0.5">Shift + Tab</Badge>
                  <p className="text-muted-foreground flex-1">
                    Navigate backwards through cards
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-accent text-white mt-0.5">Enter / Space</Badge>
                  <p className="text-muted-foreground flex-1">
                    Start the focused tutorial
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3>Search & Filters</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-accent text-white mt-0.5">Tab</Badge>
                  <p className="text-muted-foreground flex-1">
                    Move between search field and filter dropdowns
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-accent text-white mt-0.5">↑ ↓</Badge>
                  <p className="text-muted-foreground flex-1">
                    Navigate dropdown menu options
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-accent text-white mt-0.5">Esc</Badge>
                  <p className="text-muted-foreground flex-1">
                    Close open dropdown menus
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Screen Reader Support */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-accent-light rounded-lg">
              <Eye className="w-6 h-6 text-blue-accent" />
            </div>
            <h2>Screen Reader Support</h2>
          </div>

          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3>ARIA Labels & Roles</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>All interactive elements have descriptive ARIA labels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Tutorial cards announce title, level, duration, and category</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Filter changes are announced with live regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Results count updates are announced automatically</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3>Alt Text & Descriptions</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>All images include descriptive alt text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Video thumbnails labeled as "tutorial preview"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Decorative icons marked with aria-hidden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Semantic HTML structure with proper headings</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Visual Accessibility */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-accent-light rounded-lg">
              <MousePointer className="w-6 h-6 text-blue-accent" />
            </div>
            <h2>Visual & Interaction Design</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <h3>Color Contrast</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-accent rounded flex items-center justify-center">
                    <span className="text-white text-xs">Aa</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Primary Blue</div>
                    <div className="text-xs">#007BFF</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">WCAG AA</Badge>
                </div>
                <p className="text-muted-foreground">
                  All text meets WCAG AA contrast ratio standards (4.5:1 for normal text, 3:1 for large text)
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3>Focus States</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 border-2 border-blue-accent rounded-lg bg-blue-accent-light/30">
                  <p>Focus Example</p>
                </div>
                <p className="text-muted-foreground">
                  Clear 2px blue outline with 2px offset on all focusable elements for keyboard navigation
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3>Touch Targets</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 bg-blue-accent-light rounded flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-accent rounded" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">Minimum Size</div>
                    <div className="text-xs">44×44px</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  All interactive elements meet the 44×44px minimum touch target size for mobile devices
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Responsive & Device Support */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-accent-light rounded-lg">
              <Monitor className="w-6 h-6 text-blue-accent" />
            </div>
            <h2>Responsive Design</h2>
          </div>

          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-blue-accent" />
                  <h3>Desktop (1440px+)</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" />
                    <span>3-column grid layout for optimal viewing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" />
                    <span>Quick links sidebar for easy navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" />
                    <span>Prominent search bar with large touch targets</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-blue-accent" />
                  <h3>Mobile & Tablet</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" />
                    <span>Single column layout for comfortable reading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" />
                    <span>Touch-optimized controls and spacing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" />
                    <span>Collapsed navigation for space efficiency</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Testing Checklist */}
        <section className="space-y-6">
          <h2>Accessibility Testing Checklist</h2>
          
          <Card className="p-6 bg-blue-accent-light/30 border-2 border-blue-accent">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3>✅ Implemented Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Keyboard navigation for all interactive elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Screen reader compatibility with ARIA labels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>High contrast color scheme (WCAG AA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Clear focus indicators for keyboard users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Alt text for all images and media</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3>🎯 Best Practices</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Semantic HTML structure (header, main, nav, section)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Live regions for dynamic content updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Minimum 44×44px touch target sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>Responsive design for all screen sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <span>8px grid system for consistent spacing</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
