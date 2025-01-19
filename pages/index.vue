<script lang="ts" setup>

const route = useRoute();

// Fetch page content dynamically based on the route
const { data: page } = await useAsyncData(route.path, () =>
    queryCollection('content').path(route.path).first()
);

// Set SEO metadata
useSeoMeta({
    title: page?.value?.title || 'Default Title',
    description: page?.value?.description || 'Default Description',
});
</script>

<template>
    <LitterList />
    <ContentRenderer v-if="page" :value="page" class="prose" />
    <div v-else>Content not found</div>
</template>