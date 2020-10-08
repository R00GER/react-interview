import React, { useState, useEffect } from 'react';
import todoService from './services/todos';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Todos from './components/todos/Todos';
import TodoDetails from './components/todo-details/TodoDetails';
import Content from './components/Content';
import './App.css';

const App = () => {
  const [newTodo, setNewTodo] = useState({
    id: null,
    name: '',
    date: '',
    description: '',
    complete: false,
    importance: '',
  });
  const [todoToUpdate, setTodoToUpdate] = useState({});
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showTodoDetails, setShowTodoDetails] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const getInitialTodos = async () => {
      const initialTodos = await todoService.getAll();
      setTodos(todos.concat(initialTodos));
    };
    getInitialTodos();
    // eslint-disable-next-line
  }, []);

  const generateNewId = () => Date.now().toString().substr(-5);

  const resetInputs = () => setNewTodo({
    id: null,
    name: '',
    date: '',
    description: '',
    complete: false,
    importance: '',
  })

  const createNewTodo = async (event) => {
    event.preventDefault();

    const newTodoToAdd = {
      id: generateNewId(),
      name: newTodo.name,
      date: '',
      description: '',
      complete: false,
      importance: '',
    };

    const response = await todoService.createTodo(newTodoToAdd);
    setTodos(todos.concat(response));

    resetInputs();
  };

  const toggleDetails = (todo) => {
    setShowTodoDetails(!showTodoDetails);

    if (todo) {
      setTodoToUpdate(todo);
    }

    if (showSidebar) {
      setShowSidebar(!showSidebar);
    }
  };

  const setTodoDetails = async (event) => {
    event.preventDefault();

    const detailedTodo = {
      ...todoToUpdate,
      description:
        newTodo.description && todoToUpdate.description !== newTodo.description
          ? newTodo.description
          : todoToUpdate.description,
      date: newTodo.date && todoToUpdate.date !== newTodo.date ? newTodo.date : todoToUpdate.date,
      importance:
        newTodo.importance && todoToUpdate.importance !== newTodo.importance
          ? newTodo.importance
          : todoToUpdate.importance,
    };

    const updatedTodo = await todoService.updateTodo(detailedTodo);
    setTodos(todos.map((t) => (t.id !== updatedTodo.id ? t : updatedTodo)));
    resetInputs();

    setTimeout(() => {
      toggleDetails();
    }, 800);
  };

  const toggleComplete = async (todo) => {
    const foundedTodo = todos.find((t) => t.id === todo.id);
    const completedTodo = { ...foundedTodo, complete: !foundedTodo.complete };
    const updatedTodo = await todoService.updateTodo(completedTodo);

    setTodos(todos.map((t) => (t.id !== todo.id ? t : updatedTodo)));
  };

  const handleInputChange = (event) => {
    setNewTodo({
      ...newTodo,
      [event.target.name]: event.target.value,
    });
  };

  const handleImportance = async (todo) => {
    const currentImportance = todo.importance;
    const foundedTodo = todos.find((t) => t.id === todo.id);
    const updatedTodo = {
      ...foundedTodo,
      importance: currentImportance === 'Normal' || !todo.importance ? 'High' : 'Normal',
    };

    const response = await todoService.updateTodo(updatedTodo);

    if (updatedTodo.importance === 'High') {
      setFilteredTodos(filteredTodos.map((t) => (t.id !== todo.id ? t : response)));
    } else {
      setFilteredTodos(filteredTodos.filter((t) => t.id !== todo.id));
    }

    setTodos(todos.map((t) => (t.id !== response.id ? t : response)));
  };

  const removeTodo = async (id) => {
    await todoService.removeTodo(id); // variable to handle errors
    setTodos(todos.filter((todo) => todo.id !== id));
    setFilteredTodos(filteredTodos.filter((todo) => todo.id !== id));
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);

    if (showTodoDetails) {
      setShowTodoDetails(!showTodoDetails);
    }
  };

  const filterTodos = (filterValue) => {
    setFilter(filterValue);
    if (filterValue === 'important') {
      setFilteredTodos(todos.filter((todo) => todo.importance === 'High'));
    }
    if (filterValue === 'planned') {
      setFilteredTodos(todos.filter((todo) => todo.date));
    }

    if (showSidebar) {
      toggleSidebar();
    }
  };

  return (
    <div className="app">
      <Header headerText="ToDos" />
      <Content>
        <SideBar
          toggleSidebar={toggleSidebar}
          filterTodos={filterTodos}
          showSidebar={showSidebar}
        />
        <Todos
          toggleDetails={toggleDetails}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          todos={filter === 'all' ? todos : filteredTodos}
          createNewTodo={createNewTodo}
          newTodo={newTodo}
          handleImportance={handleImportance}
          handleInputChange={handleInputChange}
          filter={filter}
        />
        {showTodoDetails && (
          <TodoDetails
            setTodoDetails={setTodoDetails}
            handleInputChange={handleInputChange}
            toggleDetails={toggleDetails}
            newTodo={newTodo}
            todoToUpdate={todoToUpdate}
          />
        )}
      </Content>
    </div>
  );
};

export default App;
