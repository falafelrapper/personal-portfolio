import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { imageUrls } from "../components/js/pictureConstants";


export default function ContactPage() {
  
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
    <>
      <div className="contact-window">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <Link to='https://www.linkedin.com/in/zachary-maxwell-roy/' target="_blank" rel="noopener noreferrer">
            <svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor" />
            </svg>
          </Link>
          <p>LinkedIn</p>
          <Link to="mailto:zacharymaxwellroy@gmail.com">
            <svg id="email" width="3vw" height="3vh" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M1021.5936 836.5056 702.3616 480.9216 1021.0304 185.0368C1022.5152 189.3376 1023.8976 193.6896 1023.8976 198.3488L1023.8976 825.6C1023.8976 829.4912 1022.5664 832.9216 1021.5936 836.5056ZM39.168 155.1872C42.0864 154.6752 44.6464 153.5488 47.5648 153.5488L976.5376 153.5488C979.456 153.5488 982.0672 154.6752 984.9344 155.1872L512.0512 572.416 39.168 155.1872ZM2.4576 836.5568C1.536 832.9728 0.1024 829.5424 0.1024 825.6L0.1024 198.3488C0.1024 193.5872 1.5872 189.2864 3.0208 184.9856L321.8432 480.9216 2.4576 836.5568ZM496.8448 618.8032C501.248 622.336 506.6752 624.0256 512.0512 624.0256 517.4784 624.0256 522.8032 622.336 527.1552 618.8032L665.7536 509.7472 988.1088 868.1984C984.32 869.12 980.6336 870.4512 976.5376 870.4512L47.5648 870.4512C43.52 870.4512 39.8336 869.12 36.096 868.1984L358.4 509.7472 496.8448 618.8032Z" fill="currentColor" />
            </svg>
          </Link>
          <p>zacharymaxwellroy@gmail.com</p>
          <Link to="tel:+3237173790">
          <svg id="email" width="3.5vw" height="3.5vh" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M513 63.868c-247.519 0-448.177 200.654-448.177 448.177 0 247.519 200.658 448.177 448.177 448.177s448.177-200.658 448.177-448.177c0-247.522-200.658-448.177-448.177-448.177z m215.252 693.101c-236.958 27.438-409.066-192.063-466.435-321.765-48.461-109.562 24.106-174.632 47.808-192.199 4.282-3.169 9.463-4.852 14.79-4.852h35.731a24.936 24.936 0 0 1 22.902 15.07l50.449 117.04a24.942 24.942 0 0 1-2.268 23.88l-31.867 46.967c-5.063 7.459-5.663 17.05-1.698 25.147 47.914 97.782 154.148 148.552 194.7 164.942 9.55 3.864 20.491 1.404 27.521-6.131l46.141-49.434a24.95 24.95 0 0 1 28.739-5.607l110.611 51.355c8.305 3.856 13.904 11.953 14.406 21.091 4.962 89.813-91.53 114.496-91.53 114.496z"  fill="currentColor"/>
          </svg>
          </Link>
          <p>323.717.3790</p>
        </div>
      </div>
    </>
  );
}
