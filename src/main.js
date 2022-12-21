import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import ButtonComponent from 'primevue/button';
import ToastComponent from 'primevue/toast';
import CardComponent from 'primevue/card';
import CheckboxComponent from 'primevue/checkbox';
import ProgressSpinner from 'primevue/progressspinner';

import 'primevue/resources/themes/saga-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue)
app.use(VueAxios, axios)
app.component('ButtonComponent', ButtonComponent)
app.component('InputText', InputText)
app.component('ToastComponent', ToastComponent)
app.component('CardComponent', CardComponent)
app.component('CheckboxComponent', CheckboxComponent)
app.component('ProgressSpinner', ProgressSpinner)

app.mount('#app')
