<script setup lang="ts">
const items = ref([
    {
        label: 'Etusivu',
        icon: 'i-mingcute-home-2-line',
        to: '/',
        children: []
    },
    {
        label: 'Bolognese',
        icon: 'i-mingcute-dog-fill',
        to: '/bolognese/',
        children: []
    },
    {
        label: 'Koirat',
        icon: 'i-mingcute-dog-fill',
        to: '/dogs/',
        children: []
    },
    {
        label: 'Pentueet',
        icon: 'i-mingcute-calendar-2-line',
        to: '/litter/',
        children: []
    },
    {
        label: 'Yhteystiedot',
        icon: 'i-mingcute-contacts-line',
        to: '/contact/',
    }
])
</script>

<template>
    <header class="bg-white shadow-md">
        <div
            class="container mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <!-- Logo and Name -->
            <div class="flex items-center space-x-3 justify-center md:justify-start md:mb-0">
                <img src="/public/olivia-piirros.svg" alt="Just Valiant Kennel" class="h-16 w-16" />
                <p class="text-lg font-serif font-bold text-gray-800 text-center md:text-left">Just Valiant</p>
            </div>

            <!-- Navigation Menu -->
            <div class="flex justify-center md:justify-end">
                <UNavigationMenu :items="items" class="justify-center" />
            </div>
        </div>
    </header>
</template>
