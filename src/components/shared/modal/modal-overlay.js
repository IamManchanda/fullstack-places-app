import React from "react";
import { createPortal } from "react-dom";

const Shared_Modal_ModalOverlay = ({
  header,
  footer,
  handleSubmit,
  contentClass,
  footerClass,
  children,
}) =>
  createPortal(
    <div className="modal">
      <header className="modal__header">
        <h2>{header}</h2>
      </header>
      <form
        onSubmit={handleSubmit ? handleSubmit : event => event.preventDefault()}
      >
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>,
    document.getElementById("modal-root"),
  );

export default Shared_Modal_ModalOverlay;
