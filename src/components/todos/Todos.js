import React from 'react';
import PropTypes from 'prop-types';
import AddNewTodoForm from './AddNewTodoForm';
import TodosHeader from './TodosHeader';
import Todo from './Todo';

const NewTodos = ({
  toggleDetails,
  toggleComplete,
  removeTodo,
  todos,
  createNewTodo,
  newTodo,
  handleInputChange,
  handleImportance,
  filter,
}) => (
  <div className="todos-container">
    <TodosHeader filter={filter} />
    <AddNewTodoForm
      submitTextLabel="Submit"
      createNewTodo={createNewTodo}
      newTodo={newTodo}
      filter={filter}
      handleInputChange={(event) => handleInputChange(event)}
    />
    <div className="todos">
      {todos.length > 0 || filter === 'all' ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeBtnText="Remove from list"
            toggleDetails={toggleDetails}
            toggleComplete={() => toggleComplete(todo)}
            removeTodo={() => removeTodo(todo.id)}
            handleImportance={handleImportance}
          />
        ))
      ) : (
        <div className="no-todos">{`No ${filter} Todos founded`}</div>
      )}
    </div>
  </div>
);

NewTodos.propTypes = {
  toggleDetails: PropTypes.func.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  createNewTodo: PropTypes.func.isRequired,
  newTodo: PropTypes.instanceOf(Object).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleImportance: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default NewTodos;
