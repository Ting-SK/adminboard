import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import QueueList from './pages/QueueList'
import UserList from './pages/UserList'
import CommentList from './pages/CommentList'
import TableTemplate from './components/TableTemplate'
import Authorization from './pages/Authorization'
import { PrivateRoute } from './components/PrivateRoute'
import './styles/index.scss'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Switch>
      <Route exact path='/login'>
        <Authorization />
      </Route>
      <TableTemplate>
        <PrivateRoute exact path='/'>
          <Homepage />
        </PrivateRoute>
        <PrivateRoute path='/queues'>
          <QueueList />
        </PrivateRoute>
        <PrivateRoute path='/users'>
          <UserList />
        </PrivateRoute>
        <PrivateRoute path='/comments'>
          <CommentList />
        </PrivateRoute>
      </TableTemplate>
    </Switch>
  )
}

export default App
