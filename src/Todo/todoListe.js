import React, { Component } from 'react';


class TodoList extends Component {
    render() {
    return(
     <div className = "jumbotron jumbotron-fluid">
         <div className = "container" >
             <h1 align="center" className = "display-4">LISTE DE CHOSES A FAIRE</h1>
             <form className="form-row align-items-center">
                 <div className = " form-group col-md-10 ">
                     <input 
                         type = "text" 
                         placeholder = "Que voulez-vous faire ...."
                         className = " form-control "
                     />
                 </div>
                 <div className = " form-group col-md-2 ">
                     <button 
                        type = "submit"
                         className = "form-control"
                         className = "btn btn-primary"
                     >
                         Ajouter
                     </button>
                 </div>
                </form> 
         </div>
         
     </div>
    );
 }
}
  
export default TodoList
