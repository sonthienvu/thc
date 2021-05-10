import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
          name: "",
          age: '',
          email: "",
          phone: "",
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        let item = nextProps.itemSelected;
        if (item) {
            this.setState({
            id: item.id,
            name: item.name,
            age: item.age,
            email: item.email,
            phone: item.phone,
            });
        }
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
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone,

        }
        this.setState({
            id: '',
            name: "",
            age: '',
            email: "",
            phone: "",
            });
        this.props.onClickSubmit(user);
        event.preventDefault();
    }
    
  render() {
      return (
          <div className="Form-input">
            <div className="content-input">
                <label>Name :</label>
                <input value={this.state.name} name="name" type="text" onChange = {this.handleChange} className="form-control" />
            </div>
            <div className="content-input">
                <label>Age :</label>
                <input value={this.state.age} name="age" type="text" onChange = {this.handleChange} className="form-control" />
            </div>
            <div className="content-input">
                <label>Email :</label>
                <input value={this.state.email} name="email" type="text" onChange = {this.handleChange} className="form-control" />
            </div>
            <div className="content-input">
                <label>Phone :</label>
                <input value={this.state.phone} name="phone" type="text" onChange = {this.handleChange} className="form-control" />
            </div>
                <button type="submit" onClick={this.handleSubmit} className="btn btn-success">
                Submit
                </button>
                <button type="button" className="btn btn-danger">
                Clear
                </button>
          </div> 
      )
  };
}
export default Form;
