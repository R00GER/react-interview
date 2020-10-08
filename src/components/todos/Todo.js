import React from 'react';
import PropTypes from 'prop-types';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';

const Todo = ({
  todo,
  toggleComplete,
  removeTodo,
  toggleDetails,
  handleImportance,
}) => (
  <div className="todo wrapper" style={{ backgroundColor: todo.complete ? '#aa83d233' : '#fff' }}>
    <div className="todo-complete grid-item">
      {todo.complete ? (
        <FiCheckCircle
          className="icon"
          id="done-icon"
          fontSize="1rem"
          color="#32CD32"
          role="button"
          title="ToDo done"
          onClick={() => toggleComplete(todo)}
        />
      ) : (
        <FiCircle
          className="icon"
          id="undone-icon"
          fontSize="1rem"
          role="button"
          title="Todo undone"
          onClick={() => toggleComplete(todo)}

        />
      )}
    </div>
    <div className="todo-name grid-item">
      <div
        id="todo-name-value"
        role="button"
        tabIndex={0}
        title="Show Todo details"
        onClick={() => toggleDetails(todo)}
      >
        {todo.name}
      </div>
    </div>
    <div className="todo-important grid-item-end">
      {todo.importance === 'Normal' || !todo.importance ? (
        <AiOutlineStar
          className="icon"
          id="normal-importance-icon"
          data-testid="not-important"
          fontSize="1.1rem"
          title="Toggle high importance"
          onClick={() => handleImportance(todo)}
        />
      ) : (
        <AiFillStar
          className="icon"
          id="high-importance-icon"
          data-testid="important"
          fontSize="1.1rem"
          color="#aa83d2"
          title="Toggle normal importance"
          onClick={() => handleImportance(todo)}
        />
      )}
    </div>
    <div className="todo-delete grid-item-end">
      <AiOutlineDelete
        className="icon"
        id="delete-icon"
        fontSize="1.1rem"
        title="Delete ToDo"
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  </div>
);

Todo.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleDetails: PropTypes.func.isRequired,
  handleImportance: PropTypes.func.isRequired,
};

export default Todo;
