import React from 'react'
import './ToDoListTasks.css'

const ToDoListTasks = (props) => {

    const {tasks} = props
    const length = tasks.length
    const showTasks = length ? tasks.map((task, index) => {
        return (
            <div key={index}>
                <span className="task">{task.task}</span>
                <span className="priority">{task.priority}</span>
                <span className="times" onClick = {() => props.handelDelete(index)}>&times;</span>
            </div>
        )
    }) : (
        <div className='no-tasks'>
            <p>There Is No Task Right Now.</p>
        </div>
    )

    return (
        <div className='to-do-list-tasks'>
        <div className="t-header">
            <span className="task title">Task Name</span>
            <span className="priority title">Priority Type</span>
            <span className="title">Action</span>
        </div>
            {showTasks}
        </div>
    )
}

export default ToDoListTasks