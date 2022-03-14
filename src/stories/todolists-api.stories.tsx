import React, {useEffect, useState} from 'react'
import {todolistsApi} from "../api/todolists-api";
import {tasksApi, TaskType} from "../api/tasks-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.getTodo()
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'Third TODO'
        todolistsApi.createTodo(title)
            .then(res => setState(res.data.data.item.title))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todolistID = '6f957faf-206b-477f-bbee-094529222c6c'

        todolistsApi.deleteTodo(todolistID)
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todolistID = ''
        const title = 'REACTTT'

        todolistsApi.updateTodo(todolistID, title)
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const GetTasks = () => {
    const [state, setState] = useState<Array<TaskType>>([])
    useEffect(() => {
        const todolistID = 'feb6ba8c-3e94-4435-9aeb-db20b97ca438'
        tasksApi.getTasks(todolistID)
            .then(res => setState(res.data))

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'THIRD TASK FOR SECOND TODO'
        const todolistID = 'feb6ba8c-3e94-4435-9aeb-db20b97ca438'
        tasksApi.createTask(todolistID, title)
            .then(res => setState(res.data.data.item.title))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistID = '44ec1890-8bad-4aad-9ed2-02742806937c'
        const taskID = '2d564636-50eb-4f6e-805d-93bb527f905a'
        tasksApi.deleteTask(todolistID, taskID)
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}