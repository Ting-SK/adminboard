import React from 'react';
import axios from 'axios'
import { AUTH_TOKEN, GUEST_KEY, API_URL } from '../const'

const Api = (url) => {
  const getAccessToken = () =>
    JSON.parse(localStorage.getItem(AUTH_TOKEN))?.access

  const getRefreshToken = () =>
    JSON.parse(localStorage.getItem(AUTH_TOKEN))?.refresh

  const setAccessToken = (newData) => {
    const prev = JSON.parse(localStorage.getItem(AUTH_TOKEN))
    localStorage.setItem(AUTH_TOKEN, JSON.stringify({ ...prev, ...newData }))
  }

  const refresh = async () => {
    const token = getRefreshToken()
    if (!token) {
      loginOut()
    } else {
      const res = await axios.post(url + 'auth/refresh/', { refresh: token })
      setAccessToken(res?.data)
      return res.data
    }
  }

  // const getMyQueue = async () => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.get(url + 'queue/my_queues/')
  //     return res.data
  //   } catch (e) {
  //     console.log('e', e)
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  const loginUser = async ({ email, password }) => {
    try {
      const res = await axios.post(url + 'auth/signin/', {
        email,
        password,
      })
      setAccessToken(res.data)
      return res.data
    } catch (e) {
      throw e?.response?.data
    }
  }

  // const registerGuest = async () => {
  //   try {
  //     const res = await axios.post(url + 'auth/signup/', {
  //       email: 'guest@guest.com',
  //       password: 'guestpassword',
  //     })
  //     return res.data
  //   } catch (e) {
  //     throw e?.response?.data
  //   }
  // }

  const loginOut = async () => {
    localStorage.removeItem(AUTH_TOKEN)
  }

  // const reactLogin = async (email, password) => {
  //   try {
  //     const res = await axios.post(url + 'auth/signin/', {
  //       email,
  //       password,
  //     })
  //     setAccessToken(res.data)
  //     return res.data
  //   } catch (e) {
  //     throw e?.response?.data
  //   }
  // }

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(AUTH_TOKEN))
  }

  const getGuest = () => {
    return JSON.parse(localStorage.getItem(GUEST_KEY))
  }

  // const regSendCode = async (email) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.post(url + 'auth/signup/send_code/', {
  //       email,
  //     })
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const registrationVerify = async (values) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.post(url + 'auth/signup/verify_code/', values)
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const recovery = async (email) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.post(url + 'auth/recovery/', {
  //       email,
  //     })
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const recovery_verify = async (email, code, password) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.post(url + 'auth/recovery_verify/', {
  //       email,
  //       code,
  //       password,
  //     })
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const createQueue = async (params) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.post(url + `queue/`, params)
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const getIn = async (id, params) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.post(url + `queue/${id}/get_in_line/`, params)
  //     console.log('res', res)
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e
  //   }
  // }

  // const getOutQuestion = async (id) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.get(url + `queue/get_out/${id}`)
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const getOutPost = async (id, params) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.post(url + `queue/get_out/${id}/`, params)
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const getQueue = async () => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.get(url + 'queue/')
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const getMyQueueId = async (id) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.get(url + `queue/${id}`)
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  // const getDays = async (id, date) => {
  //   const token = getAccessToken()
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //   }
  //   try {
  //     const res = await axios.get(url + `queue/${id}/time_slots/?date=${date}`)
  //     return res.data
  //   } catch (e) {
  //     if (e?.data?.code === 'token_not_valid') {
  //       api.refresh()
  //     }
  //     throw e?.response?.data
  //   }
  // }

  return {
    refresh,
    getAccessToken,
    loginUser,
    // registerGuest,
    loginOut,
    // reactLogin,
    getGuest,
    getCurrentUser,
    // registrationVerify,
    // getOutPost,
    // getOutQuestion,
    // regSendCode,
    // recovery,
    // recovery_verify,
    // createQueue,
    // getIn,
    // getQueue,
    // getMyQueue,
    // getMyQueueId,
    // getDays,
  }
}

const api = Api(API_URL)

export default api
