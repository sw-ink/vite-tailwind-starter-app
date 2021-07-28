<template>
  <div class="mb-12">
    <p class="text-red-600" v-if="!embedded">It doesn't look like we're in a swink.</p>
    <p class="text-blue-600" v-else>We're in a swink!</p>
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { SwinkBridge } from "@swink/swink-bridge"

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      embedded: false
    }
  },
  async mounted() {
    const token = await SwinkBridge.getAppToken()
    this.embedded = true
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
