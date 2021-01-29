const express = require('express')
const ctrl = require('./controller')


const app = express();

app.use(express.json())

app.get('/api/todos', ctrl.getTodos)
app.post('/api/todos', ctrl.addTodo)
app.put('/api/todos/:id', ctrl.completeTodo)
app.delete('/api/todos/:id', ctrl.deleteTodo)

const port = 4000

app.listen(port, () => console.log(`Listening on port ${port}`))