import api from "./base";

export function fetchTodos() {
    return api.get("/todos");
}

export function createTodo(payload) {
    return api.post("/todos", payload);
}

export function removeTodo(id) {
    return api.delete(`/todos/${id}`);
}
