<script setup lang="ts">
const props = defineProps({
    dog: {
        type: Object,
        required: true,
    },
})

const { dog } = props;

// Import all images
const allImages = import.meta.glob('public/images/**/*.jpg', { eager: true })

// Normalize gallery folder to remove leading/trailing slashes
const galleryFolderPath = `/public/${dog.gallery_folder.replace(/^\/|\/$/g, '')}/`;

// Filter gallery images based on the normalized folder path
const galleryItems = dog.gallery_folder
    ? Object.keys(allImages)
        .filter((path) => path.startsWith(galleryFolderPath))
        .map((path) => path.replace('/public', ''))
    : [];
</script>

<template>
    <UCard>
        <template #header class="">
            <div class="flex items-center space-x-4">
                <UAvatar :src="dog.avatar_url" class="rounded-full border-2 border-ui-primary" />
                <div>
                    <h2 class="text-lg font-bold">{{ dog.name }}</h2>
                    <p class="text-sm text-gray-500">{{ dog.calling_name }}</p>
                </div>
            </div>
        </template>

        <!-- Gallery -->
        <div v-if="galleryItems.length" class="my-4">
            <UCarousel v-slot="{ item }" dots :items="galleryItems" :ui="{ item: 'basis-1/3' }" class="mb-12">
                <NuxtImg :src="item" sizes="(max-width: 500px) 33vw, 200px" width="500" height="500" fit="cover"
                    class="rounded-md" format="webp" loading="lazy" />
            </UCarousel>
        </div>

        <!-- Dog Details -->
        <div class="px-4">
            <p class="flex items-center space-x-2">
                <UIcon name="i-mingcute-dog-line" class="text-ui-primary" />
                <strong>Rotu:</strong>&nbsp;{{ dog.breed }}
            </p>
            <p class="flex items-center space-x-2">
                <UIcon :name="dog.sex === 'uros' ? 'i-mingcute-male-line' : 'i-mingcute-female-line'"
                    class="text-ui-primary" />
                <strong>Sukupuoli:</strong>&nbsp;{{ dog.sex }}
            </p>
            <p class="flex items-center space-x-2">
                <UIcon name="i-mingcute-calendar-line" class="text-ui-primary" />
                <strong>Syntynyt:</strong>&nbsp;{{ dog.born_date }}
            </p>
        </div>

        <!-- Links -->
        <div v-if="dog.registry_link || dog.instagram_link" class="px-4 mt-4">
            <p v-if="dog.registry_link" class="flex items-center space-x-2">
                <UIcon name="i-mingcute-book-line" class="text-ui-primary" />
                <a :href="dog.registry_link" target="_blank"
                    class="text-ui-primary underline flex items-center space-x-1">
                    <strong>Sukutaulu</strong>
                    <UIcon name="i-mingcute-link-line" class="text-ui-primary" />
                </a>
            </p>
            <p v-if="dog.instagram_link" class="flex items-center space-x-2">
                <UIcon name="i-mingcute-instagram-line" class="text-ui-primary" />
                <a :href="dog.instagram_link" target="_blank"
                    class="text-ui-primary underline flex items-center space-x-1">
                    <strong>Instagram</strong>
                    <UIcon name="i-mingcute-link-line" class="text-ui-primary" />
                </a>
            </p>
        </div>

        <!-- Titles -->
        <div v-if="dog.titles?.length" class="px-4 mt-4">
            <h3 class="text-lg font-semibold">Tittelit:</h3>
            <ul class="list-disc list-inside">
                <li v-for="title in dog.titles" :key="title">{{ title }}</li>
            </ul>
        </div>
    </UCard>
</template>