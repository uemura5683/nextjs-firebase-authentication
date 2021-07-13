  // エラー解消させるためにコメントアウト
//import { User } from 'firebase'
import { FC, createContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase'

type AuthContextProps = {
  // エラー解消させるためにコメントアウト
  // currentUser: User | null | undefined
  currentUser: null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  // エラー解消させるためにコメントアウト
  // const [currentUser, setCurrentUser] = useState<User | null | undefined>(
  //   undefined
  // )
  const [currentUser, setCurrentUser] = useState<null | undefined>(
    undefined
  )
  

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // エラー解消させるためにコメントアウト
      //setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }