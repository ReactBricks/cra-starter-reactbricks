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
import Viewer from './Viewer'
import ViewerFetch from './ViewerFetch'

const App: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      {!config.appId || !config.apiKey ? (
        <ErrorNoKeys />
      ) : (
        <ReactBricks {...config}>
          <Router>
            <Login path="/admin" />

            <Editor path="/admin/editor" />
            <Playground path="/admin/playground" />
            <AppSettings path="/admin/app-settings" />

            <Viewer path="/" />
            <ViewerFetch path="/viewer-fetch" />
          </Router>
        </ReactBricks>
      )}
    </Layout>
  )
}

export default App
