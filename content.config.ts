import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md'
        }),
        dogs: defineCollection({
            type: 'page',
            source: 'dogs/*.md',
            schema: z.object({
                name: z.string(),
                calling_name: z.string(),
                breed: z.string(),
                sex: z.string(),
                born_date: z.string(),
                avatar_url: z.string(),
                gallery_folder: z.string().optional(),
                registry_link: z.string().optional(),
                instagram_link: z.string().optional(),
                titles: z.array(z.string()).optional(),
            }),
        }),
        litter: defineCollection({
            type: 'page',
            source: 'litter/*.md',
            schema: z.object({
                name: z.string(),
                parents: z.object({
                    mother: z.string(),
                    mother_calling_name: z.string(),
                    mother_pedigree_link: z.string().optional(),
                    mother_image: z.string().optional(),
                    father: z.string(),
                    father_calling_name: z.string(),
                    father_pedigree_link: z.string().optional(),
                    father_image: z.string().optional(),
                }),
                breed: z.string(),
                born_date: z.string(),
                puppies: z.array(
                    z.object({
                        name: z.string(),
                        sex: z.string(),
                        color: z.string(),
                        status: z.string(), // Example: 'available', 'reserved', or 'sold'
                        image: z.string(),
                        pedigree_link: z.string().optional(),
                    })
                ),
                gallery_folder: z.string().optional(),
            }),
        }),
    }
})
