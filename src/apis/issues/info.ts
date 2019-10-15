import { ParamsGetIssues } from "./types"
import Issue from "/models/Issue"
import Request from "../request"
import { GET_ISSUES } from "../endpoints"
import { AxiosResponse } from "axios"

export const getIssues = async (params?: ParamsGetIssues): Promise<Array<Issue>> => {
  const issues: AxiosResponse<Array<Issue>> = await Request.get<Array<Issue>>(GET_ISSUES, {
    params
  })

  return issues.data
}
