<script setup lang="ts">
import { LitterList } from '#components';
const { data: litters } = await useAsyncData(() =>
    queryCollection('litter').all()
)
</script>

<template>
    <LitterList :litters="litters" />
</template>