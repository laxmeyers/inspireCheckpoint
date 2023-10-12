// import { appState } from "../AppState.js";
// import { todosService } from "../Services/TodosService.js";
// import { getFormData } from "../Utils/FormHandler.js";
// import { Pop } from "../Utils/Pop.js";
// import { setHTML, setText } from "../Utils/Writer.js";


// function _drawTodos() {
//     let count = appState.todos.filter(t => t.completed)
//     let template = ''

//     appState.todos.forEach(t => template += t.TododTemplate)
//     setHTML('todos', template)
//     setText('goalCount', `${count.length} / ${appState.todos.length} `)
// }

// export class TodosController {

//     constructor() {
//         appState.on('todos', _drawTodos)
//         this.getMyTodos()
//     }

//     async getMyTodos() {
//         try {
//             await todosService.getMyTodos()
//         } catch (error) {
//             Pop.error(error)
//             console.error(error.message)
//         }
//     }

//     async handleTodoForm() {
//         try {
//             window.event?.preventDefault()
//             let form = window.event?.target
//             let formData = getFormData(form)
//             await todosService.handleTodoForm(formData)
//             // @ts-ignore
//             form.reset()
//         } catch (error) {
//             Pop.error(error)
//             console.error(error.message);
//         }

//     }

//     async checkItem(id) {
//         try {
//             await todosService.checkItem(id)
//         } catch (error) {
//             Pop.error(error)
//         }
//     }

//     async destroyGoal(id) {
//         try {
//             if (await Pop.confirm('You want to remove this goal?')) {
//                 await todosService.destroyGoal(id)
//             }
//         } catch (error) {
//             Pop.error(error)
//         }
//     }
// }
