import { appState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"





class ImageService {
    
    async getImage() {
        const res = await sandboxApi.get('images')
        appState.image = res.data
    }
}


export const imageService = new ImageService()