import { useState, useEffect } from 'react';


export default function AboutPage() {

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageUrl = [
    "/content/about-me.png"
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

        <main className="about-me">
          <img id='zach-pic' src="/content/about-me.png" alt="Zachary Roy" />
          <h2>About Me</h2>
          <p>
            Hi there, I'm a full-stack web developer. Situated in the lively city of Los Angeles, CA,
            I'm deeply immersed in the realm of coding, constantly exploring emerging technologies and their
            potential to make a positive impact on society. My journey into the world of technology was
            sparked by a simple curiosity about computers and their capabilities. This curiosity blossomed
            into a passion, propelling me to complete the intensive full stack development bootcamp at UCLA edX,
            where I gained the skills to craft comprehensive, user-friendly, and efficient web applications
            from scratch. When I'm not engrossed in code, you'll often find me expressing myself through music.
            As a drummer for bands like Meishi Smile and Pacific Palace, I find a different kind of rhythm and
            collaboration that mirrors the teamwork and creativity I bring to my web development projects.
          </p>
          <h4>My Mission</h4>
          <p>I believe in the power of collaboration to bring innovative ideas to life. Whether
            it's developing the next groundbreaking application or creating digital solutions that
            make a difference, I'm here to turn visions into reality. With a blend of technical
            knowledge, creative problem-solving, and a keen eye for design, I'm ready to tackle
            challenges and contribute to projects that aim for impact and excellence. If you're
            looking for a dedicated and creative full stack developer with a unique
            perspective, let's get in touch. Together, we can deploy applications that not only
            meet user needs but also exceed expectations, making a mark on the digital landscape.</p>

          <p>All references are available upon request.</p>
        </main>
      ) : (
        <div className='page-start-mobile'></div>
      )}
    </>
  );
}

