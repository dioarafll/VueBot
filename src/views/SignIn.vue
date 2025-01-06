<template>
  <div class="flex justify-center items-center min-h-screen lg:bg-gray-50">
    <div class="w-full max-w-md bg-white rounded-lg lg:shadow-md p-8">
      <h2 class="text-3xl font-semibold mb-6 text-center">Welcome back!</h2>

      <!-- Oauth2 Buttons -->
      <div class="mb-6 space-y-3">
        <Oauth2Button icon="fab fa-google"> Sign in with Google </Oauth2Button>
        <Oauth2Button icon="fab fa-apple"> Sign in with Apple </Oauth2Button>
        <Oauth2Button icon="fab fa-microsoft">
          Sign in with Microsoft
        </Oauth2Button>
      </div>

      <p class="text-center text-sm text-gray-500">or login with email</p>

      <!-- Login Form -->
      <form action="#" method="POST" class="mt-6 space-y-4">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input id="email" name="email" placeholder="Enter your email" />
        </div>

        <!-- Password Input -->
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

        <!-- Forgot Password Link -->
        <div class="flex justify-between items-center text-sm">
          <a href="#" class="text-indigo-600 hover:text-indigo-800"
            >Forget Password?</a
          >
        </div>

        <!-- Sign In Button -->
        <div>
          <Button type="submit">Sign In</Button>
        </div>
      </form>

      <!-- Sign Up Link -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-500">
          or
          <a
            href="#"
            class="text-indigo-600 hover:text-indigo-800 font-semibold"
            >sign up</a
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
  name: 'SignIn',
  components: {
    Input,
    Button,
    Oauth2Button,
  },
});
</script>

<style scoped>
/* Optional custom styles for additional polish */
</style>
