export interface Data<T> {
  data: Array<T>
  pagination: {
    number: number
    size: number
    totalPage: number
    totalRows: number
  }
}
