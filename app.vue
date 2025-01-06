<template>
  <UApp>
    <Header />
    <main class="container mx-auto px-4 py-3 flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </UApp>
</template>


<style>
#__nuxt {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Ensure content grows to fill the space */
}
</style>
