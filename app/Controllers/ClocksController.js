import { setText } from "../Utils/Writer.js";

function _getTime() {
    const today = new Date()
    let time = today.toLocaleTimeString('en-US')
    setText('time', time)
}

export class ClocksController {

    constructor() {
        console.log('hi clock');
        _getTime()
        setInterval(_getTime, 1000)
    }

}


