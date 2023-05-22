import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Link } from 'react-scroll'
import linkIcon from '../public/assets/icons/white-link.png'

const Projects = () => {
 
  return (
    <div id='pageProjects' className={styles.projects}>
      <div className={styles.main}>
        <div className={styles.titleBox}>
          <Link to="pageProjects" spy={true} smooth={true} offset={0} duration={500}>
            <Image className={styles.linkIconWhite} src={linkIcon} alt='link icon'/>
          </Link>
          <h1 style={{color: '#fff', borderBottom: '1px solid #ffffff'}} className={styles.pageTitle}>PROJECTS</h1>
        </div>
        <div className={styles.projectsBox}>
        
            
        </div>
      </div>
    </div>
  )
}

export default Projects
