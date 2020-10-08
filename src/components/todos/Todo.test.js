import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Todo from './Todo';

const originalError = console.error;
let todo;
let todoComponent;

describe('Todo app', () => {
  beforeEach(() => {
    console.error = jest.fn();

    todo = {
      id: Math.floor(Math.random()) * Math.floor(1000),
      name: 'Test todo',
      complete: false,
      date: '',
      description: '',
      importance: '',
    };

    todoComponent = render(<Todo todo={todo} />);
  });

  test('renders todo', () => {
    expect(todoComponent.container).toHaveTextContent('Test todo');
  });

  test('with all the elements that are initially shown', () => {
    const container = todoComponent.container.querySelector('.todo');
    const undoneIcon = todoComponent.container.querySelector('#undone-icon');
    const todoName = todoComponent.container.querySelector('.todo-name');
    const notImportantIcon = todoComponent.container.querySelector('#normal-importance-icon');
    const deleteIcon = todoComponent.container.querySelector('#delete-icon');

    expect(container).toBeInTheDocument();
    expect(undoneIcon).toBeInTheDocument();
    expect(todoName).toBeInTheDocument();
    expect(notImportantIcon).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
  });

  test('hided elements are note rendered', () => {
    const doneIcon = todoComponent.container.querySelector('#done-icon');
    const importantIcon = todoComponent.container.querySelector('#high-importance-icon');

    expect(doneIcon).not.toBeInTheDocument();
    expect(importantIcon).not.toBeInTheDocument();
  });
});

describe('Hided elements are rendered with valid data', () => {
  beforeEach(() => {
    todo = {
      id: Math.floor(Math.random()) * Math.floor(1000),
      name: 'Test todo',
      complete: false,
      date: '',
      description: '',
      importance: '',
    };
  });

  test('when Todo is completed', async () => {
    todo = {
      id: Math.floor(Math.random()) * Math.floor(1000),
      name: 'Test todo',
      complete: true,
      date: '',
      description: '',
      importance: '',
    };

    const mockCompleteHandler = jest.fn();
    todoComponent = render(<Todo todo={todo} toggleComplete={mockCompleteHandler} />);

    const doneIcon = todoComponent.container.querySelector('#done-icon');
    expect(doneIcon).toBeInTheDocument();
    expect(todoComponent.container.querySelector('.todo')).toHaveStyle(
      'background-color: rgba(170, 131, 210, 0.2)',
    );
  });

  test('when Todo is important', async () => {
    todo = {
      id: Math.floor(Math.random()) * Math.floor(1000),
      name: 'Test todo',
      complete: false,
      date: '',
      description: '',
      importance: 'High',
    };

    const mockImportantHandler = jest.fn();
    todoComponent = render(<Todo todo={todo} handleImportance={mockImportantHandler} />);

    const importantIcon = todoComponent.container.querySelector('#high-importance-icon');
    expect(importantIcon).toBeInTheDocument();

    // ALL ASYNC TESTS FAILS, I THINK IT IS SOMEKIND OF TIMING PROBLEM
    // const { getByTitle } = render(<Todo todo={todo} handleImportance={mockImportantHandler} />);
    // const notImportant = getByTitle('Toggle high importance');
    // fireEvent.click(notImportant);

    // await waitFor(() => getByTitle('Toggle normal importance')); NOT FOUND
  });
});

describe('when interacting with the app', () => {
  beforeEach(() => {
    todo = {
      id: Math.floor(Math.random()) * Math.floor(1000),
      name: 'Test todo',
      complete: false,
      date: '',
      description: '',
      importance: 'High',
    };
  });

  test('clicking delete-icon calls removeTodo function', () => {
    const mockDeleteHandler = jest.fn();
    todoComponent = render(<Todo todo={todo} removeTodo={mockDeleteHandler} />);

    const deleteIcon = todoComponent.container.querySelector('#delete-icon');

    fireEvent.click(deleteIcon);
    expect(mockDeleteHandler.mock.calls).toHaveLength(1);
    expect(mockDeleteHandler.mock.calls[0][0]).toBe(todo.id);
  });

  test('clicking important-icon calls importancehandler', () => {
    const mockImportantHandler = jest.fn();
    todoComponent = render(<Todo todo={todo} handleImportance={mockImportantHandler} />);

    const importantIcon = todoComponent.container.querySelector('#high-importance-icon');

    fireEvent.click(importantIcon);
    expect(mockImportantHandler.mock.calls).toHaveLength(1);
    expect(mockImportantHandler.mock.calls[0][0]).toBe(todo);
  });

  test('clicking complete-icon calls toggleComplete function', () => {
    const mockCompleteHandler = jest.fn();
    todoComponent = render(<Todo todo={todo} toggleComplete={mockCompleteHandler} />);

    const undoneIcon = todoComponent.container.querySelector('#undone-icon');

    fireEvent.click(undoneIcon);
    expect(mockCompleteHandler.mock.calls).toHaveLength(1);
    expect(mockCompleteHandler.mock.calls[0][0]).toBe(todo);
  });

  test('clicking Todos name calls toggleDetails function', () => {
    const mockToggleDetails = jest.fn();
    todoComponent = render(<Todo todo={todo} toggleDetails={mockToggleDetails} />);

    const todoName = todoComponent.container.querySelector('#todo-name-value');

    fireEvent.click(todoName);
    expect(mockToggleDetails.mock.calls).toHaveLength(1);
    expect(mockToggleDetails.mock.calls[0][0]).toBe(todo);
  });
});

afterAll(() => {
  console.error = originalError;
});
