import { TodosController } from "./Controllers/todosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  todosController = new TodosController()
}

window["app"] = new App();
