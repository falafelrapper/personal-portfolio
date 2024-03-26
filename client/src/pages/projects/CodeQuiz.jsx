import ProjectPage from "../../components/ProjectPage";
import { useState, useEffect } from "react";

export default function CodeQuiz() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imageUrl = [
        '/content/portfolio/code-quiz.png'
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
                projectTitle='Coding Quiz'
                projectDesc='One of the first homeworks I worked on during my full stack boot camp, this is a simple coding quiz in which you answer three questions in the quickest time. There also a leaderboard feature once you are complete, and can restart the quiz to try and beat your last time.'
                projectLink='https://falafelrapper.github.io/code-quiz/'
                projectImg='/content/portfolio/code-quiz.png'
                projectGit='https://github.com/falafelrapper/code-quiz'
                projectTech={["Javascript", 'HTML', 'CSS']} />
            ) : (
                <div></div>
            )}
        </>
    );
}