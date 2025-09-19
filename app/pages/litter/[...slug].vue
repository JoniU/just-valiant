<script lang="ts" setup>
const route = useRoute()
const { data: litter } = await useAsyncData(() =>
    queryCollection('litter').path(route.path).first()
)
</script>

<template>
    <div v-if="litter" class="prose mx-auto p-4">
        <h1>{{ litter.name }}</h1>
        <p><strong>Parents:</strong> {{ litter.parents.mother }} & {{ litter.parents.father }}</p>
        <p><strong>Born Date:</strong> {{ litter.born_date }}</p>

        <h2>Puppies</h2>
        <ul>
            <li v-for="puppy in litter.puppies" :key="puppy.name">
                {{ puppy.name }} ({{ puppy.sex }}) - {{ puppy.color }} - {{ puppy.status }}
            </li>
        </ul>

        <div v-if="litter.gallery_folder">
            <h2>Gallery</h2>
            <!-- Add your gallery logic here -->
        </div>
    </div>
    <div v-else>Content not found</div>
</template>