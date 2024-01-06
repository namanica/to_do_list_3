import React from 'react'
import { ITask } from '@/types/tasks'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ( { task } ) => {
  return (
    <tr key={task.id}>
    <td className='w-full'>{task.text}</td>
    <td className='flex gap-5'>
    <FaEdit cursor="pointer" size={20} />
    <FaTrash cursor="pointer" size={20} />
    </td>
    </tr>
  );
};

export default Task;