import React, { Component } from 'react'

class TodoInput extends Component {
    render(){
        console.log(this)
        return <input type="text"  defaultValue={this.props.content} 
        onKeyPress={this.submit.bind(this)} />
    }
    submit(e){
        console.log('1')
        if(e.key === 'Enter'){
            this.props.onSubmit(e)
        }
    }
}

export default TodoInput