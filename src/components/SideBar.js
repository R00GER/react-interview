import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineMenu,
  AiOutlineStar,
  AiOutlineHome,
  AiOutlineCalendar,
} from 'react-icons/ai';

const SideBar = ({ toggleSidebar, showSidebar, filterTodos }) => {
  const sideBarStyles = {
    backgroundColor: '#f4f4f4',
    borderRight: '1px solid #dbdbdb',
    gridColumn: showSidebar ? '1 / 4' : '1 / 2',
  };

  return (
    <div className="sidebar" style={sideBarStyles}>
      <div className="sidebar-toggle">
        <div
          className="sidebar-toggle-icon"
          style={{
            justifyContent: showSidebar ? 'flex-start' : 'center',
            paddingLeft: showSidebar ? '8px' : '0',
          }}
        >
          <AiOutlineMenu
            className="sidebar-icon"
            color="#663399"
            size="1.6rem"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      <div className="sidebar-actions">
        <div
          className="sidebar-task"
          style={{
            justifyContent: showSidebar ? 'flex-start' : 'center',
            paddingLeft: showSidebar ? '.5rem' : '0',
          }}
          role="button"
          tabIndex={0}
          onClick={() => filterTodos('all')}
        >
          <AiOutlineHome className="sidebar-icon" id="tasks" color="#663399" size="1.6rem" />
          {showSidebar && (
            <div className="sidebar-text" style={{ lineHeight: 2 }}>
              Todos
            </div>
          )}
        </div>
        <div
          className="sidebar-important"
          style={{
            justifyContent: showSidebar ? 'flex-start' : 'center',
            paddingLeft: showSidebar ? '.5rem' : '0',
          }}
          role="button"
          tabIndex={0}
          onClick={() => filterTodos('important')}
        >
          <AiOutlineStar className="sidebar-icon" id="important" color="#663399" size="1.6em" />
          {showSidebar && (
            <div className="sidebar-text" style={{ lineHeight: 2 }}>
              important
            </div>
          )}
        </div>
      </div>

      <div
        className="sidebar-lists"
        style={{
          justifyContent: showSidebar ? 'flex-start' : 'center',
          paddingLeft: showSidebar ? '.5rem' : '0',
        }}
        role="button"
        tabIndex={0}
        onClick={() => filterTodos('planned')}
      >
        <AiOutlineCalendar className="sidebar-icon" id="new-list" color="#663399" size="1.6rem" />
        {showSidebar && (
          <div className="sidebar-text" style={{ lineHeight: 2 }}>
            Planned
          </div>
        )}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  showSidebar: PropTypes.bool.isRequired,
  filterTodos: PropTypes.func.isRequired,
};

export default SideBar;
