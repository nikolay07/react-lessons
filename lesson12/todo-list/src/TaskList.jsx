import React from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

class TaskList extends React.Component {
  state = {
    tasks: [
      { text: "Buy milk", done: false, id: 1 },
      { text: "Pick up Tom from airport", done: false, id: 2 },
      { text: "Visit party", done: false, id: 3 },
      { text: "Visit doctor", done: true, id: 4 },
      { text: "Buy meat", done: true, id: 5 },
    ],
  };
  onCreate = (text) => {
    const { tasks } = this.state;
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };
    const updatedTasks = tasks.concat(newTask);
    this.setState({ tasks: updatedTasks });
  };
  handleTaskStatusChange = (id) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    this.setState({ tasks: updatedTasks });
  };
  handleTaskDelete = (id) => {
    const updatedTasks = this.state.tasks.filter(
      (task) => task.id !== id
    );
    this.setState({ tasks: updatedTasks });
  };
  render() {
    const sortedList = this.state.tasks
      .slice()
      .sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
