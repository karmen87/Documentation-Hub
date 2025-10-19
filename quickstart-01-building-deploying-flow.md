---
title: "Quickstart: Building and Deploying Your First Flow"
description: "A step-by-step guide to creating, testing, and deploying your first GenAI workflow using the Lamatic Studio Flow Editor."
layout: tutorial_slide
tutorial_number: 1
---

## Step 1: Accessing Lamatic Studio and Initiating a New Flow

> Begin the process by navigating to the Lamatic.ai Studio, the designated platform for managing, building, and deploying all GenAI projects.[1] Within the Studio, access the **Flow Management** section. Click the option labeled **"Create a New Flow"** to initiate the graphical workflow building process.[1] The Studio is the primary Visual Layer interface, allowing both technical and non-technical developers to configure the system and define the sequence of operations for their project.[1]

* Central Platform: Lamatic Studio
* Navigate to Flow Management
* Click "Create a New Flow"

**ACTION_VISUAL_CUE:** Navigate to the Studio dashboard and highlight the "Flow Management" link.

## Step 2: Selecting a Pre-built Use Case or Template

> To accelerate development, Lamatic.ai recommends utilizing a pre-built structure that provides immediate consistency and best practices for common applications.[1] Choose a pre-built Use Case or select a Template that corresponds to your initial project requirements. This selection automatically establishes a foundational flow structure, saving time during setup.[1] If a template is not used, the first component required is a **Trigger Node**, which can be configured as an Event Trigger (one-time) or a Batch Trigger (data-based multiple executions).[2]

* Choose Template or Use Case
* Accelerates Development
* Establishes Foundational Flow Structure

**ACTION_VISUAL_CUE:** Show the Template Gallery overlay and selection of a Quickstart template.

## Step 3: Adding and Configuring Sequential Action Nodes

> Expand the flow by adding **Action Nodes**—the components that process and transform data—in a meaningful sequence.[2] Within the Flow Editor, locate the **➕ icon** that appears in empty spaces or when hovering over connecting lines. Click the icon to bring up the node selection menu, then choose the required node type (e.g., AI, App, Data, or Logic nodes).[3] The physical order of nodes is crucial. Arrange nodes sequentially and use drag-and-hold to reorder them as needed, ensuring data continuity because the position determines a node’s ability to access **upstream variables**.[3]

* Add Action Nodes (Process Data)
* Click the **➕ icon** to Select Node
* Order is Crucial for Data (Upstream Variables)

**ACTION_VISUAL_CUE:** Demonstrate clicking the **➕** icon and adding a new "Generate Text" AI Node.

## Step 4: Defining Required Inputs and Customizing Node Fields

> Personalize the functionality of each newly added node by configuring its specific operational settings.[3] **Click on the node** within the flow editor to select it. The configuration panel will instantly appear on the **right side** of the screen.[3] Populate the necessary fields for input parameters and customize output options. These configuration changes are applied and stored **automatically in real-time** within the Flow Editor.[1, 3]

* Click Node to Select
* Configuration Panel Appears (Right Side)
* Define Input Parameters
* Changes Apply Automatically

**ACTION_VISUAL_CUE:** Click the newly added node and show the right configuration panel opening, highlighting a field being populated.

## Step 5: Preparing and Running the Flow Test Payload

> Execute a validation test to verify that the flow’s logic and sequence operate correctly from end to end before deployment.[1, 2] Navigate to the Flow Editor and click the **Debug Button**, typically located in the bottom right corner. Provide the required **test input data** (the Payload), which can be entered as either JSON or plain text, simulating the required trigger input.[2] Hit the **"Run Test"** button. This action simulates the full, sequential execution of the flow using the input provided, allowing for real-time progress tracking.[2]

* Locate the Debug Button (Bottom Right)
* Provide Test Payload (JSON or Text)
* Click "Run Test" to Simulate Execution

**ACTION_VISUAL_CUE:** Zoom in on the Debug Button and the input modal, showing sample text being entered.

## Step 6: Inspecting Debug Results and Validating Node Output

> Utilize Debug Mode to perform granular diagnosis of the flow’s execution, tracking data flow and pinpointing potential issues.[2] After the test runs, review the output. Click on any node within the flow visualization to inspect detailed information, including **Input received, Output generated, Execution time, Error messages**, and a **Token usage breakdown**.[2] Analyzing the estimated token cost per test run provides a valuable metric, encouraging optimization and iteration to ensure the flow is not only functionally reliable but also operationally efficient and cost-effective.[2]

* Click Node for Detailed Inspection
* View Input, Output, and Errors
* Review **Token Usage Breakdown**
* Optimize for Cost Efficiency

**ACTION_VISUAL_CUE:** Show the debug overlay after a run, highlighting the inspection details for a node, especially the token usage metric.

## Step 7: Deploying the Project to Production

> Once the flow has been thoroughly tested, verified, and optimized, the final step is to transition the project from the development environment to a live, production deployment.[1] Navigate to the **Deployments** section in the Studio. Initiate the deployment process. Lamatic.ai enables **Edge Deployments** to manage agents and flows for high-performance live operation.[1] Deployed flows can be accessed and integrated into applications using the **GraphQL API, Webhooks**, or embedded directly via the customizable **Chat and Search Widgets**.[1]

* Navigate to Deployments Section
* Initiate Production Deployment
* Use Edge Deployments for Performance
* Access via GraphQL API / Widgets

**ACTION_VISUAL_CUE:** Transition from the Flow Editor to the Deployments section and show the "Deploy" button being clicked.