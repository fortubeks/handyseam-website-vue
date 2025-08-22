// Import CSS files
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/LineIcons.3.0.css';
import '@/assets/css/animate.css';
import '@/assets/css/tiny-slider.css';
import '@/assets/css/glightbox.min.css';
import '@/assets/css/main.css';
import '@/assets/css/slider.css';

// Import Vue Router
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';

// Create Vue app
const app = createApp(App);

// Global mixin: runs on every component mount
app.mixin({
  mounted() {
    // Dynamically load JS libraries only once (client-side only)
    if (typeof window !== 'undefined') {
      import('@/assets/js/bootstrap.min.js')
        .then(() => console.log('Bootstrap JS loaded'))
        .catch(err => console.error('Failed to load Bootstrap', err));

      import('@/assets/js/main.js')
        .then(() => console.log('Custom main.js loaded'))
        .catch(err => console.error('Failed to load custom main.js', err));

      // If you later need WOW.js:
      // import('wowjs').then(WOW => {
      //   new WOW.WOW().init();
      // });
    }
  }
});

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
