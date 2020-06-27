/* eslint-disable react/jsx-pascal-case */
import React, { useRef, useState, useEffect } from "react";
import Shared_Button from "../button";

const Shared_ImageUpload = ({ id, center, handleFileInput, errorMessage }) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  const handleFileInputPicker = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    handleFileInput(id, pickedFile, fileIsValid);
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
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" title="Preview" />
          ) : (
            <p>Please pick an image</p>
          )}
        </div>
        <Shared_Button type="button" handleClick={handleImagePicker}>
          Pick Image
        </Shared_Button>
      </div>
      {!isValid && <p>{errorMessage}</p>}
    </div>
  );
};

export default Shared_ImageUpload;
