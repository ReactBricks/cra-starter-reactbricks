import React, { useContext } from 'react'
import { RouteComponentProps } from '@reach/router'
import {
  PageViewer,
  usePagePublic as usePage,
  cleanPage,
  ReactBricksContext,
} from 'react-bricks'
import Layout from './components/Layout'
import ErrorNoHomePage from './components/ErrorNoHomePage'

const Viewer: React.FC<RouteComponentProps & { slug: string }> = ({ slug }) => {
  const { data } = usePage(slug)
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  if (!data) {
    return (
      <Layout>
        <ErrorNoHomePage />
      </Layout>
    )
  }

  // Clean the received content
  // Removes unknown or not allowed bricks
  const page = cleanPage(data, pageTypes, bricks)

  return (
    <Layout>
      <PageViewer page={page} />
    </Layout>
  )
}

export default Viewer
