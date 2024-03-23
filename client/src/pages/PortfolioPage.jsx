import { useState, useEffect } from 'react';
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
        <main className="portfolio-container">
          <Project
            projectTitle='Mad Libs Generator'
            // projectDesc='A simple Mad Libs Generator where you can share stories with other people'
            projectLink='https://team-m-s-project-3.onrender.com/'
            projectImg='/content/portfolio/mad-libs.png'
            projectGit='https://github.com/RCLobster/team-M-s-project-3' />
          <Project
            projectTitle='Breaking Bread'
            // projectDesc='Share recipes with others in this tasty blog'
            projectLink='https://agile-cove-66310-81bc545fcfa7.herokuapp.com/'
            projectImg='/content/portfolio/breaking-bread.jpg'
            projectGit='https://github.com/falafelrapper/breaking-bread' />
          <Project
            projectTitle='Movie Recommender'
            // projectDesc='TMDB API-based site that allows you to get a recommendation based on genre, and then allows you to pick your favorite from there'
            projectLink='https://falafelrapper.github.io/movie-recommender/'
            projectImg='/content/portfolio/movie-recommender.png'
            projectGit='https://github.com/falafelrapper/movie-recommender' />
          <Project
            projectTitle='MVC Tech Blog'
            // projectDesc='MVC styled page that lets you share posts with others through a tech blog'
            projectLink='https://fast-brook-63532-7edb79d80522.herokuapp.com/'
            projectImg='/content/portfolio/tech-blog.png'
            projectGit='https://github.com/falafelrapper/mvc-tech-blog' />
          <Project
            projectTitle='Coding Quiz'
            // projectDesc='Simple coding quiz that lets you save your high scores'
            projectLink='https://falafelrapper.github.io/code-quiz/'
            projectImg='/content/portfolio/code-quiz.png'
            projectGit='https://github.com/falafelrapper/code-quiz' />
        </main>

      ) : (
        <div className='page-start'></div>
      )}
    </>
  );
}

