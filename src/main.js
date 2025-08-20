//import css files
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/LineIcons.3.0.css';
import '@/assets/css/animate.css';
import '@/assets/css/tiny-slider.css';
import '@/assets/css/glightbox.min.css';
import '@/assets/css/main.css';

import '@/assets/css/slider.css';

import '@/assets/js/bootstrap.min.js';

import '@/assets/js/main.js';

//import router
import router from './router';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//import WOW from 'wowjs';

// Init libraries when app is mounted
app.mixin({
  mounted() {
     //new WOW.WOW().init();
    //Load your custom main.js after everything
      import('@/assets/js/main.js').then(() => {
        console.log('Custom main.js loaded');
      });
  }
});

// use the router
app.use(router);

// mount the app
app.mount('#app');
