<script setup lang="ts">
import { UIcon } from '#components';

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
    },
]);
</script>

<template>
    <footer class="bg-primary text-white w-full mt-8">
        <!-- Top Row -->
        <div class="bg-accent text-white w-full py-6">
            <div class="container mx-auto max-w-5xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <!-- Column 1: Social Media -->
                <div class="flex flex-col items-center justify-center">
                    <h3 class="font-bold text-xl mb-2">Seuraa meitä</h3>
                    <div class="w-1/2 h-[1px] bg-white mx-auto mt-0 mb-8"></div>
                    <div class="flex space-x-4">
                        <a v-for="item in items" :key="item.to" :href="item.to" :target="item.target || '_self'"
                            rel="noopener noreferrer"
                            class="text-3xl text-white hover:text-gray-300 transition duration-200 bg-primary w-15 h-15 rounded-full p-2 justify-center items-center flex hover:bg-white hover:text-primary">
                            <UIcon :name="item.icon" size="40" />
                        </a>
                    </div>
                </div>

                <!-- Column 2: Kasvattajan tiedot -->
                <div class="flex flex-col items-center text-center ">
                    <h3 class="font-bold text-xl mb-2">Kasvattajan tiedot</h3>
                    <div class="w-1/2 h-[1px] bg-white mx-auto mt-0 mb-6"></div>
                    <p>Olen käynyt Kasvattajan Peruskurssin vuonna 2023.</p>
                    <div class="w-1/2 h-[1px] bg-primary mx-auto mt-2 mb-2"></div>
                    <p>Kennelnimi Just Valiant on myönnetty vuonna 2024.</p>
                    <div class="w-1/2 h-[1px] bg-primary mx-auto mt-2 mb-2"></div>
                    <p>Olen allekirjoittanut Suomen Kennelliiton kasvattajasopimuksen.</p>
                    <div class="w-1/2 h-[1px] bg-primary mx-auto mt-2 mb-2"></div>
                    <p>Suomen Kennelliiton jäsen alkaen 2023.</p>
                    <div class="w-1/2 h-[1px] bg-primary mx-auto mt-2 mb-2"></div>
                    <p>Bolognese yhdistyksen jäsen.</p>
                </div>

                <!-- Column 3: Links -->
                <div class="flex flex-col justify-center items-center space-y-4">
                    <h3 class="font-bold text-xl mb-2">linkit</h3>
                    <div class="w-1/2 h-[1px] bg-white mx-auto mt-0 mb-8"></div>
                    <!-- First Link -->
                    <a href="/images/olivia-header.jpg" class="flex justify-center items-center w-full group">
                        <NuxtImg src="/images/kennelliitto.svg"
                            class="h-12 w-auto p-[5px] bg-white rounded transition-transform transform group-hover:scale-105 shadow-sm group-hover:shadow-md duration-300" />
                    </a>
                    <div class="w-1/2 h-[1px] bg-white mx-auto mt-4 mb-8"></div>

                    <!-- Second Link -->
                    <a href="https://www.bolognesery.fi/" class="flex justify-center w-full group">
                        <NuxtImg src="/images/blognesery.svg"
                            class="h-40 w-auto p-[5px] bg-white rounded-full transition-transform transform group-hover:scale-105 shadow-sm group-hover:shadow-md duration-300" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom Row -->
        <div class="bg-primary text-white w-full py-3">
            <div class="container mx-auto text-center">
                <p class="text-sm">Just Valiant © 2025</p>
            </div>
        </div>
    </footer>
</template>