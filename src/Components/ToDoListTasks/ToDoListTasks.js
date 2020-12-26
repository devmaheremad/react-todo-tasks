import React from 'react'
import {ToDoTask, ToDoNoTask, ToDoTaskTHeader, Task, Priority, Times, ForFlex, TaskTitle, TaskPriority, TaskTimes} from './ToDoListTasksStyled'

const ToDoListTasks = (props) => {

    const {tasks} = props
    const length = tasks.length
    const showTasks = length ? tasks.map((task, index) => {
        return (
            <ForFlex key={index}>
                <Task>{task.task}</Task>
                <Priority>{task.priority}</Priority>
                <Times onClick = {() => props.handelDelete(index)}>&times;</Times>
            </ForFlex>
        )
    }) : (
        <ToDoNoTask>
            <p>There Is No Task Right Now.</p>
        </ToDoNoTask>
    )

    return (
        <ToDoTask>
        <ToDoTaskTHeader>
            <TaskTitle>Task Name</TaskTitle>
            <TaskPriority>Priority Type</TaskPriority>
            <TaskTimes>Action</TaskTimes>
        </ToDoTaskTHeader>
            {showTasks}
        </ToDoTask>
    )
}

export default ToDoListTasks