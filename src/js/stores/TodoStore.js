import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 114532531,
                text: "Eat Food",
                complete: true
            },
            {
                id: 114532532,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 23521432,
                text: "Pay Bills",
                complete: false
            },
        ];
    }

    createToDo(text) {
        const id = Date.now();
        this.todos.push(
           {
                id,
                text,
                complete: false,
           }
       ); 
        this.emit("change");
    }

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;
window.todoStore = todoStore;

export default todoStore;
