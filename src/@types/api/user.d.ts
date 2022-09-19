import { ApiError } from '../error'
import { User } from '../user'

export interface LoginResponse extends ApiError {
  user: User[]
}
