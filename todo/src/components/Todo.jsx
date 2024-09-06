import React from 'react';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';

const Todo = ({ task, deleteTodo, editTodo }) => {
  // console.log(task);
  return (
    <div className="flex justify-between items-center bg-blue-400 text-white py-3 px-4 rounded-md my-1">
      <p>{task.task}</p>
      <div className="flex items-center gap-x-4">
        <RiEdit2Fill className="text-xl" onClick={() => editTodo(task.id)} />
        <MdDelete className="text-xl" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
