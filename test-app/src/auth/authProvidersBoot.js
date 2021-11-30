import { boot } from 'quasar/wrappers'
import { vuePlugin } from 'auth-composables'
import {
  useIdentityPasswordRegister,
  useIdentityPasswordLogin,
  useLogout,
  useFacebookPopupAuth,
  useTwitterPopupAuth,
  useGithubPopupAuth,
  useGooglePopupAuth,
} from 'firebase-composables'

boot(({ app }) => {
  app.use(vuePlugin, {
    defaultProvider: 'firebase',
    providers: {
      firebase: {
        features: {
          'authProvider:identityPassword:register': useIdentityPasswordRegister,
          'authProvider:identityPassword:login': useIdentityPasswordLogin,
          'authProvider:logout': useLogout,
          'socialAuth:popup:facebook': useFacebookPopupAuth,
          'socialAuth:popup:twitter': useTwitterPopupAuth,
          'socialAuth:popup:github': useGithubPopupAuth,
          'socialAuth:popup:google': useGooglePopupAuth,
        }
      }
    }
  })
})
export {
  useIdentityPasswordRegister,
  useIdentityPasswordLogin,
  useLogout,
  useFacebookPopupAuth,
  useTwitterPopupAuth,
  useGithubPopupAuth,
  useGooglePopupAuth,
}