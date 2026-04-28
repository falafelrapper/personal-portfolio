import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/dist/ScrollSmoother"
import ProjectPage from "../components/ProjectPage"
import Project from "../components/Project"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother) // register the hook to avoid React version discrepancies

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [project, setProject] = useState(null)

  console.log(project)

  const container = useRef()

  function handleProjectClick(projectData) {
    setProject(projectData)
    setModalOpen(true)
  }

  // function preloadFiles(files) {
  //   const promises = files.map((file) => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image()
  //       img.onload = () => resolve(file)
  //       img.onerror = () => reject(new Error(`Failed to load image ${file}`))
  //       img.src = file
  //     })
  //   })

  //   Promise.all(promises)
  //     .then(() => setImagesLoaded(true))
  //     .catch((error) => console.error("Failed to load images", error))
  // }

  // useEffect(() => {
  //   const imageUrls = [
  //     "/content/about-me.png",
  //     "/content/portfolio/pacific-palace.jpg",
  //     "/content/portfolio/breaking-bread.jpg",
  //     "/content/portfolio/tech-blog.png",
  //     "/content/portfolio/code-quiz.png",
  //     "/content/portfolio/movie-recommender.png",
  //     "/content/portfolio/mad-libs.png",
  //     "/content/portfolio/SLO-stone.jpg",
  //     "/content/Resume-Light.jpg",
  //     "/content/Resume-Dark.jpg",
  //   ]

  //   preloadFiles(imageUrls)
  // }, [])

  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 0.75,
        effects: true,
        smoothTouch: 0.1,
      })

      gsap.set(
        [
          ".about-me img",
          ".about-me h2",
          ".about-me p",
          ".portfolio-container .project-card",
          ".resume-window",
          ".contact-window",
        ],
        {
          y: "50px",
          autoAlpha: 0,
        }
      )

      let aboutTl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".about-me",
          start: "top 400px", // when the top of the trigger hits the top of the viewport
          toggleActions: "play none none none",
        },
      })

      aboutTl.to(
        [".about-me img", ".about-me h2", ".about-me p"],
        {
          y: "0px",
          autoAlpha: 1,
          duration: 1,
          stagger: 0.1,
        },
        0
      )

      let projectTl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".portfolio-container",
          start: "top 400px", // when the top of the trigger hits the top of the viewport
          toggleActions: "play none none none",
        },
      })

      projectTl.to(
        ".portfolio-container .project-card",
        {
          y: "0px",
          autoAlpha: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        0
      )

      let resumeTl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".resume-window",
          start: "top 400px", // when the top of the trigger hits the top of the viewport
          toggleActions: "play none none none",
        },
      })

      resumeTl.to(
        ".resume-window",
        {
          y: "0px",
          autoAlpha: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        0
      )

      let contactTl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".contact-window",
          start: "top 30%", // when the top of the trigger hits the top of the viewport
          toggleActions: "play none none none",
        },
      })

      contactTl.to(
        ".contact-window",
        {
          y: "0px",
          autoAlpha: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        0
      )
    },
    { scope: container }
  )

  return (
    <main ref={container}>
      {modalOpen && project && (
        <ProjectPage
          projectTitle={project.title}
          projectDesc={project.desc}
          projectLink={project.link}
          projectImg={project.img}
          projectVideo={project.video}
          projectGit={project.git}
          projectTech={project.tech}
          setModalOpen={() => setModalOpen(false)}
        />
      )}
      <div className="about-me">
        <img id="zach-pic" src="/content/about-me.png" alt="Zachary Roy" />
        <h2>About Me</h2>
        <p>
          Hi there, I'm a full-stack web developer. Situated in the lively city
          of Los Angeles, CA, I'm deeply immersed in the realm of coding,
          constantly exploring emerging technologies and their potential to make
          a positive impact on society. My journey into the world of technology
          was sparked by a simple curiosity about computers and their
          capabilities. This curiosity blossomed into a passion, propelling me
          to complete the intensive full stack development bootcamp at UCLA edX,
          where I gained the skills to craft comprehensive, user-friendly, and
          efficient web applications from scratch. When I'm not engrossed in
          code, you'll often find me expressing myself through music. As a
          drummer for bands like Meishi Smile and Pacific Palace, I find a
          different kind of rhythm and collaboration that mirrors the teamwork
          and creativity I bring to my web development projects.
        </p>
        {/* <h4>My Mission</h4>
          <p>I believe in the power of collaboration to bring innovative ideas to life. Whether
            it's developing the next groundbreaking application or creating digital solutions that
            make a difference, I'm here to turn visions into reality. With a blend of technical
            knowledge, creative problem-solving, and a keen eye for design, I'm ready to tackle
            challenges and contribute to projects that aim for impact and excellence. If you're
            looking for a dedicated and creative full stack developer with a unique
            perspective, let's get in touch. Together, we can deploy applications that not only
            meet user needs but also exceed expectations, making a mark on the digital landscape.</p> */}

        <p>All references are available upon request.</p>
      </div>
      <div className="portfolio-container">
        <Project
          projectTitle="LuckyKat"
          projectDesc="Assists production teams in building high quality treatments in hours instead of weeks"
          projectImg="/content/portfolio/luckykat.png"
          setModalOpen={() =>
            handleProjectClick({
              title: "LuckyKat",
              desc: "Empowering production teams by streamlining the process of treatment building, LuckyKat allows teams to have high quality treatments with expectional designs and animation work in hours instead of weeks.",
              link: "https://www.luckykat.app/",
              img: null,
              video: "/content/portfolio/luckykat-reel.mp4",
              tech: ["Svelte", "Node.js", "Supabase", "GSAP", "SCSS (Sass)"],
            })
          }
        />
        <Project
          projectTitle="Pacific Palace"
          projectDesc="A professional site built for Pacific Palace to reach their fans"
          projectImg="/content/portfolio/pacific-palace.jpg"
          setModalOpen={() =>
            handleProjectClick({
              title: "Pacific Palace",
              desc: "One of the bands I perform with, Pacific Palace, was looking to finally make a more professional impact in their listener's eyes. That's where I came in and provided them with a modern and stylish website that will be sure to make a great impression on both listeners and promoters.",
              img: "/content/portfolio/pacific-palace.jpg",
              link: "https://www.pacific-palace.com/",
              tech: ["React", "Vite", "Tailwind", "Typescript", "SCSS (Sass)"],
            })
          }
        />
        <Project
          projectTitle="SLO Stone Properties"
          projectDesc="Property site designed for SLO Stone Properties LLC"
          projectImg="/content/portfolio/SLO-stone.jpg"
          setModalOpen={() =>
            handleProjectClick({
              title: "SLO Stone Properties",
              desc: "One of the first projects I worked on after my graduation from UCLA Extension's Full Stack Development course. We were asked by a client to refactor what was originally a premade GoDaddy template site. Now it utilizes a backend and admin page where they can make edit's to their site without having to handle code themselves.",
              img: "/content/portfolio/SLO-stone.jpg",
              link: "https://www.slostoneproperties.com/",
              tech: ["React", "RESTful API", "MongoDB", "Javascript", "CSS"],
            })
          }
        />
        <Project
          projectTitle="Mad Libs Generator"
          projectDesc="A simple Mad Libs Generator where you can share stories with other people"
          projectLink="/portfolio/madlibs"
          projectImg="/content/portfolio/mad-libs.png"
          setModalOpen={() =>
            handleProjectClick({
              title: "Mad Libs Generator",
              desc: "A simple Mad Libs Generator where you can share stories with other people",
              link: "/portfolio/madlibs",
              img: "/content/portfolio/mad-libs.png",
              tech: [
                "Mern Stack",
                "React",
                "MongoDB Atlas",
                "Ant Design Components",
                "GraphQL",
              ],
            })
          }
        />
        <Project
          projectTitle="Breaking Bread"
          projectDesc="Share recipes with others in this tasty blog"
          projectLink="/portfolio/breaking-bread"
          projectImg="/content/portfolio/breaking-bread.jpg"
          setModalOpen={() =>
            handleProjectClick({
              title: "Breaking Bread",
              desc: "Share recipes with others in this tasty blog",
              link: "/portfolio/breaking-bread",
              img: "/content/portfolio/breaking-bread.jpg",
              tech: [
                "Handlebars.js",
                "RESTful API",
                "MySQL",
                "OOP",
                "Javascript",
                "CSS",
              ],
            })
          }
        />
        <Project
          projectTitle="Movie Recommender"
          projectDesc="TMDB API-based site that allows you to get a recommendation based on genre, and then allows you to pick your favorite from there"
          projectLink="/portfolio/movie-recommender"
          projectImg="/content/portfolio/movie-recommender.png"
          setModalOpen={() =>
            handleProjectClick({
              title: "Movie Recommender",
              desc: "TMDB API-based site that allows you to get a recommendation based on genre, and then allows you to pick your favorite from there",
              link: "/portfolio/movie-recommender",
              img: "/content/portfolio/movie-recommender.png",
              tech: ["jQuery", "TMDB API", "CSS", "HTML"],
            })
          }
        />
        {/* <Project
          projectTitle="MVC Tech Blog"
          projectDesc="MVC styled page that lets you share posts with others through a tech blog"
          projectLink="/portfolio/tech-blog"
          projectImg="/content/portfolio/tech-blog.png"
          setModalOpen={() =>
            handleProjectClick({
              title: "MVC Tech Blog",
              desc: "MVC styled page that lets you share posts with others through a tech blog",
              link: "/portfolio/tech-blog",
              img: "/content/portfolio/tech-blog.png",
              tech: [
                "Handlebars.js",
                "RESTful API",
                "MySQL",
                "OOP",
                "Javascript",
                "CSS",
              ],
            })
          }
        /> */}
        {/* <Project
          projectTitle="Coding Quiz"
          projectDesc="Simple coding quiz that lets you save your high scores"
          projectLink="/portfolio/code-quiz"
          projectImg="/content/portfolio/code-quiz.png"
          setModalOpen={() =>
            handleProjectClick({
              title: "Coding Quiz",
              desc: "Simple coding quiz that lets you save your high scores",
              link: "/portfolio/code-quiz",
              img: "/content/portfolio/code-quiz.png",
              tech: ["Javascript", "HTML", "CSS"],
            })
          }
        /> */}
      </div>
      <div className="resume-window">
        <div className="resume-pic">
          <img
            className="light-resume"
            src="/content/Resume-Light.jpg"
            alt=""
          />
          <img className="dark-resume" src="/content/Resume-Dark.jpg" alt="" />
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
      </div>
      <div className="contact-window">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <Link
            to="https://www.linkedin.com/in/zachary-maxwell-roy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              id="linkedin"
              xmlns="http://www.w3.org/2000/svg"
              width="3vw"
              height="3vh"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <p>LinkedIn</p>
          <Link to="mailto:zacharymaxwellroy@gmail.com">
            <svg
              id="email"
              width="3vw"
              height="3vh"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1021.5936 836.5056 702.3616 480.9216 1021.0304 185.0368C1022.5152 189.3376 1023.8976 193.6896 1023.8976 198.3488L1023.8976 825.6C1023.8976 829.4912 1022.5664 832.9216 1021.5936 836.5056ZM39.168 155.1872C42.0864 154.6752 44.6464 153.5488 47.5648 153.5488L976.5376 153.5488C979.456 153.5488 982.0672 154.6752 984.9344 155.1872L512.0512 572.416 39.168 155.1872ZM2.4576 836.5568C1.536 832.9728 0.1024 829.5424 0.1024 825.6L0.1024 198.3488C0.1024 193.5872 1.5872 189.2864 3.0208 184.9856L321.8432 480.9216 2.4576 836.5568ZM496.8448 618.8032C501.248 622.336 506.6752 624.0256 512.0512 624.0256 517.4784 624.0256 522.8032 622.336 527.1552 618.8032L665.7536 509.7472 988.1088 868.1984C984.32 869.12 980.6336 870.4512 976.5376 870.4512L47.5648 870.4512C43.52 870.4512 39.8336 869.12 36.096 868.1984L358.4 509.7472 496.8448 618.8032Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <p>zacharymaxwellroy@gmail.com</p>
        </div>
      </div>
    </main>
  )
}
