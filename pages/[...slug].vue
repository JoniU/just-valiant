<script lang="ts" setup>
const route = useRoute()
// Dynamically fetch content based on the current route
const { data: page } = await useAsyncData(route.path, () =>
    queryCollection('content').path(route.path).first()
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