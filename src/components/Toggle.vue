<template>
  <div class="toggle">
    <p class="" @click="toggle">
      <span v-if="!isLight"><i class="fas fa-moon"></i>Dark Mode</span>
      <span v-else><i class="fas fa-sun"></i>Light Mode</span>
    </p>
  </div>
</template>

<script>
export default {
  // props: ['mode'],
  data() {
    return {
      isLight: false,
    };
  },
  methods: {
    toggle() {
      this.isLight = !this.isLight;
      document.body.classList.toggle('light');
      // if (this.isLight === true) {
      //   document.body.classList.toggle('light');
      // } else {
      //   document.body.classList.toggle('dark');
      // }
    },
  },
};
</script>

<style>
/* i {
  color: hsl(0, 0%, 100%);
  padding: 7px;
}*/
.toggle {
  cursor: pointer;
}
</style>
