<script setup lang="ts">
import { ref, computed } from 'vue';

// Props
const props = defineProps({
    dog: {
        type: Object,
        required: true,
    },
});
const { dog } = props;

// Filter gallery URLs to only include valid strings
const galleryUrls = computed(() =>
    Array.isArray(dog.meta?.gallery_urls)
        ? dog.meta.gallery_urls.filter((url: unknown): url is string => typeof url === 'string')
        : []
);

// Reactive variables
const showLightbox = ref(false);
const currentImage = ref<string | undefined>(undefined);

// Functions
const openLightbox = (image: string) => {
    currentImage.value = image;
    showLightbox.value = true;
};

const closeLightbox = () => {
    showLightbox.value = false;
    currentImage.value = undefined; // Reset to undefined
};
</script>

<template>
    <div class="bg-white shadow-lg rounded-md">
        <!-- Header -->
        <div class="flex items-center space-x-2 border-b border-border bg-muted rounded-t-md p-2">
            <NuxtImg provider="imagekit" :src="dog.avatar_url" height="64" width="64" :modifiers="{ fit: 'contain' }"
                class="w-16 h-16 rounded-full object-cover" />
            <div>
                <h2 class="text-lg font-bold text-gray-800 mb-0">{{ dog.name }}</h2>
                <p class="text-sm text-gray-500">{{ dog.calling_name }}</p>
            </div>
        </div>

        <!-- Gallery -->
        <div v-if="galleryUrls.length > 0" class="my-4 p-2 px-14 mx-auto">
            <UCarousel v-slot="{ item }" arrows :items="galleryUrls"
                :ui="{ item: 'basis-1/2 md:basis-1/3 lg:basis1/4' }" :autoplay="{ delay: 2000 }" class="">
                <!-- Carousel Image -->
                <NuxtImg v-if="item" provider="imagekit" :src="item as string" width="251" height="251" fit="cover"
                    class="rounded-md cursor-pointer" format="webp" loading="lazy"
                    @click.stop="() => openLightbox(item as string)" />

                <!-- Lightbox -->
                <Teleport to=" body">
                    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
                        <div v-if="showLightbox"
                            class="z-10 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 md:p-8"
                            @click="closeLightbox">
                            <NuxtImg provider="imagekit" :src="currentImage"
                                class="max-w-full max-h-full md:max-w-[90vw] md:max-h-[90vh] rounded-md" format="webp"
                                loading="lazy" />
                        </div>
                    </Transition>
                </Teleport>
            </UCarousel>
        </div>

        <!-- Dog Details -->
        <div class="mt-4 space-y-2 px-14 p-2">
            <p class="flex items-center space-x-2">
                <UIcon name="i-mingcute-dog-line" class="text-ui-primary" />
                <span><strong>Rotu:</strong>&nbsp;{{ dog.breed }}</span>
            </p>
            <p class="flex items-center space-x-2">
                <UIcon :name="dog.sex === 'uros' ? 'i-mingcute-male-line' : 'i-mingcute-female-line'"
                    class="text-ui-primary" />
                <span><strong>Sukupuoli:</strong>&nbsp;{{ dog.sex }}</span>
            </p>
            <p class="flex items-center space-x-2">
                <UIcon name="i-mingcute-calendar-line" class="text-ui-primary" />
                <span><strong>Syntynyt:</strong>&nbsp;{{ dog.born_date }}</span>
            </p>
        </div>

        <!-- Links -->
        <div v-if="dog.registry_link || dog.instagram_link" class="mt-4 px-14  space-y-2 p-2">
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
        <div v-if="dog.titles?.length" class="mt-4 px-14 pb-8 p-2">
            <h3 class="text-lg font-semibold text-gray-800">Tittelit:</h3>
            <ul class="list-disc list-inside text-gray-600">
                <li v-for="title in dog.titles" :key="title">{{ title }}</li>
            </ul>
        </div>
    </div>
</template>