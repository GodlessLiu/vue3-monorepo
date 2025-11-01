import type { UserConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import autoComponents from 'unplugin-vue-components/vite'

interface Options {
  appDirUrl: string
  tailwind?: boolean
}

export function createViteConfig(options: Options): UserConfig {
  const { appDirUrl, tailwind = true } = options
  const srcPath = fileURLToPath(new URL('./src', appDirUrl))
  const config: UserConfig = {
    plugins: [
      vue(),
      autoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
        dts: `${srcPath}/types/auto-imports.d.ts`,
      }),
      autoComponents({
        dirs: [
          `${srcPath}/components`,
        ],
        dts: `${srcPath}/types/components.d.ts`,
      }),
    ],
    resolve: {
      alias: {
        '@': srcPath,
      },
    },
  }
  if (tailwind)
    config.plugins!.push(tailwindcss())
  return config
}
