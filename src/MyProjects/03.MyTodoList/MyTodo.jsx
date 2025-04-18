import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (display.includes(text.trim()) || text.trim() === "") {
      setError('Item already exists or empty!');
    } else {
      setDisplay([...display, text.trim()]);
      setText('');
      setError('');
    }
  };

  const deleteBtn = (index) => {
    const updatedList = display.filter((_, i) => i !== index);
    setDisplay(updatedList);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-10 px-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Todo List App</h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md items-center">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter todo item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md w-full sm:w-auto"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-6 w-full max-w-md">
        {display.map((value, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white shadow-md p-4 rounded-md mb-3"
          >
            <span className="text-gray-800">{value}</span>
            <button
              onClick={() => deleteBtn(index)}
              className="text-sm text-red-600 hover:text-red-800 font-semibold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
