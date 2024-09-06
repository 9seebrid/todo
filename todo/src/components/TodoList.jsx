import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid'; // uuid 패키지를 사용하여 고유한 id 생성
import Todo from './Todo';
import Edit from './Edit';
uuidv4(); // -> '1c8c8e8a-7b6a-4d0a-8f5d-5d0b3d9b1e1e'

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([...todoValue, { id: uuidv4(), task: todo, isEdit: false }]); // todoValue 빈 배열에 todo를 합산하여 새로운 배열 생성
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id)); // todoValue 배열에서 id가 일치하지 않는 것만 필터링하여 새로운 배열 생성
  };

  const editTodo = (id) => {
    setTodoValue(todoValue.map((todo) => (todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo)));
    // todoValue 배열에서 id가 일치하는 것만 찾아내서 isEdit 값을 반대로 변경
  };

  const editTask = (editValue, id) => {
    setTodoValue(todoValue.map((todo) => (todo.id === id ? { ...todo, task: editValue, isEdit: !todo.isEdit } : todo)));
  };

  console.log(todoValue);

  return (
    <div className="container">
      <Form createTodo={createTodo} />

      {/* jsx는 소괄호로 감싸야 함 */}
      {todoValue.map((todo, idx) =>
        todo.isEdit ? (
          <Edit key={idx} editTask={editTask} task={todo} />
        ) : (
          <Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      )}
    </div>
  );
};

export default TodoList;
