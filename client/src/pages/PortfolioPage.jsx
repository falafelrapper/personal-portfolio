import { useState, useEffect } from 'react';
import Project from '../components/Project';

export default function PortfolioPage() {

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageUrls = [
    '/content/portfolio/breaking-bread.jpg',
    '/content/portfolio/tech-blog.png',
    '/content/portfolio/code-quiz.png',
    '/content/portfolio/movie-recommender.png',
    '/content/portfolio/mad-libs.png',
    '/content/portfolio/SLO-stone.jpg',
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
        <main className="portfolio-container">
          <Project
            projectTitle='SLO Stone Properties'
            projectDesc='Property site designed for SLO Stone Properties LLC'
            projectLink='/portfolio/SLO-stone'
            projectImg='/content/portfolio/SLO-stone.jpg' />
          <Project
            projectTitle='Mad Libs Generator'
            projectDesc='A simple Mad Libs Generator where you can share stories with other people'
            projectLink='/portfolio/madlibs'
            projectImg='/content/portfolio/mad-libs.png' />
          <Project
            projectTitle='Breaking Bread'
            projectDesc='Share recipes with others in this tasty blog'
            projectLink='/portfolio/breaking-bread'
            projectImg='/content/portfolio/breaking-bread.jpg' />
          <Project
            projectTitle='Movie Recommender'
            projectDesc='TMDB API-based site that allows you to get a recommendation based on genre, and then allows you to pick your favorite from there'
            projectLink='/portfolio/movie-recommender'
            projectImg='/content/portfolio/movie-recommender.png' />
          <Project
            projectTitle='MVC Tech Blog'
            projectDesc='MVC styled page that lets you share posts with others through a tech blog'
            projectLink='/portfolio/tech-blog'
            projectImg='/content/portfolio/tech-blog.png' />
          <Project
            projectTitle='Coding Quiz'
            projectDesc='Simple coding quiz that lets you save your high scores'
            projectLink='/portfolio/code-quiz'
            projectImg='/content/portfolio/code-quiz.png' />
        </main>

      ) : (
        <div className='page-start'></div>
      )}
    </>
  );
}

