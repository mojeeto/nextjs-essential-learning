"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

interface ImagePickerProps {
  label: string;
  name?: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (!imageInput.current) throw new Error("Something went wronge!");
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg, image/jpg"
          name={!name ? "image" : name}
          className={classes.input}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
