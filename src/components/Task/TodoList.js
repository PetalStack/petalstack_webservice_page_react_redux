import React, { Component } from 'react'

import moment from 'moment'

import TodoItems from './TodoItems'
import { Form, Container, Message, Button,
  Dropdown, Icon } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'

class TodoList extends Component{

  constructor(){
     super()
     this.state = {
       items: [],
       item: '',
       formData: [],
       name: 'e',
       dateStart: moment(),
       dateEnd: moment()
     }
     this.addItem = this.addItem.bind(this)
     this.handleDateStart = this.handleDateStart.bind(this)
     this.handleDateEnd = this.handleDateEnd.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleItem = this.handleItem.bind(this)
  }


  handleItem(e){
    this.setState({item: e.target.value})
  }

  handleDateStart(date){
    this.setState({dateStart: date})
    console.log(this.state.dateStart)
  }

  handleDateEnd(date){
    this.setState({dateEnd: date})
    console.log(this.state.dateEnd)
  }

  handleSubmit(e){
    e.preventDefault()
  }

  addItem(e){
    let itemArray = this.state.items;

    itemArray.push(
      {
        key: Date.now(),
        text: this.state.item,
        status: 'OPEN'
      }
    );

    e.preventDefault()
    this.setState({ item: '' });
    this.setState({itens: itemArray})
    console.log(this.state.itens);
  }

  render(){
    const statusOptions = [
      {
        text: 'Open',
        value: 'OPEN',
      },
      {
        text: 'Closed',
        value: 'CLOSED',
      },
      {
        text: 'Stoped',
        value: 'STOPED',
      }
    ]


  return (
      <Container>

      <Form.Group widths='equal'>
        <Form.Input label='Title Task' value={this.state.name} />
        <Form.Field>
          <label>Start Date</label>
          <DatePicker placeholder="Start Date"  selected={this.state.dateStart} onChange={this.handleDateStart}  />
        </Form.Field>
        <Form.Field>
          <label>End Date</label>
          <DatePicker  selected={this.state.dateEnd} onChange={this.handleDateEnd}  />
        </Form.Field>
        <Form.Field>
          <label>Status</label>
          <Dropdown placeholder='Select Friend' fluid selection options={statusOptions} />
          </Form.Field>
      </Form.Group>
      <Form.Group widths='equal'>

      <Form.TextArea label='Description' placeholder='Try adding multiple lines' autoHeight />

      </Form.Group>
      <Container textAlign="center">
        <Form.Group widths="equal" >
          <Form.Input label='Todo' onChange={this.handleItem} value={this.state.item} />
          <br/>
        </Form.Group>
      </Container>
      <Container textAlign="right">
          <Button color='facebook'>
          <Icon name='facebook' /> Facebook
          </Button>
      </Container>
      <br/>
            <TodoItems items={this.state.items}/>
        </Container>
    )
  }
}

export default TodoList
