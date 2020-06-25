/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Shared_Modal from "../modal";
import Shared_Button from "../button";

const Shared_ErrorModal = ({ handleClear, error }) => {
  return (
    <Shared_Modal
      handleCancel={handleClear}
      header="An Error Occurred!"
      show={!!error}
      footer={<Shared_Button handleClick={handleClear}>Okay</Shared_Button>}
    >
      <p>{error}</p>
    </Shared_Modal>
  );
};

export default Shared_ErrorModal;
