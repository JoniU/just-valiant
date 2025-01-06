<template>
    <UCard class="mb-6">
        <template #header>
            <div>
                <h2 class="text-xl font-bold">{{ litter.name }}</h2>
                <p class="text-sm text-gray-600">Syntynyt: {{ litter.born_date }}</p>
            </div>
        </template>

        <div class="my-4">
            <!-- Parents Information -->
            <p><strong>Äiti:</strong> {{ litter.parents.mother }}</p>
            <p><strong>Isä:</strong> {{ litter.parents.father }}</p>
        </div>

        <!-- Puppies List -->
        <div class="my-4">
            <h3 class="font-semibold">Pennut:</h3>
            <ul>
                <li v-for="puppy in litter.puppies" :key="puppy.name" class="my-1">
                    <strong>{{ puppy.name }}</strong> ({{ puppy.sex }}) - {{ puppy.color }} -
                    <span :class="puppyStatusClass(puppy.status)">
                        {{ puppy.status }}
                    </span>
                </li>
            </ul>
        </div>

        <!-- Gallery -->
        <div v-if="galleryItems.length" class="my-4">
            <h3 class="font-semibold mb-2">Gallery:</h3>
            <UCarousel v-slot="{ item }" arrows dots :items="galleryItems" :ui="{ item: 'basis-1/3' }">
                <nuxt-img :src="item" width="320" height="320" fit="cover" class="rounded-md" />
            </UCarousel>
        </div>
        <template #footer>
            <ContactForm />
        </template>
    </UCard>
</template>

<script setup lang="ts">
const props = defineProps({
    litter: {
        type: Object,
        required: true,
    },
})

const { litter } = props;


/**
 * Compute the CSS class for a puppy's status.
 */
const puppyStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
        case 'available':
            return 'text-green-600 font-bold'
        case 'reserved':
            return 'text-yellow-600 font-bold'
        case 'sold':
            return 'text-red-600 font-bold'
        default:
            return ''
    }
}

// Gallery items from the litter's folder
// Import all images
const allImages = import.meta.glob('public/images/**/*.jpg', { eager: true })

// Normalize gallery folder to remove leading/trailing slashes
const galleryFolderPath = `/public/${litter.gallery_folder.replace(/^\/|\/$/g, '')}/`;

// Filter gallery images based on the normalized folder path
const galleryItems = litter.gallery_folder
    ? Object.keys(allImages)
        .filter((path) => path.startsWith(galleryFolderPath))
        .map((path) => path.replace('/public', ''))
    : [];

</script>