import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
  render() {
      return (
          <div className="Form-input">
            <div className="content-input">
                <label>Name :</label>
                <input type="text" className="form-control" />
            </div>
            <div className="content-input">
                <label>Age :</label>
                <input type="text" className="form-control" />
            </div>
            <div className="content-input">
                <label>Email :</label>
                <input type="text" className="form-control" />
            </div>
            <div className="content-input">
                <label>Sdt :</label>
                <input type="text" className="form-control" />
            </div>
                <button type="button" className="btn btn-success">
                Success
                </button>
                <button type="button" className="btn btn-danger">
                Danger
                </button>
          </div> 
      )
  };
}
export default Form;
