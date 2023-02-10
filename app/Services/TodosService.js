import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async checkItem(id) {
        let checkedGoal = appState.todos.find(t => t.id == id)
        // @ts-ignore
        checkedGoal.completed = !(checkedGoal?.completed)
        const res = sandboxApi.put('andrew/todos/' + id, checkedGoal)
        
    }
    async handleTodoForm(formData) {
        const res = await sandboxApi.post('andrew/todos', formData)
        let newTodo = new Todo(res.data)
        appState.todos.push(newTodo)
        appState.emit('todos')
    }
    async getMyTodos() {
        const res = await sandboxApi.get('andrew/todos')
        // console.log(res.data);
        let newTodos = res.data.map(t => new Todo(t))
        appState.todos = newTodos
    }
}


export const todosService = new TodosService()