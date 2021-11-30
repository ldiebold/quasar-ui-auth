import { boot } from 'quasar/wrappers'
import { vuePlugin } from 'auth-composables'
import {<% for (const feature of features) { %>
  <%= feature.composable %>,<% } %>
} from '<%= authProviderPackage %>'

boot(({ app }) => {
  app.use(vuePlugin, {
    defaultProvider: '<%= authProviderIdentifier %>',
    providers: {
      firebase: {
        features: {<% for (const feature of features) { %>
          '<%= feature.id %>': <%= feature.composable %>,<% } %>
        }
      }
    }
  })
})
export {<% for (const feature of features) { %>
  <%= feature.composable %>,<% } %>
}