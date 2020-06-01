import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const data = [
  {  
    id: 1,
    task: 'Complete Unit 2',
    completed: true
  },
  {  
    id: 2,
    task: 'Complete this assignment',
    completed: false
  },
  {  
    id: 3,
    task: 'Complete Unit 3',
    completed: false
  }
]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: data
    }
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  toggleCompleted = taskId => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === taskId){
          return {
            ...item, completed: !item.completed
          };
        }
        return item;
      })
    })
  }
  addItemToList = item => {
    this.setState({
      list: [ ...this.state.list,
        {
          id: Date.now(),
          task: item,
          completed: false
        }
      ]
    })
  }
  clearItem = () => {
    this.setState({
      list: this.state.list.filter(item => {
        return !item.completed;
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItemToList = {this.addItemToList} />
        <TodoList
          list = {this.state.list}
          toggleCompleted = {this.toggleCompleted}
          clearItem = {this.clearItem}
        />
      </div>
    );
  }
}

export default App;
