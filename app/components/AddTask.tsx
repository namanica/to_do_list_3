'use client';
import React, { FormEventHandler, useState } from 'react'
import { FaPlus } from "react-icons/fa"
import Modal from './Modal'

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTask, addNewTask] = useState<string>('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(newTask);
    addNewTask("");
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
          <input value={newTask} onChange={e => addNewTask(e.target.value)} type="text" placeholder="what are you going to do?" className="input input-bordered w-full" />
          <button type="submit" className='btn'>add</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask
