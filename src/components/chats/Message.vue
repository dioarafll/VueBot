<template>
  <div
    :class="[
      'flex items-start space-x-4 p-3 rounded-lg max-w-xs',
      messageTypeClass,
    ]"
  >
    <!-- Ikon Pengirim Pesan -->
    <Icon v-if="isBot" icon="robot" class="text-gray-800 text-2xl mt-1" />

    <!-- Konten Pesan -->
    <div :class="messageContentClass">
      <!-- Pesan dengan efek typing dan render markdown -->
      <div v-if="isBot" ref="typedText" class="text-md"></div>
      <div v-else v-html="renderedMessage" class="text-md"></div>

      <!-- Ikon Interaksi: Like, Dislike, Copy (hanya untuk pesan bot) -->
      <div v-if="isBot" class="flex items-center space-x-3 mt-2">
        <button @click="onLike" class="text-gray-500 hover:text-gray-600">
          <Icon icon="thumbs-up" />
        </button>
        <button @click="onDislike" class="text-gray-500 hover:text-gray-600">
          <Icon icon="thumbs-down" />
        </button>
        <button @click="onCopy" class="text-gray-500 hover:text-gray-600">
          <Icon icon="copy" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue';
import { marked } from 'marked';
import Typed from 'typed.js'; // Import Typed.js

export default defineComponent({
  name: 'Message',
  props: {
    messageText: {
      type: String,
      required: true,
    },
    messageType: {
      type: String as PropType<'bot' | 'user'>,
      required: true,
    },
    onLike: {
      type: Function as PropType<() => void>,
      required: false,
    },
    onDislike: {
      type: Function as PropType<() => void>,
      required: false,
    },
    onCopy: {
      type: Function as PropType<() => void>,
      required: false,
    },
  },
  computed: {
    messageTypeClass(): string {
      return this.messageType === 'bot'
        ? 'bg-white'
        : 'bg-gray-100 mr-3 self-end justify-end';
    },
    messageContentClass(): string {
      return this.messageType === 'bot' ? 'text-gray-700' : '';
    },
    isBot(): boolean {
      return this.messageType === 'bot';
    },
    renderedMessage() {
      return marked(this.messageText); // Convert the message text to HTML using marked
    },
  },
  mounted() {
    if (this.isBot) {
      this.startTyping(); // Start typing effect only for bot messages
    }
  },
  methods: {
    startTyping() {
      // Convert Markdown to HTML
      const htmlContent = marked(this.messageText);

      // Initialize Typed.js
      new Typed(this.$refs.typedText, {
        strings: [htmlContent],
        typeSpeed: 10, // Set typing speed to 10
        backSpeed: 30, // Speed of backspacing
        startDelay: 500, // Delay before starting the typing effect
        loop: false, // No looping
        contentType: 'html', // Render HTML content
      });
    },
  },
});
</script>

<style scoped>
.text-md {
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap; /* Wrap text if it's too long */
  word-wrap: break-word; /* Ensure long words break properly */
  overflow-wrap: break-word; /* Ensure long words break properly */
}
</style>
