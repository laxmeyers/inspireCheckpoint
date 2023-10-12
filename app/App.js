import { ClocksController } from "./Controllers/ClocksController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
// import { TodosController } from "./Controllers/todosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // todosController = new TodosController()
  clocksController = new ClocksController()
  quotesController = new QuotesController()
  imagesController = new ImageController()
  weatherController = new WeatherController()
}

window["app"] = new App();
