<template>
  <div class="toggle">
    <p class="" @click="toggle">
      <span v-if="!isLight"><i class="fas fa-moon"></i> Dark Mode</span>
      <span v-else><i class="fas fa-sun"></i> Light Mode</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLight: false,
    };
  },
  methods: {
    toggle() {
      this.isLight = !this.isLight;
      document.body.classList.toggle('light');
    },
  },
};
</script>

<style scoped>
.toggle {
  cursor: pointer;
}
p {
  margin-top: 1rem;
}
</style>
