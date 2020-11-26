import React, { Component, Fragment } from 'react'
import ToDoListTasks from './Components/ToDoListTasks/ToDoListTasks'
import ToDoListAdd from './Components/ToDoListAdd/ToDoListAdd'

class App extends Component {

    state = {
        tasks: [
            { id: 0, task: 'Create a new site', priority: 'Urgent' },
            { id: 1, task: 'Create a new app', priority: 'Delayed' },
            { id: 2, task: 'Create a new landing page', priority: 'Not urgent' }
        ]
    }

    handelDelete = (id) => {
        const allTasks = this.state.tasks
        const allTasksWithoutDeleted = allTasks.filter(task => {
            return (
                task.id !== id
            )
        })
        this.setState({
            tasks: allTasksWithoutDeleted
        })
    }

    addItem = item => {
        const tasks = this.state.tasks
        tasks.push(item)
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return ( 
            <Fragment>
                <h1 className = "text-center">To Do List</h1>
                <div className="list-tasks container">
                    <section>
                        <ToDoListTasks tasks = { this.state.tasks } handelDelete = { this.handelDelete } />
                    </section>
                    <section>
                        <ToDoListAdd tasks = { this.state.tasks } addItem = { this.addItem } />
                    </section>
                </div>
            </Fragment>
        )
    }
}

export default App;