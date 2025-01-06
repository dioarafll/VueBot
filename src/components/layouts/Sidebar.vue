<template>
  <aside
    class="sidebar fixed top-0 left-0 h-full w-64 bg-gray-50 text-gray-800 p-6 space-y-6 z-50"
    :class="{ open: isOpen }"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold">Chatbot</h2>
      <!-- Mobile Close Button -->
      <button
        id="toggleSidebar"
        class="md:hidden text-gray-800 focus:outline-none"
        @click="$emit('close')"
        :aria-label="'Close Sidebar'"
      >
        <Icon icon="times" />
      </button>
    </div>

    <!-- New Chat Button -->
    <ChatNew :onNewChat="handleNewChat" />

    <!-- Chat List -->
    <nav class="space-y-4 overflow-y-auto h-[350px] max-h-[calc(100vh-180px)]">
      <ChatItem
        v-for="chat in chats"
        :key="chat.id"
        :chat="chat"
        :onEdit="handleEdit"
        :onDelete="handleDelete"
        :isDropdownOpen="dropdownOpen === chat.id"
        :toggleDropdownState="() => toggleDropdown(chat.id)"
        @select="handleChatSelect(chat)"
      />
    </nav>

    <!-- Footer -->
    <div class="absolute bottom-4 left-4 w-50">
      <a
        href="#"
        class="flex items-center space-x-2 hover:bg-indigo-700 hover:text-white p-2 rounded-lg"
      >
        <Icon icon="user" />
        <span>Profile</span>
      </a>
      <a
        href="#"
        class="flex items-center space-x-2 hover:bg-indigo-700 hover:text-white p-2 rounded-lg mt-2"
      >
        <Icon icon="cogs" />
        <span>Settings</span>
      </a>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ChatItem from './common/ChatItem.vue';
import ChatNew from './common/ChatNew.vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    ChatItem,
    ChatNew,
  },
  data() {
    return {
      chats: [
        {
          id: 1,
          name: 'Alice',
          preview: 'Hey, are you free today?',
          time: '2m ago',
        },
        {
          id: 2,
          name: 'Bob',
          preview: "Let's grab lunch later!",
          time: '5m ago',
        },
        {
          id: 3,
          name: 'Charlie',
          preview: 'Meeting rescheduled to 3 PM.',
          time: '10m ago',
        },
        {
          id: 4,
          name: 'Diana',
          preview: 'Can you help me with this task?',
          time: '20m ago',
        },
        {
          id: 5,
          name: 'Eve',
          preview: 'How was your weekend?',
          time: '30m ago',
        },
        {
          id: 6,
          name: 'Frank',
          preview: "Don't forget about the presentation!",
          time: '1h ago',
        },
      ],
      dropdownOpen: null as number | null, // Track which dropdown is open
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      description: 'Determines whether the sidebar is open or closed.',
    },
    chats: {
      type: Array as PropType<
        Array<{ id: number; name: string; preview: string; time: string }>
      >,
      required: true,
      description: 'Array of chat objects to display in the sidebar.',
    },
  },
  emits: ['close', 'newChat', 'select'],
  methods: {
    /**
     * Handles the creation of a new chat.
     */
    handleNewChat() {
      this.$emit('newChat');
    },
    /**
     * Handles the selection of a chat item.
     * @param {Object} chat - The selected chat object.
     */
    handleChatSelect(chat: { id: number; name: string }) {
      this.$emit('select', chat);
    },
    handleEdit() {
      console.log('Edit chat');
    },
    handleDelete() {
      console.log('Delete chat');
    },
    toggleDropdown(chatId: number) {
      // Close other dropdowns when opening a new one
      this.dropdownOpen = this.dropdownOpen === chatId ? null : chatId;
    },
  },
});
</script>

<style scoped>
.sidebar {
  transition:
    transform 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  transform: translateX(-100%);
  visibility: hidden;
}

.sidebar.open {
  visibility: visible;
  transform: translateX(0);
}

/* Media Query untuk perangkat dengan ukuran layar MD (768px) atau lebih besar */
@media (min-width: 768px) {
  .sidebar {
    transform: translateX(0); /* Sidebar selalu muncul */
    visibility: visible; /* Sidebar selalu terlihat */
  }
}
</style>
