import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Project from '../components/Project';

export default function PortfolioPage() {

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageUrls = [
    '/content/portfolio/breaking-bread.jpg',
    '/content/portfolio/tech-blog.png',
    '/content/portfolio/code-quiz.png',
    '/content/portfolio/movie-recommender.png',
    '/content/portfolio/mad-libs.png'
  ];

  function preloadFiles(files) {
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(file);
        img.onerror = () => reject(new Error(`Failed to load image ${file}`));
        img.src = file;
      });
    });

    Promise.all(promises)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error("Failed to load images", error));
  }

  useEffect(() => {
    preloadFiles(imageUrls);
  }, []);


  return (
    <>
      {imagesLoaded ? (
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

      ) : (
        <div className='portfolio-container'></div>
      )}
    </>
  );
}

