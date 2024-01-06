'use client';
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa"
import Modal from './Modal'

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'>Add new task
      <FaPlus /></button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        modal for adding the task
      </Modal>
    </div>
  )
}

export default AddTask
