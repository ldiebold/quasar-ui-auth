import { useLogout } from 'auth-composables'
import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()

  const { signOut, loading } = useLogout()

  async function onSignOutClicked () {
    await signOut()
    router.push('/login')
  }

  return {
    signOut,
    loading,
    onSignOutClicked
  }
}
