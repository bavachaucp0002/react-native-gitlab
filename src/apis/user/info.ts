import User from "/models/User"
import Request from "../request"
import { GET_ME } from "../endpoints"
import { USER_NOT_FOUND } from "./errors"

export const getUserInfo = async (): Promise<User | Error> => {
  const user = await Request.get<User>(GET_ME)

  if (!user.data.id) {
    return USER_NOT_FOUND
  }

  return user.data
}
