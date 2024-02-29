<template>
  <div class="flex flex-col lg:grid lg:h-full lg:grid-cols-2 lg:grid-rows-1">
    <div
      class="relative flex max-h-[232px] min-h-[232px] w-full overflow-hidden md:max-h-[586px] md:min-h-[586px] lg:max-h-full"
    >
      <slot name="left-pane-image"></slot>
      <div
        class="absolute top-6 left-0 flex h-full w-full items-center justify-center"
      >
        <InterfacePanel
          class="h-full w-[296px] sm:w-[356px] md:w-[653px] lg:h-[509px] lg:w-[487px] 2xl:h-[683px] 2xl:w-[653px]"
        />
      </div>
    </div>
    <UiContainer
      class="relative min-h-screen flex-col items-start overflow-auto bg-white sm:flex sm:items-center lg:justify-around"
    >
      <div class="fixed right-0 top-0 h-14 w-1/2 bg-white lg:h-[104px]"></div>
      <section
        class="mt-6 flex-col sm:max-w-[564px] md:max-w-[542px] lg:mx-14 lg:mt-0 lg:max-w-[608px] lg:pt-[104px]"
      >
        <slot name="right-pane-content" />
      </section>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
import InterfacePanel from '../components/InterfacePanel.vue'
</script>
