<template>
  <v-container
    fluid
    class="d-flex align-center justify-center fill-height"
    style="max-width: 80%"
  >
    <div class="d-flex flex-wrap justify-center">
      <div class="d-flex info-column">
        <v-img src="video.png" />
      </div>
      <article class="d-flex flex-column info-column" style="max-width: 1350px">
        <h3 class="text-h3 font-weight-bold pb-12" style="max-width: 9.8em">
          Add a little magic to your AirPods ✨
        </h3>
        <div class="d-flex flex-wrap">
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
        <MicrosoftBtn />
      </article>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MicrosoftBtn from '../components/MicrosoftBtn.vue'

@Component({
  components: { MicrosoftBtn },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.info-block {
  min-width: 200px;
  max-width: 288px;
  padding-bottom: 32px;
}
.info-column {
  width: 45%;
  &:nth-child(1) {
    margin-right: 5%;
  }
  min-width: 469px;
}
</style>
