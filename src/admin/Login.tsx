import React from 'react'
import { RouteComponentProps } from "@reach/router"
import { Admin, Login } from 'react-bricks'

const AdminLogin: React.FC<RouteComponentProps> = () => {
  return (
    <Admin isLogin>
      <Login />
    </Admin>
  )
}

export default AdminLogin
