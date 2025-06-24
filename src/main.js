import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap'; 

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Add Vue configuration
app.config.unwrapInjectedRef = true
app.config.compilerOptions = {
  isCustomElement: tag => tag.includes('-')
}

app.use(router)
app.mount('#app')

window.bootstrap = bootstrap
