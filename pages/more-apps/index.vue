<template>
  <UiMain class="relative z-0 pt-14 md:pt-36 lg:pt-[104px]">
    <div class="fixed top-0 left-0 h-14 w-full bg-white lg:h-[104px]"></div>
    <div class="relative -z-[1] mx-[38px] flex flex-col items-center">
      <h1
        class="mb-1 -mr-6 whitespace-nowrap text-3xl font-bold sm:text-4xl xl:text-5xl xl:!leading-[56px]"
      >
        Want more magic?&nbsp;✨
      </h1>
      <div class="opacity-75">Take a&nbsp;look at&nbsp;other apps</div>
      <div
        class="mx-2 my-8 grid w-full max-w-sm grid-rows-1 gap-6 sm:grid-rows-none md:max-w-xl md:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4"
      >
        <ProductCard link="/steamdeck">
          <template #image>
            <div
              class="flex h-full items-center justify-center rounded bg-[#0D141C]"
            >
              <img src="/assets/steam-deck-pods.png" class="w-[88px]" />
            </div>
          </template>
          <template #title> MagicPods for Steam Deck </template>
          <template #content>Add a little magic to your AirPods.</template>
          <template #button-content>
            <SteamDeckIcon />
            Download
          </template>
        </ProductCard>
        <ProductCard link="https://www.microsoft.com/store/apps/9NGB2P0TSMBF">
          <template #image>
            <div
              class="flex h-full items-center justify-center rounded bg-[#C7E7FF]"
            >
              <img src="/assets/magic-translate.png" class="w-[88px]" />
            </div>
          </template>
          <template #title> MagicTranslate </template>
          <template #content> Translate text with one hotkey.</template>
          <template #button-content>
            <MicrosoftLogoIcon />
            Download
          </template>
        </ProductCard>
        <ProductCard
          link="https://play.google.com/store/apps/details?id=yet.another.dino"
        >
          <template #image>
            <div
              class="flex h-full items-center justify-center rounded bg-[#4A2B0D]"
            >
              <img src="/assets/dino.png" class="w-[88px]" />
            </div>
          </template>
          <template #title> Yet Another Dino </template>
          <template #content>
            Run, jump, and dodge in&nbsp;a&nbsp;dangerous adventure.
          </template>
          <template #button-content>
            <GooglePlayIcon />
            Download
          </template>
        </ProductCard>
        <ProductCard link="https://www.microsoft.com/store/apps/9N78GWBTW7L5">
          <template #image>
            <div
              class="flex h-full items-center justify-center rounded bg-[#ffb800]"
            >
              <img src="/assets/magic-select.png" class="w-[72px]" />
            </div>
          </template>
          <template #title> MagicSelect </template>
          <template #content>
            Select and copy text from any images in&nbsp;many languages.
          </template>
          <template #button-content>
            <MicrosoftLogoIcon />

            Download
          </template>
        </ProductCard>
      </div>
    </div>
  </UiMain>
</template>

<script lang="ts" setup>
import GooglePlayIcon from '@/components/Icons/GooglePlayIcon'
import MicrosoftLogoIcon from '@/components/Icons/MicrosoftLogoIcon'
import SteamDeckIcon from '@/components/Icons/SteamDeckIcon'
import ProductCard from '@/components/ProductCard.vue'
</script>
