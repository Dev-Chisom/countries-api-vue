<template>
  <div class="toggle">
    <p :class="mode === 'dark' ? 'checked' : false" @click="$emit('toggle')">
      <i class="fas fa-moon"></i>Dark Mode
    </p>
  </div>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style>
i {
  color: hsl(0, 0%, 100%);
  padding: 7px;
}
.toggle {
  cursor: pointer;
}
</style>
