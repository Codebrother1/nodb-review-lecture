const todos = [{
  id: 0,
  task: "We named the dog Indiana",
  complete: false
}];

let id = 1;

module.exports = {
  getTodos: (req, res) => {
    res.status(200).send(todos)
  },
  addTodo: (req, res) => {
    const {task} =req.body;
    const newTodo = {id, task, complete: false};
    todos.push(newTodo);
    id++;
    res.status(200).send(todos);
  },
  completeTodo: (req, res) => {
    const index = todos.findIndex( todo => todo.id === +req.params.id)
    todos[index].complete = !todos[index].complete;
    res.status(200).send(todos)
  },
    deleteTodo: (req, res) => {
      const index = todos.findIndex( todo => todo.id === +req.params.id)
      todos.splice(index, 1)
      res.status(200).send(todos)
    }
}