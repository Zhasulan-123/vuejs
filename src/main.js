import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

createApp(App).use(router).mount('#app');

import "bootstrap/dist/js/bootstrap.js";
