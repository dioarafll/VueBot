<template>
  <div
    class="p-3 rounded-lg hover:bg-indigo-700 hover:text-white cursor-pointer relative"
  >
    <div class="flex justify-between items-center">
      <!-- Chat Name and Time -->
      <div>
        <h3 class="font-semibold text-sm">{{ chat.name }}</h3>
        <span class="text-xs text-gray-400">{{ chat.time }}</span>
      </div>
      <!-- Dropdown Trigger -->
      <button
        @click="toggleDropdown"
        class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
      >
        <Icon icon="ellipsis-vertical" />
      </button>
    </div>
    <!-- Chat Preview -->
    <p class="text-sm text-gray-500">{{ chat.preview }}</p>

    <!-- Dropdown Menu -->
    <div
      v-if="dropdownOpen"
      class="absolute right-3 top-12 bg-white rounded-lg shadow-lg p-2 w-36 text-gray-800 z-10"
    >
      <button
        @click="onEdit"
        class="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
      >
        <Icon icon="pencil" />
        <span>Edit</span>
      </button>
      <button
        @click="onDelete"
        class="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
      >
        <Icon icon="trash" />
        <span>Delete</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ChatItem',
  props: {
    /**
     * Chat data containing name, preview, and time.
     */
    chat: {
      type: Object as PropType<{ name: string; preview: string; time: string }>,
      required: true,
    },
    /**
     * Callback for edit action.
     */
    onEdit: {
      type: Function as PropType<() => void>,
      required: true,
    },
    /**
     * Callback for delete action.
     */
    onDelete: {
      type: Function as PropType<() => void>,
      required: true,
    },
    /**
     * Whether this dropdown is currently open.
     */
    isDropdownOpen: {
      type: Boolean,
      required: true,
    },
    /**
     * Callback to toggle dropdown state.
     */
    toggleDropdownState: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  computed: {
    /**
     * Determines whether the dropdown should be open.
     */
    dropdownOpen(): boolean {
      return this.isDropdownOpen;
    },
  },
  methods: {
    toggleDropdown() {
      this.toggleDropdownState();
    },
  },
});
</script>

<style scoped>
/* Scoped styles to ensure proper dropdown display */
</style>
