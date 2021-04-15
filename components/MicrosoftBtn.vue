<template>
  <a href="https://www.microsoft.com/ru-ru/p/magicpods/9p6skkfkshkm">
    <div
      class="ms-btn"
      @mouseover="isHovered = true"
      @mouseout="isHovered = false"
    >
      <v-img src="/microsoft_btn.svg" height="48" width="133" />
      <div :class="['anim_block', { 'anim_block--animated': isHovered }]" />
    </div>
  </a>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class MicrosoftBtn extends Vue {
  isHovered = false
}
</script>

<style lang="scss" scoped>
$red: #f25022;
$green: #7fba00;
$blue: #00a4ef;
$yellow: #ffb900;
$width: 133px;
$height: 48px;
$animationDuration: 500ms;
$bdColor: #d2d2d2;

.ms-btn {
  width: $width;
  height: $height !important;
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: $width;
    height: $height;
    border: 1px solid $bdColor;
  }
  cursor: pointer;
  &:hover {
    border: none;
    &:before,
    &:after {
      border-image-slice: 1;
      border-image-source: linear-gradient(45deg, $red, $green, $blue, $yellow);
    }
    &:before {
      border-left: 1px solid;
      border-top: 1px solid;
    }

    &:after {
      border-right: 1px solid;
      border-bottom: 1px solid;
    }
  }
  .anim_block {
    width: $width;
    height: $height;
    position: absolute;
    top: 0;
    z-index: 3;
    &:before,
    &:after {
      position: absolute;
    }
    &:before {
      /* background-color: red; */
      top: 0;
      right: 0;
      border-left: 1px solid $bdColor;
      border-top: 1px solid $bdColor;
    }
    &:after {
      /* background-color: blue; */
      bottom: 0;
      left: 0;
      border-right: 1px solid $bdColor;
      border-bottom: 1px solid $bdColor;
    }
    &--animated {
      &:before,
      &:after {
        content: '';
        animation: $animationDuration ease-in-out 0s forwards anim;
      }
    }
  }
  @keyframes anim {
    0% {
      height: $height;
      width: $width;
    }
    36% {
      height: 0px;
      width: $width;
    }
    99% {
      content: '';
    }
    100% {
      content: none;
      height: 0px;
      width: 0px;
    }
  }
}
</style>
