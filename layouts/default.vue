<template>
  <div class="relative">
    <div class="fixed top-0 left-0 z-10 w-full">
      <Navbar v-bind="{ items }" class="bg-white lg:bg-transparent" />
    </div>
    <div class="fixed left-4 top-2 z-30 md:hidden">
      <UiIconBurger v-if="!isDrawerOpened" @click="openDrawer" />
      <UiIconCross v-if="isDrawerOpened" @click="closeDrawer" />
    </div>
    <div
      v-show="isDrawerOpened"
      class="fixed top-0 left-0 z-20 h-full w-full bg-black/30"
      @click="closeDrawer"
    />
    <Transition name="slide-left">
      <div
        v-if="isDrawerOpened"
        class="fixed top-0 left-0 z-20 h-full w-1/2 bg-white px-4 pt-14 shadow-md lg:pt-[104px]"
      >
        <NavbarItem
          v-for="item in items"
          :key="item.link"
          :value="item"
          type="primary"
        />
      </div>
    </Transition>
    <div class="mt-14 lg:mt-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarItem from '@/components/NavbarItem.vue'
import { NavbarItemData } from '~~/models/NavbarItemData'

const isDrawerOpened = ref(false)

const openDrawer = () => {
  isDrawerOpened.value = true
}
const closeDrawer = () => {
  isDrawerOpened.value = false
}
const items: NavbarItemData[] = [
  { title: 'Discord', link: 'https://discord.com/invite/UyY4PY768V' },
  { title: 'Apps', link: '/more-apps', internal: true },
  { title: 'Help', link: 'https://help.magicpods.app/' },
  { title: 'Privacy', link: '/privacy', internal: true },
  {
    title: 'Translate',
    link: 'https://weblate.magicpods.app/engage/magicpods-windows/',
  },
  {
    title: 'Download',
    link: 'https://www.microsoft.com/store/apps/9P6SKKFKSHKM',
    accented: true,
  },
]
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 150ms ease-in-out;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translate(-100%, 0);
}
</style>
