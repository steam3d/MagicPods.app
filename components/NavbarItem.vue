<template>
  <li class="flex">
    <Component
      :is="isInternal ? 'NuxtLink' : 'a'"
      v-if="isSecondary"
      :class="[
        'duration-50 px-2 py-2 transition-colors',
        {
          'hover:text-blue-500': !value.accented,
          'rounded bg-blue-500 px-4 text-white hover:bg-blue-400 focus:bg-blue-300':
            value.accented,
        },
      ]"
      :href="value.link"
    >
      {{ value.title }}
    </Component>
    <Component
      :is="isInternal ? 'NuxtLink' : 'a'"
      v-else-if="isPrimary"
      :class="[
        'duration-50 w-full px-1.5 py-2.5 text-lg font-semibold transition-colors',
        {
          'text-blue-500': value.accented,
        },
      ]"
      :href="value.link"
    >
      {{ value.title }}
    </Component>
  </li>
</template>

<script setup lang="ts">
import { NavbarItemData } from '~~/models/NavbarItemData'

interface NavbarItemProps {
  value: NavbarItemData
  type: 'primary' | 'secondary'
  internal: boolean
}

const props = withDefaults(defineProps<NavbarItemProps>(), {
  type: 'primary',
  internal: false,
})

const isPrimary = computed(() => props.type === 'primary')
const isSecondary = computed(() => props.type === 'secondary')
const isInternal = computed(() => props.internal)
</script>
