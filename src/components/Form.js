import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          age: 0,
          email: "name@gmail.com",
          phone: "0972291598",

            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState({
            [name] : event.target.value,
            
        });

    }

    handleSubmit(event) {
        let user = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone,

        }
        this.props.onClickSubmit(user);
        event.preventDefault();
    }

    

  render() {
      return (
          <div className="Form-input">
            <div className="content-input">
                <label>Name :</label>
                <input defaultValue={this.state.name} name="name" type="text" onChange = {this.handleChange} className="form-control" />
            </div>
            <div className="content-input">
                <label>Age :</label>
                <input defaultValue={this.state.age} name="age" type="text" onChange = {this.handleChange} className="form-control" />
            </div>
            <div className="content-input">
                <label>Email :</label>
                <input defaultValue={this.state.email} name="email" type="text" onChange = {this.handleChange} className="form-control" />
            </div>
            <div className="content-input">
                <label>Phone :</label>
                <input defaultValue={this.state.phone} name="phone" type="text" onChange = {this.handleChange} className="form-control" />
            </div>
                <button type="submit" onClick={this.handleSubmit} className="btn btn-success">
                Add
                </button>
                <button type="button" className="btn btn-danger">
                Clear
                </button>
          </div> 
      )
  };
}
export default Form;
