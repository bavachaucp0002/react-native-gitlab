export type State = "opened" | "closed"

export interface Author {
  state: string
  id: number
  web_url: string
  name: string
  avatar_url: string
  username: string
}

export interface Milestone {
  project_id: number
  description: string
  state: string
  due_date: string
  iid: number
  created_at: string
  title: string
  id: number
  updated_at: string
}

export interface Assignee {
  state: string
  id: number
  name: string
  web_url: string
  avatar_url: string
  username: string
}

export interface TimeStats {
  time_estimate: number | null
  total_time_spent: number | null
  human_time_estimate: number | null
  human_total_time_spent: number | null
}

export interface Link {
  self: string
  notes: string
  award_emoji: string
  project: string
}

export interface TaskCompletionStatus {
  count: number
  completed_count: number
}

export default interface Issue {
  state: State
  description: string
  author: Author
  milestone: Milestone
  project_id: number
  assignees: Array<Assignee>
  assignee: Assignee
  updated_at: string
  closed_at: string
  closed_by: number | null
  id: number
  title: string
  created_at: string
  iid: number
  labels: Array<string>
  upvotes: number
  downvotes: number
  merge_requests_count: number
  user_notes_count: number
  due_date: string
  web_url: string
  time_stats: TimeStats
  has_tasks: boolean
  task_status: string
  confidential: boolean
  discussion_locked: boolean
  _links: Link
  task_completion_status: TaskCompletionStatus
}
