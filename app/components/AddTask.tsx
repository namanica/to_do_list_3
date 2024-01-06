'use client';
import React, { FormEventHandler, useState } from 'react'
import { FaPlus } from "react-icons/fa"
import Modal from './Modal'
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLFormElement> =
  async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    })
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  }
  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'>Add new task
      <FaPlus /></button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className='font-bold '>
            add new task
          </h3>
          <div className='modal-action'>
          <input value={newTaskValue} onChange={e => setNewTaskValue(e.target.value)} type="text" placeholder="what are you going to do?" className="input input-bordered w-full" />
          <button type="submit" className='btn'>add</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask
