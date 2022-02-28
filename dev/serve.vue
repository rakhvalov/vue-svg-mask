<script lang="ts">
import { defineComponent } from 'vue';
import VueSvgMask from '@/vue-svg-mask.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueSvgMask
  }
});
</script>

<template>
  <div id="app">
    <vue-svg-mask />
  </div>
</template>
