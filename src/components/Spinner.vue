<template>
  <div class="spinner-wrapper">
    <div class="projecthub-spinner">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="loading-text">Loading ProjectHub...</div>
  </div>
</template>

<script setup>
// No JavaScript logic needed for this static spinner component.
// If you were to dynamically show/hide this, you might use props or reactive state.
</script>

<style scoped>
.spinner-wrapper {
  /* background-color: #0d1117; */
  color: #fff;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.spinner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projecthub-spinner {
  display: flex;
  gap: 12px;
}

.projecthub-spinner div {
  width: 16px;
  height: 16px;
  background: orange;
  border-radius: 50%;
  animation: bounce 1s infinite ease-in-out;
}

.projecthub-spinner div:nth-child(1) {
  animation-delay: 0s;
}

.projecthub-spinner div:nth-child(2) {
  animation-delay: 0.2s;
}

.projecthub-spinner div:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {

  0%,
  80%,
  100% {
    transform: scale(0.8) translateY(0);
    opacity: 0.7;
  }

  40% {
    transform: scale(1.2) translateY(-10px);
    opacity: 1;
  }
}

.loading-text {
  margin-top: 20px;
  font-size: 1.2rem;
  color: orange;
  letter-spacing: 1px;
}
</style>