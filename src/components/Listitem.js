import React from 'react';
import '../App.css';

const List = ({task, index, completed, handleDeleteItem, changeCompleteState }) => {
    // In the class, it checks if completed is true and conditionally changes the color of the index number
    return (
        <li><span onClick={ () => changeCompleteState(index)} 
        className={"number" + (completed ? " completed" : " ")}>{ index + 1 }</span> {task} 
        <button className="remove_button" onClick={handleDeleteItem}>X</button></li>
    )
}

export default List;