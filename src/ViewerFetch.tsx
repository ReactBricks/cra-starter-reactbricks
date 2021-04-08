import { RouteComponentProps } from '@reach/router'
import React, { useContext, useEffect, useState } from 'react'
import {
  cleanPage,
  fetchPage,
  PageViewer,
  ReactBricksContext,
  types,
} from 'react-bricks'
import Layout from './components/Layout'
import ErrorNoHomePage from './components/ErrorNoHomePage'

const ViewerFetch: React.FC<RouteComponentProps> = () => {
  const PAGE_SLUG = 'home'
  const [page, setPage] = useState<types.Page>()
  const { apiKey, pageTypes, bricks } = useContext(ReactBricksContext)

  useEffect(() => {
    fetchPage(PAGE_SLUG, apiKey).then((data) => {
      const myPage = cleanPage(data, pageTypes, bricks)
      setPage(myPage)
    })
  }, [apiKey, pageTypes, bricks])

  if (!page) {
    return (
      <Layout>
        <ErrorNoHomePage />
      </Layout>
    )
  }

  return (
    <Layout>
      <PageViewer page={page} />
    </Layout>
  )
}

export default ViewerFetch
