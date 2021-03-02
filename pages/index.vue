<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <div class="d-flex flex-wrap justify-center mt-16">
      <div
        class="d-flex info-column align-center justify-center"
        v-if="$isMobile"
      >
        <h4 class="text-h4 font-weight-bold pb-12" style="max-width: 9.8em">
          Add a little magic to your AirPods ✨
        </h4>
      </div>
      <div class="d-flex info-column align-center justify-center mb-8">
        <video
          autoplay
          loop
          muted
          preload="auto"
          width="80%"
          style="min-width: 469px; max-width: 634px"
        >
          <source :src="videoSource" type="video/mp4" />
        </video>
      </div>
      <div
        class="d-flex mb-8 info-column justify-center col-12"
        v-if="$isMobile"
      >
        <microsoft-btn />
      </div>
      <article
        class="d-flex flex-column info-column"
        :style="{ 'max-width': '1350px', width: $isMobile ? '100%' : '' }"
      >
        <h3
          class="text-h3 font-weight-bold pb-12"
          style="max-width: 9.8em"
          v-if="!$isMobile"
        >
          Add a little magic to your AirPods ✨
        </h3>
        <div
          :class="[
            'd-flex',
            { 'flex-wrap': !$isMobile, 'flex-column': $isMobile },
          ]"
        >
          <div class="d-flex flex-column info-block">
            <h5 class="text-h5 font-weight-bold pb-2">Ear detection</h5>
            <span>Control playback with ear detection function.</span>
          </div>
          <div class="d-flex flex-column info-block">
            <h5 class="text-h5 font-weight-bold pb-2">Pop-up animation</h5>
            <span>The same iPhone animation as you like.</span>
          </div>
          <div class="d-flex flex-column info-block">
            <h5 class="text-h5 font-weight-bold pb-2">Battery info</h5>
            <span>
              Watch battery level as you wish in the application itself, on the
              live tiles or even on the tray icon.
            </span>
          </div>
          <div class="d-flex flex-column info-block">
            <h5 class="text-h5 font-weight-bold pb-2">Connect options</h5>
            <span>
              Connect AirPods right from the pop-up or even automatically.
            </span>
          </div>
        </div>
        <div v-if="!$isMobile">
          <microsoft-btn />
        </div>
      </article>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MicrosoftBtn from '../components/MicrosoftBtn.vue'

const pickRandom = <T>(variants: T[]): T =>
  variants[Math.floor(Math.random() * variants.length)]

@Component({
  components: { MicrosoftBtn },
})
export default class Index extends Vue {
  videoSources: string[] = [
    'airpods.mp4',
    'airpodspro.mp4',
    'powerbeatspro.mp4',
  ]
  videoSource = pickRandom(this.videoSources)
}
</script>

<style lang="scss">
.app--desktop {
  .info-block {
    min-width: 200px;
    max-width: 288px;
    width: calc(50% - 24px);
    margin-right: 24px;
    padding-bottom: 32px;
  }
  .info-column {
    width: 45%;
    &:nth-child(1) {
      margin-right: 5%;
    }
    min-width: 469px;
  }
}
.app--mobile {
  .info-block {
    padding: 0 32px;
    padding-bottom: 32px;
    span {
      max-width: 288px;
    }
  }
}
</style>
