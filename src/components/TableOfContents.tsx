import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px 0px -75% 0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    // Debounce to allow content to render before querying DOM
    const timeoutId = setTimeout(() => {
      const contentEl = document.querySelector('main.prose');
      if (!contentEl) return;

      const headingElements = Array.from(
        contentEl.querySelectorAll('h2, h3')
      ) as HTMLElement[];

      const newHeadings = headingElements.map((heading, index) => {
        const id = heading.id || `heading-${index}`;
        if (!heading.id) {
          heading.id = id;
        }
        observer.observe(heading);
        return {
          id,
          text: heading.innerText,
          level: Number(heading.tagName.substring(1)),
        };
      });

      setHeadings(newHeadings);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const contentEl = document.querySelector('main.prose');
      if (contentEl) {
        Array.from(contentEl.querySelectorAll('h2, h3')).forEach((heading) => {
          observer.unobserve(heading);
        });
      }
    };
  }, [location.pathname]); // Rerun when route changes

  if (headings.length === 0) {
    return null; // Don't render if no headings are found
  }

  return (
    <aside className="hidden lg:block sticky top-24 self-start">
      <h3 className="font-semibold mb-4 text-sm">On this page</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`text-sm transition-colors ${
                  heading.level === 3 ? 'pl-4' : ''
                } ${
                  activeId === heading.id
                    ? 'text-accent-blue font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}