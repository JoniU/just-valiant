<script setup lang="ts">
const items = ref([
    {
        icon: 'i-mingcute-instagram-line',
        to: 'https://www.instagram.com/justvaliantkennel',
        target: '_blank',
    },
    {
        icon: 'i-mingcute-facebook-fill',
        to: 'https://www.facebook.com/profile.php?id=61570210745846',
        target: '_blank',

    },
    {
        icon: 'i-mingcute-contacts-line',
        to: '/contact/',
    }
])
</script>

<template>
    <footer class="bg-primary text-white w-full" style="background-color: var(--ui-primary); color: white;">
        <div class="container mx-auto px-2 py-1">
            <UNavigationMenu :items="items" color="neutral" class="justify-center text-white" />
        </div>
    </footer>
</template>

<style>
footer .text-\[var\(--ui-text-highlighted\)\] {
    color: white !important;
}

footer .text-\[var\(--ui-text-dimmed\)\] {
    color: white !important;
}
</style>