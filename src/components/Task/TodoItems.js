import React, { Component, PropTypes } from 'react'

import { Button, Image, List, Grid, Segment,
   Table, Checkbox } from 'semantic-ui-react'

class TodoItems extends Component{
  constructor(props){
    super()
    this.state = {
      key: '',
      text: '',
      checked: false
     }
    console.log(this.props);
    this.clickStatus = this.clickStatus.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  clickStatus(e){
    alert(this.state.checked);
    this.setState({checked: !this.state.checked})
    alert(this.state.checked);
  }

  handleChange(e){
    alert("Evento")
    alert(this.state.checked);
  }

  createListItems(item) {
    return(
      <Table.Row>
        <Table.Cell>
        <Checkbox label={item.text}
         checked={item.checked}
       />
        </Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>
        <Button icon='delete'color='red' content='Del'/>
        <Button icon='check' color='green' content='Done'/>
        <Button icon='play' color="yellow" content='Play' />
        </Table.Cell>
      </Table.Row>
          )
  }

  render(){


    let todo = [
      {
        key: '1',
        text: 'False',
        checked: false
      },
      {
        key: '2',
        text: 'True',
        checked: true
      }

    ]
    let listEntries = this.props.items
    let listItems = listEntries.map(this.createListItems)

    return(
      <div>

      <Table fixed>
     <Table.Header>
       <Table.Row>
         <Table.HeaderCell>Name</Table.HeaderCell>
         <Table.HeaderCell>Status</Table.HeaderCell>
         <Table.HeaderCell>Description</Table.HeaderCell>
       </Table.Row>
     </Table.Header>

     <Table.Body>
     {listItems}

      </Table.Body>
   </Table>
  <br/>
      </div>
    )
  }
}

export default TodoItems
