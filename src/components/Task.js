import React,  { Component } from 'react'

class Task extends Component {
    render() {
        return <div>
            {this.props.task.title} - 
            {this.props.task.descripton} - 
            {this.props.task.donde} -
            {this.props.task.id}
            <input type="chekbox" />
            <button>
                x
            </button>
            
        </div> 
            
          
    }
}

export default Task;