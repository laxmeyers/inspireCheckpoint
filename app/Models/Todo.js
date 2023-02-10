
export class Todo {

    constructor(data) {
        this.id = data.id || null
        this.description = data.description
        this.completed = data.completed || false
    }

    get TododTemplate() {
        return `
        <div class="form-check pb-1">
            <input class="form-check-input" type="checkbox" id="${this.id}" name="description" ${this.completed ? 'checked' : ''} onchange="app.todosController.checkItem('${this.id}')">
            <label class="form-check-label" for="${this.id}">
            ${this.description}
            </label>
        </div>
        `
    }
}
