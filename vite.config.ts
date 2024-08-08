import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    server:{
        proxy:{
            "/api":{
                target:"http://localhost:8000",
                changeOrigin:true,
                rewrite:(path)=>path.replace(/^\/api/,'')
            },
        } // 代理
    },
  plugins: [
      vue(),
      UnoCSS(),
        AutoImport({
          imports:['vue',
              'vue-router',
              'pinia',
              {
                  "naive-ui": [
                      'useDialog',
                      'useMessage',
                      'useNotification',
                      'useLoadingBar'
                  ],
              },
          ],
          dts:'src/auto-imports.d.ts'
        }),
        Components({
            dirs: ['src/components'],
            resolvers: [NaiveUiResolver()],
            dts: 'src/components.d.ts',
        })
  ],
    resolve: {
        alias: {
        '@': path.resolve(__dirname, 'src'),
        },
    },
})
