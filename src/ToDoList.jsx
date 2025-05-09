import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleUp, faCircleDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const ToDoList = () => {
   const [toDoList, setToDoList] = useState(["Walk the dog", "Pet the cat"]);

   const addTask = () => {
      const input = document.querySelector("input");
      if (!input.value.trim()) return;
      setToDoList([...toDoList, input.value]);
      input.value = "";
   }

   const removeTask = (index) => {
      setToDoList(toDoList.filter((_, i) => index !== i));
   }

   const moveUp = (index) => {
      if (index === 0) return;
      const updatedList = [...toDoList];
      [updatedList[index - 1], updatedList[index]] = [updatedList[index], updatedList[index - 1]];
      setToDoList(updatedList);
   }

   const moveDown = (index) => {
      if (index === toDoList.length - 1) return;
      const updatedList = [...toDoList];
      [updatedList[index], updatedList[index + 1]] = [updatedList[index + 1], updatedList[index]];
      setToDoList(updatedList);
   }

   return (
      <div className="task-container">
         <h1 className="task-title">To-Do List</h1>
         <ul className="task-list">
            {toDoList.map((task, index) => (
               <li key={index} className="task-row">
                  <span className="task-text">{task}</span>
                  <div className="task-buttons">
                     <button className="trash-can" onClick={() => removeTask(index)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                     </button>
                     <button className="arrows" onClick={() => moveUp(index)}>
                        <FontAwesomeIcon icon={faCircleUp} />
                     </button>
                     <button className="arrows" onClick={() => moveDown(index)}>
                        <FontAwesomeIcon icon={faCircleDown} />
                     </button>
                  </div>
               </li>
            ))}
         </ul>

         <div className="task-input-container">
            <input className="task-input-text" type="text" placeholder="Enter a task..." />
            <button className="task-add-button" onClick={addTask}>
               <FontAwesomeIcon icon={faPlus} />
            </button>
         </div>
      </div>
   )
}

export default ToDoList;