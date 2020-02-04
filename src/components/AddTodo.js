import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions'

class AddTodo extends React.Component{
constructor(props){
    super(props);
    this.state = {
        username: ''
    }
}


    changeHandler = input => {
        this.setState({input})
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: ''})
    }

    render(){




        return(
            <div>

                <input 
                type='text'
                placeholder='username'
                onChange={e => this.changeHandler(e.target.value)}
                value={this.state.input}
                />


                <button onClick={this.handleAddTodo}>Add Username</button>








            </div>
        )
    }
}




export default connect(
    null,
    {addTodo}
)(AddTodo);

