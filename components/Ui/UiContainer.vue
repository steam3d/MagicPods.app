<template>
  <Component :is="tag" class="px-4">
    <slot />
  </Component>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})
</script>
