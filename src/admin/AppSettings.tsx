import React from 'react'
import { RouteComponentProps } from "@reach/router"
import { Admin, AppSettings } from 'react-bricks'

const AdminAppSettings: React.FC<RouteComponentProps> = () => {
  return (
    <Admin>
      <AppSettings />
    </Admin>
  )
}

export default AdminAppSettings
