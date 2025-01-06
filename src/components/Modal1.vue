<template>
  <div
    class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-4 rounded-lg w-1/3">
      <h3 class="text-lg font-semibold">Modal 1</h3>
      <p>Content of Modal 1</p>
      <button
        @click="close"
        class="mt-4 bg-indigo-600 text-white p-2 rounded-lg"
      >
        Close Modal 1
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal1',
  methods: {
    close() {
      this.$emit('close'); // Emit event untuk menutup modal
    },
  },
});
</script>
