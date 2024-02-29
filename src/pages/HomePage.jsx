import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { imageUrls } from "../components/js/pictureConstants";


export default function HomePage() {

  useEffect(() => {
    const pdfFile = "../content/Resume.pdf";
    const combinedFiles = [...imageUrls, pdfFile];
    preloadFiles(combinedFiles);
  }, []);

  return (
    <div className="name">
      <h1>Zachary Roy</h1>
      <p>Full Stack Developer</p>
    </div>
  );
}

function preloadFiles(files) {
  files.forEach((file) => {
    if (file.endsWith(".pdf")) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", file, true);
      xhr.send();
    } else {
      const img = new Image();
      img.src = file;
    }
  });
}
