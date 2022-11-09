import { createApp } from 'vue';
import AppElement from './App.vue'
import pluginInstall from "@/plugins"
import Router from "@/router"
import './tailwind.css'

(() => {
    const app = createApp(AppElement);
    app.use(pluginInstall);
    app.use(Router);
    app.mount('#app');
})()
