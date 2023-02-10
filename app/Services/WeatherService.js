import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js"

class WeatherService{
    changeType() {
        if (appState.type == 'celsius') {
            appState.temp = (appState.temp * 1.8) + 32
            appState.type = 'far'
        } else {
            appState.temp = (appState.temp -32) * 0.5556
            appState.type = 'celsius'
        }
    }
    async getWeather() {
        const res = await sandboxApi.get('weather')
        let celsius = res.data.main.temp - 273.15
        appState.temp = celsius
        console.log(appState.temp);
        appState.emit("type")
    }

}

export const weatherService = new WeatherService()