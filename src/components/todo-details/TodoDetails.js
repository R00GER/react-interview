import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import TodoToUpdate from './TodoToUpdate';
import AddNewTodoDetailsForm from './AddNewTodoDetailsForm';

const TodoDetails = ({
  setTodoDetails,
  handleInputChange,
  newTodo,
  todoToUpdate,
  toggleDetails,
}) => (
  <div
    className="todo-details"
    style={{ backgroundColor: '#f4f4f4', borderLeft: '1px solid #dbdbdb' }}
  >
    <AiOutlineArrowLeft className="icon-back" fontSize="1.4rem" onClick={toggleDetails} />
    <TodoToUpdate todoToUpdate={todoToUpdate} />
    <AddNewTodoDetailsForm
      setTodoDetails={setTodoDetails}
      handleInputChange={handleInputChange}
      newTodo={newTodo}
      todoToUpdate={todoToUpdate}
    />
  </div>
);

TodoDetails.propTypes = {
  newTodo: PropTypes.instanceOf(Object).isRequired,
  setTodoDetails: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  todoToUpdate: PropTypes.instanceOf(Object).isRequired,
  toggleDetails: PropTypes.func.isRequired,
};

export default TodoDetails;
