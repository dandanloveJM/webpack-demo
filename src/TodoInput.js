import React, { Componenet } from 'react'

class TodoInput extends Componenet {
    render(){
        return <input type="text" value="this.props.content" />
    }
}
export default TodoInput