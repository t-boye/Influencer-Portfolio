import React, { useEffect } from "react";

const ImageModal = ({ image, closeModal }) => {
  const handleModalClose = () => {
    closeModal();
  };

  useEffect(() => {
    const modal = document.getElementById("imageModal");
    modal.classList.add("show");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    return () => {
      modal.classList.remove("show");
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const modal = document.getElementById("imageModal");
    modal.addEventListener("hidden.bs.modal", handleModalClose);

    return () => {
      modal.removeEventListener("hidden.bs.modal", handleModalClose);
    };
  }, [handleModalClose]);

  return (
    <div
      className="modal fade"
      id="imageModal"
      tabIndex="-1"
      aria-labelledby="imageModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="imageModalLabel">
              {image.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleModalClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className={`modal-body ${image ? "fade-in" : ""}`}>
            <img src={image.fullUrl} className="img-fluid" alt={image.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
