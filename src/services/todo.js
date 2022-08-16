import api from './base.js'

export function fetchTodoApi() {
   return api.get('/todos')
  }
export function createTodoApi(payload) {
    return api.post('/todos',payload)
  }
export function deleteTodoApi(id) {
    return api.delete(`/todos/${id}`)
  }