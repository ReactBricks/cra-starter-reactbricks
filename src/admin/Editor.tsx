import React from 'react'
import { RouteComponentProps } from "@reach/router"
import { Admin, Editor } from 'react-bricks'

const AdminEditor: React.FC<RouteComponentProps> = () => {
  return (
    <Admin>
      <Editor />
    </Admin>
  )
}

export default AdminEditor
