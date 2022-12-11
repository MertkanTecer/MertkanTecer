import { createApp } from 'vue'
import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'
import BaseDialogue from './ui/BaseDialog.vue'
import store from './store'
import Main from './layouts/Main.vue'
import App from './App.vue'
const app = createApp(App)
app.component('the-header',TheHeader)
app.component('the-footer',TheFooter)
app.component('Main',Main)
app.component('base-dialog',BaseDialogue)
app.use(store)
app.mount('#app')
