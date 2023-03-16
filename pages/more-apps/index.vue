<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <div
      class="d-flex flex-wrap justify-center align-center flex-column mt-16"
      style="max-width: 896px"
    >
      <h5 class="text-h3 font-weight-bold mb-12 mt-12">More apps ✨</h5>
      <div class="apps-container">
        <a
          class="border hover:border-rainbow"
          href="https://www.microsoft.com/store/apps/9NGB2P0TSMBF"
        >
          <div class="d-flex pa-6 rounded-md fill-height">
            <div class="mr-6 d-none d-sm-block">
              <v-img src="/img/MagicTranslateLogo.png" class="rounded-md" max-height="150" max-width="150"/>
            </div>
            <div class="d-flex flex-column">
              <div class="text-h5 font-weight-bold mb-2 d-flex align-center">
                <div class="d-sm-none mr-4">
                  <v-img
                    src="/img/MagicTranslateLogo.png"
                    class="rounded-md"
                    width="48"
                    height="48"
                  />
                </div>
                MagicTranslate
              </div>
              <div class="mb-2 subtitle">
                Translate text with one hotkey
              </div>
              <div class="mb-1">
                <microsoft-mini-btn />
              </div>
            </div>
          </div>
        </a>

        <a
          class="border hover:border-rainbow"
          href="https://play.google.com/store/apps/details?id=yet.another.dino"
        >
          <div class="d-flex pa-6 rounded-md fill-height">
            <div class="mr-6 d-none d-sm-block">
              <v-img src="/img/DinoLogo.png" class="rounded-md" max-height="150" max-width="150"/>
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
        </a>

        <a
          class="border hover:border-rainbow"
          href="https://www.microsoft.com/store/apps/9N78GWBTW7L5"
        >
          <div class="d-flex pa-6 rounded-md fill-height">
            <div class="mr-6 d-none d-sm-block">
              <v-img src="/img/MagicSelectLogo.png" class="rounded-md" max-height="150" max-width="150"/>
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
        </a>

        <a
          class="border hover:border-rainbow"
          href="https://www.microsoft.com/store/apps/9P6SKKFKSHKM"
        >
          <div class="d-flex pa-6 rounded-md fill-height">
            <div class="mr-6 d-none d-sm-block">
              <v-img src="/img/MagicPodsLogo.png" class="rounded-md" max-height="150" max-width="150"/>
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
              <div class="mb-2 subtitle">
                Add a little magic to your AirPods.
              </div>
              <div class="mb-1">
                <microsoft-mini-btn />
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MicrosoftMiniBtn from '../../components/MicrosoftMiniBtn.vue'

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
a {
  text-decoration: none;
  color: inherit;
}
.hover\:border-rainbow {
  border-radius: 8px;
  &:hover {
    background: linear-gradient(135deg, #ffb900, #7fba00, #00a4ef, #f25022);
    padding: 1px;
    border: none;
    border-radius: 9px;
    > div {
      background-color: #fff;
    }
  }
}
.apps-container a {
  color: inherit;
}
</style>
