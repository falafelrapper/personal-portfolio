import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { imageUrls } from "../components/js/pictureConstants";


export default function AboutPage() {

  useEffect(() => {
    const pdfFile = "../content/Resume.pdf";
    const combinedFiles = [...imageUrls, pdfFile];
    preloadFiles(combinedFiles);
  }, []);

  function preloadFiles(files) {
    files.forEach((file) => {
      if (file.endsWith(".pdf")) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", file, true);
        xhr.send();
      } else {
        const img = new Image();
        img.src = file;
      }
    });
  }

  return (
    <div className="about-me">
      <img id='zach-pic' src="/content/about-me.png" alt="Zachary Roy" />
      <h2>About Me</h2>
      <p>
        I'm a burgeoning full stack web developer currently
        expanding my horizons through UCLA's edX Full Stack Development Boot Camp. Based in
        the vibrant city of Los Angeles, CA, I'm deeply immersed in the world of coding, constantly
        exploring the vast potential of upcoming technologies and their capacity
        to contribute positively to society. My journey into the realm of technology started with 
        a simple curiosity about how computers work and what they can achieve. This curiosity 
        quickly evolved into a passion, leading me to where I am today – on the cusp of 
        completing an intensive program at UCLA designed to arm me with the skills needed to build 
        comprehensive, user-friendly, and efficient web applications from scratch.
        When I'm not elbows-deep in code, I express myself through music. I'm a drummer for bands 
        such as Meishi Smile and Pacific Palace, where I find a different kind of rhythm and 
        collaboration that parallels the teamwork and creativity I bring to web development projects.
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
    </div>
  );
}

