<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 class="text-3xl font-semibold mb-6 text-center">
        Enter the 6-digit OTP
      </h2>

      <p class="text-center text-sm text-gray-500 mb-6">
        Please enter the OTP sent to your phone number.
      </p>

      <!-- Form to enter OTP -->
      <form action="#" method="POST" class="mt-6 space-y-4">
        <!-- OTP Input -->
        <div class="flex justify-center items-center space-x-2">
          <Input
            v-for="(input, index) in 6"
            :key="index"
            id="otp-input"
            name="otp-input"
            type="text"
            placeholder=""
            w="w-12"
            maxlength="1"
          />
        </div>

        <!-- Verify OTP Button -->
        <div class="mt-6">
          <Button type="submit">Verify OTP</Button>
        </div>
      </form>

      <!-- Resend OTP link -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-500">
          Didn't receive the code?
          <a
            href="#"
            class="text-indigo-600 hover:text-indigo-800 font-semibold"
            >Resend OTP</a
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
  name: 'EnterOTP',
  components: {
    Input,
    Button,
  },
});
</script>

<style scoped>
/* Styling for OTP inputs */
.otp-input {
  text-align: center;
  font-size: 1.25rem;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  width: 3rem;
  height: 3rem;
  focus: ring-indigo-500;
  focus: border-indigo-500;
}
</style>
