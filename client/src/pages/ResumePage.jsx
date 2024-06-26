import { useState, useEffect } from "react"

export default function ResumePage() {
  const [imagesLoaded, setImagesLoaded] = useState(false)

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
    const imageUrls = ["/content/Resume-Light.jpg", "/content/Resume-Dark.jpg"]

    preloadFiles(imageUrls)
  }, [])

  return (
    <>
      {imagesLoaded ? (
        <main className="resume-window">
          <div className="resume-pic">
            <img
              className="light-resume"
              src="/content/Resume-Light.jpg"
              alt=""
            />
            <img
              className="dark-resume"
              src="/content/Resume-Dark.jpg"
              alt=""
            />
            <div className="resume-dl">
              <a href="/content/Resume.pdf" download="Zachary-Roy-Resume.pdf">
                <svg
                  id="resume-dl"
                  fill="#000000"
                  height="5vh"
                  width="5vw"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 29.978 29.978"
                  xmlSpace="preserve"
                >
                  <path
                    d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012
		v-8.861H25.462z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723
		c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742
		c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193
		C15.092,18.979,14.62,18.426,14.62,18.426z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <p>Resume available for download here</p>
            </div>
          </div>
        </main>
      ) : (
        <div className="page-start"></div>
      )}
    </>
  )
}
