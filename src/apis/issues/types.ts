import { State } from "/models/Issue"

export interface ParamsGetIssues {
  state?: State
  labels?: string
  milestone?: string
  iids?: Array<string>
  author_id?: number
  assignee_id?: number
  my_reaction_emoji?: string
  search?: string
  in?: string
  confidential?: boolean | string
  with_labels_details?: boolean
  scope?: string
  author_username?: string
  assignee_username?: Array<string>
  weight?: number
  order_by?: string
  sort?: string
  created_after?: string | Date
  created_before?: string | Date
  updated_after?: string | Date
  updated_before?: string | Date
  not?: string
}
