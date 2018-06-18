import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoValue: "",
            filterType: "All",
            todos: [],
        }
    }

    render() {
        return (
            <div>
             <p>Make down todo list into smaller Component</p>
            </div>
        )
    }
}

export default App;