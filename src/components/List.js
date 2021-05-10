import React, { Component } from "react";
import ListItem from "./ListItem"
import items from "./mocks/tasks";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    deleteItem=(id)=>{
        this.props.onDelete(id)
    }
    editItem = item => {
        this.props.onClickEdit(item)
    }

    render() {
        const items = this.props.items;
        const elmItem = items.map((item, index)=> {
            return (
                <ListItem 
                key={index} 
                item={item} 
                index={index} 
                onDelete={this.deleteItem}
                onClickEdit = {this.editItem}
                />
            );
        });
        return (
        <div className="List-content">
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">SDT</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {elmItem}
            </tbody>
            </table>      
        </div>
        )
    }
}
export default List;