import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CHeader, CImage, CHeaderNav } from '@coreui/react'

import Image from '../assets/images/logo.png'
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderNav className="headerColor d-none d-md-flex me-auto">
          <CImage className="mt-3 xinerjilogo" align="center" src={Image} />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
