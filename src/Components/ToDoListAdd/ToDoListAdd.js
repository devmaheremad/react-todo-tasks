import React, {Component} from 'react'
import './ToDoListAdd.css'

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
            <div className='to-do-list-add'>
                <form method="post" onChange={this.handelChange} onSubmit={this.handelSubmit} >
                <label className="task" htmlFor="task">
                    <input type="text" id="task" placeholder='Type your task name here!' defaultValue={this.state.task} required/>
                </label>
                <label className="priority" htmlFor="priority">
                    <input type="text" id="priority" placeholder='Type your priority here!' defaultValue={this.state.priority} required/>
                </label>
                <input type="submit" value='Add new task'/>
                </form>
            </div>
        )
    }
}

export default ToDoListAdd