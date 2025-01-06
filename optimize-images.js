const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/';
const outputDir = './public/optimized-images/';

fs.readdirSync(inputDir).forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.[^.]+$/, '.webp'));

    sharp(inputPath)
        .resize(1080) // Resize to a width of 800px
        .toFormat('webp') // Convert to WebP
        .toFile(outputPath, (err, info) => {
            if (err) console.error(err);
            else console.log(`Optimized: ${outputPath}`);
        });
});