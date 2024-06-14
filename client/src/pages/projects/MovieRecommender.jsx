import ProjectPage from "../../components/ProjectPage";
import { useState, useEffect } from "react";

export default function MovieRecommender() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imageUrl = [
        '/content/portfolio/movie-recommender.png'
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
        preloadFiles(imageUrl);
    }, []);

    return (
        <>
            {imagesLoaded ? (
                <ProjectPage
                    projectTitle='Movie Recommender'
                    projectDesc="For my first project for the UCLA edX Full Stack Development Boot Camp, me and three others made this TMDB API-based site that allows you to get a recommendation based on genre, and then allows you to pick your favorite from there."
                    projectLink='https://falafelrapper.github.io/movie-recommender/'
                    projectImg='/content/portfolio/movie-recommender.png'
                    projectGit='https://github.com/falafelrapper/movie-recommender'
                    projectTech={['jQuery', 'TMDB API', 'CSS', 'HTML']} />
            ) : (
                <div></div>
            )}
        </>
    );
}