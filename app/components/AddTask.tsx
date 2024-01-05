import React from 'react'
import { FaPlus } from "react-icons/fa"
import Modal from './Modal'

const AddTask = () => {
  return (
    <div>
      <button className='btn btn-primary w-full'>Add new task
      <FaPlus /></button>

      <Modal />
    </div>
  )
}

export default AddTask
