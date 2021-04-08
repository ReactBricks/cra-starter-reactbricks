import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'
import { ReactBricks } from 'react-bricks'
import AppSettings from './admin/AppSettings'
import Editor from './admin/Editor'
import Login from './admin/Login'
import Playground from './admin/Playground'
import './App.css'
import ErrorNoKeys from './components/ErrorNoKeys'
import Layout from './components/Layout'
import config from './react-bricks/config'
import ViewerFetch from './ViewerFetch'

const App: React.FC<RouteComponentProps> = () => {
  return (
    <>
      {!config.appId || !config.apiKey ? (
        <Layout>
          <ErrorNoKeys />
        </Layout>
      ) : (
        <ReactBricks {...config}>
          <Router>
            <Login path="/admin" />

            <Editor path="/admin/editor" />
            <Playground path="/admin/playground" />
            <AppSettings path="/admin/app-settings" />

            <ViewerFetch path="/" />
          </Router>
        </ReactBricks>
      )}
    </>
  )
}

export default App
