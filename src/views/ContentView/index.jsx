import React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import Homepage from './../../pages/Homepage'
import QueueList from './../../pages/QueueList'
import UserList from './../../pages/UserList'
import CommentList from './../../pages/CommentList'
import './styles/style.scss'
import 'antd/dist/antd.css'

const { Content } = Layout

const ContentView = () => {
  return (
    <Content className='app-layout__content'>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/queues'>
          <QueueList />
        </Route>
        <Route path='/users'>
          <UserList />
        </Route>
        <Route path='/comments'>
          <CommentList />
        </Route>
      </Switch>
    </Content>
  )
}

export default ContentView
