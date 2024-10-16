import ProjectPage from "../../components/ProjectPage"
import { useState, useEffect } from "react"

export default function PacificPalace() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const imageUrl = ["/content/portfolio/breaking-bread.jpg"]

  function preloadFiles(files) {
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(file)
        img.onerror = () => reject(new Error(`Failed to load image ${file}`))
        img.src = file
      })
    })

    Promise.all(promises)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error("Failed to load images", error))
  }

  useEffect(() => {
    preloadFiles(imageUrl)
  }, [])

  return (
    <>
      {imagesLoaded ? (
        <ProjectPage
          projectTitle="SLO Stone Properties"
          projectDesc="One of the bands I perform with, Pacific Palace, was looking to finally make a more professional impact in their listener's eyes. That's where I came in and provided them with a modern and stylish website that will be sure to make a great impression on both listeners and promoters."
          projectLink="https://pacific-palace.com/"
          projectImg="/content/portfolio/pacific-palace.jpg"
          projectGit=""
          projectTech={[
            "React",
            "Vite",
            "Tailwind",
            "Typescript",
            "SCSS (Sass)",
          ]}
        />
      ) : (
        <div></div>
      )}
    </>
  )
}
