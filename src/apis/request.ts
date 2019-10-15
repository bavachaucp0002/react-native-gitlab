import axios from "axios"
import { BASE_URL, ACCESS_TOKEN } from "react-native-dotenv"
import get from "ts-get"

// this option for refresh .env
process.env

import { commonErrors } from "./errors"

const Authorization = "Private-Token"
const generateToken = (token: string): string => token

const headers = {
  [Authorization]: generateToken(ACCESS_TOKEN)
}

const Request = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers,
  responseType: "json"
  // ... other configs
})

Request.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
    // Do something with response error
    const errorCode: number = get(error, (error) => error.response.status, 0)

    if (errorCode && commonErrors.hasOwnProperty(errorCode)) {
      return Promise.reject(commonErrors[errorCode])
    }

    return Promise.reject(error)
  }
)

export default Request
