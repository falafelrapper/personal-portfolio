import ProjectPage from "../../components/ProjectPage";
import { useState, useEffect } from "react";

export default function MVCBlog() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imageUrl = [
        '/content/portfolio/tech-blog.png'
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
                projectTitle='MVC Tech Blog'
                projectDesc='Similiar to Breaking Bread, it is an MVC styled tech blog. This was made just after and allows you to make posts and comment on each post as well. It uses Javascript, Handlebars.js, OOP, and SQL for the database.'
                projectLink='https://fast-brook-63532-7edb79d80522.herokuapp.com/'
                projectImg='/content/portfolio/tech-blog.png'
                projectGit='https://github.com/falafelrapper/mvc-tech-blog' />
                
            ) : (
                <div></div>
            )}
        </>
    );
}