<template>
  <form
    @submit.prevent="handleSubmit"
    class="fixed bottom-0 bg-white md:w-[51%] bg-opacity-50 backdrop-blur-sm left-0 md:ml-64 p-4 w-full flex items-center space-x-4"
  >
    <!-- Textarea for User Input -->
    <div class="relative flex-1 bg-gray-50 rounded-lg shadow-md">
      <textarea
        v-model="inputMessage"
        id="prompt-input"
        rows="2"
        class="w-full p-3 h-16 mb-14 bg-gray-50 focus:ring-none hover:ring-none focus:outline-none"
        :placeholder="placeholder"
        required
      ></textarea>

      <!-- Microphone Button -->
      <button
        type="button"
        @click="onMicClick"
        class="absolute left-3 bottom-3 p-2 hover:bg-indigo-700 hover:text-white text-gray-800 rounded-full focus:ring-4 focus:ring-indigo-300 focus:outline-none"
      >
        <Icon icon="microphone" />
        <span class="sr-only">Speak</span>
      </button>

      <!-- Attachment Button -->
      <button
        type="button"
        @click="onAttachClick"
        class="absolute left-14 bottom-3 p-2 hover:bg-indigo-700 hover:text-white text-gray-800 rounded-full hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none"
      >
        <Icon icon="paperclip" />
        <span class="sr-only">Attach file</span>
      </button>

      <!-- Submit Button -->
      <button
        type="submit"
        class="absolute right-3 bottom-3 p-2 bg-indigo-700 text-white rounded-lg focus:ring-4 focus:ring-indigo-300 focus:outline-none"
      >
        <Icon icon="paper-plane" />
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ChatInput',
  props: {
    /**
     * Placeholder text for the input field.
     */
    placeholder: {
      type: String,
      default: 'Enter your message...',
    },
    /**
     * Event emitted when the user submits the message form.
     */
    onSubmit: {
      type: Function,
      required: true,
    },
    /**
     * Event emitted when the user clicks the microphone button.
     */
    onMicClick: {
      type: Function,
      required: true,
    },
    /**
     * Event emitted when the user clicks the attachment button.
     */
    onAttachClick: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const inputMessage = ref('');

    const handleSubmit = () => {
      if (inputMessage.value.trim()) {
        props.onSubmit(inputMessage.value);
        inputMessage.value = ''; // Clear the input field
      }
    };

    return {
      inputMessage,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
/* Scoped styles for ChatInput component */
</style>
