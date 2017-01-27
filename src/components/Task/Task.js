import React, { Component } from 'react'


import { Form, Container, Message, Button } from 'semantic-ui-react'
import TodoList from './TodoList'



class Task extends Component{

  constructor(props){
    super(props)
    console.log("Task")

    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

handleTouchTap() {
  alert('Não é para clicar aqui não migué');
}


  render(){

    return (
        <Container>
        <Form onSubmit={this.handleSubmit}>
          <TodoList/>
        <Button fluid>Save Task</Button>
        </Form>
        </Container>
      )
    }
}

export default Task
