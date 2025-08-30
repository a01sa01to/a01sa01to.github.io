import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import legacyPnpImporter from 'pnp-sass-importer/legacy'
import react from '@vitejs/plugin-react'
import { reactRouter } from '@react-router/dev/vite'
import scss from 'postcss-scss'
import scssPlugin from '@csstools/postcss-sass'
import tsconfigPaths from 'vite-tsconfig-paths'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        scssPlugin({
          importer: [legacyPnpImporter(__dirname)],
        }),
      ],
      syntax: scss,
    },
  },
  plugins: [react(), reactRouter(), tsconfigPaths()],
})
