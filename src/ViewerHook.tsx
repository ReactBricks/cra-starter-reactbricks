import React, { useContext } from 'react'
import { RouteComponentProps } from '@reach/router'
import {
  PageViewer,
  usePagePublic as usePage,
  cleanPage,
  ReactBricksContext,
} from 'react-bricks'
import ErrorNoHomePage from './components/ErrorNoHomePage'

const Viewer: React.FC<RouteComponentProps> = () => {
  const PAGE_SLUG = 'home'

  const { data } = usePage(PAGE_SLUG)
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  if (!data) {
    return <ErrorNoHomePage />
  }

  // Clean the received content
  // Removes unknown or not allowed bricks
  const page = cleanPage(data, pageTypes, bricks)

  return <PageViewer page={page} />
}

export default Viewer
