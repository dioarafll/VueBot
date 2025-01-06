<template>
  <button
    class="icon-btn text-gray-600 border-gray-600 hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 flex items-center space-x-2 px-4 py-2 rounded-lg"
  >
    <Icon :icon="icon" v-if="icon" class="mr-3" />
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Oauth2Button',
  props: {
    /**
     * The icon name to display (e.g., FontAwesome or any supported icon format).
     */
    icon: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Optional custom styles for additional polish */

.icon-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-top: 10px;
  font-size: 16px;
}
.icon-btn:hover {
  background-color: #f4f4f4;
}
</style>
