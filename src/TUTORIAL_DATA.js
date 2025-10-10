
export const TUTORIAL_DATA = [
  {
    id: 1,
    title: "Getting Started with Lamatic.ai",
    description: "A beginner's guide to creating your first workflow, understanding the Flow Editor, and running a basic test.",
    steps: [
      {
        step_id: 1,
        header: "Create a New Project",
        default_text: "First, log into your Lamatic.ai dashboard. Create a new project to house your workflows. Give it a memorable name like 'My First Project'. This project will contain all the Flows, Vector Stores, and API keys related to your work.",
        simplified_text: "Log in and create a new project from your dashboard. Name it 'My First Project'."
      },
      {
        step_id: 2,
        header: "Navigate to the Flow Editor",
        default_text: "Inside your new project, click the 'Create Flow' button. This will launch the Flow Editor, a visual canvas where you can build AI workflows by connecting different Nodes.",
        simplified_text: "In your project, click 'Create Flow' to open the visual Flow Editor."
      },
      {
        step_id: 3,
        header: "Add a Trigger Node",
        default_text: "Every Flow starts with a Trigger. From the Nodes panel, drag an 'API Trigger' Node onto the canvas. This allows you to start the workflow by sending a request to a unique URL.",
        simplified_text: "Drag an 'API Trigger' Node onto the canvas. This will be your Flow's starting point."
      },
      {
        step_id: 4,
        header: "Add a Generate Text Node",
        default_text: "Next, add an AI Node. Drag a 'Generate Text' Node onto the canvas. This Node uses a Large Language Model (LLM) to generate text based on a prompt you provide.",
        simplified_text: "Add a 'Generate Text' Node to the canvas to perform an AI text generation task."
      },
      {
        step_id: 5,
        header: "Configure the Prompt",
        default_text: "Click on the 'Generate Text' Node to open its settings. In the 'Prompt' field, enter a simple instruction, like 'Tell me a fun fact about space'. You can also select the AI model you wish to use.",
        simplified_text: "In the 'Generate Text' Node settings, enter a prompt, such as 'Tell me a fun fact about space'."
      },
      {
        step_id: 6,
        header: "Connect the Nodes",
        default_text: "Connect the Nodes to define the data flow. Click the output handle of the 'API Trigger' Node and drag the connector to the input handle of the 'Generate Text' Node. This tells Lamatic.ai to execute the text generation after the trigger is activated.",
        simplified_text: "Click and drag from the output of the Trigger Node to the input of the Generate Text Node to connect them."
      },
      {
        step_id: 7,
        header: "Test Your Workflow",
        default_text: "Save and run your Flow. Use the provided API endpoint from the Trigger Node to send a test request. The Flow logs will show the generated text from the LLM, completing your first workflow.",
        simplified_text: "Save the Flow, then send a test request to the API Trigger's URL to see the AI-generated output."
      }
    ]
  },
  {
    id: 2,
    title: "Prompt Engineering for AI Flows",
    description: "Learn to create powerful and precise prompts using system roles, user inputs, and dynamic variables.",
    steps: [
      {
        step_id: 1,
        header: "Understanding Prompt Structure",
        default_text: "In a 'Generate Text' Node, prompts are typically structured with a System Role and a User Role. The System Role defines the AI's persona or high-level instruction, while the User Role provides the specific task or question.",
        simplified_text: "Prompts have two parts: a System Role (AI's persona) and a User Role (your specific question)."
      },
      {
        step_id: 2,
        header: "Setting the System Role",
        default_text: "In the 'Generate Text' Node's configuration, set the 'System Role' to define the AI's behavior. For example: 'You are a helpful assistant who speaks like a pirate.' This instruction will guide the tone of all future responses.",
        simplified_text: "Set the 'System Role' to define the AI's personality, like 'You are a helpful pirate assistant.'"
      },
      {
        step_id: 3,
        header: "Using Input Variables",
        default_text: "To make your prompts dynamic, use variables from incoming data. In your 'API Trigger' Node, define a JSON input with a key like 'topic'. You can then reference this in your prompt using '{{input.topic}}'.",
        simplified_text: "Use variables like '{{input.topic}}' in your prompt to insert data from a Trigger Node dynamically."
      },
      {
        step_id: 4,
        header: "Crafting a Dynamic User Prompt",
        default_text: "Combine static text and variables in the 'User Role' field. For example: 'Write a short poem about {{input.topic}}.' When the Flow runs, the variable will be replaced with the actual data from the trigger.",
        simplified_text: "Combine text and variables in the 'User Role' field, like: 'Write a poem about {{input.topic}}'."
      },
      {
        step_id: 5,
        header: "Adding Examples (Few-Shot Prompting)",
        default_text: "Improve accuracy by providing examples directly in the prompt. Before your user question, you can add a section like 'Example: Q: What is the capital of France? A: Paris.' This technique, known as few-shot prompting, guides the model's output format.",
        simplified_text: "Add examples in your prompt (few-shot prompting) to guide the AI's response format and style."
      },
      {
        step_id: 6,
        header: "Testing with Different Inputs",
        default_text: "Use the 'Test Flow' feature to send different JSON payloads to your API Trigger. Observe how the 'Generate Text' Node uses the variables to produce different outputs, allowing you to refine your prompt for robustness.",
        simplified_text: "Test your Flow with different inputs to see how the dynamic prompt works and refine it as needed."
      }
    ]
  },
  {
    id: 3,
    title: "Building a Basic LLM Chatbot",
    description: "Create a simple conversational chatbot that remembers previous messages using a Memory Node.",
    steps: [
      {
        step_id: 1,
        header: "Set Up the API Trigger",
        default_text: "Start a new Flow with an 'API Trigger'. Configure it to accept a JSON input with two keys: 'session_id' to identify the user session, and 'user_message' for the user's input.",
        simplified_text: "Add an 'API Trigger' that accepts a 'session_id' and a 'user_message'."
      },
      {
        step_id: 2,
        header: "Retrieve Chat History",
        default_text: "Add a 'Memory Retrieve' Node from the Data Nodes panel. Configure it with the '{{input.session_id}}'. This Node will fetch the past conversation associated with the current user.",
        simplified_text: "Use a 'Memory Retrieve' Node to get past messages using the 'session_id'."
      },
      {
        step_id: 3,
        header: "Configure the Generate Text Node",
        default_text: "Add a 'Generate Text' Node. In the prompt, use the output from the Memory Node to provide context. For example: 'Previous conversation: {{memory.history}}. User question: {{input.user_message}}'.",
        simplified_text: "In a 'Generate Text' Node, add the memory history and the new user message to the prompt."
      },
      {
        step_id: 4,
        header: "Connect the Nodes",
        default_text: "Connect the 'API Trigger' to the 'Memory Retrieve' Node. Then, connect both the 'Memory Retrieve' and 'API Trigger' Nodes to the 'Generate Text' Node to ensure it has access to both history and the new message.",
        simplified_text: "Connect Trigger to Memory Retrieve, then connect both of them to the Generate Text Node."
      },
      {
        step_id: 5,
        header: "Add to Memory",
        default_text: "Add a 'Memory Add' Node. This Node will save the latest user message and the AI's response back to the chat history. Configure it to use the same '{{input.session_id}}'.",
        simplified_text: "Use a 'Memory Add' Node to save the new user message and AI response to the history."
      },
      {
        step_id: 6,
        header: "Connect Memory Add Node",
        default_text: "Connect the 'Generate Text' Node (for the AI response) and the 'API Trigger' (for the user message) to the 'Memory Add' Node. This ensures the full exchange is saved.",
        simplified_text: "Connect the Generate Text and API Trigger outputs to the 'Memory Add' Node."
      },
      {
        step_id: 7,
        header: "Create an Output",
        default_text: "Finally, add an 'Output' Node and connect the 'Generate Text' Node to it. This will return the AI's response. When you test the Flow, you'll see the chatbot respond while maintaining conversation context.",
        simplified_text: "Connect the 'Generate Text' Node to an 'Output' Node to return the AI's response."
      }
    ]
  },
  {
    id: 4,
    title: "Implementing RAG for Knowledge Retrieval",
    description: "Enhance an LLM by connecting it to a knowledge base using a Vector Store and a RAG Node.",
    steps: [
      {
        step_id: 1,
        header: "Create a Vector Store",
        default_text: "From the main dashboard, navigate to 'Vector Stores' and create a new one. Lamatic.ai uses a managed Weaviate instance. This will be the knowledge base for your AI.",
        simplified_text: "Go to 'Vector Stores' on your dashboard and create a new one to act as your knowledge base."
      },
      {
        step_id: 2,
        header: "Upload and Chunk Documents",
        default_text: "Create a new Flow. Use an 'Extract from File' Node to upload your documents (like PDFs or text files). Connect it to a 'Chunking' Node to break the large documents into smaller, manageable pieces for vectorization.",
        simplified_text: "In a new Flow, use 'Extract from File' and 'Chunking' Nodes to process your documents."
      },
      {
        step_id: 3,
        header: "Vectorize and Index Data",
        default_text: "Connect the 'Chunking' Node to a 'Vectorize' Node to convert the text chunks into semantic vector embeddings. Then, connect the 'Vectorize' Node to an 'Index' Node, configured to write the vectors to the Vector Store you created.",
        simplified_text: "Connect a 'Vectorize' Node and then an 'Index' Node to convert and save your data to the Vector Store."
      },
      {
        step_id: 4,
        header: "Set Up the RAG Flow",
        default_text: "Create a second Flow for querying. Add an 'API Trigger' that accepts a 'query' string. This will be the user's question.",
        simplified_text: "Create a new Flow with an 'API Trigger' that accepts a user 'query'."
      },
      {
        step_id: 5,
        header: "Add the RAG Node",
        default_text: "Add a 'RAG' Node from the AI Nodes panel. This powerful Node combines retrieval and generation. Connect your 'API Trigger' to the RAG Node's query input.",
        simplified_text: "Add an 'RAG' Node and connect the trigger's query output to its query input."
      },
      {
        step_id: 6,
        header: "Configure the RAG Node",
        default_text: "In the RAG Node settings, select the Vector Store you created earlier. Choose an embedding model for the query and a generative model (LLM) for the final answer. The Node will handle searching the Vector Store and generating a context-aware response.",
        simplified_text: "Configure the 'RAG' Node by selecting your Vector Store and choosing the desired AI models."
      },
      {
        step_id: 7,
        header: "Test the Knowledge Retrieval",
        default_text: "Connect the 'RAG' Node to an 'Output' Node. Run a test by sending a question related to your documents to the API Trigger. The output will be an answer generated by the LLM, using the retrieved context.",
        simplified_text: "Connect an 'Output' Node and test by asking a question related to your uploaded documents."
      }
    ]
  },
  {
    id: 5,
    title: "Creating an AI Review Responder",
    description: "Automate responses to customer reviews by pulling data from a Google Sheet or external API.",
    steps: [
      {
        step_id: 1,
        header: "Set Up a Trigger",
        default_text: "You can start this Flow with a 'Webhook Trigger' to receive data from a service like Zapier when a new review is posted, or a 'Scheduler' Trigger to run periodically.",
        simplified_text: "Start your Flow with a 'Webhook Trigger' or a 'Scheduler' to check for new reviews."
      },
      {
        step_id: 2,
        header: "Fetch Review Data",
        default_text: "Add a 'Google Sheets' App Node or a generic 'API' Node. Configure it to fetch the latest customer reviews. For a sheet, specify the spreadsheet and range. For an API, provide the endpoint URL and any necessary authentication.",
        simplified_text: "Use a 'Google Sheets' or 'API' Node to get the latest customer reviews."
      },
      {
        step_id: 3,
        header: "Add a Loop Node",
        default_text: "Since you might get multiple reviews at once, connect a 'Loop' Logic Node. This will process each review fetched from the previous step one by one.",
        simplified_text: "Add a 'Loop' Node to process each review individually."
      },
      {
        step_id: 4,
        header: "Generate a Draft Response",
        default_text: "Inside the loop, add a 'Generate Text' Node. Craft a prompt that uses the review data. For example: 'Write a professional and empathetic response to this customer review: {{loop.item.text}}'.",
        simplified_text: "In the loop, use a 'Generate Text' Node with a prompt to draft a response to each review."
      },
      {
        step_id: 5,
        header: "Implement a Human-in-the-Loop (Optional)",
        default_text: "For quality control, you can add a 'Send Email' or 'Slack Message' Node to send the drafted response to a team member for approval before it's sent to the customer.",
        simplified_text: "Optionally, send the AI-drafted response to a human for approval using an email or Slack Node."
      },
      {
        step_id: 6,
        header: "Post the Response",
        default_text: "Add another 'API' Node configured to post the generated response back to the review platform. This completes the automation loop, from fetching the review to posting the reply.",
        simplified_text: "Use another 'API' Node to post the final response back to the review platform."
      }
    ]
  },
  {
    id: 6,
    title: "Generating Image Descriptions with Multimodal AI",
    description: "Use a Multimodal AI Node to analyze an image and generate a rich, descriptive caption.",
    steps: [
      {
        step_id: 1,
        header: "Start with an API Trigger",
        default_text: "Create a new Flow and add an 'API Trigger'. Configure its input to accept a URL for an image, for example, using a key named 'image_url'.",
        simplified_text: "Add an 'API Trigger' that accepts an 'image_url' as input."
      },
      {
        step_id: 2,
        header: "Add the Multimodal Node",
        default_text: "From the AI Nodes panel, drag a 'Multimodal' Node onto the canvas. This type of Node can process both text and image inputs simultaneously.",
        simplified_text: "Drag a 'Multimodal' Node from the AI Nodes panel onto your canvas."
      },
      {
        step_id: 3,
        header: "Configure the Image Input",
        default_text: "In the Multimodal Node's settings, map the 'Image' field to the input from your trigger using the variable '{{input.image_url}}'. This tells the Node where to find the image to analyze.",
        simplified_text: "In the Node's settings, connect the 'Image' field to the '{{input.image_url}}' variable."
      },
      {
        step_id: 4,
        header: "Write the Text Prompt",
        default_text: "In the 'Prompt' field of the same Node, enter the instruction for the AI. For example: 'Describe this image in detail for a visually impaired user.'",
        simplified_text: "In the 'Prompt' field, ask the AI to perform a task, like 'Describe this image in detail.'"
      },
      {
        step_id: 5,
        header: "Connect Trigger to Multimodal Node",
        default_text: "Draw a connection from the output of your 'API Trigger' to the input of the 'Multimodal' Node. This ensures the image URL is passed correctly when the Flow runs.",
        simplified_text: "Connect the Trigger Node to the Multimodal Node."
      },
      {
        step_id: 6,
        header: "Output the Description",
        default_text: "Connect the output of the 'Multimodal' Node to an 'Output' Node. When you test the Flow with an image URL, the AI will generate and return a detailed text description of the image content.",
        simplified_text: "Connect the Multimodal Node to an 'Output' Node and test with an image URL to get the description."
      }
    ]
  },
  {
    id: 7,
    title: "Automated Product Identification from Images",
    description: "Build a workflow that takes an image, identifies products, and outputs structured JSON data.",
    steps: [
      {
        step_id: 1,
        header: "Set Up an Image Input",
        default_text: "Begin a new Flow with an 'API Trigger' configured to accept an image URL. This allows you to send product images to your workflow for processing.",
        simplified_text: "Start a new Flow with an 'API Trigger' that accepts an image URL."
      },
      {
        step_id: 2,
        header: "Use a Multimodal Node for Vision",
        default_text: "Add a 'Multimodal' AI Node. Connect the image URL from the trigger to the Node's image input field. This Node will perform the visual analysis.",
        simplified_text: "Add a 'Multimodal' Node and connect the image URL from the trigger to it."
      },
      {
        step_id: 3,
        header: "Instruct the AI to Identify Products",
        default_text: "In the 'Prompt' field of the Multimodal Node, give a clear instruction, such as: 'Identify the main product in this image. Provide its name, estimated price, and a short description.'",
        simplified_text: "In the Multimodal Node's prompt, ask the AI to identify the product and list its attributes."
      },
      {
        step_id: 4,
        header: "Add a Generate JSON Node",
        default_text: "To get structured data, add a 'Generate JSON' AI Node. This Node is specialized in converting unstructured text into a clean JSON format based on a schema you define.",
        simplified_text: "Add a 'Generate JSON' Node to convert the AI's text output into a structured JSON object."
      },
      {
        step_id: 5,
        header: "Define the JSON Schema",
        default_text: "In the 'Generate JSON' Node, define the desired output structure. For example, create a schema with fields like 'productName' (string), 'estimatedPrice' (number), and 'description' (string).",
        simplified_text: "In the JSON Node, define your desired output schema with fields like 'productName' and 'price'."
      },
      {
        step_id: 6,
        header: "Connect and Process",
        default_text: "Connect the text output of the 'Multimodal' Node to the input of the 'Generate JSON' Node. The JSON Node will then transform the freeform description into the structured format you defined.",
        simplified_text: "Connect the Multimodal Node's output to the Generate JSON Node's input."
      },
      {
        step_id: 7,
        header: "Output the Structured Data",
        default_text: "Connect the 'Generate JSON' Node to an 'Output' Node. When you test the workflow with a product image, the final result will be a clean JSON object, perfect for integrating with other systems.",
        simplified_text: "Connect to an 'Output' Node. Testing will now yield structured JSON data identifying the product."
      }
    ]
  },
  {
    id: 8,
    title: "Building a Web Scraping Q&A System",
    description: "Scrape a website to build a knowledge base, then use RAG to answer questions about its content.",
    steps: [
      {
        step_id: 1,
        header: "Create a Vector Store",
        default_text: "First, create a new 'Vector Store' from your Lamatic.ai dashboard. This is where you will store the scraped website content for retrieval.",
        simplified_text: "From your dashboard, create a new Vector Store."
      },
      {
        step_id: 2,
        header: "Build the Scraping Flow",
        default_text: "Create a new Flow. Add a 'Crawler' Node and provide the starting URL of the website you want to scrape. This Node will follow links and collect page URLs.",
        simplified_text: "In a new Flow, add a 'Crawler' Node and give it the website's starting URL."
      },
      {
        step_id: 3,
        header: "Scrape Content and Index It",
        default_text: "Connect the 'Crawler' Node to a 'Scraper' Node to extract the main content from each page. Then, chain 'Chunking', 'Vectorize', and 'Index' Nodes to process the text and load it into your Vector Store.",
        simplified_text: "Connect Scraper, Chunking, Vectorize, and Index Nodes to extract and store the website content."
      },
      {
        step_id: 4,
        header: "Run the Indexing Flow",
        default_text: "Run this first Flow to populate your Vector Store. You only need to do this once, or whenever the website content changes significantly.",
        simplified_text: "Run the Flow to populate your Vector Store with the website's content."
      },
      {
        step_id: 5,
        header: "Create the Q&A Flow",
        default_text: "Create a second Flow with an 'API Trigger' that accepts a user 'question'. This Flow will handle the user interaction.",
        simplified_text: "Create a new Flow with an API Trigger to accept a user's 'question'."
      },
      {
        step_id: 6,
        header: "Use the RAG Node",
        default_text: "Add a 'RAG' Node. Configure it to use your populated Vector Store. Connect the user's question from the trigger to the RAG Node's 'Query' input.",
        simplified_text: "Add and configure a 'RAG' Node, connecting the user's question to its 'Query' input."
      },
      {
        step_id: 7,
        header: "Generate and Test the Answer",
        default_text: "Connect the 'RAG' Node's output to an 'Output' Node. When you send a question to the API Trigger, the RAG Node will search the scraped content and generate a relevant answer.",
        simplified_text: "Connect an 'Output' Node and test by sending a question about the scraped website."
      }
    ]
  },
  {
    id: 9,
    title: "Creating a Real-time AI Currency Converter",
    description: "Use an API Node to fetch live exchange rates and a Code Node to perform the conversion.",
    steps: [
      {
        step_id: 1,
        header: "Set Up the Trigger",
        default_text: "Start a new Flow with an 'API Trigger'. Configure it to accept 'amount' (number), 'from_currency' (string), and 'to_currency' (string) as inputs.",
        simplified_text: "Add an 'API Trigger' that accepts an amount, a from currency, and a to currency."
      },
      {
        step_id: 2,
        header: "Add an API Node for Exchange Rates",
        default_text: "Add an 'API' Node to fetch real-time exchange rates. Use a free currency exchange API and configure the URL to dynamically use the 'from_currency' input, like 'https://api.exchangerate-api.com/v4/latest/{{input.from_currency}}'.",
        simplified_text: "Use an 'API' Node to call a currency exchange API, using the 'from_currency' as a variable."
      },
      {
        step_id: 3,
        header: "Add a Code Node for Calculation",
        default_text: "Add a 'Code' Logic Node. This Node lets you run custom JavaScript or Python code to perform operations that other Nodes can't handle.",
        simplified_text: "Add a 'Code' Node to run custom JavaScript or Python for the conversion logic."
      },
      {
        step_id: 4,
        header: "Write the Conversion Logic",
        default_text: "In the Code Node, write a script to perform the calculation. Access the data from previous nodes, find the correct exchange rate, multiply it by the amount, and return the result. For example: `return { converted_amount: amount * rate };`",
        simplified_text: "In the Code Node, write a script to multiply the input amount by the fetched exchange rate."
      },
      {
        step_id: 5,
        header: "Connect Nodes to the Code Node",
        default_text: "Connect both the 'API Trigger' (for the amount) and the 'API' Node (for the rates) to the 'Code' Node so your script can access all the necessary data.",
        simplified_text: "Connect the Trigger and the API Node to the Code Node to provide the necessary inputs."
      },
      {
        step_id: 6,
        header: "Generate a User-Friendly Response",
        default_text: "Add a 'Generate Text' Node. Use the output from the Code Node in a prompt like: 'The converted amount is {{code_output.converted_amount}} {{input.to_currency}}.' This creates a natural language response.",
        simplified_text: "Use a 'Generate Text' Node to format the calculated amount into a friendly sentence."
      },
      {
        step_id: 7,
        header: "Output the Result",
        default_text: "Connect the 'Generate Text' Node to an 'Output' Node. Testing the Flow will now return a complete sentence with the accurately converted currency amount.",
        simplified_text: "Connect to an 'Output' Node to return the final, user-friendly conversion result."
      }
    ]
  },
  {
    id: 10,
    title: "Developing an AI Email Summarizer",
    description: "Connect to a Gmail account using an App Node and use an LLM to summarize new emails.",
    steps: [
      {
        step_id: 1,
        header: "Use a Scheduler or Webhook Trigger",
        default_text: "Start your Flow with a 'Scheduler' to check for emails every 15 minutes, or use a 'Webhook' Trigger if your email service supports it for real-time updates.",
        simplified_text: "Use a 'Scheduler' or 'Webhook' Trigger to start the Flow when a new email arrives."
      },
      {
        step_id: 2,
        header: "Add the Gmail App Node",
        default_text: "From the App Nodes panel, add a 'Gmail' Node. Authenticate it with your Google account. Configure it to 'Search Emails' with a query like 'is:unread' to fetch only new emails.",
        simplified_text: "Add and authenticate a 'Gmail' App Node, configuring it to search for unread emails."
      },
      {
        step_id: 3,
        header: "Loop Through Each Email",
        default_text: "Connect the 'Gmail' Node to a 'Loop' Node. This will allow your workflow to process each new email individually.",
        simplified_text: "Add a 'Loop' Node to process each fetched email one by one."
      },
      {
        step_id: 4,
        header: "Add a Generate Text Node",
        default_text: "Inside the loop, add a 'Generate Text' Node. This will perform the summarization. The prompt should reference the email body from the loop item: 'Summarize the following email in three key bullet points: {{loop.item.body}}'.",
        simplified_text: "In the loop, use a 'Generate Text' Node to summarize the body of each email."
      },
      {
        step_id: 5,
        header: "Send the Summary to Slack",
        default_text: "Add a 'Slack' App Node. Configure it to send a direct message or a channel message. Use the output from the 'Generate Text' Node as the message content.",
        simplified_text: "Use a 'Slack' App Node to send the generated summary as a message."
      },
      {
        step_id: 6,
        header: "Mark Email as Read",
        default_text: "Add another 'Gmail' App Node at the end of the loop. Configure its action to 'Mark as Read', using the 'message_id' from the loop item. This prevents the email from being processed again.",
        simplified_text: "Add another 'Gmail' Node to mark the processed email as read to avoid duplicates."
      }
    ]
  },
  {
    id: 11,
    title: "Automating Invoice Summarization to JSON",
    description: "Extract data from PDF invoices using the 'Extract from File' Node and structure it with the 'Generate JSON' Node.",
    steps: [
      {
        step_id: 1,
        header: "Trigger with a File Input",
        default_text: "Start your Flow with an 'API Trigger' configured to accept a file upload. This will allow you to send PDF invoices for processing.",
        simplified_text: "Use an 'API Trigger' configured to accept file uploads."
      },
      {
        step_id: 2,
        header: "Extract Text from PDF",
        default_text: "Add an 'Extract from File' Data Node. Connect the file input from the trigger to this Node. It will automatically perform Optical Character Recognition (OCR) to extract the raw text from the PDF.",
        simplified_text: "Use the 'Extract from File' Node to get the raw text from the uploaded PDF invoice."
      },
      {
        step_id: 3,
        header: "Add the Generate JSON Node",
        default_text: "Add a 'Generate JSON' AI Node. This is the key to creating structured data. Connect the text output from the 'Extract from File' Node to its input.",
        simplified_text: "Add a 'Generate JSON' Node and connect the extracted text to its input."
      },
      {
        step_id: 4,
        header: "Define Your Invoice Schema",
        default_text: "In the 'Generate JSON' Node settings, define the JSON schema you want to extract. Include fields like 'invoice_number' (string), 'total_amount' (number), 'due_date' (string), and an array for 'line_items'.",
        simplified_text: "Define the desired JSON structure with fields like 'invoice_number', 'total_amount', and 'due_date'."
      },
      {
        step_id: 5,
        header: "Provide a Prompt (Optional but Recommended)",
        default_text: "In the 'Prompt' field, you can guide the model. An example prompt would be: 'Extract the key details from the following invoice text and format it according to the provided JSON schema.'",
        simplified_text: "Add a simple prompt to guide the AI, like 'Extract invoice details into the JSON schema.'"
      },
      {
        step_id: 6,
        header: "Output the Structured JSON",
        default_text: "Connect the 'Generate JSON' Node to an 'Output' Node. When you test the Flow by uploading a PDF invoice, the result will be a clean, structured JSON object containing the extracted invoice data.",
        simplified_text: "Connect an 'Output' Node. Testing with a PDF will now return structured JSON data."
      }
    ]
  },
  {
    id: 12,
    title: "Designing an Agentic Blog Writer Workflow",
    description: "Create a sophisticated writing agent using a Supervisor Agent that manages multiple sub-agent Flows.",
    steps: [
      {
        step_id: 1,
        header: "Create Sub-Agent Flows First",
        default_text: "First, create two separate, smaller Flows. One named 'ResearchAgent' that takes a topic and uses a 'Web Search' Node to find information. The second, 'WritingAgent', takes research notes and uses 'Generate Text' to write a blog post.",
        simplified_text: "Create two separate Flows: a 'ResearchAgent' for web searches and a 'WritingAgent' to write content."
      },
      {
        step_id: 2,
        header: "Design the Main Supervisor Flow",
        default_text: "Now, create a new, main Flow. This will contain the master agent. Add an 'API Trigger' that accepts a 'blog_topic' as input.",
        simplified_text: "Create a new main Flow with an 'API Trigger' that accepts a 'blog_topic'."
      },
      {
        step_id: 3,
        header: "Add the Supervisor Agent Node",
        default_text: "Add a 'Supervisor Agent' Node. This special Logic Node can orchestrate other Flows (sub-agents) and manage the state between them.",
        simplified_text: "Add a 'Supervisor Agent' Node to orchestrate your other sub-agent Flows."
      },
      {
        step_id: 4,
        header: "Configure the Supervisor's Prompt",
        default_text: "In the Supervisor's prompt, define the overall goal and the tools (sub-agents) it has available. For example: 'Your goal is to write a blog post. You can use the ResearchAgent to find information and the WritingAgent to draft the content.'",
        simplified_text: "Prompt the Supervisor with the main goal and list the sub-agents it can use as tools."
      },
      {
        step_id: 5,
        header: "Register Sub-Agents as Tools",
        default_text: "In the Supervisor Node's settings, there is a section to register other Flows as tools. Add your 'ResearchAgent' and 'WritingAgent' Flows here. The Supervisor will now be able to call them.",
        simplified_text: "In the Supervisor's settings, register the 'ResearchAgent' and 'WritingAgent' Flows as available tools."
      },
      {
        step_id: 6,
        header: "Connect and Run",
        default_text: "Connect the 'API Trigger' to the 'Supervisor Agent' Node, passing the 'blog_topic'. Connect the Supervisor's final output to an 'Output' Node.",
        simplified_text: "Connect the Trigger to the Supervisor, and the Supervisor to an Output Node."
      },
      {
        step_id: 7,
        header: "Observe the Agentic Behavior",
        default_text: "When you run the Flow, the logs will show the Supervisor first calling the ResearchAgent with the topic, then feeding the research results to the WritingAgent, and finally returning the completed blog post. This demonstrates an autonomous, multi-step workflow.",
        simplified_text: "Run the Flow and watch the logs to see the Supervisor coordinate the research and writing agents automatically."
      }
    ]
  }
];
