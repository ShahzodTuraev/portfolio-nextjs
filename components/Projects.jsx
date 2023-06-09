import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Link } from 'react-scroll'
import linkIcon from '../public/assets/icons/white-link.png'
import Houzing from './ProjectCards/Houzing'
import Tesla from './ProjectCards/Tesla-x'
import Mever from './ProjectCards/Mever'
import Matterport from './ProjectCards/Matteport'
import Resume from './ProjectCards/Resume'

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
        <section className={styles.projectCard}>
          <Matterport/>
        </section>
        <section className={styles.projectCard}>
          <Tesla/>
        </section>
        <section className={styles.projectCard}>
          <Mever/>
        </section>
        <section className={styles.projectCard}>
          <Resume/>
        </section>
        <section className={styles.projectCard}>
          <Houzing/>
        </section>
      </div>
    </div>
  )
}

export default Projects
