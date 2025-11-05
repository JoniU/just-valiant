<template>
  <div v-if="validLitters && validLitters.length > 0">
    <div class="bg-bg-muted pt-4 pb-4">
      <h1 class="text-2xl font-bold mt-8 mb-4 text-center">Pentueet</h1>
      <h2 class="text-xl font-bold mt-8 mb-4 text-center">
        Seuraava pentue suunnitteilla keväällä 2027
      </h2>
      <div
        v-for="litter in validLitters"
        :key="litter.path"
        class="container mx-auto max-w-3xl px-4 py-3 grow"
      >
        <!-- Litter Name -->
        <h1 class="text-2xl font-bold mt-8 mb-8 text-center">
          {{ litter.name }}
        </h1>

        <!-- Gallery Section (when puppies are born) -->
        <div
          v-if="
            litter.born && litter.gallery_urls && litter.gallery_urls.length > 0
          "
          class=""
        >
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div
              v-for="(imageUrl, index) in litter.gallery_urls"
              v-show="!failedImages.has(imageUrl)"
              :key="`${litter.path}-${index}-${imageUrl}`"
              class="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              @click="openLightbox(imageUrl, index, litter.gallery_urls)"
            >
              <NuxtImg
                provider="imagekit"
                :src="imageUrl"
                width="300"
                height="300"
                fit="cover"
                class="w-full h-full object-cover"
                format="webp"
                loading="lazy"
                @error="() => handleImageError(imageUrl)"
                @loaderror="() => handleImageError(imageUrl)"
              />
            </div>
          </div>

          <!-- Lightbox -->
          <Teleport to="body">
            <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
              <div
                v-if="showLightbox"
                class="z-50 fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center backdrop-blur-sm transition-all duration-300 p-4"
                @click="closeLightbox"
              >
                <div class="relative max-w-7xl max-h-full">
                  <button
                    @click.stop="closeLightbox"
                    class="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                  >
                    <UIcon name="i-mdi-close" class="text-2xl" />
                  </button>
                  <NuxtImg
                    v-if="currentImage && !failedImages.has(currentImage)"
                    provider="imagekit"
                    :src="currentImage"
                    class="max-w-full max-h-[90vh] rounded-md"
                    format="webp"
                    loading="lazy"
                    @error="
                      () => {
                        if (currentImage) handleImageError(currentImage);
                        closeLightbox();
                      }
                    "
                    @loaderror="
                      () => {
                        if (currentImage) handleImageError(currentImage);
                        closeLightbox();
                      }
                    "
                  />
                  <div
                    v-else
                    class="max-w-full max-h-[90vh] rounded-md bg-gray-800 text-white p-8 text-center"
                  >
                    <p>Kuva ei saatavilla</p>
                  </div>
                  <div
                    v-if="currentGalleryUrls && currentGalleryUrls.length > 1"
                    class="absolute inset-y-0 left-0 flex items-center"
                  >
                    <button
                      @click.stop="prevImage"
                      class="ml-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
                    >
                      <UIcon name="i-mdi-chevron-left" class="text-2xl" />
                    </button>
                  </div>
                  <div
                    v-if="currentGalleryUrls && currentGalleryUrls.length > 1"
                    class="absolute inset-y-0 right-0 flex items-center"
                  >
                    <button
                      @click.stop="nextImage"
                      class="mr-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
                    >
                      <UIcon name="i-mdi-chevron-right" class="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
          </Teleport>
        </div>

        <!-- General Information Box (hidden when puppies are born) -->
        <div
          v-if="!litter.born"
          class="bg-white p-4 rounded-md shadow-sm border border-gray-200 mb-2"
        >
          <p class="flex items-center gap-2 mb-2">
            <UIcon
              name="i-mdi-calendar-outline"
              class="text-gray-600 text-xl"
            />
            <strong>Syntyy:</strong> {{ litter.born_date }}
          </p>
          <p class="flex items-center gap-2">
            <UIcon name="i-mdi-dog" class="text-gray-600 text-xl" />
            <strong>Rotu:</strong> {{ litter.breed }}
          </p>
        </div>

        <!-- Puppies Section (shown when born) -->
        <div
          v-if="litter.born && litter.puppies && litter.puppies.length > 0"
          class="mb-2"
        >
          <div class="space-y-4">
            <div
              v-for="puppy in litter.puppies"
              :key="puppy.name"
              class="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <!-- Puppy Info -->
              <div class="space-y-2 mb-3">
                <!-- Name -->
                <div class="flex items-center gap-2">
                  <UIcon name="i-mdi-paw" class="text-gray-600 text-xl" />
                  <span class="font-semibold text-lg">{{ puppy.name }}</span>
                  <template v-if="puppy.status">
                    <span class="text-sm text-gray-600"
                      >- {{ puppy.status }}</span
                    >
                  </template>
                  <a
                    v-if="puppy.pedigree_link"
                    :href="puppy.pedigree_link"
                    target="_blank"
                    class="text-blue-500 underline hover:text-blue-700 ml-auto"
                  >
                    Pedigree
                  </a>
                </div>

                <!-- Details in one row -->
                <div class="flex items-center gap-4 flex-wrap">
                  <!-- Sex -->
                  <div class="flex items-center gap-2">
                    <UIcon
                      :name="
                        puppy.sex === 'male' || puppy.sex === 'uros'
                          ? 'i-mingcute-male-line'
                          : 'i-mingcute-female-line'
                      "
                      class="text-gray-600 text-xl"
                    />
                    <span>{{ puppy.sex }}</span>
                  </div>

                  <!-- Color -->
                  <div class="flex items-center gap-2">
                    <UIcon name="i-mdi-palette" class="text-gray-600 text-xl" />
                    <span>{{ puppy.color }}</span>
                  </div>

                  <!-- Breed -->
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-mingcute-dog-line"
                      class="text-gray-600 text-xl"
                    />
                    <span>Rotu: {{ litter.breed }}</span>
                  </div>

                  <!-- Born Date -->
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-mingcute-calendar-line"
                      class="text-gray-600 text-xl"
                    />
                    <span>Syntynyt: {{ litter.born_date }}</span>
                  </div>
                </div>
              </div>

              <!-- Puppy Gallery -->
              <div
                v-if="puppy.gallery_urls && puppy.gallery_urls.length > 0"
                class="mt-3"
              >
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center"
                >
                  <div
                    v-for="(imageUrl, index) in puppy.gallery_urls"
                    v-show="!failedImages.has(imageUrl)"
                    :key="`${puppy.name}-${index}-${imageUrl}`"
                    class="relative aspect-square overflow-hidden rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                    @click="openLightbox(imageUrl, index, puppy.gallery_urls)"
                  >
                    <NuxtImg
                      provider="imagekit"
                      :src="imageUrl"
                      width="300"
                      height="300"
                      fit="cover"
                      class="w-full h-full object-cover"
                      format="webp"
                      loading="lazy"
                      @error="() => handleImageError(imageUrl)"
                      @loaderror="() => handleImageError(imageUrl)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Parents Section -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
          <!-- Mother Section -->
          <div
            class="flex flex-col items-center bg-white shadow-lg rounded-md p-4 border border-gray-200"
          >
            <p class="text-center text-sm mb-1">
              Emä - {{ litter.parents.mother_calling_name }}
            </p>
            <p
              class="flex items-center gap-2 text-lg font-semibold text-center"
            >
              <UIcon
                name="i-mingcute-female-line"
                class="text-error text-2xl"
              />
              {{ litter.parents.mother }}
            </p>
            <NuxtImg
              v-if="
                litter.parents.mother_image &&
                !failedImages.has(litter.parents.mother_image)
              "
              provider="imagekit"
              :src="litter.parents.mother_image"
              height="128"
              width="128"
              :modifiers="{ fit: 'contain' }"
              class="w-32 h-32 rounded-full border-4 border-error mt-3 object-cover"
              @error="
                () => {
                  if (litter.parents.mother_image)
                    handleImageError(litter.parents.mother_image);
                }
              "
              @loaderror="
                () => {
                  if (litter.parents.mother_image)
                    handleImageError(litter.parents.mother_image);
                }
              "
            />
            <UButton
              v-if="litter.parents.mother_pedigree_link"
              :href="litter.parents.mother_pedigree_link"
              color="error"
              target="_blank"
              class="mt-4 flex items-center gap-2 px-4 py-2 rounded-md"
            >
              <UIcon name="i-mdi-link" class="text-lg" />
              Sukutaulu
            </UButton>
          </div>

          <!-- Father Section -->
          <div
            class="flex flex-col items-center bg-white shadow-lg rounded-md p-4 border border-gray-200"
          >
            <p class="text-center text-sm mb-1">
              Isä - {{ litter.parents.father_calling_name }}
            </p>
            <p
              class="flex items-center gap-2 text-lg font-semibold text-center"
            >
              <UIcon name="i-mingcute-male-line" class="text-info text-2xl" />
              {{ litter.parents.father }}
            </p>
            <NuxtImg
              v-if="
                litter.parents.father_image &&
                !failedImages.has(litter.parents.father_image)
              "
              provider="imagekit"
              :src="litter.parents.father_image"
              height="128"
              width="128"
              :modifiers="{ fit: 'contain' }"
              class="w-32 h-32 rounded-full border-4 border-info mt-3 object-cover"
              @error="
                () => {
                  if (litter.parents.father_image)
                    handleImageError(litter.parents.father_image);
                }
              "
              @loaderror="
                () => {
                  if (litter.parents.father_image)
                    handleImageError(litter.parents.father_image);
                }
              "
            />
            <UButton
              v-if="litter.parents.father_pedigree_link"
              :href="litter.parents.father_pedigree_link"
              color="info"
              target="_blank"
              class="mt-4 flex items-center gap-2 px-4 py-2 rounded-md"
            >
              <UIcon name="i-mdi-link" class="text-lg" />
              Sukutaulu
            </UButton>
          </div>
        </div>

        <div v-if="litter.show_contact_form !== false">
          <h2 class="text-2xl font-bold mt-8 mb-6 text-center">
            Oletko kiinnostunut pennuista?
          </h2>
          <p class="mb-6 text-center">
            Täytä alla oleva lomake, niin otamme sinuun yhteyttä mahdollisimman
            pian.
          </p>
          <UCollapsible
            class="flex flex-col gap-2 w-full max-w-xl mx-auto bg-white rounded-md shadow-sm border border-gray-200 mb-2"
          >
            <UButton
              label="Avaa lomake"
              color="primary"
              variant="solid"
              trailing-icon="i-lucide-chevron-down"
              size="xl"
              block
              class=""
            />
            <template #content>
              <ContactForm class="p-4" />
            </template>
          </UCollapsible>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Fetch litter data
