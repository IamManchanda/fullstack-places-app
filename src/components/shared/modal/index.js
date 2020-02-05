/* eslint-disable react/jsx-pascal-case */
import React, { Fragment } from "react";
import Shared_Backdrop from "../backdrop";
import Shared_Modal_ModalOverlay from "./modal-overlay";
import { CSSTransition } from "react-transition-group";

const Shared_Modal = ({
  header,
  footer,
  contentClass,
  footerClass,
  handleSubmit,
  show,
  children,
  handleCancel,
}) => (
  <Fragment>
    {show && <Shared_Backdrop onClick={handleCancel} />}
    <CSSTransition
      in={show}
      mountOnEnter
      unmountOnExit
      timeout={200}
      classNames="modal"
    >
      <Shared_Modal_ModalOverlay
        header={header}
        footer={footer}
        handleSubmit={handleSubmit}
        contentClass={contentClass}
      >
        {children}
      </Shared_Modal_ModalOverlay>
    </CSSTransition>
  </Fragment>
);

export default Shared_Modal;
