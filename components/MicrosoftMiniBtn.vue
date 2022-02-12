<template>
  <a class="ms-btn-mini">
    <div class="ms-mtn-mini__block ms-mtn-mini__block--r"></div>
    <div class="ms-mtn-mini__block ms-mtn-mini__block--g"></div>
    <div class="ms-mtn-mini__block ms-mtn-mini__block--b"></div>
    <div class="ms-mtn-mini__block ms-mtn-mini__block--y"></div>
  </a>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class MicrosoftMiniBtn extends Vue {
  isHovered = false
}
</script>

<style lang="scss" scoped>
$red: #f25022;
$green: #7fba00;
$blue: #00a4ef;
$yellow: #ffb900;
$width: 24px;
$height: 24px;
$animationDuration: 500ms;
$blockSize: ($width / 2) - 1.18;

.ms-btn-mini {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.18px 1.18px;
  grid-template-areas:
    '. .'
    '. .';
  width: $width;
  height: $height;
  .ms-mtn-mini__block {
    width: $blockSize;
    height: $blockSize;
    &--r {
      background-color: $red;
    }
    &--g {
      background-color: $green;
    }
    &--b {
      background-color: $blue;
    }
    &--y {
      background-color: $yellow;
    }
  }
}
</style>
