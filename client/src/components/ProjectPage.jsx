import { Link } from 'react-router-dom';

export default function ProjectPage({ projectTitle, projectLink, projectDesc, projectTech, projectImg, projectGit, imgAlt }) {
    return (
        <main className='project-page' >
            <div className="thumbnail">
                <img src={projectImg} alt={imgAlt} />
            </div>

            <div className="description">
                <h2>{projectTitle}</h2>
                <p>{projectDesc}</p>
                <h3>Tech Used</h3>
                <ul className='tech-used'>
                    {projectTech.map((tech) => {
                        return (
                            <li key={tech}>{tech}</li>
                        );
                    })}
                </ul>
                <div className="project-linkout">
                    <Link className='project-link' to={projectLink} target="_blank" rel="noopener noreferrer">
                        <svg fill="#000000" id='link-btn' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="2rem" height="2rem" viewBox="0 0 442.246 442.246"
                            xmlSpace="preserve">
                            <g>
                                <g>
                                    <path d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
			l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
			c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
			c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
			C453.109,146.306,453.109,75.926,409.657,32.474z" fill='currentColor' />
                                    <path d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
			l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
			c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
			c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
			C230.035,335.719,220.243,334.496,184.135,320.114z" fill='currentColor' />
                                </g>
                            </g>
                        </svg>
                        Click here to visit the site
                    </Link>
                    <Link className='project-link' to={projectGit} target="_blank" rel="noopener noreferrer">
                        <svg width="3vw" height="3vh" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor" />
                        </svg>
                        Click here to visit the repo
                    </Link>
                </div>
                <div className='back'>
                    <Link to="javascript:history.back()">
                        <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 108.06">
                            <path d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z" fill="currentColor" />
                        </svg>
                        <p>Go Back</p>
                    </Link>
                </div>
            </div>
        </main>
    )
}