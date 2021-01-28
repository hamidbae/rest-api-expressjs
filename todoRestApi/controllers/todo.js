import { v4 as uuidv4 } from 'uuid';

let todos = [];

export const getTodo = (req, res) => {
    res.send(todos);
}

export const addTodo = (req, res) => {
    const todo = req.body;
    const id = uuidv4();

    const todoWithId = { ...todo, id: id }

    todos.push(todoWithId);

    res.send(`Todo with id ${id} has been created`);
}

export const getTodoId = (req, res) => {
    const {id} = req.params;

    const todo = todos.find((todo => todo.id === id));

    res.send(todo);
}

export const deleteTodo = (req, res) => {
    const {id} = req.params;

    todos = todos.filter((todo) => todo.id !== id);

    res.send(`Todo with id ${id} has been deleted`)
}

export const updateTodo = (req,res) => {
    const {id} = req.params;
    const {time, doing} = req.body;

    const todo = todos.find((todo) => todo.id === id);

    if(time) todo.time = time;
    if(doing) todo.doing = doing;

    res.send(`Todo with id ${id} has been updated`);
}