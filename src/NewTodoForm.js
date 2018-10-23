import React, {Component} from "react";

export default class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state={
            task:""
        };
    }
    handleSubmit(e){
       e.preventDefault(); 
       this.props.addTodo(this.state.task); //change the dispatch action into this simple code, because we are connect the function in line 65
       e.target.reset(); 
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
        
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>   
                <label htmlFor="task">Task </label>
                <input 
                    type="text" 
                    name="task" 
                    id="task"
                    onChange={this.handleChange}   
                />
                <button>Add a Todo</button>
            </form>
        )
    }
    
}