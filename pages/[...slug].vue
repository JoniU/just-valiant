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
    <ContentRenderer v-if="page" :value="page" class="prose" />
    <div v-else>Content not found</div>
</template>

<style lang="css">
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d7cdcc;
    border-radius: 8px;
}

.contact-form button {
    background-color: rgb(35, 22, 81);
    /* --ui-primary */
    color: white;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
}

.contact-form button:hover {
    background-color: rgb(29, 30, 44);
    /* Slightly darker primary */
}
</style>