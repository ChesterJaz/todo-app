import React from "react"
import { HiOutlineTrash } from "react-icons/hi"

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize rounded-md`,
  liDone: `flex justify-between bg-slate-400 p-4 my-2 capitalize rounded-md`,
  row: `flex items-center`,
  text: `ml-3 cursor-pointer font-bold`,
  textDone: `ml-3 cursor-pointer line-through font-bold`,
  button: `border p-2 bg-red-500 hover:bg-red-700 rounded-md shadow-md ease-in-out duration-300 flex items-center cursor-pointer`,
}

const todo = ({ todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.liDone : style.li}>
      <div className={style.row}>
        <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''}/>
        <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textDone : style.text}>{todo.text}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className={style.button}><HiOutlineTrash size={20}/>
      </button>
    </li>
  );
};

export default todo;
