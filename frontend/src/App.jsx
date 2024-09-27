import { useState, useEffect } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const json = await response.json();
        setTodos(json.todos || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-lg text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-lg text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Todo List</h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <CreateTodo />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <Todos todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
