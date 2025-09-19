<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);
const items = ref([
  {
    label: "Etusivu",
    icon: "i-mingcute-home-2-line",
    to: "/",
    children: [],
  },
  {
    label: "Bolognese",
    icon: "i-mingcute-dog-fill",
    to: "/bolognese/",
    children: [],
  },
  {
    label: "Koirat",
    icon: "i-mingcute-dog-fill",
    to: "/dogs/",
    children: [],
  },
  {
    label: "Pentueet",
    icon: "i-mingcute-calendar-2-line",
    to: "/litter/",
    children: [],
  },
  {
    label: "Yhteystiedot",
    icon: "i-mingcute-contacts-line",
    to: "/contact/",
  },
]);
</script>

<template>
  <header class="bg-white shadow-md z-20">
    <div class="container mx-auto px-2 py-3 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-3">
        <img
          src="/images/olivia-piirros.svg"
          alt="Just Valiant Kennel"
          class="h-8 w-8 md:h-16 md:w-16"
        />
        <p class="text-md md:text-lg font-serif font-bold text-gray-800">
          Just Valiant
        </p>
      </NuxtLink>

      <!-- Hamburger Icon -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="sm:hidden text-gray-800 focus:outline-none"
      >
        <UIcon
          :name="isMenuOpen ? 'i-mdi-close' : 'i-mdi-menu'"
          :color="isMenuOpen ? 'primary' : 'accent'"
          class="text-3xl"
        />
      </button>

      <!-- Navigation Menu -->
      <nav class="max-sm:hidden">
        <ul
          class="flex flex-row items-center space-x-3 lg:space-x-6 space-y-0 px-0 py-0"
        >
          <li v-for="item in items" :key="item.label" class="group relative">
            <NuxtLink
              :to="item.to"
              :class="[
                'flex items-center gap-1 md:gap-2 text-md font-medium transition-colors',
                route.path === item.to
                  ? 'text-accent'
                  : 'text-gray-700 hover:text-primary',
              ]"
            >
              <UIcon :name="item.icon" class="text-md lg:text-lg" />
              <span>{{ item.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <nav
      v-if="isMenuOpen"
      class="w-full pb-4 sm:hidden bg-muted shadow-md z-10 ease-in-out duration-300"
    >
      <ul class="flex flex-col items-center space-y-4 px-4 py-4">
        <li v-for="item in items" :key="item.label" class="group relative">
          <NuxtLink
            :to="item.to"
            :class="[
              'flex items-center gap-2 text-md font-medium transition-colors',
              route.path === item.to
                ? 'text-accent'
                : 'text-gray-700 hover:text-primary',
            ]"
            @click="isMenuOpen = !isMenuOpen"
          >
            <UIcon :name="item.icon" class="text-xl" />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
