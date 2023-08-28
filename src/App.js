import React, { useState, useEffect } from "react";
import { BiNotepad } from "react-icons/bi";
import { PiPlusLight } from "react-icons/pi";
import Todos from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#42E544] to-[#4253E5]`,
  container: `bg-slate-100 max-w-[750px] w-full m-auto rounded-md shadow-xl p-4`,
  header: `text-3xl font-bold flex justify-center text-center text-sky-700 p-3`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-lg rounded-md`,
  button: `border p-2 ml-3 bg-sky-500 hover:bg-sky-700 drop-shadow-md rounded-md text-white ease-in-out duration-300`,
  count: `text-center p-1 font-medium`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // create to do
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid input");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // read to do from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const ekis = onSnapshot(q, (querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(arr);
    });
    return () => ekis();
  }, []);
  // update to do in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.header}>Todo App<BiNotepad/></h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Something . . ."
          />
          <button className={style.button}>
            <PiPlusLight size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todos
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>

        {todos.length < 1 ? null : (
          <p className={style.count}>You have {todos.length} Todo/s pending</p>
        )}
      </div>
    </div>
  );
}

export default App;
