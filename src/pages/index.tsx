import { useEffect, FC, useState } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../utils/firebase'

const Home: FC = (props: any) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<null | object>(null)
  const json = JSON.stringify(currentUser, null, 4);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push('/login')
    })
  }, [])

  const logOut = async () => {
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <div className="hello">ログインしました</div>
        <pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>
        <button onClick={logOut}>Logout</button>
      </div>
    </div>
  )
}

export default Home
