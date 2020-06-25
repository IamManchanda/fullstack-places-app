/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Shared_Modal from "../modal";
import Shared_Button from "../button";

const Shared_ErrorModal = ({ onClear, error }) => {
  return (
    <Shared_Modal
      onCancel={onClear}
      header="An Error Occurred!"
      show={!!error}
      footer={<Shared_Button onClick={onClear}>Okay</Shared_Button>}
    >
      <p>{error}</p>
    </Shared_Modal>
  );
};

export default Shared_ErrorModal;
