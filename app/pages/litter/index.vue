<script setup lang="ts">
import { LitterList } from "#components";
const { data: litters, refresh } = await useAsyncData(
  "litter-all",
  () => queryCollection("litter").all(),
  {
    watch: [],
  }
);
</script>

<template>
  <LitterList :litters="litters" />
</template>
