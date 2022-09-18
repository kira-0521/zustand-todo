import { ApiError } from "../error";
import { Todo } from "../todo";

export interface FetchTodosResponse extends ApiError {
  todos: Todo[]
}