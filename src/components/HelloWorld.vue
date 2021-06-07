<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <a-date-picker v-model:value="date" />

  <br><br>

  <a-button type="primary" @click="state.count++">
    Ant Button: {{ state.count }}
  </a-button>
  
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
const date = ref()
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
