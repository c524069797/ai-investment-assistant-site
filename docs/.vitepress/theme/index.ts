import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CommentBoard from './components/CommentBoard.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CommentBoard', CommentBoard)
  }
}
