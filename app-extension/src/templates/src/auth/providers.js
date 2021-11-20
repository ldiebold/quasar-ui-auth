import {<% for (const feature of features) { %>
  <%= feature.composable %>,<% } %>
} from '<%= authProviderPackage %>'
export {<% for (const feature of features) { %>
  <%= feature.composable %>,<% } %>
}