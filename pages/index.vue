<template>
  <UiMain class="relative z-0 min-h-[593px]">
    <SplitPage>
      <template #left-pane-image>
        <img src="/bg.webp" class="absolute top-0 h-full w-full object-cover" />
      </template>
      <template #right-pane-content>
        <h1
          class="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl lg:mb-12 2xl:text-5xl 2xl:!leading-[56px]"
        >
          Add a little magic<br />to your AirPods ✨
        </h1>
        <div
          class="mb-6 grid grid-cols-2 gap-2 sm:grid-rows-2 sm:gap-6 xl:gap-8"
        >
          <UiArticle>
            <template #header> Ear detection </template>
            <template #content>
              Control media playback with ear detection function.
            </template>
          </UiArticle>
          <UiArticle>
            <template #header> Pop-up animation </template>
            <template #content>
              The same iPhone animation as you&nbsp;like.
            </template>
          </UiArticle>
          <UiArticle>
            <template #header> Battery info </template>
            <template #content>
              Watch battery level as&nbsp;you wish in&nbsp;the application
              itself, on&nbsp;the live tiles or&nbsp;even on&nbsp;the tray icon.
            </template>
          </UiArticle>
          <UiArticle>
            <template #header> Connect options </template>
            <template #content>
              Connect AirPods right from the pop-up or&nbsp;even automatically.
            </template>
          </UiArticle>
        </div>
        <div class="flex space-x-4">
          <StoreButton href="https://www.microsoft.com/store/apps/9P6SKKFKSHKM">
            <MicrosoftStoreButtontSvg style="width: 113px; height: 29px" />
          </StoreButton>
          <StoreButton href="/steamdeck">
            <SteamStoreButtonSvg style="width: 113px; height: 29px" />
          </StoreButton>
        </div>
      </template>
    </SplitPage>
  </UiMain>
</template>

<script lang="ts" setup>
import StoreButton from '@/components/Ui/StoreButtons/StoreButton.vue'
import MicrosoftStoreButtontSvg from '@/components/Ui/StoreButtons/MicrosoftStoreButtontSvg'
import SteamStoreButtonSvg from '@/components/Ui/StoreButtons/SteamStoreButtonSvg'
</script>
