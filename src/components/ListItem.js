import React, { Component } from "react";


class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
   handleDelete=(id) => {
    this.props.onDelete(id)
  }


  render() {
    
    const item = this.props.item;
    const {index} = this.props;
   
    
    return (
      <tr>
        <th scope="row">{ index + 1 }</th>
        <td>{ item.name }</td>
        <td>{ item.age }</td>
        <td>{ item.email }</td>
        <td>{ item.phone }</td>
        <td>
          <button type="button" className="btn btn-primary">Edit</button>
        </td>
        <td>
        <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-primary">Delete</button>
        </td>
      </tr>
    )
  };
}
export default ListItem;