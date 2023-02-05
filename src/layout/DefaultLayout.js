import React from 'react'
import { AppContent, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <div className="pageColor wrapper d-flex flex-column min-vh-100">
        <div className="pageColor body flex-grow-1 px-2 ">
          <AppHeader />
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
