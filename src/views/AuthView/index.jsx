import React from 'react'
import { Button, Form, Input } from 'antd'
import './style/style.scss'

const AuthView = ({ tools, history, errorLogin }) => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    tools
  return (
    <>
      <div className='login_page'>
        <h1>LineUp</h1>
        <Form className='login_form' onSubmit={handleSubmit}>
          <Input
            id='email'
            name='email'
            type='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email ? (
            <div className='login-form__error'>{errors.email}</div>
          ) : null}
          <Input.Password
            id='password'
            name='password'
            type='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder='input password'
          />
          {touched.password && errors.password ? (
            <div className='login-form__error'>{errors.password}</div>
          ) : null}
          {errorLogin && <p className='login-form__error'>{errorLogin}</p>}
          <Button
            onClick={handleSubmit}
            disabled={!values.email || !values.password}
            style={{ height: '40px', margin: '20px 0', fontSize: '14px' }}
          >
            Войти
          </Button>
        </Form>
      </div>
    </>
  )
}

export default AuthView
