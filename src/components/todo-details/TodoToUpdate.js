import React from 'react';
import PropTypes from 'prop-types';

const TodoToUpdate = ({ todoToUpdate }) => (
  <div className="todo-details-todo">
    <div className="todo-details-grid-item">
      <b>Name</b>
    </div>
    <div className="todo-details-grid-item">{todoToUpdate.name}</div>
    <div className="todo-details-grid-item">
      <b>Importance</b>
    </div>
    <div className="todo-details-grid-item">{todoToUpdate.importance || 'Normal'}</div>
    {todoToUpdate.date && (
      <>
        <div className="todo-details-grid-item ">
          <b>Due date</b>
        </div>
        <div className="todo-details-grid-item">{todoToUpdate.date}</div>
      </>
    )}
    {todoToUpdate.description && (
      <>
        <div className="todo-details-grid-item">
          <b>Description</b>
        </div>
        <div className="todo-details-grid-item">{todoToUpdate.description}</div>
      </>
    )}
  </div>
);

TodoToUpdate.propTypes = {
  todoToUpdate: PropTypes.instanceOf(Object).isRequired,
};

export default TodoToUpdate;
