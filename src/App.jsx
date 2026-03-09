import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { v4 as uuid } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(params))
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false, id: uuid() }]);
    setTodo("");
    saveToLS([...todos, { todo, isCompleted: false, id: uuid() }]);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    })
    setTodos(updatedTodos);
    saveToLS(updatedTodos);
  }
  const handleEdit = (e) => {
    let id = e.target.name
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS(newTodos);
  }
  const handleDelete = (e) => {
    let id = e.target.name
    let updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    saveToLS(updatedTodos);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-slate-900 py-10 px-4">
        <div className="container mx-auto max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 text-white">

          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-linear-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            TaskFlow - Manage Your Day
          </h1>

          <div className="flex flex-col gap-4 mb-8">
            <div className="relative w-full">
              <input
                onChange={handleChange}
                value={todo}
                className="w-full bg-slate-950/50 border border-white/10 text-white rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-gray-400 shadow-inner"
                type="text"
                placeholder="What needs to be done?"
              />
            </div>
            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-600 disabled:to-gray-600 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 active:scale-95"
            >
              Add Task
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6 text-gray-300 select-none cursor-pointer w-fit" onClick={toggleFinished}>
            <input
              onChange={toggleFinished}
              checked={showFinished}
              type="checkbox"
              className="w-5 h-5 accent-purple-500 cursor-pointer rounded bg-slate-800 border-gray-600"
            />
            <span className="font-medium">Show Finished Tasks</span>
          </div>

          <div className="h-px w-full bg-white/10 mb-6"></div>

          <h2 className="text-xl font-bold mb-4 text-purple-200">Your Tasks</h2>

          <div className="space-y-3">
            {todos.length === 0 && <div className="text-center text-gray-400 py-8 italic bg-white/5 rounded-xl border border-dashed border-white/10">No tasks to display</div>}

            {todos.map(item => {
              return ((showFinished || !item.isCompleted) &&
                <div key={item.id} className="group flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900/40 hover:bg-slate-900/60 p-4 rounded-xl border border-white/5 transition-all hover:border-purple-500/30 hover:shadow-lg">
                  <div className="flex items-center gap-4 flex-1 break-all mb-3 sm:mb-0">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      className="w-5 h-5 accent-purple-500 cursor-pointer shrink-0"
                    />
                    <div className={`${item.isCompleted ? "line-through text-gray-500" : "text-gray-100"} font-medium text-lg transition-all`}>
                      {item.todo}
                    </div>
                  </div>

                  <div className="flex gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                    <button
                      name={item.id}
                      onClick={handleEdit}
                      className="bg-indigo-500/20 hover:bg-indigo-500 hover:text-white text-indigo-300 px-3 py-2 rounded-lg text-sm font-semibold transition-all border border-indigo-500/30"
                    >
                      Edit
                    </button>
                    <button
                      name={item.id}
                      onClick={handleDelete}
                      className="bg-rose-500/20 hover:bg-rose-500 hover:text-white text-rose-300 px-3 py-2 rounded-lg text-sm font-semibold transition-all border border-rose-500/30"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
