import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

export const Home = () => {
  return (
    <div className="p-4">
      <TodoForm />
      <br />
      <TodoList />
    </div>
  )
}
