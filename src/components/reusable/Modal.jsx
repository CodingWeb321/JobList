// src/components/reusable/Modal.jsx

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-backdrop'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2 className='modal-title'>
            {children.props.jobToEdit ? "Edit Job" : "Add Job"}
          </h2>
          <button className='close-button' onClick={onClose}>
            X
          </button>
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
