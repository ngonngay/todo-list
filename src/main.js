import { createApp } from 'vue'
import '@/assets/css/style.css'
import App from './App.vue'
import router from "./router";
import { store } from './store';

import "bootstrap/scss/bootstrap.scss";

import 'bootstrap';

createApp(App).use(store).use(router).mount('#app')
