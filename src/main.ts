import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faNpm,
  faSquareUpwork
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFacebookSquare, faLinkedin, faGithubSquare, faNpm, faSquareUpwork)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
