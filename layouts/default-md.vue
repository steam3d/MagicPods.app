<template>
  <v-app class="app app--desktop">
    <v-app-bar flat color="white" absolute>
      <v-toolbar-title>
        <a href="/">
          <v-img src="/logo_with_title.svg" min-width="160" />
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
        href="https://weblate.magicpods.app/engage/magicpods-windows/"
        depressed
        rounded
        color="white"
        class="mr-4"
      >
        Translation
      </v-btn>
      <sparkles-wrapper>
        <v-btn
          depressed
          rounded
          color="primary"
          href="https://www.microsoft.com/ru-ru/p/magicpods/9p6skkfkshkm"
        >
          Download
        </v-btn>
      </sparkles-wrapper>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SparklesWrapper from '~/components/SparklesWrapper.vue'

@Component({
  components: { SparklesWrapper },
})
export default class DefaultMd extends Vue {
  mounted() {
    window?.document
      ?.querySelector('html')
      ?.setAttribute('style', 'font-size: 16px')
  }
}
</script>

<style lang="scss" scoped>
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
