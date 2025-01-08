<template>
  <UApp>
    <Header />
    <main class="container mx-auto max-w-3xl px-4 py-3 grow">
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
