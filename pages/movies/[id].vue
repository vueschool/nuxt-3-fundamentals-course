<script setup>
const route = useRoute();

// {"Response":"False","Error":"Incorrect IMDb ID."}

const { data } = useFetch(
  `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
  {
    pick: ["Plot", "Title"],
    key: `/movies/${route.params.id}`,
    onResponse({ request, response }) {
      if (response._data.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
    },
  }
);
</script>
<template>
  <div>
    <pre>
        {{ data }}
    </pre>
  </div>
</template>
