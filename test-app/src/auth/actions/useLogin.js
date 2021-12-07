import { useRouter } from 'vue-router'
import { useIdentityPasswordLogin } from 'auth-composables'

export default () => {
  const router = useRouter()
  const {
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    login,
  } = useIdentityPasswordLogin()

  async function onLoginClicked () {
    await login()
    if (!hasErrors.value) {
      router.push({ name: 'dashboard' })
    }
  }

  function onForgotPasswordClicked () {
    router.push({ name: 'auth.requestPasswordReset' })
  }

  return {
    onLoginClicked,
    onForgotPasswordClicked,
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    login,
  }
}
