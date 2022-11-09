import { createApp } from 'vue';
import AppElement from './App.vue'

(() => {
    const app = createApp(AppElement);
    // app.use(pluginInstall);
    app.mount('#app');
})()
