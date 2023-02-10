import { ClocksController } from "./Controllers/ClocksController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/todosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  todosController = new TodosController()
  clocksController = new ClocksController()
  quotesController = new QuotesController()
}

window["app"] = new App();
