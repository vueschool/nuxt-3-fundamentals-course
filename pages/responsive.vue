<script setup>
definePageMeta({
  layout: "plain",
});
</script>
<template>
  <NuxtImg src="/cat.jpg" sizes="xs:100vw sm:50vw md:1860px" />
</template>

<style scoped>
img {
  display: block;
  max-width: 100%;
}
</style>
