<template>
  <div class="placeholder-container">
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
    <div class="placeholder shimmer">
      <div class="faux-image-wrapper">
        <div class="faux-image" />
      </div>
      <div class="text-container">
        <div class="faux-text heading" />
        <div class="faux-text short" />
        <div class="faux-text short" />
        <div class="faux-text short" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style>
.light {
  background-color: var(--Very-Light-Gray-Background);
  color: var(--Very-Dark-Blue-Text);
}
.dark {
  background-color: var(--Dark-Blue-Elements);
  color: var(--White);
}
.placeholder-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}
.placeholder {
  max-width: 250px;
  margin: 1rem;
  background-color: hsl(207, 26%, 17%);
  border-radius: 5px;
}
.faux-image-wrapper {
  margin-bottom: 10px;
  position: relative;
  /* padding-bottom: 100%;*/
  height: 200px;
}
.faux-image {
  background: silver;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  height: 150px;
  position: absolute;
  width: 100%;
}
.faux-text {
  background: silver;
  border-radius: 2px;
  height: 25px;
  width: 75%;
  margin-bottom: 5px;
}

.faux-text.short {
  width: 50%;
}
.text-container {
  padding: 10px 10px 10px 0;
}
.shimmer {
  overflow: hidden;
  position: relative;
}
.shimmer::before {
  content: '';
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 100%;
  width: 100%;
  z-index: 1;
  animation: shimmer 1s infinite;
}
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
