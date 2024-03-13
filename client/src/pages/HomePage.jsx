import { useState, useEffect } from 'react';
import { imageUrls } from "../components/js/pictureConstants";


export default function HomePage() {
  function preloadFiles(files) {
    files.forEach((file) => {
      const img = new Image();
      img.src = file;
    });
  }

  useEffect(() => {
    preloadFiles(imageUrls);
  }, []);



  return (
    <div className="name">
      <h1>Zachary Roy</h1>
      <p>Full Stack Developer</p>
    </div>
  );
}

