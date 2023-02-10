import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js"

class QuotesService {
    async getQuote() {
        const res = await sandboxApi.get('quotes')
        console.log(res.data);
        let quote = new Quote(res.data)

        appState.quote = quote
    }

}

export const quotesService = new QuotesService()