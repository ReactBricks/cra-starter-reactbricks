import React from 'react'
import { RouteComponentProps } from "@reach/router"
import { Admin, Playground } from 'react-bricks'

const AdminPlayground: React.FC<RouteComponentProps> = () => {
  return (
    <Admin>
      <Playground />
    </Admin>
  )
}

export default AdminPlayground
