import ProjectPage from "../../components/ProjectPage";
import { useState, useEffect } from "react";

export default function BreakingBread() {
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
                    projectTitle='Breaking Bread'
                    projectDesc='For my second project for the UCLA edX Full Stack Development Boot Camp, I worked with three others to deliver this MVC styled recipe blog.'
                    projectLink='https://agile-cove-66310-81bc545fcfa7.herokuapp.com/'
                    projectImg='/content/portfolio/breaking-bread.jpg'
                    projectGit='https://github.com/falafelrapper/breaking-bread'
                    projectTech={['Handlebars.js', 'RESTful API', 'MySQL', 'OOP', 'Javascript', 'CSS']} />
            ) : (
                <div></div>
            )}
        </>
    );
}