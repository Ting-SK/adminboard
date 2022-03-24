import React from 'react'
import { Button, Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  UserOutlined,
  UnorderedListOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import './styles/style.scss'
import 'antd/dist/antd.css'
import SubMenu from 'antd/lib/menu/SubMenu'

const { Sider } = Layout

const SidebarView = ({ collapse, handleLogOut }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapse} width='250px'>
      {!collapse ? (
        <div className='logo'>
          <span className='logo__text'>LINE UP</span>
        </div>
      ) : (
        <div className='logo' />
      )}
      <div className='sidebar__menu'>
        <div className='sidebar__menu_item'>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<HomeOutlined />}>
              <Link to='/'>Домашняя страница</Link>
            </Menu.Item>
            <SubMenu
              key='sub1'
              icon={<UnorderedListOutlined />}
              title='Список очередей'
            >
              <Menu.Item key='3'>
                <Link to='/queues'>Общие</Link>
              </Menu.Item>
              <Menu.Item key='4' disabled>
                По записи
              </Menu.Item>
              <Menu.Item key='5' disabled>
                "Живая" очередь
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub2'
              icon={<UserOutlined />}
              title='Список пользователей'
            >
              <Menu.Item key='6'>
                <Link to='/users'>Общие</Link>
              </Menu.Item>
              <Menu.Item key='7' disabled>
                По записи
              </Menu.Item>
              <Menu.Item key='8' disabled>
                "Живая" очередь
              </Menu.Item>
            </SubMenu>
            <Menu.Item key='2' icon={<MessageOutlined />}>
              <Link to='/comments'>Сообщения</Link>
            </Menu.Item>
          </Menu>
        </div>
        <Button
          style={{ width: '100%', background: '#1890ff', color: '#fff' }}
          onClick={handleLogOut}
        >
          Выйти
        </Button>
      </div>
    </Sider>
  )
}

export default SidebarView
