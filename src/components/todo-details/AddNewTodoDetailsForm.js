import React from 'react';
import PropTypes from 'prop-types';

const AddNewTodoDetailsForm = ({
  newTodo,
  setTodoDetails,
  handleInputChange,
  todoToUpdate,
}) => (
  <form className="todo-details-form" onSubmit={(event) => setTodoDetails(event)}>
    <select
      name="importance"
      value={newTodo.importance}
      onChange={(event) => handleInputChange(event)}
    >
      <option value="" disabled hidden>
        Set importance
      </option>
      <option value="High">High</option>
      <option value="Normal">Normal</option>
    </select>
    <select name="date" value={newTodo.date} onChange={(event) => handleInputChange(event)}>
      <option value="" disabled hidden>
        Add due date
      </option>
      <option value="Today">Today</option>
      <option value="Tomorrow">Tomorrow</option>
      <option value="Next week">Next week</option>
    </select>
    <textarea
      value={newTodo.description}
      name="description"
      placeholder="Add or update description"
      onChange={(event) => handleInputChange(event)}
    />
    {((newTodo.date && newTodo.date !== todoToUpdate.date)
    || (newTodo.importance && newTodo.importance !== todoToUpdate.importance)
    || (newTodo.description && newTodo.description !== todoToUpdate.description)) && (
      <button className="update-todo-btn" type="submit">
        Update
      </button>
    )}
  </form>
);

AddNewTodoDetailsForm.propTypes = {
  newTodo: PropTypes.instanceOf(Object).isRequired,
  setTodoDetails: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  todoToUpdate: PropTypes.instanceOf(Object).isRequired,
};

export default AddNewTodoDetailsForm;
