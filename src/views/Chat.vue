<template>
  <section class="container mx-auto">
    <div
      class="flex flex-col md:flex-row md:justify-around items-center h-full space-y-6 md:space-y-0"
    >
      <!-- Sidebar -->
      <section class="md:w-1/4">
        <Sidebar :isOpen="isSidebarOpen" @close="toggleSidebar" />
      </section>

      <!-- Overlay -->
      <div
        id="overlay"
        class="overlay"
        :class="{ active: isSidebarOpen }"
        @click="toggleSidebar"
        aria-hidden="true"
      ></div>

      <!-- Chat Container -->
      <div
        class="w-full md:w-1/2 overflow-y-auto mb-36 flex flex-col space-y-4"
      >
        <!-- Navbar (Mobile Only) -->
        <nav class="bg-white md:hidden relative w-full z-10">
          <div
            class="max-w-screen-xl pb-4 flex items-center justify-between mx-auto"
          >
            <!-- Hamburger Icon (Mobile) -->
            <button
              id="openSidebar"
              class="ml-4 rounded-md focus:outline-none"
              @click="toggleSidebar"
              :aria-expanded="isSidebarOpen"
            >
              <Icon icon="bars" />
            </button>

            <!-- Logo or Brand Name (Centered) -->
            <div class="text-center flex-1 md:order-2">
              <span class="text-lg font-semibold">MyBrand</span>
            </div>

            <!-- Add New Chat Icon (Right) -->
            <button class="mr-4 rounded-md focus:outline-none">
              <Icon icon="plus-circle" />
            </button>
          </div>
        </nav>

        <!-- Message Component -->
        <Message
          v-for="message in messages"
          :key="message.id"
          :messageText="message.text"
          :messageType="message.type"
          :onLike="handleLike"
          :onDislike="handleDislike"
          :onCopy="handleCopy"
        />

        <ChatInput
          :placeholder="'Type your message...'"
          :onSubmit="handleSubmit"
          :onMicClick="handleMicClick"
          :onAttachClick="handleAttachClick"
        />
      </div>

      <!-- Reviews -->
      <aside class="hidden md:block md:w-1/4 p-4">
        <h3 class="text-lg font-semibold text-gray-700">Reviews</h3>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li><a href="#" class="hover:text-indigo-600">Review 1</a></li>
          <li><a href="#" class="hover:text-indigo-600">Review 2</a></li>
          <li><a href="#" class="hover:text-indigo-600">Review 3</a></li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sidebar from '../components/layouts/Sidebar.vue';
import ChatInput from '../components/chats/ChatInput.vue';
import Message from '../components/chats/Message.vue';

//import prism from 'prismjs';
//import 'prismjs/themes/prism.css';
//import 'prismjs/components/prism-javascript.min.js';

export default defineComponent({
  name: 'Chat',
  components: {
    Sidebar,
    ChatInput,
    Message,
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          text: 'Welcome to the chatbot! **How can I assist you?**',
          type: 'bot',
        },
      ],
      botResponses: [
        'I can help you with code examples.',
        'Please specify what you need assistance with.',
        'Do you have any questions regarding coding?',
        'Let me know if you need help with anything related to programming.',
      ],
    };
  },
  setup() {
    const isSidebarOpen = ref(false);

    /**
     * Toggles the sidebar open/close.
     */
    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return { isSidebarOpen, toggleSidebar };
  },
  methods: {
    handleLike() {
      console.log('Like clicked');
      // Add logic for like
    },
    handleDislike() {
      console.log('Dislike clicked');
      // Add logic for dislike
    },
    handleCopy() {
      console.log('Copy clicked');
      // Add logic for copy
    },
    /**
     * Handles the submission of a message.
     */
    // Function to get a random bot response
    getRandomBotResponse() {
      const randomIndex = Math.floor(Math.random() * this.botResponses.length);
      return this.botResponses[randomIndex];
    },

    // Handle message submission
    handleSubmit(message) {
      // Add user message to the array
      const userMessage = { id: Date.now(), text: message, type: 'user' };
      this.messages.push(userMessage);

      // Add bot response (randomly chosen) to the array
      const botResponse = {
        id: Date.now() + 1,
        text: this.getRandomBotResponse(),
        type: 'bot',
      };
      this.messages.push(botResponse);

      // Re-highlight all code blocks after adding a new message
      //this.$nextTick(() => {
      //Prism.highlightAll();
      //});
    },

    /**
     * Handles the microphone button click.
     */
    handleMicClick() {
      console.log('Microphone clicked');
      // Add your logic for microphone functionality here
    },
    /**
     * Handles the attachment button click.
     */
    handleAttachClick() {
      console.log('Attachment clicked');
      // Add your logic for file attachment here
    },
  },
  /**
  mounted() {
    // Highlight all existing code blocks on mount
    this.$nextTick(() => {
      Prism.highlightAll();
    });
  },
  **/
});
</script>

<style scoped>
/* Overlay untuk menutupi area di luar sidebar */
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.overlay.active {
  display: block;
}

/* Media Query untuk perangkat dengan ukuran layar MD (768px) atau lebih besar */
@media (min-width: 768px) {
  /* Overlay tidak terlihat di perangkat dengan ukuran lebih besar */
  .overlay {
    display: none;
  }
}
</style>
