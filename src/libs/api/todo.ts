import { FetchTodosResponse } from "../../@types/api/todo";
import { Todo } from "../../@types/todo";
import { apiInstance } from './axios';
import { ERROR_CODES } from "./error";

export const fetchTodos = async (): Promise<FetchTodosResponse> => {
  try {
    const { data } = await apiInstance.get<Todo[]>('todos')
    return {
      code: ERROR_CODES.NO_ERROR.code,
      message: ERROR_CODES.NO_ERROR.message,
      todos: data
    }
  } catch (error: any) {
    const errorResponseTodo = {
      userId: 0,
      id: 0,
      title: '',
      completed: false
    }
    if (error.code === 400) {
      return {
        code: ERROR_CODES.BAD_REQUEST.code,
        message: ERROR_CODES.BAD_REQUEST.message,
        todos: [errorResponseTodo]
      }
    }
    return {
        code: ERROR_CODES.INTERNAL_SERVER_ERROR.code,
        message: ERROR_CODES.INTERNAL_SERVER_ERROR.message,
        todos: [errorResponseTodo]
    }
  }
}