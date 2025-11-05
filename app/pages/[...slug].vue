<script lang="ts" setup>
const route = useRoute()
// Dynamically fetch content based on the current route
const { data: page, refresh } = await useAsyncData(
  `content-${route.path}`,
  () => queryCollection('content').path(route.path).first(),
  {
    watch: [() => route.path],
  }
)
useSeoMeta({
    title: page.value?.title,
    description: page.value?.description
})
</script>

<template>
    <ContentRenderer v-if="page" :value="page" class="prose container mx-auto max-w-3xl px-4 py-3 grow" />
    <div v-else>Content not found</div>
</template>