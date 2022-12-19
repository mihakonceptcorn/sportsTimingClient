import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import ButtonComponent from 'primevue/button';
import ToastComponent from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.component('ButtonComponent', ButtonComponent)
app.component('InputText', InputText)
app.component('ToastComponent', ToastComponent)

app.mount('#app')
