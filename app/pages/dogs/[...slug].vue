<script setup lang="ts">
const { data: dog } = await useAsyncData(() => queryCollection('dogs').first())

</script>

<template>
    <div v-if="dog">
        <h1>{{ dog.meta.name }}</h1>
    </div>
</template>