import React from 'react'
interface ModalProps {
  modalOpen: boolean
  setModalOpen: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
  <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
  <div className="modal-box">
    <label
    onClick={() => setModalOpen(false)}
    htmlFor="my-modal-3"
    className="btn btn-circle absolute right-2 top-2">close</label>
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
  </div>
</div>
  )
}

export default Modal