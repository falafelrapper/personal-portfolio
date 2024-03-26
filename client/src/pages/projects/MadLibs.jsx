import ProjectPage from "../../components/ProjectPage";
import { useState, useEffect } from "react";

export default function MadLibs() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imageUrl = [
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
        preloadFiles(imageUrl);
    }, []);

    return (
        <>
            {imagesLoaded ? (
                <ProjectPage
                    projectTitle='Mad Libs Generator'
                    projectDesc='For my final project for the UCLA edX Full Stack Development Boot Camp, me and three others made a simple Mad Libs Generator where you can share stories with other people.'
                    projectLink='https://team-m-s-project-3.onrender.com/'
                    projectImg='/content/portfolio/mad-libs.png'
                    projectGit='https://github.com/RCLobster/team-M-s-project-3' 
                    projectTech={['Mern Stack', 'React', 'MongoDB Atlas', 'Ant Design Components', 'GraphQL']}/>
            ) : (
                <div></div>
            )}
        </>
    );
}