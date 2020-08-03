import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import TodoFooter from './components/TodoFooter/TodoFooter';

import { ITodo } from './interfaces/todos';

import { uid } from './helpers';
import GlobalStyle from './style';

const TODOS: Array<ITodo> = [
  {
    id: '1',
    title: 'Test One',
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Test Two',
    isCompleted: false,
  },
  {
    id: '3',
    title: 'Test Three',
    isCompleted: true,
  },
];

const App: React.FC = (): React.ReactElement => {
  const [todos, setTodos] = useState<ITodo[]>(TODOS);
  const [value, setValue] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const removeTodo = (id: string): void => {
    const newTodos: Array<ITodo> = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const updateTodo = (id: string): void => {
    const updatedTodos: Array<ITodo> = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );

    setTodos(updatedTodos);
  };

  const addNewTodo = (newTodo: ITodo): void => {
    setTodos([...todos, newTodo]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    setValue(value);
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    const { key } = event;

    if (key === 'Enter') {
      const newTodo: ITodo = {
        id: uid(),
        title: value,
        isCompleted: false,
      };

      addNewTodo(newTodo);
      setValue('');
    }
  };

  const filterTodos = (filter: string): void => {
    let filteredTodos: Array<ITodo>;

    switch (filter) {
      case 'active':
        filteredTodos = TODOS.filter((todo) => !todo.isCompleted);
        setActiveFilter('active');
        break;

      case 'done':
        filteredTodos = TODOS.filter((todo) => todo.isCompleted);
        setActiveFilter('done');
        break;

      default:
        filteredTodos = TODOS;
        setActiveFilter('all');
        break;
    }

    setTodos(filteredTodos);
  };

  const getActiveTodos = (): number => {
    return todos.filter((todo) => !todo.isCompleted).length;
  };

  return (
    <>
      <GlobalStyle />
      <TodoInput value={value} onChange={handleInputChange} onKeyPress={handleInputKeyPress} />
      {todos && todos.length > 0 && <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />}
      <TodoFooter amount={getActiveTodos()} activeFilter={activeFilter} changeFilter={filterTodos} />
    </>
  );
};

export default App;
