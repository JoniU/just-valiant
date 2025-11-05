<script setup lang="ts">
const route = useRoute()
const { data: dog, refresh } = await useAsyncData(
  `dog-${route.path}`,
  () => queryCollection('dogs').path(route.path).first(),
  {
    watch: [() => route.path],
  }
)
</script>

<template>
    <div v-if="dog">
        <h1>{{ dog.meta.name }}</h1>
    </div>
</template>