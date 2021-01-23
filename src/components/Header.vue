<template>
  <header>
    <nav>
      <h2>Where in the world?</h2>
      <Toggle />
    </nav>
  </header>
</template>

<script>
import Toggle from './Toggle';

export default {
  name: 'Header',
  // props: ['mode'],
  components: { Toggle },
  data() {
    return {
      // mode: 'Light Mode',
    };
  },
};
</script>

<style>
.light {
  background-color: var(--Very-Light-Gray-Background);
  color: var(--Very-Dark-Blue-Text);
}
/* .dark {
  background-color: var(--Dark-Blue-Elements);
  color: var(--White);
} */
header {
  height: 60px;
  transition: background 0.3s ease-in-out;
  box-shadow: 0 4px 2px -2px hsl(207, 26%, 17%);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

@media (max-width: 768px) {
  header h2 {
    font-size: 20px;
  }
}

/* header {
  background: #15202b;
} */
</style>
