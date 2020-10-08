import React from 'react';
import PropTypes from 'prop-types';

const AddNewTodoForm = ({
  newTodo,
  createNewTodo,
  handleInputChange,
  submitTextLabel,
  filter,
}) => filter === 'all' && (
  <form className="todo-form" onSubmit={createNewTodo}>
    <input
      className="todo-name-input"
      name="name"
      placeholder="Add new todo"
      value={newTodo.name}
      onChange={(event) => handleInputChange(event)}
    />
    <button
      className="submit-todo-btn btn btn-success"
      type="submit"
      value="Submit"
      disabled={!newTodo.name === true}
    >
      {submitTextLabel}
    </button>
  </form>
);

AddNewTodoForm.propTypes = {
  newTodo: PropTypes.instanceOf(Object).isRequired,
  createNewTodo: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submitTextLabel: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

export default AddNewTodoForm;
