import { useIdentityPasswordRegister } from 'auth-composables'
import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()
  const {
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    register,
    customFields,
  } = useIdentityPasswordRegister()

  async function onRegisterClicked () {
    await register()
    if (!hasErrors.value) {
      router.push('/')
    }
  }

  return {
    onRegisterClicked,
    form,
    customFields,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    register,
    router,
  }
}
