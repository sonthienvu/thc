import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
import items from "./components/mocks/tasks";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
    };
  }
  handleDelete(id) {

  }
  render() {
    let items = this.state.items;
    return (
      <div className="App container">

        <Title />

        <Form />
        
        <List 
        onClickDelete={this.handleDelete}
        items={items}/>
      </div>
    );
  }
}

export default App;
