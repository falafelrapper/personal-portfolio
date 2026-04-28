import { Link } from "react-router-dom"

export default function Project({
  projectTitle,
  projectLink,
  projectDesc,
  projectImg,
  imgAlt,
  setModalOpen,
  projectVideo,
}) {
  return (
    <div className="project-card" onClick={() => setModalOpen(true)}>
      <img id="project-pic" src={projectImg} alt={imgAlt} />
      <div className="card-links">
        <h2>{projectTitle}</h2>
        <p>{projectDesc}</p>
      </div>
    </div>
  )
}
