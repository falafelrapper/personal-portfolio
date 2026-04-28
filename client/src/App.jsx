import { Outlet } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitText from "gsap/dist/SplitText"
import ScrollSmoother from "gsap/dist/ScrollSmoother"
import { useGSAP } from "@gsap/react"
import "./App.scss"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const Animation = () => {
  const container = useRef(null)
  useGSAP(
    () => {
      const split = new SplitText(".intro-animation h1", {
        type: "chars",
      })

      let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: container.current, // the element that triggers the animation
          start: "top 400px", // when the top of the trigger hits the top of the viewport
          toggleActions: "play none none none",
        },
      })

      tl.from(split.chars, {
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05,
      })

      split.chars.forEach((char, i) => {
        tl.to(
          char,
          {
            color: "teal",
            yoyo: true,
            repeat: 1,
            duration: 0.3,
          },
          0.5 + i * 0.04
        )
      })

      tl.from(
        ".intro-animation h2",
        {
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.05,
        },
        0.5
      )

      tl.to(
        ".intro-animation h1",
        {
          scale: 200,
          x: -1500,
          duration: 1.5,
          ease: "back.inOut(0.3)",
        },
        1.5
      )

      tl.to(
        container.current,
        {
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
        },
        2.5
      )
    },
    { scope: container }
  )
  return (
    <div className="animation-container" ref={container}>
      <div className="intro-bg" />
      <div className="intro-animation">
        <h1>Zachary Roy</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </div>
  )
}

const checkLastSeen = () => {
  const lastSeen = localStorage.getItem("animationLastSeen")
  if (!lastSeen) return false

  const lastSeenDate = new Date(lastSeen)
  const now = new Date()
  const diff = now.getTime() - lastSeenDate.getTime()
  const diffInHours = diff / (1000 * 60 * 60)

  return diffInHours < 24
}

function App() {
  const [showAnimation, setShowAnimation] = useState(false)
  const mainContainer = useRef(null)

  useEffect(() => {
    if (!checkLastSeen()) {
      setShowAnimation(true)
      setTimeout(() => {
        setShowAnimation(false)
      }, 3000)
    }
    localStorage.setItem("animationLastSeen", new Date().toISOString())
  }, [])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    if (showAnimation) {
      html.style.overflow = "hidden"
      body.style.overflow = "hidden"
    } else {
      html.style.overflow = ""
      body.style.overflow = ""
    }

    return () => {
      html.style.overflow = ""
      body.style.overflow = ""
    }
  }, [showAnimation])

  return (
    <div ref={mainContainer}>
      {showAnimation && <Animation />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
