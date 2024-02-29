<template>
  <article>
    <h2 class="mb-2 text-lg font-semibold sm:text-xl xl:text-2xl">
      <slot name="header" />
    </h2>
    <p class="text-sm font-normal leading-relaxed sm:text-base">
      <slot name="content" />
    </p>
  </article>
</template>

<script setup lang="ts"></script>
