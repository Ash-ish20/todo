import React from 'react';

const Todos = ({ todos }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold text-gray-800">{todo.title}</h1>
              <h2 className="text-sm text-gray-600 mt-1">{todo.description}</h2>
            </div>
            <button
              className={`ml-4 px-4 py-2 rounded-md ${
                todo.completed ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
              } hover:opacity-90 transition-all duration-300`}
            >
              {todo.completed ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
