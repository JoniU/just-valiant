import fs from 'fs';
import path from 'path';

const imageSizes = [
  '_',
  's_32x32',
  's_64x64',
  'fit_cover&s_500x500',
  'fit_cover&s_1000x1000'
];

const imageFolder = './public'; // Path to your images folder
const basePath = '/_ipx';

// Define a function to get image routes with explicit types
function getImageRoutes(folder: string): string[] {
  const files: string[] = fs.readdirSync(folder); // Explicitly type files
  const routes: string[] = []; // Explicitly type routes

  files.forEach((file) => {
    const filePath = path.join(folder, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Recursively process subdirectories
      routes.push(...getImageRoutes(filePath));
    } else if (/\.(png|jpe?g|svg|gif|webp)$/i.test(file)) {
      // Add routes for each size
      imageSizes.forEach((size) => {
        routes.push(`${basePath}/${size}/${path.relative(imageFolder, filePath)}`);
      });
    }
  });

  return routes;
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable server-side rendering
  app: {
    baseURL: '/', // Replace <repository-name> with the name of your GitHub repository
  },
  nitro: {
    preset: 'github_pages', // Ensure static site generation
    prerender: {
      routes: [
        '/',
        '/_ipx/s_32x32/images/olivia/olivia.png',
        '/_ipx/s_64x64/images/olivia/olivia.png',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-1.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-2.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-3.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-4.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-5.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-6.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-7.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-8.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-9.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-10.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-11.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-12.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-13.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-14.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-15.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-16.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-17.jpg',
        '/_ipx/fit_cover&s_1000x1000/images/olivia/olivia-18.jpg',
        ...getImageRoutes(imageFolder),
      ],
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  },
})