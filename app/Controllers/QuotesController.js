import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuote() {
    setText('quote', appState.quote?.content)
    setText('author', appState.quote?.author)
}

export class QuotesController {

    constructor() {
        this.getQuote()
        appState.on('quote',_drawQuote)
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            Pop.error(error)
        }
    }
}
