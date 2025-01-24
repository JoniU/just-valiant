<template>
    <div v-if="litters && litters.length > 0">
        <div class="bg-bg-muted pt-4 pb-4">
            <div v-for="litter in litters" :key="litter.path" class="container mx-auto max-w-3xl px-4 py-3 grow">
                <!-- Litter Name -->
                <h1 class="text-2xl font-bold mb-8 text-center">{{ litter.name }}</h1>
                <!-- Parents Section -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
                    <!-- Mother Section -->
                    <div class="flex flex-col items-center bg-white shadow-lg rounded-md p-4 border border-gray-200">
                        <p class="text-center text-sm mb-1">Emä - {{ litter.parents.mother_calling_name }}</p>
                        <p class="flex items-center gap-2 text-lg font-semibold text-center">
                            <UIcon name="i-mingcute-female-line" class="text-error text-2xl" />
                            {{ litter.parents.mother }}
                        </p>
                        <NuxtImg provider="imagekit" :src="litter.parents.mother_image" height="128" width="128"
                            :modifiers="{ fit: 'contain' }"
                            class="w-32 h-32 rounded-full border-4 border-error mt-3 object-cover" />
                        <UButton :href="litter.parents.mother_pedigree_link" color="error" target="_blank"
                            class="mt-4 flex items-center gap-2 px-4 py-2 rounded-md">
                            <UIcon name="i-mdi-link" class="text-lg" />
                            Sukutaulu
                        </UButton>
                    </div>

                    <!-- Father Section -->
                    <div class="flex flex-col items-center bg-white shadow-lg rounded-md p-4 border border-gray-200">
                        <p class="text-center text-sm mb-1">Isä - {{ litter.parents.father_calling_name }}</p>
                        <p class="flex items-center gap-2 text-lg font-semibold text-center">
                            <UIcon name="i-mingcute-male-line" class="text-info text-2xl" />
                            {{ litter.parents.father }}
                        </p>
                        <NuxtImg provider="imagekit" :src="litter.parents.father_image" height="128" width="128"
                            :modifiers="{ fit: 'contain' }"
                            class="w-32 h-32 rounded-full border-4 border-info mt-3 object-cover" />
                        <UButton :href="litter.parents.father_pedigree_link" color="info" target="_blank"
                            class="mt-4 flex items-center gap-2 px-4 py-2 rounded-md">
                            <UIcon name="i-mdi-link" class="text-lg" />
                            Sukutaulu
                        </UButton>
                    </div>
                </div>

                <!-- General Information Box -->
                <div class="bg-white p-4 rounded-md shadow-sm border border-gray-200 mb-2">
                    <p class="flex items-center gap-2 mb-2">
                        <UIcon name="i-mdi-calendar-outline" class="text-gray-600 text-xl" />
                        <strong>Syntyy:</strong> {{ litter.born_date }}
                    </p>
                    <p class="flex items-center gap-2">
                        <UIcon name="i-mdi-dog" class="text-gray-600 text-xl" />
                        <strong>Rotu:</strong> {{ litter.breed }}
                    </p>
                </div>

                <!-- Puppies Section -->
                <div v-if="litter.puppies && litter.puppies.length > 0" class="mb-2">
                    <h2 class="text-xl font-semibold mb-2">Pentuja</h2>
                    <ul class="space-y-2">
                        <li v-for="puppy in litter.puppies" :key="puppy.name"
                            class="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200">
                            <UIcon name="i-mdi-paw" class="text-gray-600 text-xl" />
                            <span>
                                {{ puppy.name }} ({{ puppy.sex }}) - {{ puppy.color }} - {{ puppy.status }}
                                <a v-if="puppy.pedigree_link" :href="puppy.pedigree_link" target="_blank"
                                    class="text-blue-500 underline hover:text-blue-700 ml-2">
                                    Pedigree
                                </a>
                                <img v-if="puppy.image" :src="puppy.image" :alt="`Image of ${puppy.name}`"
                                    class="w-10 h-10 rounded-full ml-4 border" />
                            </span>
                        </li>
                    </ul>
                </div>
                <h2 class="text-2xl font-bold mt-8 mb-6 text-center">Oletko kiinnostunut pennuista?</h2>
                <p class="mb-6 text-center">
                    Täytä alla oleva lomake, niin otamme sinuun yhteyttä mahdollisimman pian.
                </p>
                <UCollapsible
                    class="flex flex-col gap-2 w-full max-w-xl mx-auto bg-white rounded-md shadow-sm border border-gray-200 mb-2">
                    <UButton label="Avaa lomake" color="primary" variant="solid" trailing-icon="i-lucide-chevron-down"
                        size="xl" block class="" />
                    <template #content>
                        <ContactForm class="p-4" />
                    </template>
                </UCollapsible>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Fetch litter data
const { data: litters } = await useAsyncData(() =>
    queryCollection('litter').all()
);
</script>