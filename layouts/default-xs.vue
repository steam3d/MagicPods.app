<template>
  <v-app class="app app--mobile">
    <v-app-bar flat color="white" absolute>
      <v-toolbar-title>
        <a href="/">
          <v-img src="logo_with_title.svg" min-width="160" />
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-btn v-if="!overlay" icon @click="overlay = true">
        <v-img src="icons/burger.svg" class="ma-3" />
      </v-btn>
      <v-btn v-else icon @click="overlay = false">
        <v-img src="icons/cross.svg" class="ma-3" />
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-overlay
        v-if="overlay"
        :value="overlay"
        light
        :dark="false"
        class="menu_overlay"
      >
        <div class="d-flex flex-column justify-center align-center">
          <v-list-item>
            <v-btn
              href="https://github.com/steam3d/MagicPods-Windows/wiki"
              depressed
              rounded
              text
            >
              FAQ
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn href :to="'/privacy'" depressed rounded text>
              Privacy
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn href="https://weblate.magicpods.app/" depressed rounded text>
              Translation
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              depressed
              rounded
              color="primary"
              large
              class="mt-4"
              href="https://www.microsoft.com/ru-ru/p/magicpods/9p6skkfkshkm"
            >
              Download
            </v-btn>
          </v-list-item>
        </div>
      </v-overlay>
      <div :style="{ filter: overlay ? 'blur(32px)' : 'none', height: '100%' }">
        <nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SparklesWrapper from '~/components/SparklesWrapper.vue'

@Component({
  components: { SparklesWrapper },
})
export default class DefaultXs extends Vue {
  overlay = false
}
</script>

<style lang="scss">
.menu_overlay {
  .v-overlay__scrim {
    opacity: 0.5 !important;
    background-color: #fff !important;
  }
}
header.v-toolbar {
  z-index: 6 !important;
}
</style>

<style lang="scss" scoped>
.theme--light.v-btn.v-btn--text {
  color: #000;
}
</style>
