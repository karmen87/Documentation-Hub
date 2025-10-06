export interface Tutorial {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  thumbnail: string;
}

export interface TutorialStep {
  id: number;
  title: string;
  content: string;
  content_simple?: string;
  annotation?: string;
  tip?: string;
  warning?: string;
  highlightArea?: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

// This data would live in your Headless CMS
const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Getting Started with Lamatic.ai",
    description: "Learn the basics of setting up your first AI workflow and understanding the core concepts.",
    duration: "8 min",
    level: "Beginner",
    category: "Getting Started",
    thumbnail: "https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB0dXRvcmlhbCUyMHNjcmVlbnxlbnwxfHx8fDE3NTk2OTYwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Building Your First API Integration",
    description: "Step-by-step guide to connecting external APIs and managing authentication in Lamatic.ai.",
    duration: "15 min",
    level: "Intermediate",
    category: "API Integration",
    thumbnail: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTk2OTYwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Building Custom Web Crawlers",
    description: "Advanced guide to creating sophisticated web crawlers with data extraction, pagination handling, and rate limiting strategies.",
    duration: "28 min",
    level: "Advanced",
    category: "Workflows",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzY3JhcGluZ3xlbnwwfHx8fDE3MDk0OTk5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Advanced Workflow Automation",
    description: "Master complex workflows with conditional logic, loops, and error handling strategies.",
    duration: "22 min",
    level: "Advanced",
    category: "Workflows",
    thumbnail: "https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzU5NjYyNTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Data Transformation and Analytics",
    description: "Learn how to transform, analyze, and visualize your data within Lamatic.ai workflows.",
    duration: "18 min",
    level: "Intermediate",
    category: "Data Management",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTYwMDIzMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "AI Model Integration Best Practices",
    description: "Discover how to integrate various AI models and optimize their performance in your workflows.",
    duration: "20 min",
    level: "Advanced",
    category: "API Integration",
    thumbnail: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5Njk2MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    title: "Debugging and Monitoring Workflows",
    description: "Essential techniques for debugging workflows and setting up monitoring for production systems.",
    duration: "12 min",
    level: "Intermediate",
    category: "Workflows",
    thumbnail: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5Njc4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    title: "Authentication & Security Best Practices",
    description: "Comprehensive guide to implementing secure authentication patterns and protecting sensitive data in your workflows.",
    duration: "25 min",
    level: "Advanced",
    category: "API Integration",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTcwOTUwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    title: "Real-time Data Pipelines",
    description: "Build scalable real-time data processing pipelines with streaming data and event-driven architectures.",
    duration: "30 min",
    level: "Advanced",
    category: "Data Management",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc3RyZWFtfGVufDB8fHx8MTcwOTUwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 10,
    title: "Creating Your First Workflow",
    description: "A beginner-friendly introduction to building simple but powerful workflows from scratch.",
    duration: "10 min",
    level: "Beginner",
    category: "Getting Started",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvd3xlbnwwfHx8fDE3MDk1MDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 11,
    title: "Version Control for Workflows",
    description: "Learn how to manage workflow versions, rollbacks, and collaborative development practices.",
    duration: "16 min",
    level: "Intermediate",
    category: "Workflows",
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXQlMjB2ZXJzaW9ufGVufDB8fHx8MTcwOTUwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 12,
    title: "Understanding the Platform Dashboard",
    description: "Navigate the Lamatic.ai dashboard and understand key metrics, analytics, and control panels.",
    duration: "6 min",
    level: "Beginner",
    category: "Getting Started",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzA5NTAwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const tutorialSteps: TutorialStep[] = [
  {
    id: 1,
    title: "Welcome to Lamatic.ai",
    content:
      "Welcome! This interactive tutorial will guide you through creating your first AI-powered workflow. You'll learn how to set up nodes, connect them, and deploy your workflow in just a few minutes.",
    content_simple:
      "Welcome! Let's build your first automated task. We'll show you how to add steps, connect them, and turn your task on.",
    tip: "Take your time with each step. You can always go back if you need to review something.",
  },
  {
    id: 2,
    title: "Understanding the Workflow Canvas",
    content:
      "The workflow canvas is where you'll build your AI workflows. You can drag and drop nodes, connect them, and configure each step. The canvas supports zooming, panning, and snapping to grid for precision.",
    content_simple:
      "This is your workspace. You can add steps, connect them, and arrange them however you like.",
    annotation: "This is your main workspace where all the magic happens",
    highlightArea: { top: "20%", left: "10%", width: "80%", height: "60%" },
  },
  {
    id: 3,
    title: "Adding Your First Node",
    content:
      "Nodes are the building blocks of your workflow. Click the '+' button or use the right-click menu to add a new node. Start with an 'Input' node to receive data into your workflow.",
    content_simple:
      "Steps in your task are called 'nodes'. Click the '+' button to add your first one. A good first step is an 'Input' to get things started.",
    tip: "You can search for nodes by typing in the add menu to quickly find what you need.",
    highlightArea: { top: "15%", left: "45%", width: "10%", height: "10%" },
  },
  {
    id: 4,
    title: "Connecting Nodes",
    content:
      "To connect nodes, click and drag from the output port (right side) of one node to the input port (left side) of another. Connections determine how data flows through your workflow.",
    content_simple:
      "Connect your steps by dragging a line from the right side of one step to the left side of another. This shows how your task will run.",
    warning: "Make sure the data types match when connecting nodes to avoid errors.",
    highlightArea: { top: "30%", left: "30%", width: "40%", height: "40%" },
  },
  {
    id: 5,
    title: "Configuring Node Settings",
    content:
      "Each node has its own configuration panel. Click on a node to open its settings. Here you can customize parameters, set up API keys, and define how the node processes data.",
    content_simple:
      "Each step has settings. Click a step to see them. Here you can tell the step exactly what to do.",
    annotation: "Configuration panel appears on the right side",
    highlightArea: { top: "10%", left: "70%", width: "25%", height: "80%" },
  },
  {
    id: 6,
    title: "Testing Your Workflow",
    content:
      "Before deploying, it's important to test your workflow. Click the 'Test Run' button to execute your workflow with sample data. Monitor the execution in real-time and check the output of each node.",
    content_simple:
      "Before you turn your task on, it's a good idea to test it. Click 'Test Run' to see it in action with some example data.",
    tip: "Use the debug mode to see detailed logs and intermediate results from each step.",
  },
  {
    id: 7,
    title: "Deploying Your Workflow",
    content:
      "Once your workflow is tested and ready, click the 'Deploy' button to make it live. You'll get a unique API endpoint that you can use to trigger your workflow from anywhere.",
    content_simple:
      "When you're happy with your task, click 'Deploy' to turn it on. You'll get a special link you can use to start your task automatically.",
    tip: "Set up environment variables for API keys and sensitive data before deploying to production.",
  },
  {
    id: 8,
    title: "Tutorial Complete!",
    content:
      "Congratulations! You've completed the tutorial. You now know the basics of creating, testing, and deploying AI workflows with Lamatic.ai. Explore our documentation for advanced features and best practices.",
    content_simple:
      "Great job! You've finished the tutorial and now know how to build and run tasks in Lamatic.ai. Check out our other guides to learn even more.",
    tip: "Check out our API Integration tutorial next to learn how to connect external services.",
  },
];

/**
 * Simulates fetching tutorial data from a Headless CMS.
 * @returns A promise that resolves with the list of tutorials.
 */
export const fetchTutorials = (): Promise<Tutorial[]> => {
  console.log("Fetching tutorials from simulated API...");
  return new Promise((resolve) => {
    // Simulate network latency
    setTimeout(() => {
      console.log("Tutorials fetched successfully.");
      resolve(tutorials);
    }, 1500);
  });
};

/**
 * Simulates fetching the steps for a specific tutorial.
 * @param tutorialId The ID of the tutorial to fetch steps for.
 * @returns A promise that resolves with the list of tutorial steps.
 */
export const fetchTutorialSteps = (tutorialId: number): Promise<TutorialStep[]> => {
  console.log(`Fetching steps for tutorial ${tutorialId}...`);
  return new Promise((resolve) => {
    // In a real app, you would fetch steps based on the tutorialId.
    // Here, we return the same set of steps for demonstration.
    setTimeout(() => {
      console.log(`Steps for tutorial ${tutorialId} fetched successfully.`);
      resolve(tutorialSteps);
    }, 1200);
  });
};
