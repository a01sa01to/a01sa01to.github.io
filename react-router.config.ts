import type { Config } from '@react-router/dev/config'

export default {
  prerender() {
    return ['/']
  },
} satisfies Config
