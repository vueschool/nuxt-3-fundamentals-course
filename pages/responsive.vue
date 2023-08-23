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
  left: 0,
  top: 0,
  width: 0,
  height: 0,
});

const extract = computed(() => {
  if (crop.value.width && crop.value.height)
    return `${crop.value.left}_${crop.value.top}_${crop.value.width}_${crop.value.height}`;
  return;
});
</script>
<template>
  <NuxtPicture
    format="avif"
    src="/cat.jpg"
    sizes="xs:100vw sm:50vw md:1860px"
    :modifiers="{
      ...modifiers,
      extract: extract,
    }"
  />
</template>

<style scoped>
:deep(img) {
  display: block;
  max-width: 100%;
}
</style>
