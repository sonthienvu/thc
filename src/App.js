import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
import items from "./components/mocks/tasks";

const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      itemSelected: null
    };
  }
  handleDelete = (id) =>{
    const itemSelect = this.state.items.findIndex(itemm=>itemm.id===id);
    this.state.items.splice(itemSelect,1);
    this.setState({...this.state, items:this.state.items})
  }
  handleSubmit=(user)=> {
    let {items} = this.state;
    if (user.id !== '') {
      items.forEach((elm,key) => {
        if (elm.id === user.id) {
          items[key].name = user.name;
          items[key].age = user.age;
          items[key].email = user.email;
          items[key].phone = user.phone;
        }
      })
    } else {
        items.push({
        id : uuidv4(),
        name : user.name,
        age : user.age,
        email : user.email,
        phone : user.phone,
      })
    }
    this.setState({
      
      items : items,
    })
  }
  handleEdit = item => {
    this.setState({
      itemSelected : item

    });
  }

  

  render() {
    let items = this.state.items;
    let itemSelected = this.state.itemSelected;
    return (
      <div className="App container">

        <Title />

        <Form 
        itemSelected={itemSelected} 
        onClickSubmit = {this.handleSubmit}
        />
        
        <List 
        onDelete = {this.handleDelete}
        onClickEdit ={this.handleEdit}
        items={items}/>
      </div>
    );
  }
}
export default App;
