import React, { useState } from "react";

const CustomFileUpload = () => {
  const [file, setFile] = useState("Choose a file...");
  return (
    <div
      className="custom-file mb-3"
      onMouseLeave={() => setFile(document.getElementById("customFile2").value)}
    >
      <input type="file" className="custom-file-input" id="customFile2" />
      <label className="custom-file-label" htmlFor="customFile2">
        {file}
      </label>
    </div>
  );
};

export default CustomFileUpload;
