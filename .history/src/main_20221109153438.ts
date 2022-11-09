import { createApp } from 'vue';
import AppElement from './App.vue'
import Router from "@/router/index"

(() => {
    const app = createApp(AppElement);
    // app.use(pluginInstall);
    app.use(Router);
    app.mount('#app');
})()
