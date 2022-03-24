import React from 'react'
import { Layout } from 'antd'
import SidebarComponent from './../../components/SidebarComponent/index'
import HeaderComponent from './../../components/HeaderComponent/index'
import { Content } from 'antd/lib/layout/layout'

const TableTemplateView = ({ toggle, collapse, children }) => {
  return (
    <Layout className='app'>
      <SidebarComponent collapse={collapse} />
      <Layout>
        <HeaderComponent toggle={toggle} collapse={collapse} />
        <Content className='app-layout__content'>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default TableTemplateView
