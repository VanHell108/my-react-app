import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleUp, faCircleDown, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function ToDoList() {
   const [toDoList, setToDoList] = useState(["Something", "Something 1"]);

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
      <div className="to-do-container">
         <h1 className="to-do-title">To Do List</h1>
         <ul className="to-do-tasks">
            {toDoList.map((task, index) =>
               <li key={index}>
                  {task}
                  <button onClick={() => removeTask(index)}>
                     <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <button onClick={() => moveUp(index)}>
                     <FontAwesomeIcon icon={faCircleUp} />
                  </button>
                  <button onClick={() => moveDown(index)}>
                     <FontAwesomeIcon icon={faCircleDown} />
                  </button>
               </li>
            )}
         </ul>

         <div className="to-do-input">
            <input type="text" placeholder="Enter a task..." />
            <button onClick={addTask}>
               <FontAwesomeIcon icon={faSquarePlus} />
            </button>
         </div>
      </div>
   )
}

export default ToDoList;