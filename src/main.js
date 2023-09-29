import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/index.css';
import App from './App.vue';
import piniaPersist from 'pinia-plugin-persist';
// import Router from './router';

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);
app.use(pinia);
// app.use(Router);
app.mount('#app');
