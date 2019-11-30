import React from 'react';
import '../App.css';

const Header = ({totalItems, completedItems, uncompletedItems}) => {
    return (
        <header className="board_header">
            <h1>To do list</h1>
                <div className="information">
                    <p>Total items: {totalItems}</p>
                    <p>Items completed: {completedItems} </p>
                    <p>Items left to do: {uncompletedItems} </p>
                </div>
      </header>
    )
}

export default Header;