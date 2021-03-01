<template>
  <v-btn
    class="ms-btn"
    text
    href="https://www.microsoft.com/ru-ru/p/magicpods/9p6skkfkshkm"
    :ripple="false"
  >
    <v-img src="microsoft_btn.svg" />
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class MicrosoftBtn extends Vue {}
</script>

<style lang="scss" scoped>
.ms-btn {
  width: 133px;
  height: 48px !important;
}
</style>
