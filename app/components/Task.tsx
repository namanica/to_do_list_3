'use client';
import React, { FormEventHandler, useState } from 'react'
import { ITask } from '@/types/tasks'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';
interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ( { task } ) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEdit : FormEventHandler<HTMLFormElement> =
  async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    })
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  }

  return (
    <tr key={task.id}>
    <td className='w-full'>{task.text}</td>
    <td className='flex gap-5'>
    <FaEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" size={20} />
    <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEdit}>
          <h3 className='font-bold '>
            update the task
          </h3>
          <div className='modal-action'>
          <input value={taskToEdit} onChange={e => setTaskToEdit(e.target.value)} type="text" placeholder="what are you going to do?" className="input input-bordered w-full" />
          <button type="submit" className='btn'>update</button>
          </div>
        </form>
    </Modal>
    <FaTrash onClick={() => setOpenModalDelete(true)} cursor="pointer" size={20} />
    <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
      <h3 className='text-lg'>have you already done the task?</h3>
      <div className='modal-action'>
        <button
        onClick={() => handleDeleteTask(task.id)}
        className='btn'>yes</button>
      </div>
    </Modal>
    </td>
    </tr>
  );
};

export default Task;