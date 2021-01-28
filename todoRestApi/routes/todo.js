import express from 'express';
import {getTodo, addTodo, getTodoId, deleteTodo, updateTodo} from '../controllers/todo.js';

const router = express.Router();

let todos = [];

router.get('/', getTodo);

router.post('/', addTodo);

router.get('/:id', getTodoId);

router.delete('/:id', deleteTodo);

router.patch('/:id', updateTodo)


export default router;
