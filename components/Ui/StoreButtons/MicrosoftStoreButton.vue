<template>
  <a class="radient-border flex rounded p-2.5" href="https://www.microsoft.com/store/apps/9P6SKKFKSHKM">
    <MicrosoftStoreButtontSvg style="width: 113px; height: 29px" />
  </a>
</template>

<script setup lang="ts">
import MicrosoftStoreButtontSvg from './MicrosoftStoreButtontSvg'
</script>

<style scoped>
.radient-border {
  position: relative;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
}
.radient-border:hover:before,
.radient-border:focus-visible:before {
  background-position: -130% 0;
  background-size: 180% auto;
  opacity: 1;
  padding: 2px;
}
.radient-border:focus-visible {
  outline: none;
}
.radient-border:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  padding: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    #d2d2d2 0%,
    #d2d2d2 20%,
    #f25022 40%,
    #7fba00 60%,
    #00a4ef 80%,
    #ffb900 100%
  );
  background-size: 500% auto;
  background-position: 0 0;
  opacity: 0.5;
  transition: background-position, background-size 0.3s ease-in-out,
    opacity 0.2s ease-in-out;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
</style>
