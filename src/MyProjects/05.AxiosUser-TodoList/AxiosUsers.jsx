import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function AxiosUsers() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => setError("Failed to fetch users"));
  }, []);

  const handleAddUser = () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("Name cannot be empty");
      return;
    }

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: trimmedName,
      })
      .then((res) => {
        setUsers([...users, res.data]);
        setName("");
        setError("");
      })
      .catch(() => setError("Failed to add user"));
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-4">Axios Users</h2>

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleAddUser}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition duration-200"
          >
            Add User
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <ul className="space-y-2">
          {users.map((u) => (
            <li
              key={u.id}
              className="flex justify-between items-center bg-gray-100 rounded p-2"
            >
              <span className="text-gray-700">{u.name}</span>
              <button
                onClick={() => handleDelete(u.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AxiosUsers;
