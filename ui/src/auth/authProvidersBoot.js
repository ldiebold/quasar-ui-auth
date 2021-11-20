import { boot } from 'quasar/wrappers'
import { VuePlugin } from 'auth-composables'
import {<% for (const feature of features) { %>
  <%= feature.composable %>,<% } %>
} from '<%= authProviderPackage %>'

boot(({ app }) => {
  app.use(VuePlugin, {
    providers: {
      default: {
        features: {
          'identityPassword:register': useIdentityPasswordRegister
        }
      }
    }
  })
})
export {<% for (const feature of features) { %>
  <%= feature.composable %>,<% } %>
}