const { data: litters } = await useAsyncData(() =>
  queryCollection("litter").all()
);

// Filter litters to ensure gallery_urls are valid and sort them
const validLitters = computed(() => {
  if (!litters.value) return [];
  const filtered = litters.value.map((litter) => {
    if (litter.gallery_urls && Array.isArray(litter.gallery_urls)) {
      return {
        ...litter,
        gallery_urls: litter.gallery_urls.filter(
          (url: unknown): url is string =>
            typeof url === "string" && url.trim().length > 0
        ),
      };
    }
    return litter;
  });

  // Sort by born_date (descending - most recent first)
  // Then by name as secondary sort
  return filtered.sort((a, b) => {
    // Parse born_date - try to extract year and month for proper sorting
    const parseDate = (dateStr: string): number => {
      if (!dateStr) return 0;
      // Try to extract year (last 4 digits)
      const yearMatch = dateStr.match(/\d{4}/);
      if (yearMatch) {
        const year = parseInt(yearMatch[0]);
        // Try to extract month (look for month names or numbers)
        const monthMap: Record<string, number> = {
          tammi: 1,
          helmi: 2,
          maalis: 3,
          huhti: 4,
          touko: 5,
          kesä: 6,
          heinä: 7,
          elo: 8,
          syys: 9,
          loka: 10,
          marras: 11,
          joulu: 12,
          kevät: 3,
          kev: 3,
          syksy: 9,
          syk: 9,
        };
        let month = 0;
        for (const [key, value] of Object.entries(monthMap)) {
          if (dateStr.toLowerCase().includes(key)) {
            month = value;
            break;
          }
        }
        // If no month found, try to extract number (e.g., "15.10 2025")
        if (month === 0) {
          const monthMatch = dateStr.match(/\.(\d+)/);
          if (monthMatch && monthMatch[1]) {
            month = parseInt(monthMatch[1]);
          }
        }
        return year * 100 + month;
      }
      return 0;
    };

    const dateA = parseDate(a.born_date || "");
    const dateB = parseDate(b.born_date || "");

    if (dateB !== dateA) {
      return dateB - dateA; // Descending (most recent first)
    }

    // Secondary sort by name
    return (a.name || "").localeCompare(b.name || "");
  });
});

