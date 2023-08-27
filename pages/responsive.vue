<script setup>
definePageMeta({
  layout: "plain",
});
const modifiers = ref({
  quality: 100,
  flip: undefined,
  flop: undefined,
  sharpen: undefined,
  blur: undefined,
  negate: undefined,
  tint: undefined,
  grayscale: undefined,
});

const crop = ref({
  left: 2213,
  top: 402,
  width: 800,
  height: 800,
});

const extract = computed(() => {
  if (crop.value.width && crop.value.height)
    return `${crop.value.left}_${crop.value.top}_${crop.value.width}_${crop.value.height}`;
  return;
});
</script>
<template>
  <picture>
    <source
      media="(max-width:650px)"
      srcset="/_ipx/extract_2213_402_800_800&w_1860&f_jpg/cat.jpg"
    />
    <img src="/_ipx/_/cat.jpg" alt="" />
  </picture>
</template>

<style scoped>
:deep(img) {
  display: block;
  max-width: 100%;
}
</style>
