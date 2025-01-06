<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 class="text-3xl font-semibold mb-6 text-center">Forgot Password</h2>

      <p class="text-center text-sm text-gray-500">
        Enter your email to reset your password
      </p>

      <!-- Form for resetting the password -->
      <form action="#" method="POST" class="mt-6 space-y-4">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
        </div>

        <!-- Reset Password Button -->
        <div>
          <Button type="submit">Reset Password</Button>
        </div>
      </form>

      <!-- Back to Sign In -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-500">
          Remembered your password?
          <a
            href="sign-in.html"
            class="text-indigo-600 hover:text-indigo-800 font-semibold"
            >Sign in</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '../components/ui/Input.vue';
import Button from '../components/ui/Button.vue';

export default defineComponent({
  name: 'ForgotPassword',
  components: {
    Input,
    Button,
  },
});
</script>

<style scoped>
/* Optional styling */
</style>
