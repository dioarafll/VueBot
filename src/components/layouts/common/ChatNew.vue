<template>
  <button
    class="w-full flex items-center space-x-2 p-3 hover:bg-indigo-600 hover:text-white rounded-lg"
    @click="onNewChat"
  >
    <Icon icon="plus-circle" />
    <span>New Chat</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ChatNew',
  props: {
    /**
     * Callback function for creating a new chat.
     */
    onNewChat: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
});
</script>
