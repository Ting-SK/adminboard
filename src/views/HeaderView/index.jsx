import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './styles/style.scss'
import 'antd/dist/antd.css'

const { Header } = Layout

const HeaderView = ({ toggle, collapse }) => {
  return (
    <Header className='app-layout__header'>
      {collapse ? (
        <MenuUnfoldOutlined className='trigger' onClick={toggle} />
      ) : (
        <MenuFoldOutlined onClick={toggle} className='trigger' />
      )}
    </Header>
  )
}

export default HeaderView
