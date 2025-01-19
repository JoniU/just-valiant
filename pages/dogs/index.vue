<script setup lang="ts">
const { data: dogs } = await useAsyncData(() =>
    queryCollection('dogs').all()
)
</script>

<template>
    <div class="prose container mx-auto max-w-3xl px-4 py-3 grow">
        <div v-if="dogs" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <DogCard v-for="dog in dogs" :key="dog.path" :dog="dog" />
        </div>
    </div>
</template>