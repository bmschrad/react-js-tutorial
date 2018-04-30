import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodo() {
    //axios("http://someurl.com/somedataendpoint").then((data) => {
    //console.log("got the date", data);
    //});
    dispatcher.dispatch({
        type: "FETCH_TODO",
    });
    setTimeout((() => {
        dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
            {
                id: 214532531,
                text: "Eat Food AGAIN",
                complete: true
            },
            {
                id: 114532,
                text: "Go Shopping AGAIN",
                complete: false
            },
            {
                id: 23521232,
                text: "Pay the man",
                complete: false
            },
        ]});
    }), 1000);
}
