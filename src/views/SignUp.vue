<template>
  <div class="flex justify-center items-center min-h-screen lg:bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-lg lg:shadow-md p-8">
      <h2 class="text-3xl font-semibold mb-6 text-center">Create an Account</h2>

      <!-- Oauth2 Buttons -->
      <div class="mb-6 space-y-3">
        <!-- Sign up with Google -->
        <Oauth2Button icon="fab fa-google"> Sign up with Google </Oauth2Button>

        <!-- Sign up with Apple -->
        <Oauth2Button icon="fab fa-apple"> Sign up with Apple </Oauth2Button>

        <!-- Sign up with Microsoft -->
        <Oauth2Button icon="fab fa-microsoft">
          Sign up with Microsoft
        </Oauth2Button>
      </div>

      <p class="text-center text-sm text-gray-500">
        or create an account with email
      </p>

      <!-- Sign Up Form -->
      <form action="#" method="POST" class="mt-6 space-y-4">
        <!-- Full Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <Input id="name" name="name" placeholder="Enter your full name" />
        </div>

        <!-- Email Address -->
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

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <!-- Confirm Password -->
        <div>
          <label
            for="confirm-password"
            class="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <!-- Terms and Conditions -->
        <div class="flex justify-between items-center text-sm">
          <p class="text-gray-500">
            By signing up, you agree to our
            <a href="#" class="text-indigo-600 hover:text-indigo-800"
              >Terms of Service</a
            >
            and
            <a href="#" class="text-indigo-600 hover:text-indigo-800"
              >Privacy Policy</a
            >.
          </p>
        </div>

        <!-- Sign Up Button -->
        <div>
          <Button type="submit">Sign Up</Button>
        </div>
      </form>

      <!-- Already have an account -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-500">
          Already have an account?
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
import Oauth2Button from '../components/ui/Oauth2Button.vue';

export default defineComponent({
  name: 'SignUp',
  components: {
    Input,
    Button,
    Oauth2Button,
  },
});
</script>

<style scoped>
/* Tambahkan styling opsional jika diperlukan */
</style>
