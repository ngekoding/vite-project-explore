import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'

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
            const partialName = name.slice(1)
            return { 
              importName: partialName, 
              path: 'ant-design-vue/es',
              sideEffects: `ant-design-vue/es/${partialName}/style`,
            }
          } 
        }
      ]
    }),
  ]
  
})
