import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { SwinkBridge } from "@swink/swink-bridge"

SwinkBridge.init(import.meta.env.VITE_APP_ID)

createApp(App).mount('#app')
