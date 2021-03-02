<template>
  <div @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <vue-sparkles :style="{ display: isHovered ? 'block' : 'none' }">
      <slot />
    </vue-sparkles>
    <div :style="{ display: isHovered ? 'none' : 'block' }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class SparklesWrapper extends Vue {
  @Prop(Boolean) permanent!: boolean
  isHovered: boolean = false
}
</script>
