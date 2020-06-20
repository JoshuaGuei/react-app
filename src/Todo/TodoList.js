import React, { Component } from 'react';
import { array } from 'prop-types';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput : '',
            items : []
        };
    }    

    onChange(event) {
        this.setState({
            userInput : event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput :'',
            items : [...this.state.items, this.state.userInput],
            dataedith : false

        });
    }

    deleteTodo(item) {
        
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });

    }


    modifTodo() {
        const array = this.state.items;
        const userInput = this.state.userInput;
        array.splice(userInput, 0);
        this.setState({
            items : array
        });

    }


    renderTodos() {
        return this.state.items.map((item) => {
            return(
                <div className = "list-group-item" key = {item}>
                    <form className =" form-row " >
                        <div className =" form-group col-md-11">
                            {item}
                        </div>
                        <div className = "form-group col-md-1 ">
                            <input type = "checkbox" className = "form-check-input"/>
                        </div>
                        <div className = " form-group col-md-1 ">
                            <button onClick = {this.modifTodo.bind(this, item)}
                                type="button" className = " form-control " className="btn btn-primary"
                                
                            >
                                Modifier
                            </button> 
                        </div>
                        <div className = " form-group col-md-1 ">
                            <button onClick = {this.deleteTodo.bind(this, item)}
                                type="button" className = " form-control " className="btn btn-danger"
                                
                            >
                                Supprimer
                            </button> 
                        </div>
                    
                    </form>
                    
                </div>
            );
        });
    }

    render() {
       return(
        <div className = "jumbotron jumbotron-fluid">
            <div className = "container" >
                <h1 align="center" className = "display-4">LISTE DE CHOSES A FAIRE</h1>
                <form className="form-row align-items-center">
                    <div className = " form-group col-md-10 ">
                        <input 
                            value = {this.state.userInput} 
                            type = "text" 
                            placeholder = "Que voulez-vous faire ...."
                            onChange = {this.onChange.bind(this)}
                            className = " form-control "
                        />
                    </div>
                    <div className = " form-group col-md-2 ">
                        <button 
                            onClick = {this.addTodo.bind(this)}
                            className = "form-control"
                            className = "btn btn-primary"
                        >
                            Ajouter
                        </button>
                    </div>
                    
                </form>
                <div className = "list-group list-group-flush">
                    {this.renderTodos()}  
                </div>
            </div>
            
        </div>
       );
    }
}

export default TodoList