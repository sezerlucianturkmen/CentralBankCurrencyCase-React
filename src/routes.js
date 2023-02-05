import React from 'react'

const HomeList = React.lazy(() => import('./views/pages/homeList/HomeList'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/*', name: 'HomeList', element: HomeList },
]
export default routes
