<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center py-12 px-6 lg:px-8 bg-gray-50"
  >
    <div class="text-center mb-12">
      <h2 class="text-3xl font-semibold">Choose your plan</h2>
      <p class="text-sm text-gray-500 mb-6">
        7 Days free trial. No credit card required.
      </p>

      <!-- Toggle Button for Monthly/Yearly Billing -->
      <div class="flex justify-center space-x-4 mb-6">
        <!-- Monthly Billing Button -->
        <button
          id="monthly"
          :class="
            billing === 'monthly'
              ? 'bg-indigo-600 text-white'
              : 'border border-indigo-600 text-indigo-600'
          "
          class="rounded-full py-2 px-6 font-medium transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          @click="toggleBilling('monthly')"
        >
          Bill Monthly
        </button>

        <!-- Yearly Billing Button -->
        <button
          id="yearly"
          :class="
            billing === 'yearly'
              ? 'bg-indigo-600 text-white'
              : 'border border-indigo-600 text-indigo-600'
          "
          class="rounded-full py-2 px-6 font-medium transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          @click="toggleBilling('yearly')"
        >
          Bill Yearly
        </button>
      </div>
    </div>

    <!-- Pricing Plans -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300"
        :class="{ 'bg-indigo-600 text-white': plan.name === 'Advanced' }"
      >
        <!-- Plan Name -->
        <h3
          class="text-xl font-semibold text-center"
          :class="{
            'text-white': plan.name === 'Advanced',
            'text-gray-800': plan.name !== 'Advanced',
          }"
        >
          {{ plan.name }}
        </h3>

        <!-- Plan Price -->
        <p
          class="text-center text-2xl font-bold"
          :class="{
            'text-white': plan.name === 'Advanced',
            'text-indigo-600': plan.name !== 'Advanced',
          }"
        >
          {{
            billing === 'monthly'
              ? `$${plan.monthly.price}`
              : `$${plan.yearly.price}`
          }}
          <span class="text-sm">/ {{ billing }}</span>
        </p>

        <!-- Plan Features -->
        <ul
          class="space-y-4 mt-6"
          :class="{
            'text-white': plan.name === 'Advanced',
            'text-gray-600': plan.name !== 'Advanced',
          }"
        >
          <li
            v-for="(feature, featureIndex) in plan.features"
            :key="featureIndex"
          >
            {{ feature }}
          </li>
        </ul>

        <!-- Dynamic Button with appropriate text and styles -->
        <button
          class="block w-full text-center py-2 px-4 rounded-lg mt-6 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          :class="{
            'bg-indigo-600 text-white hover:bg-indigo-800 hover:text-white':
              plan.name !== 'Advanced',
            'bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white':
              plan.name === 'Advanced',
          }"
        >
          {{ getButtonLabel(plan.name) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plans',
  data() {
    return {
      billing: 'monthly', // Default billing cycle
      plans: [
        {
          name: 'Free',
          monthly: { price: 0 },
          yearly: { price: 0 },
          features: [
            '2 auto tracking',
            '7 Day transaction clearing',
            '24/7 Customer support',
            'All widget access',
          ],
        },
        {
          name: 'Advanced',
          monthly: { price: 150 },
          yearly: { price: 1500 },
          features: [
            'AI Advisor',
            'Unlimited auto tracking',
            '1 Day transaction clearing',
            'Priority customer support',
            'All Widget Access',
          ],
        },
        {
          name: 'Team',
          monthly: { price: 180 },
          yearly: { price: 1800 },
          features: [
            'AI Advisor',
            'Unlimited auto tracking',
            '1 Day transaction clearing',
            'Priority customer support',
            'All Widget Access',
          ],
        },
      ],
    };
  },
  methods: {
    /**
     * Toggles the billing cycle between monthly and yearly.
     * @param {string} type - The selected billing type ('monthly' or 'yearly').
     */
    toggleBilling(type) {
      this.billing = type;
    },

    /**
     * Gets the appropriate button label based on the plan name.
     * @param {string} planName - The name of the plan.
     * @returns {string} - The button label.
     */
    getButtonLabel(planName) {
      switch (planName) {
        case 'Free':
          return 'Start for Free';
        case 'Advanced':
          return 'Upgrade to Advanced';
        case 'Team':
          return 'Choose Team Plan';
        default:
          return 'Purchase Plan';
      }
    },
  },
};
</script>

<style scoped>
/* Custom Colors and Button Styles */
.bg-gray-50 {
  background-color: #f9fafb;
}

.bg-indigo-600 {
  background-color: #4f46e5;
}

.text-white {
  color: white;
}

.text-indigo-600 {
  color: #4f46e5;
}

.hover\:bg-indigo-800:hover {
  background-color: #3730a3;
}

.hover\:text-white:hover {
  color: white;
}

.text-indigo-600 {
  color: #4f46e5;
}

.text-gray-600 {
  color: #4a5568;
}

.text-gray-800 {
  color: #2d3748;
}
</style>
