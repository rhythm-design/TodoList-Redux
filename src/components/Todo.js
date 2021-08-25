import React, {useState} from "react";
import {useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./Todo.css";

function Todo(){

    const [inputData,setInputData]=useState("");
    const list=useSelector((state)=> state.todoReducers.list);
    const dispatch=useDispatch();
    
    return(
        <div className="main-div" >
        <div className="child-div">

        <figure>
            <figcaption>Add your item</figcaption>
        </figure>

        <div className="addItems">
            <input type="text" placeholder="Add Items" 
            value={inputData}
            onChange={(event)=>setInputData(event.target.value)}
             />
            <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData), setInputData(""))}></i>
        </div>
        <div className="show-items">

                {
                    list.map((element)=>{
                        return(
                            <div className="eachItem" key={element.id}>
                                <h3>{element.data}</h3>
                                <div className="todo-btn"> 
                                     <i className="far fa-trash-alt add-btn" title="delete items" onClick={()=>dispatch(deleteTodo(element.id))}></i>
                                </div>
                            </div>
                        );
                        
                    })
                }
        </div>
        <div className="showItems">
            <button className="btn effect04" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>
        </div>

        </div>
        </div>
    );
}
export default Todo;