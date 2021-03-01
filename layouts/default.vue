<template>
  <v-app class="app">
    <v-app-bar flat color="white" absolute>
      <v-toolbar-title>
        <a href="/">
          <v-img src="logo_with_title.svg" min-width="160" />
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        href="https://github.com/steam3d/MagicPods-Windows/wiki"
        depressed
        rounded
        color="white"
        class="mr-4"
      >
        FAQ
      </v-btn>
      <v-btn href :to="'/privacy'" depressed rounded color="white" class="mr-4">
        Privacy
      </v-btn>
      <v-btn
        href="https://weblate.magicpods.app/"
        depressed
        rounded
        color="white"
        class="mr-4"
      >
        Translation
      </v-btn>
      <v-btn
        depressed
        rounded
        color="primary"
        href="https://www.microsoft.com/ru-ru/p/magicpods/9p6skkfkshkm"
      >
        Download
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
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
.theme--light.v-btn.white {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.5);
  &:before {
    background-color: unset !important;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  + .v-btn--active {
    color: #000;
  }
}
</style>
