import React, { Component } from "react";
import items from "./mocks/tasks";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const item = this.props.items;
    console.log(item);
    return (
      <tr>
        <th scope="row"></th>
        <td> {items.name} </td>
        <td>{items.age}</td>
        <td>dd@gmail.com</td>
        <td>1232312</td>
        <td>
          <button type="button" className="btn btn-primary">Edit</button>
        </td>
        <td>
        <button type="button" className="btn btn-primary">Delete</button>
        
        </td>
      </tr>
    )
  };
}
export default ListItem;