import React, { Component } from 'react';


// import all components 
import CompetedLength from './components/CompetedLength';
import TodoArchive from './components/TodoArchive';
import AddItemToList from './components/AddItemToList';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            input: '',
            todos: [],
            isMouseInside: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
    }

handleChange(e){
        e.preventDefault();
        this.setState({
            input: e.target.value
        });
    }

handleListItemClick(todo){
        const todos = this.state.todos.slice();
        todo.completed = !todo.completed;
        this.setState({
            todos
        });
    }

handleCheckboxClick(todo,e){
        const todos = this.state.todos.slice();
        todo.completed = !todo.completed;
        this.setState({
            todos
        });
        e.stopPropagation();
    }

handleClick(e,id) {
        const todos = this.state.todos.filter((todo)=>{
            if(todo.id!==id){
                return todo;
            }
        });

        this.setState({
            todos
        });
        e.stopPropagation();
    }

handleKeyPress(e){
        e.preventDefault();

        if(this.state.input.trim()!=='') {
            const newTodo = {
                id: Date.now(),
                value: this.state.input,
                completed: false
            }
            const todos = this.state.todos.slice();
            todos.push(newTodo);
            this.setState({
                todos,
                input: ''
            });
        }
}

  handleRemoveItem = e => {
    const { todos } = this.state;

    let itemRemoved = e.target.id;
    let newList;
    newList = todos.filter(item => {
      if (item.id !== itemRemoved) {
        return item;
      }
    });

    this.setState({
      todos: newList
    });
  };

render(){
            return(
                <div className="main">

                    <h1>Todo App</h1>
                    <AddItemToList
                    input = {this.state.input}
                    handleChange = {this.handleChange}
                    handleKeyPress = {this.handleKeyPress}
                    />

                    <TodoArchive
                        todos= {this.state.todos}
                        handleCheckboxClick = {this.handleCheckboxClick}
                        handleClick= {this.handleClick}
                        handleListItemClick ={this.handleListItemClick}
                        handleRemoveItem={this.handleRemoveItem}
                    />
                     <span className='footer'>
                    <CompetedLength
                    incomplete = {this.state.todos.filter((ele)=>{
                            return ele.completed===false;
                        })}
                    />
                    </span>
                </div>
            );
        }
}
