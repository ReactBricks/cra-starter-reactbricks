import { navigate } from '@reach/router'
import { types } from 'react-bricks'

import bricks from './bricks'
import pageTypes from './pageTypes'
import ActiveLink from './ActiveLink'

console.log(process.env.REACT_APP_APP_ID, process.env.REACT_APP_API_KEY)

const config: types.ReactBricksConfig = {
  appId: process.env.REACT_APP_APP_ID || '',
  apiKey: process.env.REACT_APP_API_KEY || '',
  pageTypes,
  bricks,
  logo: '/logo.svg',
  // contentClassName: 'content', // Usually defined dynamically
  // isDarkColorMode: ...,        // in _app.tsx
  // toggleColorMode: ...,        // to manage Dark Mode
  renderLocalLink: ActiveLink,
  navigate,
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#root',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
}

export default config
