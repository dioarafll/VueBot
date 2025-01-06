<template>
  <div class="flex justify-center items-center min-h-screen lg:bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-lg lg:shadow-md p-8">
      <h2 class="text-3xl font-semibold mb-6 text-center">
        Verify Your Phone Number
      </h2>

      <p class="text-center text-sm text-gray-500 mb-6">
        Enter your phone number to receive a verification code.
      </p>

      <!-- Form for entering phone number -->
      <form action="#" method="POST" class="mt-10 space-y-4">
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >Phone Number</label
          >
          <div class="flex items-center space-x-2">
            <!-- Country code dropdown -->
            <select
              name="country-code"
              id="country-code"
              class="w-1/4 px-2 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+62">+62</option>
              <!-- Add other country codes as needed -->
            </select>

            <!-- Phone number input -->
            <Input
              w="w-3/4"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        <!-- Send Verification Code button -->
        <div class="mt-4">
          <Button type="submit">Send Verification Code</Button>
        </div>
      </form>

      <!-- Already verified link -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-500">
          Already verified?
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
  name: 'VerifyPhone',
  components: {
    Input,
    Button,
  },
});
</script>

<style scoped>
/* Optional custom styles */
</style>
