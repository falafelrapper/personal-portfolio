import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Project from '../components/Project';
import { imageUrls } from "../components/js/pictureConstants";

export default function PortfolioPage() {

  useEffect(() => {
    const pdfFile = "../content/Resume.pdf";
    const combinedFiles = [...imageUrls, pdfFile];
    preloadFiles(combinedFiles);
  }, []);

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

  return (
    <>
      <div className="portfolio-container">
        <Project
          projectTitle='Mad Libs Generator'
          projectLink='https://team-m-s-project-3.onrender.com/'
          projectImg='/content/portfolio/mad-libs.png'
          projectGit='https://github.com/RCLobster/team-M-s-project-3' />
        <Project
          projectTitle='Breaking Bread'
          projectLink='https://agile-cove-66310-81bc545fcfa7.herokuapp.com/'
          projectImg='/content/portfolio/breaking-bread.jpg'
          projectGit='https://github.com/falafelrapper/breaking-bread' />
        <Project
          projectTitle='Movie Recommender'
          projectLink='https://falafelrapper.github.io/movie-recommender/'
          projectImg='/content/portfolio/movie-recommender.png'
          projectGit='https://github.com/falafelrapper/movie-recommender' />
        <Project
          projectTitle='MVC Tech Blog'
          projectLink='https://fast-brook-63532-7edb79d80522.herokuapp.com/'
          projectImg='/content/portfolio/tech-blog.png'
          projectGit='https://github.com/falafelrapper/mvc-tech-blog' />
        <Project
          projectTitle='Coding Quiz'
          projectLink='https://falafelrapper.github.io/code-quiz/'
          projectImg='/content/portfolio/code-quiz.png'
          projectGit='https://github.com/falafelrapper/code-quiz' />
      </div>
    </>
  );
}

