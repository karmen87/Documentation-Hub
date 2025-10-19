---
title: "Quickstart: Building and Deploying Your First Flow"
description: "A step-by-step guide to creating, testing, and deploying your first GenAI workflow using the Lamatic Studio Flow Editor."
layout: tutorial_slide
tutorial_number: 1
steps:
  - step_number: 1
    step_title: "Welcome to Lamatic.ai"
    narrator_script: "Welcome to the quickstart guide for Lamatic.ai. This platform is an Agentic AI Development Platform, engineered for teams to quickly build, monitor, and optimize generative AI applications.[1] This interactive tutorial will guide you through the fundamental steps: from initiating a new flow in the visual Studio to configuring nodes and finally deploying your project to production.[1]"
    on_screen_text:
      - "Collaborative Agentic AI Platform"
      - "Focus: Build, Connect, Deploy"
      - "Start Your First Workflow Now"
    action_visual_cue: "Display the main Lamatic Studio dashboard and highlight the 'Build' section."
  - step_number: 2
    step_title: "Understanding the Flow Structure"
    narrator_script: "Every flow must begin with a **Trigger Node**, defining when and how often the flow executes, either as a single **Event Trigger** or a batch process.[2] Start by creating a new flow in the Studio's Flow Management section, then choose a pre-built Use Case or Template that corresponds to your initial project requirements to quickly establish a foundational flow structure.[1]"
    on_screen_text:
      - "Flows start with a Trigger Node"
      - "Choose Event or Batch Trigger"
      - "Start with a Use Case or Template"
    action_visual_cue: "Navigate to Flow Management, click 'Create a New Flow', and show the Template selection modal."
  - step_number: 3
    step_title: "Adding Your First Action Node"
    narrator_script: "Expand the workflow by adding **Action Nodes**, which perform the actual work like generating text or accessing data.[1] In the Flow Editor, locate the **➕ icon** on the connecting line and click it to open the node selection menu, choosing an AI, App, Data, or Logic node type.[3] Arrange nodes sequentially, ensuring data continuity, as the position dictates the ability to access **upstream variables** from preceding steps.[3]"
    on_screen_text:
      - "Action Nodes process and transform data"
      - "Use the **➕ icon** to insert nodes"
      - "Physical Order is Functional (Upstream Data)"
    action_visual_cue: "Demonstrate clicking the **➕** icon, opening the menu, and adding a 'Generate Text' node."
  - step_number: 4
    step_title: "Connecting Nodes"
    narrator_script: "Connecting nodes involves ensuring the logical sequence is correct so that the output of one step becomes the input for the next.[3] If you need to change the order, **click and hold** a node and drag it to a new position, allowing the flow to adjust automatically.[3] This arrangement is critical for complex flows, where you might use a **Branch Node** to execute nodes in parallel for increased efficiency.[1]"
    on_screen_text:
      - "Output of Node A becomes Input of Node B"
      - "Drag and drop to reorder sequence"
      - "Use Branch Node for Parallel Processing"
    action_visual_cue: "Highlight two connected nodes and show the data arrow between them, emphasizing the sequential flow."
  - step_number: 5
    step_title: "Configuring Node Inputs"
    narrator_script: "To customize node functionality, simply **click on the node** in the flow editor to select it. The configuration panel will instantly appear on the **right side** of the screen.[3] Populate required input fields, select models, and modify output settings. All changes applied in this configuration panel are saved **automatically in real-time**, enabling rapid iteration.[1, 3]"
    on_screen_text:
      - "Click the Node to open configuration panel"
      - "Panel appears on the Right Side"
      - "Define Inputs and Model Settings"
      - "Changes save automatically in real-time"
    action_visual_cue: "Click a node, show the right panel open, and highlight the input fields being customized."
  - step_number: 6
    step_title: "Testing Your Workflow"
    narrator_script: "Before deployment, execute a test to verify your flow’s logic. Click the **Debug Button** in the bottom right corner of the Flow Editor.[2] Enter the required **test input data** (the Payload) as JSON or plain text, simulating the trigger event.[2] Hit **Run Test** to simulate the full execution, showing real-time progress and immediately identifying any node errors with a red ❌ status.[2]"
    on_screen_text:
      - "Click the Debug Button to start test"
      - "Enter test payload (JSON or Text)"
      - "View real-time progress"
      - "Identify errors (❌) immediately"
    action_visual_cue: "Zoom in on the Debug Button and show the test input payload being entered before hitting 'Run Test'."
  - step_number: 7
    step_title: "Deploying Your Project"
    narrator_script: "After testing, click on any node to inspect detailed outputs, execution time, and crucially, the **Token usage breakdown** for cost optimization.[2] Once verified, navigate to the **Deployments** section in the Studio to transition the project to production.[1] Initiate deployment, leveraging Lamatic.ai’s **Edge Deployments** for high performance and integrating your flow via the **GraphQL API** or embeddable **Chat/Search Widgets**.[1]"
    on_screen_text:
      - "Inspect Token Usage for Cost Optimization"
      - "Navigate to Deployments Section"
      - "Utilize Edge Deployments"
      - "Integrate via GraphQL API / Widgets"
    action_visual_cue: "Transition from the Debug panel (showing token usage) to the Deployments section, clicking the 'Deploy' button."
  - step_number: 8
    step_title: "Tutorial Complete!"
    narrator_script: "Congratulations on building and deploying your first flow! You have successfully navigated the Lamatic Studio, configured your action nodes, and verified the output using the debugging tools. You are now ready to proceed to the next tutorial to deepen your understanding of flow triggers and advanced logic nodes."
    on_screen_text:
      - "Flow Successfully Tested and Deployed"
      - "Next: Flow Triggers and Logic Nodes"
      - "Continue Your Learning Journey"
    action_visual_cue: "Display an encouraging completion screen with a link or button to the next tutorial module."
---