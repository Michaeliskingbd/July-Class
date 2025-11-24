import axios from "axios";
import React, { useState } from "react";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImage = (e) => {
    e.preventDefault();
    //Uploading of file
    const file = e.target.files[0];
    setImage(file);

    //Using with API
    // const formData = new FormData();
    // formData.append("file", file);

    // axios.post("https://www.uploadimage.com", {
    //   username,
    //   password,
    //   formData,
    // });
    //Image preview
    const Imageurl = URL.createObjectURL(file);
    setPreview(Imageurl);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImage} />

      {preview && (
        <div>
          <img
            src={preview}
            alt="preview"
            className="size-40 rounded-md object-cover mt-4"
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
