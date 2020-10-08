import axios from 'axios';

const url = 'http://localhost:4000/todos';

const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
};

const createTodo = async (newTodo) => {
  const response = await axios.post(url, newTodo)
  return response.data;
}

const updateTodo = async (todo) => {
  const response = await axios.put(`${url}/${todo.id}`, todo);
  return response.data;
};

const removeTodo = async (id) => {
  const response = await axios.delete(`${url}/${id}`)
  return response.data;
}

export default {
  getAll,
  createTodo,
  updateTodo,
  removeTodo,
};
