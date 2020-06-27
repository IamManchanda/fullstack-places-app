/* eslint-disable react/jsx-pascal-case */
import React, { useRef } from "react";
import Shared_Button from "../button";

const Shared_ImageUpload = ({ id, center }) => {
  const filePickerRef = useRef();
  const handleFileInputPicker = (event) => {
    console.log(event.target);
  };
  const handleImagePicker = () => {
    filePickerRef.current.click();
  };
  return (
    <div className="form-control">
      <input
        id={id}
        ref={filePickerRef}
        className="hidden"
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={handleFileInputPicker}
      />
      <div className={`image-upload ${center && "center"}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" title="Preview" />
        </div>
        <Shared_Button type="button" handleClick={handleImagePicker}>
          Pick Image
        </Shared_Button>
      </div>
    </div>
  );
};

export default Shared_ImageUpload;
