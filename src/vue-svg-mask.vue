<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueSvgMask",
  props: {
    src: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "contain",
    },
    repeat: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "rgba(0,0,0,1)",
    },
    width: {
      type: String,
      default: "64px",
    },
    height: {
      type: String,
      default: "64px",
    },
  },
});
</script>

<template>
  <div
    v-if="src"
    :style="{
      maskImage: 'url(' + src + ')',
      background: color,
      width,
      height,
      maskSize: size,
    }"
    :class="[{ 'vue-svg-mask': !repeat }]"
  />
</template>

<style scoped>
.vue-svg-mask {
  mask-repeat: no-repeat;
}
</style>
