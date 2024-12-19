import React, { useState } from "react";
import "../Services/Services.css"; // ربط ملف CSS
import Tesseract from "tesseract.js";

const Services = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      extractText(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const extractText = (file) => {
    setLoading(true);
    setResult(""); // Reset result before starting new processing
    Tesseract.recognize(file, "eng")
      .then(({ data: { text } }) => {
        setResult(text);
      })
      .catch((error) => {
        console.error("Error extracting text:", error);
        setResult("Failed to extract text. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="services-container">
        <div className="services-card">
          <h3 className="services-title">Upload and Process Image</h3>

          {/* منطقة السحب والإفلات */}
          <div
            className="services-drag-drop"
            onDrop={handleImageDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              <p>Image uploaded! Drop a new one to replace it.</p>
            ) : (
              <p>Drag & Drop your image here or click to upload</p>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setImage(URL.createObjectURL(file));
                  extractText(file);
                }
              }}
              className="services-input"
            />
          </div>

          {/* عرض الصورة */}
          {image && (
            <div className="services-image-container">
              <img
                src={image}
                alt="Uploaded Preview"
                className="services-image"
              />
            </div>
          )}

          {/* عرض النص المستخرج */}
          {loading ? (
            <div className="services-result-container">
              <p className="services-loading-text">
                Processing... Please wait.
              </p>
            </div>
          ) : (
            result && (
              <div className="services-result-container">
                <h4>Results:</h4>
                <p>{result}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
