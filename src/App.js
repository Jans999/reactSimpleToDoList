import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Listitem from './components/Listitem.js';
import Input from './components/Input.js'

class App extends React.Component {

    state = {
      items: [
        {
          task: "This is the first task",
          completed: true,
          key: 1,
        },
        {
          task: "This is the second task",
          completed: false,
          key: 2,
        }
      ],
    }
  

  // On clicking the span number element, changes the complete state to the opposite of what it is (changes the color)
  changeCompleteState = (index) => {
    this.setState(prevstate => {
      return prevstate.items[index].completed = !prevstate.items[index].completed;
    })
  }


  // Iterates over the items array and checks how many are completed
  checkHowManyCompletedItems = () => {
    var completedItems = 0;
    for (var i = 0; i < this.state.items.length; i ++ ) {
      if (this.state.items[i].completed) {
        completedItems ++
      }
    }
    return completedItems;
  }


  // Finds the index from the number in the li and splices that from the state array
  handleDeleteItem = (e) => {
    var itemNumber= e.target.previousSibling.previousSibling.previousSibling.innerText - 1;
    this.setState(
      this.state.items.splice( itemNumber, 1 )
    )
  }


  // Adds a new item to the state array
  handleAddNewItem = (newItem) => {
    this.setState( {
      items: [
        ...this.state.items,
        {
        task: newItem,
        completed: false,
        key: this.state.items.length + 1,
        }
      ]
    })
  }

  render() {
    return (
      <div className="board_container">
        <Header 
          totalItems={this.state.items.length}
          completedItems={this.checkHowManyCompletedItems()}
          uncompletedItems={this.state.items.length - this.checkHowManyCompletedItems() }
        />

      <ul className="list">
      {/* This maps over the state items array and renders each item */}
        {this.state.items.map( (item, index) => 
          <Listitem 
          task={item.task} 
          key={item.key} 
          completed={item.completed} 
          index={index} 
          changeCompleteState={this.changeCompleteState}
          handleDeleteItem={this.handleDeleteItem}
          />
         )}
      </ul>

      <Input
      addNewItem={this.handleAddNewItem}
      />
  
      </div>
    );
  }
}

export default App;
