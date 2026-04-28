import { Link } from "react-router-dom"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/src/ScrollToPlugin"
import Navbar from "./UI/Navbar"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin) // register the hook to avoid React version discrepancies

export default function Nav() {
  const container = useRef()

  function scrollTo(event) {
    switch (event) {
      case "About Me":
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: ".about-me" },
          ease: "power3.out",
        })
        break
      case "Portfolio":
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: ".portfolio-container" },
          ease: "power3.out",
        })
        break
      case "Resume":
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: ".resume-window" },
          ease: "power3.out",
        })
        break
      case "Contact":
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: ".contact-window" },
          ease: "power3.out",
        })
        break
    }
  }

  useGSAP(() => {}, { scope: container })

  return (
    <Navbar
      links={[
        <Link onClick={() => scrollTo("About Me")} key={2} className="nav-link">
          About Me
        </Link>,
        <Link
          onClick={() => scrollTo("Portfolio")}
          key={3}
          className="nav-link"
        >
          Portfolio
        </Link>,
        <Link onClick={() => scrollTo("Resume")} key={4} className="nav-link">
          Resume
        </Link>,
        <Link onClick={() => scrollTo("Contact")} key={5} className="nav-link">
          Contact
        </Link>,
      ]}
    />
  )
}
