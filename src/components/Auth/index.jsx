import { Formik } from 'formik'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthView from '../../views/AuthView'
import LoginSchema from './../../utils/ValidateSchemes/LoginSchema';
import api from './../../api/index';

const Auth = () => {
  const [errorLogin, setErrorLogin] = useState('')
  const history = useHistory()
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        setErrorLogin('')
        api
          .loginUser(values)
          .then(() => history.push('/'))
          // .catch(() => setErrorLogin(ERROR.INCORRECT_LOGIN_PASSWORD))
      }}
    >
      {(tools) => {
        return (
          <>
            <AuthView tools={tools} history={history} errorLogin={errorLogin} />
          </>
        )
      }}
    </Formik>
  )
}

export default Auth
