import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Giscus from './components/Giscus.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Giscus', Giscus)
  }
}

