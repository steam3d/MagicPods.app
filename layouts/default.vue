<template>
  <div>
    <default-md v-if="!$isMobile" />
    <default-xs v-else />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DefaultXs from './default-xs.vue'
import DefaultMd from './default-md.vue'

@Component({
  components: { DefaultMd, DefaultXs },
})
export default class Default extends Vue {}
</script>

<style lang="scss">
.v-app-bar {
  padding: 1.25vw;
  height: unset !important;
  .v-toolbar__content {
    margin: 0;
    height: 44px !important;
  }
}
</style>
