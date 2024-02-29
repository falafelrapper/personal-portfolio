import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { imageUrls } from "../components/js/pictureConstants";


export default function AboutPage() {

  useEffect(() => {
    const pdfFile = "../content/Resume.pdf";
    const combinedFiles = [...imageUrls, pdfFile];
    preloadFiles(combinedFiles);
  }, []);
  
  return (
    <div className="about-me">
      <img id='zach-pic' src="/content/about-me.png" alt="Zachary Roy" />
      <h2>About Me</h2>
      <p>
        I am a high school graduate currently currently enrolled in UCLA edX's Full Stack 
        Development Boot Camp who is passionate about upcoming technologies and what 
        computers can do as an aid to society. When I am not programming or studying computer
        science, you can catch me playing drums for acts such as Meishi Smile or Pacific Palace.
        Working together, we can get your next application deployed and ready for the world to see.
      </p>
      <p>All references are available upon request.</p>
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
