"use client";

import { ChangeEvent, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name?: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null,
  );
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (!imageInput.current) throw new Error("Something went wronge!");
    imageInput.current.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      setPickedImage(null);
      return;
    }
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image
              src={pickedImage as string}
              alt="The image selected by user!"
              fill
            />
          )}
        </div>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg, image/jpg"
          name={!name ? "image" : name}
          className={classes.input}
          ref={imageInput}
          onChange={handleImageChange}
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
