<template>
  <header>
    <nav>
      <h2>Where in the world?</h2>
      <Toggle :mode="mode" @toggle="$emit('toggle')" />
    </nav>
  </header>
</template>

<script>
import Toggle from './Toggle';

export default {
  props: ['mode'],
  components: {
    Toggle,
  },
  // data() {
  //   return {
  //     search: '',
  //   };
  // },
  // computed: {
  //   filteredPosts() {
  //     return;
  //   },
  // },
};
</script>

<style>
header {
  height: 60px;
  background: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
  transition: background 0.3s ease-in-out;
  box-shadow: 0 4px 2px -2px hsl(207, 26%, 17%);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
}

.dark header {
  background: #15202b;
}
</style>
