const xhr = new XMLHttpRequest();
const url = 'https://bar.other/resources/https://sistemparkir15.000webhostapp.com/api/post/';


import { createApp } from 'vue'
import App from './App.vue'

//import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//import router
import router from './router'

const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')
