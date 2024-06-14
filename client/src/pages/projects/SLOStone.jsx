import ProjectPage from "../../components/ProjectPage";
import { useState, useEffect } from "react";

export default function SLOStone() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imageUrl = [
        '/content/portfolio/breaking-bread.jpg'
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
                    projectTitle='SLO Stone Properties'
                    projectDesc="One of the first projects I worked on after my graduation from UCLA Extension's Full Stack Development course. We were asked by a client to refactor what was originally a premade GoDaddy template site. Now it utilizes a backend and admin page where they can make edit's to their site without having to handle code themselves."
                    projectLink='https://slostoneproperties.com/'
                    projectImg='/content/portfolio/SLO-stone.jpg'
                    projectGit='https://github.com/RCLobster/slo-stone-properties'
                    projectTech={['React', 'RESTful API', 'MongoDB', 'Javascript', 'CSS']} />
            ) : (
                <div></div>
            )}
        </>
    );
}