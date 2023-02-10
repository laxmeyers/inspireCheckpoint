
export class Todo {

    constructor(data) {
        this.id = data.id || null
        this.description = data.description
        this.completed = data.completed || false
    }

    get TododTemplate() {
        if (this.completed) {
            return `
            <div class="d-flex justify-content-between align-items-center border-bottom border-2 border-primary">
                <div class="form-check pb-1">
                    <input class="form-check-input" type="checkbox" id="${this.id}" name="description" checked onchange="app.todosController.checkItem('${this.id}')">
                    <label class="form-check-label" for="${this.id}">
                    <s>${this.description}</s>
                    </label>
                </div>
                <i class="mdi mdi-delete-outline selectable text-danger fw-bold fs-3" onclick="app.todosController.destroyGoal('${this.id}')"></i>
            </div>
            `
        } else {
            return `
            <div class="d-flex justify-content-between align-items-center border-bottom border-2 border-primary">
                <div class="form-check pb-1">
                    <input class="form-check-input" type="checkbox" id="${this.id}" name="description" onchange="app.todosController.checkItem('${this.id}')">
                    <label class="form-check-label" for="${this.id}">
                    ${this.description}
                    </label>
                </div>
                <i class="mdi mdi-delete-outline selectable text-danger fw-bold fs-3" onclick="app.todosController.destroyGoal('${this.id}')"></i>
            </div>
            `
        }
    }


}
