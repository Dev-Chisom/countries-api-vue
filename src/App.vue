<template>
  <div class="app">
    <Header :mode="mode" @toggle="toggle" />
    <!-- <Main /> -->
    <Loading />
  </div>
</template>

<script>
import Header from './components/Header';
// import Main from './components/Main';
import Loading from './components/Loading';
export default {
  name: 'App',
  data() {
    return {
      mode: 'light',
    };
  },
  components: {
    Header,
    // Main,
    Loading,
  },
  toggle() {
    if (this.mode === 'dark') {
      this.mode = 'light';
    } else {
      this.mode = 'dark';
    }
  },
};
</script>

<style>
:root {
  --Dark-Blue-Elements: hsl(209, 23%, 22%);
  --Very-Dark-Blue-Background: hsl(207, 26%, 17%);
  --Very-Dark-Blue-Text: hsl(200, 15%, 8%);
  --Dark-Gray-Input: hsl(0, 0%, 52%);
  --Very-Light-Gray-Background: hsl(0, 0%, 98%);
  --White: hsl(0, 0%, 100%);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background-color: var(--Dark-Blue-Elements);
  color: var(--Very-Dark-Blue-Text);
  transition: background 0.3s ease-in-out;
  /* overflow: hidden; */
}
.container {
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 40px;
}
.dark {
  background: #192724;
  color: #f3f3f3;
}
</style>
