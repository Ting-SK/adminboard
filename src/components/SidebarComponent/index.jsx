import React from 'react'
import { useHistory } from 'react-router-dom'
import SidebarView from '../../views/SidebarView'
import api from './../../api'

const SidebarComponent = (props) => {
  const history = useHistory()

  const logOut = () => {
    api.loginOut().then(() => history.push('/login'))
  }

  return <SidebarView {...props} handleLogOut={logOut} />
}

export default SidebarComponent
