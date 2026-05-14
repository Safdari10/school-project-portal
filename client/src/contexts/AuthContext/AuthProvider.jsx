import { useState } from "react"
import { AuthContext } from "./AuthContext"
import signup from "./SignupHandler"
import login from "./LoginHandler"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}