import { createApp } from "vue";
import axios from 'axios';
// axios.defaults.baseURL = 'https://myfirstapp-41187-default-rtdb.asia-southeast1.firebasedatabase.app';
// axios.defaults.headers.common['Authorization'] = "this test for header"
import App from "./App.vue";
import router from "./router";


// Importing the global css file
import "@/assets/css/style.scss";

// import i18n 

import VueI18n from "vue-i18n";
import i18n from './i18n';

import mitt from "mitt";

const emitter = mitt();

const vueApp = createApp(App);

vueApp.provide("emitter", emitter).use(router)
.use(i18n).use(VueI18n)
.mount("#app");
