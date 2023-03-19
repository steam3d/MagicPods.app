<template>
  <nav
    class="flex w-full justify-center px-4 py-2 md:justify-between md:bg-none lg:py-8 lg:px-12"
  >
    <div class="flex items-center">
      <NuxtLink href="/">
        <img src="/logo.svg" class="flex min-w-[160px] pb-2" />
      </NuxtLink>
    </div>
    <ul class="hidden gap-x-4 md:flex">
      <NavbarItem
        v-for="item in items"
        :key="item.link"
        :value="item"
        type="secondary"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavbarItem from './NavbarItem.vue'
import { NavbarItemData } from '~~/models/NavbarItemData'

interface NavbarProps {
  items: NavbarItemData[]
}
defineProps<NavbarProps>()
</script>
