// import { appState } from "../AppState.js";
// import { Todo } from "../Models/Todo.js";
// import { sandboxApi } from "./AxiosService.js"

// class TodosService {
//     async destroyGoal(id) {
//         const res = sandboxApi.delete('andrew/todos/' + id)
//         let index = appState.todos.findIndex(t => t.id == id)
//         appState.todos.splice(index, 1)
//         appState.emit('todos')
//     }
//     async checkItem(id) {
//         let checkedIndex = appState.todos.findIndex(t => t.id == id)
//         let checkedGoal = appState.todos[checkedIndex]
//         // @ts-ignore
//         checkedGoal.completed = !(checkedGoal?.completed)
//         const res = sandboxApi.put('andrew/todos/' + id, checkedGoal)

//         appState.todos.splice(checkedIndex, 1, checkedGoal)
//         appState.emit('todos')
        
//     }
//     async handleTodoForm(formData) {
//         const res = await sandboxApi.post('andrew/todos', formData)
//         let newTodo = new Todo(res.data)
//         appState.todos.push(newTodo)
//         appState.emit('todos')
//     }
//     async getMyTodos() {
//         const res = await sandboxApi.get('andrew/todos')
//         // console.log(res.data);
//         let newTodos = res.data.map(t => new Todo(t))
//         appState.todos = newTodos
//     }
// }


// export const todosService = new TodosService()