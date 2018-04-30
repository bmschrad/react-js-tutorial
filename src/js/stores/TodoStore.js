import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

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

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createToDo(action.text);
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
            }
        }
    }
}

const todoStore = new TodoStore;
window.todoStore = todoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;
