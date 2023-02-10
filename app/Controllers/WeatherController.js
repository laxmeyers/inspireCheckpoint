import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";



function _drawTemp() {
    if (appState.type == 'celsius') {
        setHTML('weather', `${appState.temp.toFixed(0)}&#176;C`) 
    } else {
        setHTML('weather', `${appState.temp.toFixed(0)}&#176;F`) 
    }
}


export class WeatherController{

    constructor() {
        this.getWeather()
        appState.on('type', _drawTemp)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
        }
    }

    changeType() {
        weatherService.changeType()
    }

}