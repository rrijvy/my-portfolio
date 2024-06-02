import './assets/main.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faNpm,
  faSquareUpwork
} from '@fortawesome/free-brands-svg-icons'

config.familyDefault = 'classic'
config.styleDefault = 'duotone'

library.add(faCoffee)
library.add(faFacebookSquare, faLinkedin, faGithubSquare, faNpm, faSquareUpwork)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
