import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async getMyTodos() {
        const res = await sandboxApi.get('andrew/todos')
        // console.log(res.data);
        let newTodos = res.data.map(t => new Todo(t))
        appState.todos = newTodos
    }
}


export const todosService = new TodosService()