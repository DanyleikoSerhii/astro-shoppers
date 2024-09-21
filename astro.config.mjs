import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import { imageService } from '@unpic/astro/service'

import solidJs from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import astroIcon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  image: {
    service: imageService(),
  },
  integrations: [
    solidJs(),
    tailwind(),
    astroIcon({
      collections: {
        'skill-icons': () => import('skill-icons/icons'),
      },
    }),
  ],
})
