import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    sm: 768,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'md',
})

Vue.mixin({
  computed: {
    $isMobile() {
      return ['xs', 'sm'].includes(this.$mq)
    },
  },
})
