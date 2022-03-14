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
    const [todoID, setTodoID] = useState<any>(null)

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoID(e.currentTarget.value)
    }
    const getTasks = () => {
        tasksApi.getTasks(todoID)
            .then(res => setState(res.data))
    }

    return (
        <div> {JSON.stringify(state)}
            <div>
                <input placeholder='Enter todolist id' onChange={e => onInputChangeHandler(e)} value={todoID}/>
                <button onClick={getTasks}>Get tasks</button>
            </div>
        </div>
    )
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [todoID, setTodoID] = useState<string>('')

    const onInputForTodoIDChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoID(e.currentTarget.value)
    }
    const onInputForTaskTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }
    const createTask = () => {
        tasksApi.createTask(todoID, taskTitle)
            .then(res => setState(res.data.data.item.title))
    }

    return (
        <div> {JSON.stringify(state)}
            <div>
                <input placeholder='Enter todolist id' onChange={e => onInputForTodoIDChangeHandler(e)} value={todoID}/>
                <input placeholder='Enter task title' onChange={e => onInputForTaskTitleChangeHandler(e)}
                       value={taskTitle}/>
                <button onClick={createTask}>Create task</button>
            </div>
        </div>
    )
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskID, setTaskID] = useState<string>('')
    const [todoID, setTodoID] = useState<string>('')

    const onInputForTodoIDChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoID(e.currentTarget.value)
    }
    const onInputForTaskIDChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskID(e.currentTarget.value)
    }
    const deleteTask = () => {
        tasksApi.deleteTask(todoID, taskID)
            .then(res => setState(res.data))
    }

    return (
        <div> {JSON.stringify(state)}
            <div>
                <input placeholder='Enter todolist id' onChange={e => onInputForTodoIDChangeHandler(e)} value={todoID}/>
                <input placeholder='Enter task id' onChange={e => onInputForTaskIDChangeHandler(e)}
                       value={taskID}/>
                <button onClick={deleteTask}>Delete task</button>
            </div>
        </div>
    )
}