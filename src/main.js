import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const instance = createApp(App);

instance.use(store);
instance.use(router);
instance.use(ElementPlus);
instance.mount('#app');
