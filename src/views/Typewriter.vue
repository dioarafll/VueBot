<template>
  <div class="typewriter-output" ref="typewriterContainer"></div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  name: 'Typewriter',
  props: {
    content: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({
        delay: 10,
        cursor: '🤖',
        autoStart: true,
      }),
    },
  },
  mounted() {
    const typewriter = new Typewriter(
      this.$refs.typewriterContainer,
      this.options,
    );

    // Split content by lines for a smoother typing effect
    const lines = this.content.split('\n');
    lines.forEach((line, index) => {
      typewriter.typeString(line).pauseFor(300);
      if (index !== lines.length - 1) typewriter.typeString('<br/>');
    });

    typewriter.start();
  },
};
</script>

<style scoped>
.typewriter-output {
  font-size: 1rem;
  line-height: 1.6;
  color: #e2e8f0; /* gray-100 */
  white-space: pre-wrap; /* Preserve line breaks */
}
</style>
