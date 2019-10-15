import { ACCOUNT_LOGIN } from "./types"
import User from "/models/User"

export const login = () => ({
  type: ACCOUNT_LOGIN
})
