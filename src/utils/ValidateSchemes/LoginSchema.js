import * as yup from 'yup'

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Не является email')
    .trim()
    .required('Обязательное поле'),
  password: yup
    .string()
    .trim()
    .required('Обязательное поле'),
})

export default LoginSchema
