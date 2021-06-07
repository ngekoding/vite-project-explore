import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { kebabCase } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  // 1. If you are using the ant-design series, you need to configure this
  // 2. Make sure less is installed in the dependency `npm i less -D`
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [
        (name) => {
          if (name.match(/^A[A-Z]/)) { // Ant Design Vue
            const importName = name.slice(1)
            const dirName = kebabCase(importName)
            return { 
              importName, 
              path: 'ant-design-vue/es',
              sideEffects: `ant-design-vue/es/${dirName}/style`,
            }
          } 
        }
      ]
    }),
  ]
  
})
