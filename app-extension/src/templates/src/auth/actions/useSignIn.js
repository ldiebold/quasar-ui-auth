import { useRouter } from 'vue-router'
import { useIdentityPasswordLogin } from 'auth-composables'

export default () => {
  const router = useRouter()
  const {
    form,
    loading,
    error,
    hasError,
    signIn
  } = useIdentityPasswordLogin()

  async function onSignInClicked () {
    try {
      await signIn()
      router.push('/')
    } catch (error) {

    }
  }

  return {
    onSignInClicked,
    form,
    loading,
    error,
    hasError,
    signIn
  }
}
