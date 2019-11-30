import React from 'react';
import '../App.css';

class Input extends React.Component{
    
    state = {
        value: "",
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewItem(this.state.value);
        this.setState({value: ''})
    }

    render() {
        return (
            <form onSubmit={  this.handleSubmit } className="input_field" > 
                <input type="text" placeholder="Enter a new item" value={this.state.value} onChange={this.handleValueChange}></input>
                <button type="submit">Submit</button>
            </form> 
        )
     }
    }



export default Input;