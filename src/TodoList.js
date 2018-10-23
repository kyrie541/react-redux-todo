import React, {Component} from "react";
import Todo from "./Todo";
import {connect} from "react-redux";
import {addTodo, removeTodo} from "./actionCreators";  //

class TodoList extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state={
            task:""
        };

    }
    
    removeTodo(id){
        this.props.removeTodo(id);  //
    }
    render(){
        let todos = this.props.todos.map((val, index)=>(    
            <Todo 
                removeTodo={this.removeTodo.bind(this, val.id)} 
                task={val.task} 
                key={index}
            />
        ));
        return(
            <div>

                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(reduxState){ //must return an object
    return {        
        todos: reduxState.todos
    }; 
}

export default connect(mapStateToProps, {addTodo, removeTodo} )(TodoList);  //