// Track failed images to hide them
const failedImages = ref<Set<string>>(new Set());

// Handle image loading errors
const handleImageError = (imageUrl: string) => {
  if (imageUrl && !failedImages.value.has(imageUrl)) {
    failedImages.value.add(imageUrl);
    console.warn(`Failed to load image: ${imageUrl}`);
  }
};

// Lightbox state
const showLightbox = ref(false);
const currentImageIndex = ref(0);
const currentImage = ref<string | undefined>(undefined);
const currentGalleryUrls = ref<string[]>([]);

// Functions for lightbox navigation
const openLightbox = (
  imageUrl: string,
  index: number,
  galleryUrls: string[]
) => {
  currentImage.value = imageUrl;
  currentImageIndex.value = index;
  currentGalleryUrls.value = galleryUrls;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
  currentImage.value = undefined;
  currentGalleryUrls.value = [];
};

const getNextValidImage = (
  urls: string[],
  startIndex: number,
  direction: number
) => {
  const maxAttempts = urls.length;
  let attempts = 0;
  let index = startIndex;

  while (attempts < maxAttempts) {
    index = (index + direction + urls.length) % urls.length;
    const url = urls[index];
    if (url && typeof url === "string" && !failedImages.value.has(url)) {
      return { index, url };
    }
    attempts++;
  }
  return null;
};

const nextImage = () => {
  if (currentGalleryUrls.value.length > 0) {
    const next = getNextValidImage(
      currentGalleryUrls.value,
      currentImageIndex.value,
      1
    );
    if (next) {
      currentImageIndex.value = next.index;
      currentImage.value = next.url;
    } else {
      closeLightbox();
    }
  }
};

const prevImage = () => {
  if (currentGalleryUrls.value.length > 0) {
    const prev = getNextValidImage(
      currentGalleryUrls.value,
      currentImageIndex.value,
      -1
    );
    if (prev) {
      currentImageIndex.value = prev.index;
      currentImage.value = prev.url;
    } else {
      closeLightbox();
    }
  }
};
</script>
