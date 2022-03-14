import axios from "axios";

type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type BaseResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsError: Array<string>
    data: T
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': '38693d4c-6e14-43e3-bc08-570c5b5670c4'
    },
    withCredentials: true,
})


export const todolistsApi = {
    getTodo() {
        return instance.get<Array<TodolistType>>(`todo-lists`)
    },
    createTodo(title: string) {
        return instance.post<BaseResponseType<{ item: TodolistType }>>('todo-lists', {title})
    },
    deleteTodo(todolistID: string) {
        return instance.delete<BaseResponseType>(`todo-lists/${todolistID}`)
    },
    updateTodo(todolistID: string, title: string) {
        return instance.put<BaseResponseType<{}>>(`todo-lists/${todolistID}`, {title: 'REACT'})
    }
}