import React from 'react';
import PropTypes from 'prop-types';

const TodosHeader = ({ filter }) => {
  let header;

  if (filter === 'all') header = 'ToDos';
  if (filter === 'important') header = 'Important';
  if (filter === 'planned') header = 'Planned';

  return <div className="todos-header">{header}</div>;
};

TodosHeader.propTypes = {
  filter: PropTypes.string.isRequired,
}

export default TodosHeader;
