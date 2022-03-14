import axios from "axios";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type BaseResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsError: Array<string>
    data: T
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    headers: {
        'API-KEY': '38693d4c-6e14-43e3-bc08-570c5b5670c4'
    },
    withCredentials: true,
})


export const tasksApi = {
    getTasks(todolistID: string) {
        return instance.get<Array<TaskType>>(`${todolistID}/tasks`)
    },
    createTask(todolistID: string, title: string) {
        return instance.post<BaseResponseType<{ item: TaskType }>>(`${todolistID}/tasks`, {title})
    },
    deleteTask(todolistID: string, taskID: string) {
        return instance.delete<BaseResponseType>(`${todolistID}/tasks/${taskID}`)
    },
    updateTask(todolistID: string, title: string) {
        return instance.put<BaseResponseType<{}>>(`${todolistID}`, {title: 'REACT'})
    }
}