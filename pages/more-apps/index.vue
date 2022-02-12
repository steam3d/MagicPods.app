<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <div
      class="d-flex flex-wrap justify-center align-center flex-column"
      style="max-width: 896px"
    >
      <h5 class="text-h3 font-weight-bold pb-2">More apps ✨</h5>
      <div class="apps-container">
        <div class="d-flex pa-6 border rounded-md">
          <div class="mr-6 d-none d-sm-block">
            <v-img src="/img/MagicPodsLogo.png" class="rounded-md" />
          </div>
          <div class="d-flex flex-column">
            <div class="text-h5 font-weight-bold mb-2 d-flex align-center">
              <div class="d-sm-none mr-4">
                <v-img
                  src="/img/MagicPodsLogo.png"
                  class="rounded-md"
                  width="48"
                  height="48"
                />
              </div>
              MagicPods
            </div>
            <div class="mb-2 subtitle">Add a little magic to your AirPods.</div>
            <div class="mb-1">
              <microsoft-mini-btn />
            </div>
          </div>
        </div>

        <div class="d-flex pa-6 border rounded-md">
          <div class="mr-6 d-none d-sm-block">
            <v-img src="/img/DinoLogo.png" class="rounded-md" />
          </div>
          <div class="d-flex flex-column">
            <div class="text-h5 font-weight-bold mb-2 d-flex align-center">
              <div class="d-sm-none mr-4">
                <v-img
                  src="/img/DinoLogo.png"
                  class="rounded-md"
                  width="48"
                  height="48"
                />
              </div>
              Yet Another Dino
            </div>
            <div class="mb-2 subtitle">
              Run, jump, and dodge in a dangerous adventure.
            </div>
            <div class="mb-1">
              <v-img src="/google-play-logo.svg" height="24" width="24" />
            </div>
          </div>
        </div>

        <div class="d-flex pa-6 border rounded-md">
          <div class="mr-6 d-none d-sm-block">
            <v-img src="/img/MagicSelectLogo.png" class="rounded-md" />
          </div>
          <div class="d-flex flex-column">
            <div class="text-h5 font-weight-bold mb-2 d-flex align-center">
              <div class="d-sm-none mr-4">
                <v-img
                  src="/img/MagicSelectLogo.png"
                  class="rounded-md"
                  width="48"
                  height="48"
                />
              </div>
              MagicSelect
            </div>
            <div class="mb-2 subtitle">
              Select and copy text from any images in many languages.
            </div>
            <div class="mb-1">
              <microsoft-mini-btn />
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import MicrosoftMiniBtn from '../../components/MicrosoftMiniBtn.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { MicrosoftMiniBtn },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.text-h5 {
  line-height: 28.44px;
}
.subtitle {
  line-height: 28px;
}
.flex-grow {
  flex-grow: 1;
}
.border {
  border: 1px solid #f2f2f2;
}
.rounded-md {
  border-radius: 8px;
}
.apps-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px 24px;
  grid-template-areas:
    '.'
    '.';
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      '. .'
      '. .';
  }
}
</style>
