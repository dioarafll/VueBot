// main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './icons';
import App from './App.vue';
import router from './routes';
import './tailwind.css';

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPersist);
app.use(router);
app.use(pinia);

app.component('Icon', FontAwesomeIcon);

app.mount('#app');
