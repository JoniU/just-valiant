<script setup lang="ts">
const { data: litters } = await useAsyncData(() =>
    queryCollection('litter').all()
)
</script>

<template>
    <div v-if="litters" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        <LitterCard v-for="litter in litters" :key="litter.path" :litter="litter" />
    </div>
</template>