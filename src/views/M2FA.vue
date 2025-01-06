<template>
  <div class="flex justify-center items-center h-screen md:bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-lg md:shadow-md p-8">
      <h2 class="text-3xl font-semibold mb-6 text-center">
        Enable Two-Factor Authentication
      </h2>

      <!-- Instructions -->
      <p class="text-sm text-gray-500 text-center mb-6">
        Scan the QR code below with your authenticator app or enter the secret
        code manually.
      </p>

      <!-- QR Code Section (Default Visible) -->
      <div id="qr-code" class="flex justify-center items-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="QR Code"
          class="w-40 h-40"
        />
      </div>

      <!-- Secret Code Section (Hidden by Default) -->
      <div id="secret-code" class="hidden mb-6">
        <span class="text-sm font-medium text-gray-700">Your Secret Code:</span>
        <div
          class="mt-2 bg-gray-100 text-gray-900 p-4 rounded-md shadow-md max-w-xs mx-auto overflow-auto"
        >
          <span class="block text-lg font-semibold">
            32aebeb4ca2ee5997c7bed5d45fd075f4a6d7938862a167
          </span>
        </div>
      </div>

      <!-- Toggle Link -->
      <div class="text-center mb-6">
        <a
          href="#"
          class="text-sm text-indigo-600 hover:text-indigo-800 font-semibold"
          id="toggle-button"
          @click.prevent="toggleSecretCode"
        >
          Having trouble scanning? Then enter your one-time code
        </a>
      </div>

      <!-- Verification Section -->
      <form action="#" method="POST" class="space-y-4">
        <div>
          <label for="code" class="block text-sm font-medium text-gray-700"
            >One-Time Code</label
          >
          <Input
            id="code"
            name="code"
            type="text"
            placeholder="Enter your OTP"
          />
        </div>
        <div>
          <Button type="submit">Verify and Enable</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '../components/ui/Input.vue';
import Button from '../components/ui/Button.vue';

export default defineComponent({
  name: 'M2FA',
  components: {
    Input,
    Button,
  },
  methods: {
    /**
     * Toggles between QR Code and Secret Code visibility.
     * @description Switches between showing QR Code and Secret Code sections.
     */
    toggleSecretCode() {
      const qrCode = document.getElementById('qr-code')!;
      const secretCode = document.getElementById('secret-code')!;
      const toggleButton = document.getElementById('toggle-button')!;

      if (qrCode.classList.contains('hidden')) {
        qrCode.classList.remove('hidden');
        secretCode.classList.add('hidden');
        toggleButton.textContent =
          'Having trouble scanning? Then enter your one-time code';
      } else {
        qrCode.classList.add('hidden');
        secretCode.classList.remove('hidden');
        toggleButton.textContent = 'Back to QR Code';
      }
    },
  },
});
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
