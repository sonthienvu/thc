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


    };
  }
  handleDelete = (id) =>{
    const itemSelect = this.state.items.findIndex(itemm=>itemm.id===id);
    this.state.items.splice(itemSelect,1);
    this.setState({...this.state, items:this.state.items})
  }
  handleSubmit=(user)=> {
    let {items} = this.state;
    items.push({
      id : uuidv4(),
      name : user.name,
      age : user.age,
      email : user.email,
      phone : user.phone,
    })
    this.setState({
      items : items
    })

  }

  render() {
    let items = this.state.items;
    return (
      <div className="App container">

        <Title />

        <Form onClickSubmit = {this.handleSubmit} />
        
        <List 
        onDelete = {this.handleDelete}
        items={items}/>
      </div>
    );
  }
}
export default App;
