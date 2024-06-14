import { Link } from 'react-router-dom';

export default function Project({ projectTitle, projectLink, projectDesc, projectImg, imgAlt }) {
    return (
        <div className='project-card' >
            <img id='project-pic' src={projectImg} alt={imgAlt} />
            <Link to={projectLink}>
                <div className="card-links">
                    <h2>{projectTitle}</h2>
                    <p>{projectDesc}</p>
                </div>
            </Link>
        </div>
    )
}