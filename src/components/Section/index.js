import React from 'react';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Section({ tasks, handleEditTask, handleDeleteTask }){
  return (
    <div className="section item">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task}>
            <div>
              {task}
            </div>
            <div>
              <FaEdit className="edit" onClick={() => handleEditTask(task)} />
              <FaWindowClose className="delete" onClick={() => handleDeleteTask(task)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
