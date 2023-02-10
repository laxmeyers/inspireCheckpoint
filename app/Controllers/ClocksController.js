import { setText } from "../Utils/Writer.js";

function _getTime() {
    const today = new Date()
    let h = today.getHours()
    if (h > 12) {
        h -= 12
    }
    let s = today.getSeconds()
    let m = today.getMinutes()
    if (s < 10) {
        setText('time', `${h}:${m}:0${s}`)
    }else{
        setText('time', `${h}:${m}:${s}`)
    }

}
export class ClocksController {

    constructor() {
        console.log('hi clock');
        _getTime()
        
        setInterval(_getTime, 1000)
    }

}


