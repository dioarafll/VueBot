<template>
  <div class="test-container">
    <!-- Header -->
    <h1 class="text-white text-2xl mb-4">
      Prism.js & Markdown Test with Typewriter Effect
    </h1>

    <!-- Typewriter Effect (Using Typed.js) -->
    <div ref="typedText" class="typed-text"></div>
  </div>
</template>

<script>
import { marked } from 'marked';
import prism from 'prismjs';
import Typed from 'typed.js'; // Import Typed.js

// Import Prism.js plugins and default theme
import 'prismjs/themes/prism.css'; // Default Prism.js theme
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
import 'prismjs/plugins/show-language/prism-show-language.js';
import 'prismjs/components/prism-javascript.min.js';
//import "prismjs/components/prism-html.min.js";

export default {
  name: 'Test',
  data() {
    return {
      markdownContent: `
# Markdown Test
This is a **test** of rendering Markdown and highlighting code with Prism.js.

## Features
- **Markdown Rendering** with \`marked.parse\`
- **Syntax Highlighting** with Prism.js
- **Typewriter Effect**

## Code Example (JavaScript)
\`\`\`javascript
const greet = () => {
  console.log("Hello, World!");
};
greet();
\`\`\`

## Code Example (HTML)
\`\`\`html
<div class="example">
  <p>This is a simple HTML example.</p>
</div>
\`\`\`
      `,
      formattedMarkdown: '', // Will store the formatted Markdown content
    };
  },
  methods: {
    // Parse and highlight Markdown content
    formatMarkdownContent() {
      // Parse Markdown content
      const rawHTML = marked.parse(this.markdownContent);

      // Highlight code blocks using Prism.js
      const container = document.createElement('div');
      container.innerHTML = rawHTML;
      const codeBlocks = container.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        const language = block.className.replace('language-', '');
        const highlighted = prism.highlight(
          block.textContent,
          prism.languages[language] || prism.languages.markup,
          language,
        );
        block.innerHTML = highlighted;
        block.classList.add('custom-pre-code'); // Add custom class for styling
      });

      // Return formatted HTML
      return container.innerHTML;
    },
  },
  mounted() {
    // Format and prepare Markdown content for Typed.js
    this.formattedMarkdown = this.formatMarkdownContent();

    // Initialize Typed.js with the formatted Markdown content
    new Typed(this.$refs.typedText, {
      strings: [this.formattedMarkdown], // Input formatted Markdown for typewriter effect
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before starting the typing effect
      loop: false, // Set to true if you want the typing effect to loop
      contentType: 'html', // Ensure that HTML is rendered inside the typed text
    });
  },
};
</script>

<style scoped>
.test-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
}

.typed-text {
  white-space: pre-wrap; /* Allow the text to wrap */
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  line-height: 1.5;
}

/* Custom class for <pre><code> to apply default Prism.js styling */
.custom-pre-code {
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem; /* Tailwind's text-sm */
}

/* Additional styling for line numbers and toolbar */
.line-numbers {
  padding-left: 3rem; /* Adjust padding for line numbers */
}

.prism-toolbar {
  background-color: #2d3748; /* Match the pre code background */
  color: #cbd5e0; /* Lighter text for toolbar */
}

.prism-number {
  color: #718096; /* Gray for line numbers */
}
</style>
