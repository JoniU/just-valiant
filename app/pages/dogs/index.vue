<script setup lang="ts">
const { data: dogs } = await useAsyncData(() =>
    queryCollection('dogs').all()
)
</script>

<template>
    <div class="bg-muted">
        <div class="container mx-auto max-w-4xl pt-4 grow">
            <div v-if="dogs" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <DogCard v-for="dog in dogs" :key="dog.path" :dog="dog" />
            </div>
        </div>
    </div>
</template>