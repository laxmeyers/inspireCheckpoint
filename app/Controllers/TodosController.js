import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawTodos() {
    let template = ''
    
    appState.todos.forEach(t => template += t.TododTemplate)
    setHTML('todos', template)
}



export class TodosController {

    constructor() {
        appState.on('todos', _drawTodos)
        this.getMyTodos()
    }

    async getMyTodos() {
        try {
            await todosService.getMyTodos()
        } catch (error) {
            Pop.error(error)
            console.error(error.message)
        }
    }
 }
