import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { imageUrls } from "../components/js/pictureConstants";


export default function ResumePage() {

  useEffect(() => {
    const pdfFile = "../content/Resume.pdf";
    const combinedFiles = [...imageUrls, pdfFile];
    preloadFiles(combinedFiles);
  }, []);

  return (
    <>
      <div className="resume">
        <embed id='resume' src="../content/resume.pdf" />
      </div>
    </>
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