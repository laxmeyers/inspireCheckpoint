import { appState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

function _drawBackground() {
    document.body.style.backgroundImage = `url(${appState.image.largeImgUrl})`
    document.body.style.backgroundSize = 'cover'

    setText('painter', appState.image.author)
}

export class ImageController { 

    constructor() {
        this.getImage()
        appState.on('image', _drawBackground)
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            Pop.error(error)
        }
    }
}
