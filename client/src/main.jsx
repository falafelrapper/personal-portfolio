import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';


import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import MadLibs from './pages/projects/MadLibs';
import BreakingBread from './pages/projects/BreakingBread';
import MovieRecommender from './pages/projects/MovieRecommender';
import MVCBlog from './pages/projects/MVCBlog';
import CodeQuiz from './pages/projects/CodeQuiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'portfolio/madlibs',
        element: <MadLibs />,
      },
      {
        path: 'portfolio/breaking-bread',
        element: <BreakingBread />,
      },
      {
        path: 'portfolio/movie-recommender',
        element: <MovieRecommender />,
      },
      {
        path: 'portfolio/tech-blog',
        element: <MVCBlog />,
      },
      {
        path: 'portfolio/code-quiz',
        element: <CodeQuiz />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);