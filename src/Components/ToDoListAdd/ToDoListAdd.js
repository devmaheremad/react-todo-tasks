import React, {Component, Fragment} from 'react'
import { ToDoAddForm, ToDoAddFormNameInput, ToDoAddFormNameLabel, ToDoAddFormPriorityInput, ToDoAddFormPriorityLabel, ToDoAddFormSubmit } from './ToDoListAddStyled'

class ToDoListAdd extends Component {

    state = {
        task: '',
        priority: ''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
        this.setState({
            task: '',
            priority: ''
        })
    }

    render() {
        return (
            <div>
                <ToDoAddForm onChange={this.handelChange} onSubmit={this.handelSubmit} >
                <ToDoAddFormNameLabel htmlFor="task">
                    <ToDoAddFormNameInput type="text" id="task" placeholder='Type your task name here!' value={this.state.task} required/>
                </ToDoAddFormNameLabel>
                <ToDoAddFormPriorityLabel htmlFor="priority">
                    <ToDoAddFormPriorityInput type="text" id="priority" placeholder='Type your priority here!' value={this.state.priority} required/>
                </ToDoAddFormPriorityLabel>
                <ToDoAddFormSubmit type="submit" value='Add new task'/>
                </ToDoAddForm>
            </div>
        )
    }
}

export default ToDoListAdd