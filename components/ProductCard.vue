<template>
  <a
    class="group rounded-lg border border-[#F2F2F2] p-4 transition-colors hover:border-blue-500"
    :href="link"
  >
    <div class="flex h-full flex-col justify-between gap-6">
      <div class="flex flex-col gap-6">
        <div class="h-32">
          <slot name="image" />
        </div>
        <div>
          <div class="mb-1 text-lg font-semibold">
            <slot name="title" />
          </div>
          <div class="text-sm">
            <slot name="content" />
          </div>
        </div>
      </div>
      <div class="w-full">
        <button
          :class="[
            'flex w-full items-center justify-center gap-2 rounded border border-blue-500 px-4 py-3 font-normal leading-none text-blue-500 transition-colors',
            'group-hover:border-blue-400 group-hover:text-blue-400',
            'group-active:border-blue-300 group-active:text-blue-300',
          ]"
        >
          <slot name="button-content" />
        </button>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
interface ProductCardProps {
  link: string
}
defineProps<ProductCardProps>()
</script>
