import { boot } from 'quasar/wrappers'
import { AuthPlugin } from 'auth-composables'
import firebaseConfig from 'app/config/firebase-config'
import supabaseConfig from 'app/config/supabase-config'
import {
  FirebasePlugin,
  useIdentityPasswordRegister as useFirebaseIdentityPasswordRegister,
  useIdentityPasswordLogin as useFirebaseIdentityPasswordLogin,
  useIdentityPasswordLogout as useFirebaseIdentityPasswordLogout,
  useUnauthenticatedRedirector as useFirebaseUnauthenticatedRedirector,
  useAuthRedirector as useFirebaseAuthRedirector,
  useHandlesErrors as useFirebaseHandlesErrors,
  useAuthState as useFirebaseAuthState,
  useAuthenticatedRedirector as useFirebaseAuthenticatedRedirector,
  useFetchUser as useFirebaseFetchUser,
  usePasswordResetViaEmail as useFirebasePasswordResetViaEmail,
} from 'firebase-composables'
import {
  SanctumPlugin,
  useIdentityPasswordRegister as useSanctumIdentityPasswordRegister,
  useIdentityPasswordLogin as useSanctumIdentityPasswordLogin,
  useIdentityPasswordLogout as useSanctumIdentityPasswordLogout,
  useUnauthenticatedRedirector as useSanctumUnauthenticatedRedirector,
  useAuthRedirector as useSanctumAuthRedirector,
  useHandlesErrors as useSanctumHandlesErrors,
  useAuthState as useSanctumAuthState,
  useAuthenticatedRedirector as useSanctumAuthenticatedRedirector,
  useFetchUser as useSanctumFetchUser,
  usePasswordResetViaEmail as useSupabaseSanctumResetViaEmail,
} from 'sanctum-composables'
import {
  SupabasePlugin,
  useIdentityPasswordRegister as useSupabaseIdentityPasswordRegister,
  useIdentityPasswordLogin as useSupabaseIdentityPasswordLogin,
  useIdentityPasswordLogout as useSupabaseIdentityPasswordLogout,
  useUnauthenticatedRedirector as useSupabaseUnauthenticatedRedirector,
  useAuthRedirector as useSupabaseAuthRedirector,
  useHandlesErrors as useSupabaseHandlesErrors,
  useAuthState as useSupabaseAuthState,
  useAuthenticatedRedirector as useSupabaseAuthenticatedRedirector,
  useFetchUser as useSupabaseFetchUser,
  usePasswordResetViaEmail as useSupabasePasswordResetViaEmail,
} from 'supabase-composables'

export default boot(({ app }) => {
  app.use(FirebasePlugin, firebaseConfig)
  app.use(SanctumPlugin, firebaseConfig)
  app.use(SupabasePlugin, supabaseConfig)

  app.use(AuthPlugin, {
    default: 'sanctum',
    providers: {
      firebase: {
        features: {
          'identityPassword:register': useFirebaseIdentityPasswordRegister,
          'identityPassword:login': useFirebaseIdentityPasswordLogin,
          'identityPassword:logout': useFirebaseIdentityPasswordLogout,
          unauthenticatedRedirector: useFirebaseUnauthenticatedRedirector,
          authenticatedRedirector: useFirebaseAuthenticatedRedirector,
          errorHandler: useFirebaseHandlesErrors,
          fetchUser: useFirebaseFetchUser,
          authState: useFirebaseAuthState,
          authRedirector: useFirebaseAuthRedirector,
          passwordResetViaEmail: useFirebasePasswordResetViaEmail,
        },
      },
      sanctum: {
        features: {
          'identityPassword:register': useSanctumIdentityPasswordRegister,
          'identityPassword:login': useSanctumIdentityPasswordLogin,
          'identityPassword:logout': useSanctumIdentityPasswordLogout,
          unauthenticatedRedirector: useSanctumUnauthenticatedRedirector,
          authenticatedRedirector: useSanctumAuthenticatedRedirector,
          errorHandler: useSanctumHandlesErrors,
          fetchUser: useSanctumFetchUser,
          authState: useSanctumAuthState,
          authRedirector: useSanctumAuthRedirector,
          passwordResetViaEmail: useSupabaseSanctumResetViaEmail,
        },
      },
      supabase: {
        features: {
          'identityPassword:register': useSupabaseIdentityPasswordRegister,
          'identityPassword:login': useSupabaseIdentityPasswordLogin,
          'identityPassword:logout': useSupabaseIdentityPasswordLogout,
          unauthenticatedRedirector: useSupabaseUnauthenticatedRedirector,
          authenticatedRedirector: useSupabaseAuthenticatedRedirector,
          errorHandler: useSupabaseHandlesErrors,
          fetchUser: useSupabaseFetchUser,
          authState: useSupabaseAuthState,
          authRedirector: useSupabaseAuthRedirector,
          passwordResetViaEmail: useSupabasePasswordResetViaEmail,
        },
      },
    },
  })
})
