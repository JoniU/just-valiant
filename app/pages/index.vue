<script lang="ts" setup>
const route = useRoute();

// Fetch page content dynamically based on the route
const { data: page, refresh } = await useAsyncData(
  `content-${route.path}`,
  () => queryCollection("content").path(route.path).first(),
  {
    watch: [() => route.path],
  }
);

// Set SEO metadata
useSeoMeta({
  title: page?.value?.title || "Default Title",
  description: page?.value?.description || "Default Description",
});
</script>

<template>
  <!-- <LitterList /> -->
  <ContentRenderer
    v-if="page"
    :value="page"
    class="prose container mx-auto max-w-3xl px-4 py-3 grow"
  />
  <div>
    <h2 class="text-2xl font-bold mt-8 mb-6 text-center">
      Oletko kiinnostunut pennuista?
    </h2>
    <p class="mb-6 text-center">
      Täytä alla oleva lomake, niin otamme sinuun yhteyttä mahdollisimman pian.
    </p>
    <UCollapsible
      class="flex flex-col gap-2 w-full max-w-xl mx-auto bg-white rounded-md shadow-sm border border-gray-200 mb-2"
    >
      <UButton
        label="Avaa lomake"
        color="primary"
        variant="solid"
        trailing-icon="i-lucide-chevron-down"
        size="xl"
        block
        class=""
      />
      <template #content>
        <ContactForm class="p-4" />
      </template>
    </UCollapsible>
  </div>
</template>
