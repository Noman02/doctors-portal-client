import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  handleDeleteSuccess,
  modalData,
}) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn btn-outline">
              Cancel
            </button>
            <label
              onClick={() => handleDeleteSuccess(modalData)}
              htmlFor="my-modal"
              className="btn btn-error"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
