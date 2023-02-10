import { ClocksController } from "./Controllers/ClocksController.js";
import { TodosController } from "./Controllers/todosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  todosController = new TodosController()
  clocksController = new ClocksController()
}

window["app"] = new App();
