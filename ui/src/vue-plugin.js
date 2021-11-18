import AuthRegisterPage from './pages/firebase/AuthRegisterPage.vue'
import AuthSignInPage from './pages/firebase/AuthSignInPage.vue'
import AuthRegisterForm from './components/firebase/AuthRegisterForm.vue'
import AuthRegisterCard from './components/firebase/AuthRegisterCard.vue'
import AuthSignInCard from './components/firebase/AuthSignInCard.vue'
import AuthSignOutButton from './components/firebase/AuthSignOutButton.vue'

// eslint-disable-next-line no-undef
const version = __UI_VERSION__

function install (app, config) {
  app.provide('auth-default', config.authProvider)
}

export {
  version,
  AuthRegisterForm,
  AuthRegisterPage,
  AuthRegisterCard,
  AuthSignInPage,
  AuthSignInCard,
  AuthSignOutButton,

  install
}
